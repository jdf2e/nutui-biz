import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddressEdit } from "../addressedit";

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
  type: "custom2",
  height: "270px",
};
const addressInfo2 = {
  name: "张三",
  tel: "13141234567",
  region: "北京朝阳区八里庄街道",
  regionIds: [1, 7, 3],
  address: "xxx小区3-2-302",
  default: true,
};
const addressSetData = {
  nameText: "收件人",
  namePlaceholder: "请输入收件人姓名",
  isRequired: ["name", "tel", "region", "address"],
  isDefualtAddress: true,
};

test("Add New Address", async () => {
  const { container } = render(
    <AddressEdit
      address={addressData}
      data={addressSetData}
      addressInfo={addressInfo}
    />
  );
  const requiredItem = container.querySelectorAll(".nut-input-required");
  await waitFor(() => {
    expect(requiredItem.length).toBe(4);
    expect(container.querySelectorAll(".label-string")[0].innerHTML).toBe(
      addressSetData.nameText
    );
    expect(container).toMatchSnapshot();
  });
});

test("edit address", async () => {
  const { container } = render(
    <AddressEdit
      address={addressData2}
      data={addressSetData}
      addressInfo={addressInfo2}
    />
  );

  await waitFor(() => {
    expect(container.querySelectorAll(".input-text")[0]).toHaveAttribute(
      "value",
      `${addressInfo2.name}`
    );
    expect(container.querySelectorAll(".input-text")[1]).toHaveAttribute(
      "value",
      `${addressInfo2.tel}`
    );
    expect(container.querySelectorAll(".input-text")[2]).toHaveAttribute(
      "value",
      `${addressInfo2.region}`
    );
    expect(container.querySelectorAll(".input-text")[3]).toHaveAttribute(
      "value",
      `${addressInfo2.address}`
    );
    expect(container.querySelector(".nut-switch")).toHaveClass("switch-open");
  });
});

test("event onChangeAddress test", async () => {
  const changeHandle = jest.fn();
  const closeHandle = jest.fn();
  const { container } = render(
    <AddressEdit
      address={addressData2}
      data={addressSetData}
      addressInfo={addressInfo2}
      onChangeAddress={changeHandle}
      onCloseAddress={closeHandle}
    />
  );

  await waitFor(() => {
    const inputEl = container.querySelectorAll(".nut-input-text")[2];
    inputEl && fireEvent.click(inputEl);

    const regionEl = container.querySelector(".nb-address ");

    expect(regionEl).toBeTruthy;

    const regionItem = regionEl?.querySelectorAll(
      ".nb-address__region-item"
    )[0];
    regionItem && fireEvent.click(regionItem);

    waitFor(() => {
      expect(changeHandle).toBeCalled();
      expect(closeHandle).toBeCalled();
    });
  });
});

test("event onSave test", async () => {
  const saveHandle = jest.fn();
  const { container } = render(
    <AddressEdit
      address={addressData2}
      data={addressSetData}
      addressInfo={addressInfo2}
      onSave={saveHandle}
    />
  );

  const bottomEl = container.querySelector(
    ".nb-addressedit__bottom .nut-button"
  ) as HTMLElement;
  fireEvent.click(bottomEl);
  expect(saveHandle).toBeCalled();
});
