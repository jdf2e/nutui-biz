#  SearchHistory 搜索历史

### 介绍

常见于搜索页，包含搜索历史和热门搜索。

### 安装

```javascript
import { SearchHistory } from '@nutui/nutui-biz';
```

## 代码演示

### 基本用法

:::demo

```ts
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [searchHistoryData, setSearchHistoryData] = useState(JSON.parse(localStorage.getItem('searchHistoryData') as string) || [])
  const discoverData = [
    {
      name: '小米手环'
    },
    {
      name: '对讲机'
    }
  ]

  const handleClick = (val: string) => { 
    if(val.trim() === '') return

    let arr = JSON.parse(localStorage.getItem('searchHistoryData') as string) || [];
    let len = arr.filter((item: {
      name: string
    }) => item.name === val).length

    if(len > 0) {
      arr = arr.filter((item: {
        name: string
      }) => item.name !== val)
    }

    arr.unshift({
      name: val
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

  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
    />
  );
};
export default App;
```

:::

### 自定义标题文案

:::demo

```ts
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
        searchHistoryText="搜索历史"
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
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
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
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
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
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
        searchDiscoverExtra={<span style={{color: 'gray', fontSize: '12px', marginLeft: '10px'}}>十亿商品，搜啥都有</span>}
    />
  );
};
export default App;
```

:::

### 隐藏时不展示无数据文案

:::demo

```ts
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
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
import  React from 'react';
import { SearchHistory } from '@nutui/nutui-biz';
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return (
    <SearchHistory 
        onClickSearchButton={handleClick}
        onDelete={handleDelete}
        searchHistoryData={searchHistoryData} 
        discoverData={discoverData} 
        refreshIcon={<Icon name="refresh" style={marginRight: '10px'} />}
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
| searchHistoryText   | 搜索历史文案                                     | String  | `最近搜索`         |
| searchDiscoverText     | 搜索发现文案                   | String  | `搜索发现`    |
| searchHistoryData      | 搜索历史数据                               |  Array  | []      |
| discoverData | 搜索发现数据                        | Array  | []      |
| keyword  | 文本框内关键字                                  | String | ''    |
| backIcon     | 左上角返回按钮图标，设置为空则无返回按钮 | String  | `left`     |
| deleteIcon   | 搜索历史删除图标| String  | `del`      |
| searchDiscoverExtra   | 搜索发现额外信息| String  | -      |
| refreshIcon   | 搜索历史刷新图标| String  | `refresh`      |
| searchHistoryCollapse   | 搜索历史超过两行出现下拉箭头                                 | Boolean  | `true`          |
| leftInIcon | 文本框内左侧自定义，默认是放大图标 | React.ReactNode  | -          |
| rightInIcon | 文本框内右侧自定义，默认是拍照图标 | React.ReactNode  | -          |
| rightOutIcon | 文本框外右侧自定义，默认是“搜索” | React.ReactNode  | -          |


## Events
| 字段 | 说明 | 回调参数 |
|----- | ----- | -----  |
| onClickSearchItem | 点击搜索项事件 |  搜索项数据 |
| onClickSearchButton | 点击搜索按钮事件 |  文本框内关键字 |
| onSearchTextKeyup | 文本框注册keyup事件，展示搜索建议 |  event: Event |
| onClickRightInIcon | 照相机图标点击事件 |  event: Event |
| onClickBackIcon | 左上角返回按钮点击事件 |  event: Event |
| onRefresh | 搜索发现刷新按钮事件 |  event: Event |
| onDelete | 删除事件 |  event: Event |