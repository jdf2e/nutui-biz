#  AddressEdit

### Intro

Commonly found on the address management page, it is mainly used to add or edit addresses.

### Install

```javascript
import { AddressEdit } from '@nutui/nutui-biz';
```

## Demo

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
     type: "custom",
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
     isRequired: ["name", "tel", "region", "address"],
     isDefualtAddress: true,
   };
  return (
    <AddressEdit
        address={addressData}
        data={addressSetData}
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
     type: "custom",
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

### Hide save button

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
     type: "custom",
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
  const addressSetData2 = {
     nameText: "Consignee",
     namePlaceholder: "Please enter the recipient's name",
     isRequired: ["name", "tel",],
     isDefualtAddress: false,
     errorShowType: "errorMsg",
   };
  

  const onClose = (data: any) => {
    console.log("onCloseAddress", data);
  };

  return (
     <AddressEdit
        address={addressData2}
        data={addressSetData2}
        addressInfo={addressInfo2}
        showSave={false}
        onSwitch={(state, data) => {
            console.log("switch", state, data);
        }}
        onChange={(value, tag) => {
            console.log(tag, value);
        }}
        onCloseAddress={onClose}
        />
  );
};
export default App;
```
:::


### Custom input box

:::demo

```tsx
import  React from 'react';
import { AddressEdit } from '@nutui/nutui-biz';
import { Input } from "@nutui/nutui-react";

const App = () => {
  const addressData: any = {
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
     type: "custom",
     height: "270px",
   };
  const addressInfo = {
    name: "",
    tel: "",
    region: "",
    regionIds: [],
    address: "",
    default: false,
  };
  const addressSetData2 = {
     nameText: "Consignee",
     namePlaceholder: "Please enter the recipient's name",
     isRequired: ["name", "tel",],
     isDefualtAddress: false,
     errorShowType: "errorMsg",
   };


  return (
      <AddressEdit
        address={addressData}
        data={addressSetData2}
        addressInfo={addressInfo}
        onChange={(value, tag) => {
            console.log(tag, value);
        }}
        onSave={(formData) => {
            console.log(formData);
        }}
        bottomInputTpl={
          <>
            <div className="nb-addressedit__item">
                <Input
                label={"custom1"}
                className="nut-input-text"
                defaultValue={""}
                placeholder={"please enter ..."}
                type="text"
                clearable
                onChange={(v, e) => {
                    console.log(v, e);
                }}
                />
            </div>
            <div className="nb-addressedit__item">
                <Input
                label={"custom2"}
                className="nut-input-text"
                defaultValue={""}
                placeholder={"please enter ..."}
                type="text"
                clearable
                onChange={(v, e) => {
                    console.log(v, e);
                }}
                />
            </div>
          </>
        }
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
| bottomInputTpl   | custom input box                                 | ReactNode  | -         |
| showSave   | Whether to display the save button button                 | Boolean | `true`         |

### Props address
| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| addressSelect   | Default address value | string | number[] | [] |
| addressStr   | address information                                 | string  | -        |
| province | Province data | Array | [] |
| city | City data | Array | [] |
| country | Country data | Array | [] |
| town | Town data | Array | [] |
| height | Popup height | string | number | `200px` |
| addressTitle  | Custom address title | string | `Select Region` |
| type | address component type, optional `custom`/`elevator` | string | `custom `|

### Props data

| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| nameText | Custom consignee text | string | `Consignee` |
| namePlaceholder | Custom consignee placeholder text | string | `Please enter the consignee` |
| nameErrorMsg | Custom consignee non-null verification error prompt text | string | `This item is required, please fill it out and submit it` |
| telText | Custom  phone number text | string | `Tel` |
| telPlaceholder | Custom phone number placeholder text | string | `Please enter your phone number` |
| telErrorMsg | Prompt text for non-null mobile phone number verification error | string | `This item is required, please fill it out and submit it` |
| regionText | Customize the region text | string | `Region` |
| regionPlaceholder | Custom region placeholder text | string | `Please select your region` |
| regionErrorMsg | Custom region non-null verification error prompt text | string | `This item is required, please fill it out and submit it` |
| addressText | Custom detailed address text | string | `Address` |
| addressPlaceholder | Custom detailed address placeholder text | string | `street, building number` |
| addressErrorMsg | Custom detailed address non-null verification error prompt text | string | `This item is required, please fill it out and submit it` |
| isRequired| Required item settings, optional values ["name", "tel", "region", "address"] |Array | [] |
|bottomText|Customize the text of the save button at the bottom | string | `Save` |
| errorShowType| input error prompt type, optional value `errorMsg`/`toast` |string |`errorMsg`|
| errorToastText| Toast error message content | string | `Please complete the required items`|

### Props addressInfo
| Attribute    | Description     | Type    | Default   |
|---------|--------------------------------------------|---------|-----------|
| name | consignee information | string | - |
| tel | phone number information | string | - |
| region | region information | string | - |
| regionIds | The id information of the selected address in the region | string | - |
| address | detailed address information | string | - |
| default | Whether it is the default address | Boolean | `false` |



### Events
| Attribute    | Description  | Callback |
|----- | ----- | -----  |
| onChange | Emitted when to input address information，tag(name、tel、region、address) |  value、tag  |
| onChangeAddress |  Emitted when to selected address |  reference `Address` onChange |
| onCloseAddress | Emitted when to close address | reference `Address` close |
| onSave | Emitted when to save address|  formData |
| onSwitch | Default address switch callback |  state、formData |

