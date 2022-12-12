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
  leftinIcon: ReactNode
  rightoutIcon: ReactNode
  rightinIcon: ReactNode
  searchDiscoverExtra?: ReactNode
  openEyeIcon: ReactNode
  closeEyeIcon: ReactNode
  refreshIcon?: ReactNode
  noDiscoverDataText: string
  onClickSearchButton: (value: string) => void
  onClickBackIcon: () => void
  onClickSearchItem: (searchItem :IsearchItem) => void
  onClickRightInIcon: () => void
  onDelete: () => void
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
  leftinIcon: <Icon name="search" size="12" />,
  rightinIcon: <Icon name="photograph" size="12" />,
  openEyeIcon: <Icon name="eye" />,
  closeEyeIcon: <Icon name="marshalling" />,
  noDiscoverDataText: '当前搜索发现已隐藏',
  rightoutIcon: '搜索',
  onClickSearchButton: (value) => {},
  onClickBackIcon: () => {},
  onClickSearchItem: (searchItem) => {},
  onClickRightInIcon: () => {},
  onDelete: () => {},
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
    leftinIcon,
    rightoutIcon,
    rightinIcon,
    openEyeIcon,
    closeEyeIcon,
    refreshIcon,
    searchDiscoverExtra,
    noDiscoverDataText,
    onClickSearchButton,
    onClickBackIcon,
    onClickSearchItem,
    onClickRightInIcon,
    onDelete,
    onRefresh,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = useState<string>()
  const [eyeOpened, setEyeOpened] = useState<boolean>(true)

  const handleChange = (val: string) => {
    setValue(val)
  }

  const renderSearchBar = () => {
    return <SearchBar
      shape="round"
      autoFocus
      className={classNames({'nut-searchbar-no-left-in-icon': leftinIcon === ''})}
      value={value}
      onChange={handleChange}
      leftinIcon={leftinIcon}
      rightinIcon={<div onClick={() => onClickRightInIcon && onClickRightInIcon()}>{rightinIcon}</div>}
      leftoutIcon={<Icon name={backIcon} size="14" onClick={() => onClickBackIcon && onClickBackIcon()} />}
      rightoutIcon={<div onClick={() => onClickSearchButton && onClickSearchButton(value as string)}>{rightoutIcon}</div>}
    />
  }

  const handleD = () => {
    onDelete && onDelete()
  }

  const handleDelete = () => {
    handleD()
  }

  const handleClickSearchItem = (item: IsearchItem) => {
    onClickSearchItem && onClickSearchItem(item)
  }

  const renderSearchHistoryResult = () => {
    return <div className='search-history-result'>
          <div className='search-history-result-tit'>
            <div>{searchHistoryText}</div>
            <div onClick={handleDelete}>{typeof deleteIcon === 'string' ? <Icon name={deleteIcon} /> : deleteIcon}</div>
          </div>
          {
            <div className='search-history-result-tags'>
              {searchHistoryData.map((item, index) => {
                return <a key={index} onClick={handleClickSearchItem.bind(this, item)}>{item.key}</a>
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
            <div onClick={() => onRefresh && onRefresh()}>{refreshIcon}</div>
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
      {renderSearchDiscover()}
    </div>
  )
}

SearchHistory.defaultProps = defaultProps
SearchHistory.displayName = 'NutSearchHistory'
