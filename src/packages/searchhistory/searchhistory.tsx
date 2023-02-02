import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useState,
} from 'react'
import classNames from 'classnames';
import {SearchBar, Icon} from '@nutui/nutui-react'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'
import { IComponent } from '@/utils/typings'

export type IsearchItem = {
  key: string,
  url: string
}

export interface SearchHistoryProps extends IComponent {
  searchHistoryData: Array<IsearchItem>
  discoverData: Array<IsearchItem>
  className?: string
  style?: CSSProperties
  searchHistoryText: string
  searchDiscoverText: string
  backIcon: string
  deleteIcon: ReactNode
  keyword: string
  leftInIcon: ReactNode
  rightOutIcon: ReactNode
  rightInIcon: ReactNode
  searchDiscoverExtra?: ReactNode
  openEyeIcon: ReactNode
  closeEyeIcon: ReactNode
  refreshIcon?: string
  noDiscoverDataText: string
  deleteType: string
  onClickSearchButton: (value: string) => void
  onClickBackIcon: () => void
  onClickSearchItem: (searchItem :IsearchItem) => void
  onClickRightInIcon: () => void
  onDelete: () => void
  onDeleteSingle: (item :IsearchItem) => void
  onRefresh: () => void
}

const defaultProps = {
  searchHistoryData: [],
  discoverData: [],
  searchHistoryText: '最近搜索',
  searchDiscoverText: '搜索发现',
  backIcon: 'left',
  deleteIcon: 'del',
  keyword: '',
  leftInIcon: <Icon name="search" size="12" />,
  rightInIcon: <Icon name="photograph" size="12" />,
  openEyeIcon: <Icon name="eye" />,
  closeEyeIcon: <Icon name="marshalling" />,
  noDiscoverDataText: '当前搜索发现已隐藏',
  rightOutIcon: '搜索',
  deleteType: 'all',
  onClickSearchButton: (value) => {},
  onClickBackIcon: () => {},
  onClickSearchItem: (searchItem) => {},
  onClickRightInIcon: () => {},
  onDelete: () => {},
  onDeleteSingle: (item) => {},
  onRefresh: () => {}
} as SearchHistoryProps

export const SearchHistory: FunctionComponent<
  Partial<SearchHistoryProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    searchHistoryText,
    searchDiscoverText,
    backIcon,
    deleteIcon,
    keyword,
    searchHistoryData,
    discoverData,
    leftInIcon,
    rightOutIcon,
    rightInIcon,
    openEyeIcon,
    closeEyeIcon,
    refreshIcon,
    searchDiscoverExtra,
    noDiscoverDataText,
    deleteType,
    onClickSearchButton,
    onClickBackIcon,
    onClickSearchItem,
    onClickRightInIcon,
    onDelete,
    onDeleteSingle,
    onRefresh,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = useState<string>()
  const [eyeOpened, setEyeOpened] = useState<boolean>(true)
  const [isShowDeleteSearchItemIcon, setIsShowDeleteSearchItemIcon] = useState<boolean>(false)

  const handleChange = (val: string) => {
    setValue(val)
  }

  const renderSearchBar = () => {
    return <SearchBar
      shape="round"
      className={classNames({'nut-searchbar-no-left-in-icon': leftInIcon === ''})}
      value={value}
      onChange={handleChange}
      leftinIcon={leftInIcon}
      rightinIcon={<div onClick={() => onClickRightInIcon && onClickRightInIcon()}>{rightInIcon}</div>}
      leftoutIcon={<Icon name={backIcon} size="14" onClick={() => onClickBackIcon && onClickBackIcon()} />}
      rightoutIcon={<div onClick={() => onClickSearchButton && onClickSearchButton(value as string)}>{rightOutIcon}</div>}
    />
  }

  const handleDelete = () => {
    if(deleteType === 'single' && !isShowDeleteSearchItemIcon) {
      setIsShowDeleteSearchItemIcon(true)
    } else {
      onDelete && onDelete()
    }
  }

  const handleClickSearchItem = (item: IsearchItem) => {
    if(isShowDeleteSearchItemIcon) {
      onDeleteSingle && onDeleteSingle(item)
    } else {
      onClickSearchItem && onClickSearchItem(item)
    }
  }

  const renderSearchHistoryResult = () => {
    return <div className='search-history-result'>
          <div className='search-history-result-tit'>
            <div>{searchHistoryText}</div>
            {
              isShowDeleteSearchItemIcon ? <div className='search-history-divider-box'>
                <div onClick={handleDelete}>全部删除</div>
                <div className='search-history-divider'>|</div>
                <div onClick={() => setIsShowDeleteSearchItemIcon(false)}>完成</div>
              </div> : <div onClick={handleDelete}>{typeof deleteIcon === 'string' ? <Icon name={deleteIcon} /> : deleteIcon}</div>
            }
          </div>
          {
            <div className='search-history-result-tags'>
              {searchHistoryData.map((item, index) => {
                return <a key={index} onClick={handleClickSearchItem.bind(this, item)}>{item.key}{isShowDeleteSearchItemIcon && <span>X</span>}</a>
              })}
            </div>
          }
      </div>
  }

  const handleToggleEye =(eyeOpened: boolean) => {
    setEyeOpened(eyeOpened)
  }

  const renderSearchDiscover = () => {
    return <div className='search-discover'>
        <div className='search-discover-tit'>
          <div>{searchDiscoverText}{searchDiscoverExtra}</div>
          <div style={{display: 'flex'}}>
            {refreshIcon && <div onClick={() => onRefresh && onRefresh()}><Icon name={refreshIcon} style={{marginRight: '10px'}} /></div>}
            {
              eyeOpened ? <div onClick={() => handleToggleEye(false)}>{openEyeIcon}</div> : <div className='close-eye'>
                {!noDiscoverDataText && <div className='close-eye-extra'>已隐藏</div>}
                <div onClick={() => handleToggleEye(true)}>{closeEyeIcon}</div>
              </div>
            }
          </div>
        </div>
          {
            discoverData.length > 0 && eyeOpened && <div className='search-history-result-tags'>
              {discoverData.map((item, index) => {
                return <a key={index} onClick={handleClickSearchItem.bind(this, item)}>{item.key}</a>
              })}
            </div>
          }
          {
            discoverData.length > 0 && !eyeOpened && noDiscoverDataText && <div className='no-discover-data'>{noDiscoverDataText}</div>
          }
    </div>
  }

  const b = bem('search-history')

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      {renderSearchBar()}
      {searchHistoryData.length > 0 && renderSearchHistoryResult()}
      {discoverData.length > 0 && renderSearchDiscover()}
    </div>
  )
}

SearchHistory.defaultProps = defaultProps
SearchHistory.displayName = 'NutSearchHistory'
