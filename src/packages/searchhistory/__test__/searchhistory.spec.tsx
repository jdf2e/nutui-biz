import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import { SearchHistory } from '../searchhistory'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

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
      leftInIcon=""
      rightInIcon=""
      rightOutIcon={<div className='rightoutIcon'>搜索</div>}
    />
  )

  const nutIconSearch = container.querySelector('.nut-search-history .nut-icon-search') as HTMLElement
  const nutIconPhotograph = container.querySelector('.nut-search-history .nut-icon-photograph') as HTMLElement
  const rightoutIcon = container.querySelector('.nut-search-history .rightoutIcon') as HTMLElement
  
  expect(nutIconSearch).not.toBeTruthy()
  expect(nutIconPhotograph).not.toBeTruthy()
  expect(rightoutIcon).toBeTruthy()
})

test('searchDiscoverExtra test', async () => {
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
      searchDiscoverExtra={<span>十亿商品，搜啥都有</span>}
    />
  )

  const searchDiscoverTit = container.querySelector('.search-discover-tit') as HTMLElement
  expect(searchDiscoverTit).toHaveTextContent('十亿商品，搜啥都有')
})

test('refresh test', async () => {
  const onRefresh = jest.fn()

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
      refreshIcon="refresh"
      onRefresh={onRefresh}
    />
  )

  const nutIconRefresh = container.querySelector('.nut-icon-refresh') as HTMLElement
  fireEvent.click(nutIconRefresh)
  expect(onRefresh).toBeCalled()
})

test('hide discoverData test', async () => {
  let _container: any

  act(() => {
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
        noDiscoverDataText="隐藏当前搜索发现"
      />
    )
    _container = container
  })

  const nutBizCard = _container.querySelector('.nut-icon-eye') as HTMLElement
  fireEvent.click(nutBizCard)
  const noDiscoverData = _container.querySelector('.no-discover-data') as HTMLElement
  expect(noDiscoverData).toHaveTextContent('隐藏当前搜索发现')

  await waitFor(
    async () => {
      const searchHistoryResultTags = _container.querySelector('.search-history-result-tags') as HTMLElement
      // expect(searchHistoryResultTags).not.toBeTruthy()
    }
  )
})