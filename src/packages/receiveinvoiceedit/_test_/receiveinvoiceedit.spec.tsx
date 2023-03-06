import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReceiveInvoiceEdit } from "../receiveinvoiceedit";

const addressData: any = {
  addressSelect: [],
  addressTitle: "选择所在地区",
  province: [
    { id: 1, name: "北京", title: "B" },
    { id: 2, name: "广西", title: "G" },
    { id: 3, name: "江西", title: "J" },
    { id: 4, name: "四川", title: "S" },
    { id: 5, name: "浙江", title: "Z" },
  ],
  city: [
    { id: 7, name: "朝阳区", title: "C" },
    { id: 8, name: "崇文区", title: "C" },
    { id: 9, name: "昌平区", title: "C" },
    { id: 6, name: "石景山区", title: "S" },
    { id: 3, name: "八里庄街道", title: "B" },
    { id: 10, name: "北苑", title: "B" },
  ],
  country: [
    { id: 3, name: "八里庄街道", title: "B" },
    { id: 9, name: "北苑", title: "B" },
    { id: 4, name: "常营乡", title: "C" },
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
  nameText: "收件人",
  namePlaceholder: "请输入收件人姓名",
  isRequired: ["name", "tel", "region", "address"],
  isDefualtAddress: true,
};
test("test props & event", async () => {

  const saveHandle = jest.fn();
  const { container } = render(
    <ReceiveInvoiceEdit
      address={addressData}
      data={addressSetData}
      invoiceInfo={invoiceInfo}
      onSave={saveHandle}
    />
  );
  const inputItem = container.querySelectorAll('.nut-receive-invoice-edit-item') 
  expect(inputItem).toBeTruthy()
  const requiredItem = container.querySelectorAll(".nut-input-required");
  await waitFor(() => {
    expect(requiredItem.length).toBe(4);
    expect(container.querySelectorAll(".label-string")[0].innerHTML).toBe(
      addressSetData.nameText
    );
    expect(container).toMatchSnapshot();
  });
  const bottomEl = container.querySelector(
    ".nut-receive-invoice-edit-bottom .nut-button"
  ) as HTMLElement;
  fireEvent.click(bottomEl);
  const inputEl = container.querySelectorAll(".nut-input-text")[0];
  const input = inputEl.querySelector('.input-text') as Element
  fireEvent.change(input, { target: { value: '123' } })
  setTimeout(() => {
    expect(input).toHaveAttribute(
      'value',
      '123'
    )
    fireEvent.blur(input)
  }, 300)
});
test("test props & event", async () => {
  const invoiceInfo2 = {
    name: "xx",
    tel: "12345678913",
    region: "北京朝阳区八里庄街道",
    regionIds: [1, 7, 3],
    address: "xxx小区3-2-302",
  };
  const addressSetData = {
    required: ["name", "tel"],
  };

  const addressData2: any = {
    addressSelect: [1, 7, 3],
    addressTitle: "选择所在地区",
    province: [
      { id: 1, name: "北京", title: "B" },
      { id: 2, name: "广西", title: "G" },
      { id: 3, name: "江西", title: "J" },
      { id: 4, name: "四川", title: "S" },
      { id: 5, name: "浙江", title: "Z" },
    ],
    city: [
      { id: 7, name: "朝阳区", title: "C" },
      { id: 8, name: "崇文区", title: "C" },
      { id: 9, name: "昌平区", title: "C" },
      { id: 6, name: "石景山区", title: "S" },
      { id: 3, name: "八里庄街道", title: "B" },
      { id: 10, name: "北苑", title: "B" },
    ],
    country: [
      { id: 3, name: "八里庄街道", title: "B" },
      { id: 9, name: "北苑", title: "B" },
      { id: 4, name: "常营乡", title: "C" },
    ],
    town: [],
  };
  const changeHandle = jest.fn();
  const closeHandle = jest.fn();
  const saveHandle = jest.fn();
  const { container } = render(
    <ReceiveInvoiceEdit
      address={addressData2}
      data={addressSetData}
      invoiceInfo={invoiceInfo2}
      onAddressChange={changeHandle}
      onAddressClose={closeHandle}
      onSave={saveHandle}
    />
  );

  await waitFor(() => {
    const inputEl = container.querySelectorAll(".nut-input-text")[2];
    inputEl && fireEvent.click(inputEl);
    const regionEl = container.querySelector(".nut-address ");
    expect(regionEl).toBeTruthy;

    const regionItem = regionEl?.querySelectorAll(
      ".nut-address__region-item"
    )[0];
    regionItem && fireEvent.click(regionItem);

    waitFor(() => {
      expect(changeHandle).toBeCalled();
      expect(closeHandle).toBeCalled();
    });
  });
});
