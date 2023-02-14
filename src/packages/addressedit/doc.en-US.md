#  AddressEdit

### Introduce

Commonly found on the address management page, it is mainly used to add or edit addresses.

### Install

```javascript
import { AddressEdit } from '@nutui/nutui-biz';
```

## Code Demo

### Basic usage

:::demo

```tsx
import  React from 'react';
import { AddressEdit } from '@nutui/nutui-biz';

const App = () => {
  const addressData: any = {
     addressSelect: [],
     addressTitle: "Select your region",
     province: [
       { id: 1, name: "Beijing", title: "B" },
       { id: 2, name: "Guangxi", title: "G" },
       { id: 3, name: "Jiangxi", title: "J" },
       { id: 4, name: "Sichuan", title: "S" },
       { id: 5, name: "Zhejiang", title: "Z" },
     ],
     city: [
       { id: 7, name: "Chaoyang District", title: "C" },
       { id: 8, name: "Chongwen District", title: "C" },
       { id: 9, name: "Changping District", title: "C" },
       { id: 6, name: "Shijingshan District", title: "S" },
       { id: 3, name: "Balizhuang Street", title: "B" },
       { id: 10, name: "Beiyuan", title: "B" },
     ],
     country: [
       { id: 3, name: "Balizhuang Street", title: "B" },
       { id: 9, name: "Beiyuan", title: "B" },
       { id: 4, name: "Changying Township", title: "C" },
     ],
     town: [],
     addressType: "custom",
   };
  const addressInfo = {
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
    default: false,
  };
  const addressSetData = {
     nameText: "Consignee",
     namePlaceholder: "Please enter the recipient's name",
     isRequired: ["name", "tel", "region", "address"],
     isDefualtAddress: true,
   };
  return (
    <AddressEdit
        address={addressData}
        data={addressSetData}
        addressType={"custom"}
        addressInfo={addressInfo}
        onSave={(formData) => {
            console.log(formData);
        }}
        />
  );
};
export default App;
```
:::

### Modification of existing address information

:::demo

```tsx
import  React from 'react';
import { AddressEdit } from '@nutui/nutui-biz';

const App = () => {
  const addressData2: any = {
     addressSelect: [1, 7, 3],
     addressTitle: "Select your region",
     province: [
     { id: 1, name: "Beijing", title: "B" },
     { id: 2, name: "Guangxi", title: "G" },
     { id: 3, name: "Jiangxi", title: "J" },
     { id: 4, name: "Sichuan", title: "S" },
     { id: 5, name: "Zhejiang", title: "Z" },
     ],
     city: [
     { id: 7, name: "Chaoyang District", title: "C" },
     { id: 8, name: "Chongwen District", title: "C" },
     { id: 9, name: "Changping District", title: "C" },
     { id: 6, name: "Shijingshan District", title: "S" },
     { id: 3, name: "Balizhuang Street", title: "B" },
     { id: 10, name: "Beiyuan", title: "B" },
     ],
     country: [
     { id: 3, name: "Balizhuang Street", title: "B" },
     { id: 9, name: "Beiyuan", title: "B" },
     { id: 4, name: "Changying Township", title: "C" },
     ],
     town: [],
     addressType: "custom2",
     height: "270px",
   };
  const addressInfo2 = {
     name: "Zhang San",
     tel: "13141234567",
     region: "Balizhuang Street, Chaoyang District, Beijing",
     regionIds: [1, 7, 3],
     address: "xxx community 3-2-302",
     default: true,
   };
  const addressSetData = {
     nameText: "Consignee",
     namePlaceholder: "Please enter the recipient's name",
     isRequired: ["name", "tel", "region", "address"],
     isDefualtAddress: true,
   };

  const onChange = (data: any) => {
    console.log("onChangeAddress", data);
  };

  const onClose = (data: any) => {
    console.log("onCloseAddress", data);
  };

  return (
    <AddressEdit
        address={addressData2}
        data={addressSetData}
        addressType={"custom2"}
        addressInfo={addressInfo2}
        onSave={(formData) => {
            console.log(formData);
        }}
        onChangeAddress={onChange}
        onCloseAddress={onClose}
        />
  );
};
export default App;
```
:::





## API

### Props


| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| address | Information about address components | Object | {} |
| data | Edit address data format settings | Object | {} |
| addressInfo | address information | Object |{} |
| addressType | address component type, optional 'custom'/'custom2' | string | custom |

### Props address
| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| addressSelect   | Default address value | String\|Number[] | [] |
| addressStr   | address information                                 | String  |""        |
| province | Province data | Array | [] |
| city | City data | Array | [] |
| country | Country data | Array | [] |
| town | Town data | Array | [] |
| height | Popup height | String、Number | '200px' |
| customAddressTitle  | Custom address title | String | 'Select Region' |

### Props data

| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| nameText | Custom consignee text | String | 'Consignee' |
| namePlaceholder | Custom consignee placeholder text | String | 'Please enter the consignee' |
| nameErrorMsg | Custom consignee non-null verification error prompt text | String | 'This item is required, please fill it out and submit it' |
| telText | Custom  phone number text | String | 'Mobile phone number' |
| telPlaceholder | Custom phone number placeholder text | String | 'Please enter your phone number' |
| telErrorMsg | Prompt text for non-null mobile phone number verification error | String | 'This item is required, please fill it out and submit it' |
| regionText | Customize the region text | String | 'Region' |
| regionPlaceholder | Custom region placeholder text | String | 'Please select your region' |
| regionErrorMsg | Custom region non-null verification error prompt text | String | 'This item is required, please fill it out and submit it' |
| addressText | Custom detailed address text | String | 'Detailed address' |
| addressPlaceholder | Custom detailed address placeholder text | String | 'street, building number' |
| addressErrorMsg | Custom detailed address non-null verification error prompt text | String | 'This item is required, please fill it out and submit it' |
|bottomText|Customize the text of the save button at the bottom | String | 'Save' |

### Props addressInfo
| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| name | consignee information | String | '' |
| tel | phone number information | String | '' |
| region | region information | String | '' |
| regionIds | The id information of the selected address in the region | String | '' |
| address | detailed address information | String | '' |
| default | Whether it is the default address | Boolean | false |



## Events
| Attribute    | Description  | Callback |
|----- | ----- | -----  |
| onChange | Emitted when to input address information， |  value,tag (name,tel,region,address) |
| onChangeAddress |  Emitted when to selected address |  reference onChange |
| onCloseAddress | Emitted when to close address | reference close |
| onSave | Emitted when to save address|  formData |

