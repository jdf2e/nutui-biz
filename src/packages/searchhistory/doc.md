#  SearchHistory 搜索历史

### 介绍

常见于搜索页，包含最近搜索和搜索发现。

### 安装

```javascript
import { SearchHistory } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
    />
  );
};
export default App;
```

:::

### 单个删除

点击最近搜索的删除图标，默认是全部删除。设置 `deleteType` 为 `single`，可实现搜索结果的单个删除。

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  const handleDeleteSingle = (val: {
    key: string,
    url: string
  }) => {
    if(localStorage.getItem('recentSearchData')) {
      let recentSearchData = JSON.parse(localStorage.getItem('recentSearchData') as string)
      let filterSearchHistoryData = recentSearchData.filter((item: {
        key: string,
        url: string
      }) => item.key != val.key)
      
      localStorage.setItem('recentSearchData', JSON.stringify(filterSearchHistoryData))
      setRecentSearchData(filterSearchHistoryData)
    }
  }

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        deleteType="single"
        onDelete={handleDelete}
        onDeleteSingle={handleDeleteSingle}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
    />
  );
};
export default App;
```

:::

### 自定义标题文案

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
        recentSearchText="搜索历史"
        searchDiscoverText="猜你想搜"
    />
  );
};
export default App;
```

:::

### 自定义返回和删除图标

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
        backIcon="play-double-back"
        deleteIcon="del2"
    />
  );
};
export default App;
```

:::

### 自定义 SearchBar

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
        leftInIcon=""
        rightInIcon=""
        rightOutIcon={<div style={{background: '#e93b3d', padding: '6px', borderRadius: '4px', color: '#fff', fontSize: '14px'}}>搜索</div>}
    />
  );
};
export default App;
```

:::

### 添加搜索发现额外信息

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
        searchDiscoverExtra={<span style={{color: 'gray', fontSize: '12px', marginLeft: '10px'}}>十亿商品，搜啥都有</span>}
    />
  );
};
export default App;
```

:::

### 隐藏时不展示无数据文案
点击隐藏图标，隐藏搜索发现数据时，默认无数据文案为“当前搜索发现已隐藏”，设置 `noDiscoverDataText` 为空不展示无数据模块。

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
        noDiscoverDataText=""
    />
  );
};
export default App;
```

:::

### 刷新数据

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';
import { Toast } from '@nutui/nutui-react';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
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

    let arr = JSON.parse(localStorage.getItem('recentSearchData') as string) || [];
    let len = arr.filter((item: {
      key: string,
      url: string
    }) => item.key === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        key: string,
        url: string
      }) => item.key !== val)
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        recentSearchData={recentSearchData} 
        searchDiscoverData={searchDiscoverData} 
        refreshIcon="refresh"
        onRefresh={() => Toast.text('点击了刷新按钮')}
    />
  );
};
export default App;
```

:::



## API

### Props

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| recentSearchText   | 最近搜索文案                                     | string  | `最近搜索`         |
| searchDiscoverText     | 搜索发现文案                   | string  | `搜索发现`    |
| recentSearchData      | 最近搜索数据                               |  Array<IsearchItem>  | []      |
| searchDiscoverData | 搜索发现数据                        | Array<IsearchItem>  | []      |
| keyword  | 传入文本框内的搜索词                                  | string | ''    |
| backIcon     | 左上角返回按钮图标，设置为空则无返回按钮，类型为字符串时，等同于 Icon 组件的 [name 属性](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon) | ReactNode  | `left`     |
| deleteIcon   | 最近搜索删除图标，类型为字符串时，等同于 Icon 组件的 [name 属性](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon)| ReactNode  | `del`      |
| searchDiscoverExtra   | 搜索发现额外信息| string  | -      |
| refreshIcon   | 最近搜索刷新图标，等同于 Icon 组件的 [name 属性](https://nutui.jd.com/h5/react/1x/#/zh-CN/component/icon) | string  | `refresh`      |
| recentSearchCollapse   | 最近搜索数据超过两行出现下拉箭头                                 | boolean  | `true`          |
| leftInIcon | 文本框内左侧自定义，默认是放大图标 | ReactNode  | -          |
| rightInIcon | 文本框内右侧自定义，默认是拍照图标 | ReactNode  | -          |
| rightOutIcon | 文本框外右侧自定义，默认是“搜索” | ReactNode  | -          |
| openEyeIcon | 显示搜索发现图标 | ReactNode  | `<Icon name="eye" />`          |
| closeEyeIcon | 隐藏搜索发现图标  | ReactNode  | `<Icon name="marshalling" />`          |
| noDiscoverDataText | 无搜索发现数据文案 | string  | `当前搜索发现已隐藏`          |
| deleteType | 删除类型，可选值：`all`、`single` | string  | -          |


### Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClickSearchItem | 搜索项点击事件 |  searchItem: IsearchItem |
| onClickSearchButton | 搜索按钮点击事件 |  value: string |
| onSearchBarChange | 搜索栏 change 事件，可展示搜索建议 |  value: string, event: Event |
| onClickRightInIcon | 照相机图标点击事件 |  - |
| onClickBackIcon | 左上角返回图标点击事件 |  - |
| onRefresh | 搜索发现刷新图标点击事件 |  - |
| onDelete | 删除全部搜索项事件 |  - |
| onDeleteSingle | 删除单个搜索项事件 |  item: IsearchItem |


### IsearchItem 

| 字段    | 说明                                       | 类型    | 
|---------|--------------------------------------------|---------|
| key   | 搜索关键词                                | ReactNode |
| url   | 搜索关键词跳转链接            | string  | 