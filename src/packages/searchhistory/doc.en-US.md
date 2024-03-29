#  SearchHistory 搜索历史

### Intro

Commonly found on search pages, including recent searches and search discoveries.

### Install

```javascript
import { SearchHistory } from '@nutui/nutui-biz';
```

## Demo

### Basic Usage

:::demo

```ts
import  React, {useState} from 'react';
import { SearchHistory } from '@nutui/nutui-biz';

const App = () => {
  const [recentSearchData, setRecentSearchData] = useState(JSON.parse(localStorage.getItem('recentSearchData') as string) || [])
  const searchDiscoverData = [
    {
      key: 'key1',
      url: ''
    },
    {
      key: 'key2',
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

### Single Delete

Click the delete icon of the recent search, the default is to delete all. Set `deleteType` to `single` to achieve single deletion of search results

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

### Custom SearchHistory And SearchDiscover Texts

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
        recentSearchText="Search History"
        searchDiscoverText="Guess you want to search"
    />
  );
};
export default App;
```

:::

### Custom Back And Delete Icons

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

### Custom SearchBar

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
        rightOutIcon={<div style={{background: '#e93b3d', padding: '6px', borderRadius: '4px', color: '#fff', fontSize: '14px'}}>Search</div>}
    />
  );
};
export default App;
```

:::

### Add Search Discover Extra Info

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
        searchDiscoverExtra={<span style={{color: 'gray', fontSize: '12px', marginLeft: '10px'}}>Search discover extra</span>}
    />
  );
};
export default App;
```

:::

### No Discover Data Text When Hide
Click the hide icon to hide the search discoveries data, the default non-data text is "No Discover Data Text", and set 'noDiscoverDataText' to empty to remove the non-data module.

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

### Click Refresh Button

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
        onRefresh={() => Toast.text('Clicked refresh button')}
    />
  );
};
export default App;
```

:::



## API

### Props


| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| recentSearchText   | Recent search text                                     | string  | `Recent Search`         |
| searchDiscoverText     | Search discover text                   | string  | `Search Discover`    |
| recentSearchData      | Recent search data                               |  Array<IsearchItem>  | []      |
| searchDiscoverData | Search discover data                        | Array<IsearchItem>  | []      |
| keyword  | The search keyword passed in the searchBar                                 | string | ''    |
| backIcon     | Back icon, if set to empty, there will be no back icon | ReactNode  | `left`     |
| deleteIcon   | Recent search delete icon | ReactNode  | `del`      |
| searchDiscoverExtra   | Search discover extra info | string  | -      |
| refreshIcon   | Recent search refresh icon| string  | `refresh`      |
| recentSearchCollapse   | A drop-down arrow appears when there are more than two rows of recent search data | boolean  | `true`          |
| leftInIcon | Custom left in icon, default is search icon | ReactNode  | -          |
| rightInIcon | Custom right in icon, default is photograph icon | ReactNode  | -          |
| rightOutIcon | Custom right out icon, default is "Search" | ReactNode  | -          |
| openEyeIcon | Show search discover icon  | ReactNode  | `<Icon name="eye" />`          |
| closeEyeIcon | Hide search discover icon | ReactNode  | `<Icon name="marshalling" />`         |
| noDiscoverDataText | No discover data text | string  | `No Discover Data Text`          |
| deleteType | Delete Type, optional value: `all`、`single` | string  | `all`          |


### Events
| Attribute | Description | Arguments |
|----- | ----- | -----  |
| onClickSearchItem | Search item click event |  searchItem: IsearchItem |
| onClickSearchButton | Search button click event |  value: string |
| onSearchBarChange | Search bar change event, which can display search suggestions |  value: string, event: Event |
| onClickRightInIcon | Photograph icon click event |  - |
| onClickBackIcon | Back icon click event |  - |
| onRefresh | Search discover refresh icon click event  |  - |
| onDelete | Delete event |  - |
| onDeleteSingle | Delete single event |  item: IsearchItem |


### IsearchItem 

| Attribute    | Description                                       | Type    | 
|---------|--------------------------------------------|---------|
| key   | Search keyword                                | ReactNode |
| url   | Search keyword jump link            | string  | 