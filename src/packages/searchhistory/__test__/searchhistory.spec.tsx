import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchHistory } from '../searchhistory'

test('searchHistoryText and searchDiscoverText test', async () => {
  const { container } = render(
    <SearchHistory
      searchHistoryData={[
        {
          key: '小米手环',
          url: ''
        },
        {
          key: '对讲机',
          url: ''
        }
      ]} 
      discoverData={[
        {
          key: '小米手环',
          url: ''
        },
        {
          key: '对讲机',
          url: ''
        }
      ]} 
      searchHistoryText="搜索历史"
      searchDiscoverText="猜你想搜"
    />
  )

  const searchHistoryResultTit = container.querySelector('.search-history-result-tit')
  const searchDiscoverTit = container.querySelector('.search-discover-tit')
  
  expect(searchHistoryResultTit).toHaveTextContent('搜索历史')
  expect(searchDiscoverTit).toHaveTextContent('猜你想搜')
})

test('backIcon and deleteIcon test', async () => {
  const { container } = render(
    <SearchHistory
      searchHistoryData={[
        {
          key: '小米手环',
          url: ''
        },
        {
          key: '对讲机',
          url: ''
        }
      ]} 
      discoverData={[
        {
          key: '小米手环',
          url: ''
        },
        {
          key: '对讲机',
          url: ''
        }
      ]} 
      backIcon="play-double-back"
      deleteIcon="del2"
    />
  )

  const nutIconPlayDoubleBack = container.querySelector('.nut-search-history .nut-icon-play-double-back') as HTMLElement
  const nutIconDel2 = container.querySelector('.nut-search-history .nut-icon-del2') as HTMLElement
  
  expect(nutIconPlayDoubleBack).toBeTruthy()
  expect(nutIconDel2).toBeTruthy()
})

test('searchBar test', async () => {
  const { container } = render(
    <SearchHistory
      searchHistoryData={[
        {
          key: '小米手环',
          url: ''
        },
        {
          key: '对讲机',
          url: ''
        }
      ]} 
      discoverData={[
        {
          key: '小米手环',
          url: ''
        },
        {
          key: '对讲机',
          url: ''
        }
      ]} 
      leftinIcon=""
      rightinIcon=""
      rightoutIcon={<div className='rightoutIcon'>搜索</div>}
    />
  )

  const nutIconSearch = container.querySelector('.nut-search-history .nut-icon-search') as HTMLElement
  const nutIconPhotograph = container.querySelector('.nut-search-history .nut-icon-photograph') as HTMLElement
  const rightoutIcon = container.querySelector('.nut-search-history .rightoutIcon') as HTMLElement
  
  expect(nutIconSearch).not.toBeTruthy()
  expect(nutIconPhotograph).not.toBeTruthy()
  expect(rightoutIcon).toBeTruthy()
})