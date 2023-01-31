import React, {
  useState
} from 'react'
import { SearchHistory, IsearchItem } from './searchhistory'
import { useTranslate } from '../../sites/assets/locale'
import {Icon, Toast} from '@nutui/nutui-react'

interface T {
}
const SearchHistoryDemo = () => {
  const [searchHistoryData, setSearchHistoryData] = useState(JSON.parse(localStorage.getItem('searchHistoryData') as string) || [])
  const discoverData = [
    {
      key: '小米手环',
      url: ''
    },
    {
      key: '对讲机',
      url: ''
    }
  ]

  const handleClick = (val: string) => { 
    if(val.trim() === '') return

    let arr = JSON.parse(localStorage.getItem('searchHistoryData') as string) || [];
    let len = arr.filter((item: IsearchItem) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: IsearchItem) => item.key !== val)
    }

    arr.unshift({
      key: val,
      url: ''
    })

    localStorage.setItem('searchHistoryData', 
      JSON.stringify(arr)
    )
    setSearchHistoryData(arr)
  }

  const handleDelete = () => {
    localStorage.removeItem('searchHistoryData')
    setSearchHistoryData([])
  }

  const handleDeleteSingle = (val: IsearchItem) => {
    if(localStorage.getItem('searchHistoryData')) {
      let searchHistoryData = JSON.parse(localStorage.getItem('searchHistoryData') as string)
      let filterSearchHistoryData = searchHistoryData.filter((item: IsearchItem) => item.key != val.key)
      
      localStorage.setItem('searchHistoryData', JSON.stringify(filterSearchHistoryData))
      setSearchHistoryData(filterSearchHistoryData)
    }
  }

  return (
    <>
      <div className="demo">
        <h2>基本用法</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
        />
        <h2>单个删除</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          deleteType="single"
          onDelete={handleDelete}
          onDeleteSingle={handleDeleteSingle}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
        />
        <h2>自定义标题文案</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
          searchHistoryText="搜索历史"
          searchDiscoverText="猜你想搜"
        />
        <h2>自定义返回和删除图标</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
          backIcon="play-double-back"
          deleteIcon="del2"
        />
        <h2>自定义 SearchBar</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
          leftinIcon=""
          rightinIcon=""
          rightoutIcon={<div style={{background: '#e93b3d', padding: '6px', borderRadius: '4px', color: '#fff', fontSize: '14px'}}>搜索</div>}
        />
        <h2>添加搜索发现额外信息</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
          searchDiscoverExtra={<span style={{color: 'gray', fontSize: '12px', marginLeft: '10px'}}>十亿商品，搜啥都有</span>}
        />
        <h2>隐藏时不展示无数据文案</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
          noDiscoverDataText=""
        />
        <h2>刷新数据</h2>
        <SearchHistory 
          onClickSearchButton={handleClick}
          onDelete={handleDelete}
          searchHistoryData={searchHistoryData} 
          discoverData={discoverData} 
          refreshIcon="refresh"
          onRefresh={() => Toast.text('点击了刷新按钮')}
        />
      </div>
    </>
  )
}

export default SearchHistoryDemo
