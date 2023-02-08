import React, {
  useState
} from 'react'
import { SearchHistory, IsearchItem } from './searchhistory'
import { useTranslate } from '../../sites/assets/locale'
import {Icon, Toast} from '@nutui/nutui-react'

interface tarnslatedOption {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  title7: string
  search: string
  clicked: string
  recentSearchText: string
  searchDiscoverText: string
  key1: string
  key2: string
  searchDiscoverExtra: string
}

const SearchHistoryDemo = () => {
  const [translated] = useTranslate<tarnslatedOption>({
    'zh-CN': {
      basic: '基本用法',
      title1: '单个删除',
      title2: '自定义标题文案',
      title3: '自定义返回和删除图标',
      title4: '自定义 SearchBar',
      title5: '添加搜索发现额外信息',
      title6: '隐藏时不展示无数据文案',
      title7: '刷新数据',
      search: '搜索',
      clicked: '点击了刷新按钮',
      recentSearchText: '搜索历史',
      searchDiscoverText: '猜你想搜',
      key1: '小米手环',
      key2: '对讲机',
      searchDiscoverExtra: '十亿商品，搜啥都有'
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '單個刪除',
      title2: '自定義標題文案',
      title3: '自定義返回和刪除圖標',
      title4: '自定義 SearchBar',
      title5: '添加搜索發現額外信息',
      title6: '隱藏時不展示無數據文案',
      title7: '刷新數據',
      search: '搜索',
      clicked: '點擊了刷新按鈕',
      recentSearchText: '搜索歷史',
      searchDiscoverText: '猜你想搜',
      key1: '小米手環',
      key2: '對講機',
      searchDiscoverExtra: '十億商品，搜啥都有'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Single Delete',
      title2: 'Custom SearchHistory And SearchDiscover Texts',
      title3: 'Custom Back And Delete Icons',
      title4: 'Custom SearchBar',
      title5: 'Add Search Discover Extra Info',
      title6: 'No Discover Data Text When Hide',
      title7: 'Click Refresh Button',
      search: 'Search',
      clicked: 'Clicked refresh button',
      recentSearchText: 'Search history',
      searchDiscoverText: 'Guess you want to search',
      key1: 'Key1',
      key2: 'Key2',
      searchDiscoverExtra: 'Search discover extra'
    }
  });
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
    {
      key: translated.key1,
      url: ''
    },
    {
      key: translated.key2,
      url: ''
    }
  ]

  const handleClick = (val: string) => { 
    if(val.trim() === '') return

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: IsearchItem) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: IsearchItem) => item.key !== val)
    }

    arr.unshift({
      key: val,
      url: ''
    })

    localStorage.setItem('recentSearchData', 
      JSON.stringify(arr)
    )
    setRecentSearchData(arr)
  }

  const handleDelete = () => {
    localStorage.removeItem('recentSearchData')
    setRecentSearchData([])
  }

  const handleDeleteSingle = (val: IsearchItem) => {
    if(localStorage.getItem('recentSearchData')) {
      let recentSearchData = JSON.parse(localStorage.getItem('recentSearchData') as string)
      let filterSearchHistoryData = recentSearchData.filter((item: IsearchItem) => item.key != val.key)
      
      localStorage.setItem('recentSearchData', JSON.stringify(filterSearchHistoryData))
      setRecentSearchData(filterSearchHistoryData)
    }
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
        />
        <h2>{translated.title1}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          deleteType="single"
          onDelete={handleDelete}
          onDeleteSingle={handleDeleteSingle}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
        />
        <h2>{translated.title2}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
          recentSearchText={translated.recentSearchText}
          searchDiscoverText={translated.searchDiscoverText}
        />
        <h2>{translated.title3}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
          backIcon="play-double-back"
          deleteIcon="del2"
        />
        <h2>{translated.title4}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
          leftInIcon=""
          rightInIcon=""
          rightOutIcon={<div style={{background: '#e93b3d', padding: '6px', borderRadius: '4px', color: '#fff', fontSize: '14px'}}>{translated.search}</div>}
        />
        <h2>{translated.title5}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
          searchDiscoverExtra={<span style={{color: 'gray', fontSize: '12px', marginLeft: '10px'}}>{translated.searchDiscoverExtra}</span>}
        />
        <h2>{translated.title6}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
          noDiscoverDataText=""
        />
        <h2>{translated.title7}</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          recentSearchData={recentSearchData} 
          searchDiscoverData={searchDiscoverData} 
          refreshIcon="refresh"
          onRefresh={() => Toast.text(translated.clicked)}
        />
      </div>
    </>
  )
}

export default SearchHistoryDemo
