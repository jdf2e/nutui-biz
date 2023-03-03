# ReceiveInvoiceEdit Edit receipt address

### Intro

Billing address editing, commonly found on the billing address management page, is mainly used to add or edit or modify addresses.

### Install

```javascript
import { ReceiveInvoiceEdit } from '@nutui/nutui-react';
```

## Demo

### Basic usage

:::demo

```tsx
import React from 'react';
import { ReceiveInvoiceEdit } from '@nutui/nutui-biz';

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
   };
   const invoiceInfo = {
     name: "",
     tel: "",
     region: "",
     regionIds: [],
     address: "",
   };
   const addressSetData = {
     required: ["name", "tel"],
   };
   return (
     <ReceiveInvoiceEdit
         address={addressData}
         data={addressSetData}
         invoiceInfo = {invoiceInfo}
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
import React from 'react';
import { ReceiveInvoiceEdit } from '@nutui/nutui-biz';

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
   };
   const invoiceInfo = {
     name: "Zhang San",
     tel: "13141234567",
     region: "Balizhuang Street, Chaoyang District, Beijing",
     regionIds: [1, 7, 3],
     address: "xxx community 3-2-302",
   };
   const addressSetData = {
     required: ["name", "tel"],
   };

   const onChange = (data: any) => {
     console.log("onAddressChange", data);
   };

   const onClose = (data: any) => {
     console.log("onAddressClose", data);
   };

   return (
     <ReceiveInvoiceEdit
         address={addressData}
         data={addressSetData}
         invoiceInfo = {invoiceInfo}
         onSave={(formData) => {
             console.log(formData);
         }}
         onAddressChange={onChange}
         onAddressClose = {onClose}
         />
   );
};
export default App;
```
:::





## API

### Props


| Field | Description | Type | Default |
|---------|--------------------------------------- -----|---------|-----------|
| address | Information about address components | Object | {} |
| data | Edit billing address data format settings | Object | {} |
| invoiceInfo | invoice address value | Object |{} |

### Props address
| Field | Description | Type | Default |
|---------|--------------------------------------- -----|---------|-----------|
| addressSelect | set default selected address | String\|Number[] | [] |
| addressStr | address information | String | '' |
| province | province, each province object must have a name field, if the type is custom2, the title field must be specified as the first letter | Array | [] |
| city | city, each city object must have a name field, if the type is custom2, the title field must be specified as the first letter | Array | [] |
| country | County, each county object must have a name field, if the type is custom2, the title field must be specified as the first letter | Array | [] |
| town | township/township, each township/town object must have a name field, if the type is custom2, the title field must be specified as the first letter | Array | [] |
| addressTitle | Custom address selection text | String | 'Select your region' |

### Props data
| Field | Description | Type | Default |
|---------|--------------------------------------- -----|---------|-----------|
| nameText | Custom consignee text | String | 'Consignee' |
| namePlaceholder | Custom consignee placeholder text | String | 'Please enter the consignee' |
| nameErrorMsg | Custom consignee non-null verification error prompt text | String | 'This item is required, please fill it out and submit it' |
| telText | Custom mobile phone number text | String | 'Mobile phone number' |
| telPlaceholder | Custom phone number placeholder text | String | 'Please enter your phone number' |
| telErrorMsg | Prompt text for non-null mobile phone number verification error | String | 'This item is required, please fill it out and submit it' |
| regionText | Customize the region text | String | 'Region' |
| regionPlaceholder | Custom region placeholder text | String | 'Please select your region' |
| regionErrorMsg | Custom region non-null verification error prompt text | String | 'This item is required, please fill it out and submit it' |
| addressText | Custom detailed address text | String | 'Detailed address' |
| addressPlaceholder | Custom detailed address placeholder text | String | 'street, building number' |
| addressErrorMsg | Custom detailed address non-null verification error prompt text | String | 'This item is required, please fill it out and submit it' |
| required |Fields that need to display error messages | String[] | ['name','tel'] |
| bottomText | Customize the text of the save button at the bottom | String | 'Save' |

### Props addressInfo
| Field | Description | Type | Default |
|---------|--------------------------------------- -----|---------|-----------|
| name | consignee information | String | '' |
| tel | phone number information | String | '' |
| region | region information | String | '' |
| regionIds | The id information of the selected address in the region | String | '' |
| address | detailed address information | String | '' |



### Events
| Field | Description | Callback Parameters |
|----- | ----- | ----- |
| onChange | Enter text in the input box, return the input text and the tag of the input box where it is located tag (name,tel,region,address) | value,tag |
| onAddressChange | Triggered when a region is selected when customizing an address | {custom: the currently selected address, next: the next-level address, value: the currently selected address information} |
| onAddressClose | Triggered when the address selection dialog is closed | value |
| onSave | Click the save address button at the bottom to return the saved information | value |