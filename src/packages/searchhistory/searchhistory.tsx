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
  recentSearchData: Array<IsearchItem>
  searchDiscoverData: Array<IsearchItem>
  className?: string
  style?: CSSProperties
  recentSearchText: string
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
  recentSearchCollapse: boolean
  onClickSearchButton: (value: string) => void
  onClickBackIcon: () => void
  onClickSearchItem: (searchItem: IsearchItem) => void
  onClickRightInIcon: () => void
  onDelete: () => void
  onDeleteSingle: (item: IsearchItem) => void
  onRefresh: () => void
}

export const SearchHistory: FunctionComponent<
  Partial<SearchHistoryProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    recentSearchText = locale.searchHistory.recentSearchText,
    searchDiscoverText = locale.searchHistory.searchDiscoverText,
    backIcon = 'left',
    deleteIcon = 'del',
    keyword = '',
    recentSearchData = [],
    searchDiscoverData = [],
    leftInIcon = <Icon name="search" size="12" />,
    rightOutIcon = locale.searchHistory.rightOutIcon,
    rightInIcon = <Icon name="photograph" size="12" />,
    openEyeIcon = <Icon name="eye" />,
    closeEyeIcon = <Icon name="marshalling" />,
    refreshIcon,
    searchDiscoverExtra,
    noDiscoverDataText = locale.searchHistory.noDiscoverDataText,
    deleteType = 'all',
    recentSearchCollapse = true,
    onClickSearchButton =  (value: string) => {},
    onClickBackIcon = () => {},
    onClickSearchItem = (searchItem: IsearchItem) => {},
    onClickRightInIcon = () => {},
    onDelete = () => {},
    onDeleteSingle = (item: IsearchItem) => {},
    onRefresh = () => {},
    ...rest
  } = {
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
            <div>{recentSearchText}</div>
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
              {recentSearchData.map((item, index) => {
                return <a key={index} onClick={()=>handleClickSearchItem(item)}>{item.key}{isShowDeleteSearchItemIcon && <span>X</span>}</a>
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
            searchDiscoverData.length > 0 && eyeOpened && <div className='search-history-result-tags'>
              {searchDiscoverData.map((item, index) => {
                return <a key={index} onClick={()=>handleClickSearchItem(item)}>{item.key}</a>
              })}
            </div>
          }
          {
            searchDiscoverData.length > 0 && !eyeOpened && noDiscoverDataText && <div className='no-discover-data'>{noDiscoverDataText}</div>
          }
    </div>
  }

  const b = bem('search-history')

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      {renderSearchBar()}
      {recentSearchData.length > 0 && renderSearchHistoryResult()}
      {searchDiscoverData.length > 0 && renderSearchDiscover()}
    </div>
  )
}

SearchHistory.displayName = 'NutSearchHistory'
