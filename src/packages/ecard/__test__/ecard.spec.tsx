import * as React from "react";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Ecard } from "../ecard";

const dataList = [
  {
    price: 10,
  },
  {
    price: 20,
  },
  {
    price: 30,
  },
  {
    price: 40,
  },
];

test("should render correct money", () => {
  const { container } = render(<Ecard money={0} dataList={dataList}></Ecard>);
  const itemDoms = container.querySelectorAll(".nut-ecard__list__item");
  fireEvent.click(itemDoms[0]);
  expect(
    container.querySelector(".nut-ecard__list__step--price")?.innerHTML
  ).toBe("¥10");
});

test("input change when more than maxValue", () => {
  const { container } = render(
    <Ecard money={0} dataList={dataList} cardAmountMax={100}></Ecard>
  );

  const inputDom = container.querySelector(".nut-ecard__list__input--input");
  if (inputDom) {
    fireEvent.change(inputDom, { target: { value: 123 } });
    fireEvent.click(inputDom);
  }
  expect(
    container.querySelector(".nut-ecard__list__step--price")?.innerHTML
  ).toBe("¥1000");
});

test("input change when less than maxValue", () => {
  const { container } = render(
    <Ecard money={0} dataList={dataList} cardAmountMin={100}></Ecard>
  );
  const inputDom = container.querySelector(".nut-ecard__list__input--input");
  if (inputDom) {
    fireEvent.change(inputDom, { target: { value: 90 } });
    fireEvent.click(inputDom);
  }
  expect(
    container.querySelector(".nut-ecard__list__step--price")?.innerHTML
  ).toBe("¥100");
});

test("input change when less than maxValue", () => {
  const { container } = render(
    <Ecard money={10} dataList={dataList} cardAmountMin={100}></Ecard>
  );
  const inputDom = container.querySelector(".nut-ecard__list__input--input");
  const addDom = container.querySelector(".nut-icon-plus");
  if (inputDom && addDom) {
    fireEvent.click(inputDom);
    fireEvent.click(addDom);
  }
  expect(
    container.querySelector(".nut-ecard__list__step--price")?.innerHTML
  ).toBe("¥");
});
