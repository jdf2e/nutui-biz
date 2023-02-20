import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QuickEnter } from "../quickenter";
import { quickEnterData } from "./../data";

test("quickEnter basic test", async () => {
  const { container } = render(<QuickEnter data={quickEnterData} />);
  const quickEnterContent = container.querySelector(
    ".quickenter-content-slide"
  );
  expect(quickEnterContent).toBeTruthy();
});

test("quickEnter swiper test", async () => {
  const { container } = render(
    <QuickEnter data={quickEnterData} indicatorVisible={true} />
  );
  const quickEnterContent = container.querySelector(
    ".quickenter-content-slide"
  );
  expect(quickEnterContent).toBeTruthy();
});

test("quickEnter single line test", async () => {
  const { container } = render(
    <QuickEnter data={quickEnterData} rows={1} indicatorVisible={true} />
  );
  const quickEnterContent = container.querySelector(
    ".quickenter-content-slide"
  );
  expect(quickEnterContent).toBeTruthy();
  const quickEnterInner: any = container.querySelector(".nut-swiper__inner");
  expect(quickEnterInner).toBeTruthy();
});

test("quickEnter slide show test", async () => {
  const { container } = render(
    <QuickEnter data={quickEnterData} slideMode={"slide"} />
  );
  const quickEnterContent = container.querySelector(
    ".quickenter-content-slide"
  );
  expect(quickEnterContent).toBeTruthy();
});
