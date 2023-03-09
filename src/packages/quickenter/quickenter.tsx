import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { IComponent } from "@/utils/typings";
import classNames from "classnames";
import bem from "@/utils/bem";
import { throttle } from "@/utils/throttle";
import { numericProp } from "@/utils/props";
import { Swiper, SwiperItem } from "@nutui/nutui-react";
export interface IDataItem {
  displayName: string; // 展示名称
  imageUrl: React.ReactNode; // icon 图片链接或html标签
}
export interface QuickEnterProps extends IComponent {
  className: string;
  style: CSSProperties;
  columns: numericProp; // 一行展示几个
  rows: numericProp; // 展示几行
  data: Array<IDataItem>; // 数据展示
  slideMode: "swiper" | "slide"; // 数据展示
  iconSize: Array<numericProp>; // 图标大小
  indicatorVisible: boolean; // 指示器是否展示
  indicatorBgColor: string; // 指示器背景颜色
  indicatorActiveColor: string; // 指示器选中颜色
  onClickItem: (val: IDataItem) => void; //回调函数
}

const defaultProps = {
  iconSize: [30, 30],
  columns: "5",
  rows: "2",
  slideMode: "swiper",
  indicatorVisible: false,
  indicatorBgColor: "rgba(0, 0, 0, 0.2)",
  indicatorActiveColor: "#fa2c19",
} as QuickEnterProps;

export const QuickEnter: FunctionComponent<Partial<QuickEnterProps>> = (
  props
) => {
  const b = bem("quick-enter");

  const {
    className,
    style,
    columns,
    rows,
    slideMode,
    data,
    indicatorVisible,
    indicatorBgColor,
    indicatorActiveColor,
    iconSize,
    onClickItem,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };
  const iconStyle = {
    width: `${iconSize?.[0]}px`,
    height: `${iconSize?.[1]}px`,
  };
  const formatIcons = () => {
    const screenNumber = Number(columns) * Number(rows);
    let quicks: IDataItem[][] = [];
    let index = 0;
    while (data && index < data.length) {
      quicks.push(data.slice(index, (index += screenNumber)));
    }
    return quicks;
  };

  const [contentWidth, setContentWidth] = useState(
    document.body.clientWidth || document.documentElement.clientWidth
  );
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = (wrapperRef?.current as HTMLDivElement).clientWidth;
    setContentWidth(w);
  }, [wrapperRef.current]);

  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, [contentWidth]);

  const scrollviewRef = useRef<HTMLDivElement>(null);
  const barbg = useRef<HTMLDivElement>(null);
  const barslide = useRef<HTMLDivElement>(null);
  const [barStyle, setBarStyle] = useState({}); // 滚动条样式
  const scrollChange = throttle(() => {
    const scrollContentW =
      (scrollviewRef?.current as HTMLDivElement).offsetWidth *
      formatIcons().length;
    const bgBarW = (barbg?.current as HTMLDivElement).offsetWidth; // 滚动条的背景长度
    const barXWidth = (barslide?.current as HTMLDivElement).offsetWidth; // 滚动条的长度
    let moveWidth = (scrollviewRef?.current as HTMLDivElement).scrollLeft;
    let barMoveDistance = 0; // 移动的位置
    barMoveDistance = (bgBarW / scrollContentW) * moveWidth;
    if (barMoveDistance >= bgBarW - barXWidth) {
      barMoveDistance = bgBarW - barXWidth;
    }
    if (barMoveDistance <= 0) {
      barMoveDistance = 0;
    }
    getInnerStyle(barMoveDistance);
  }, 50);
  const renderQuickScroll = () => {
    return (
      <div className={`${b("")}-wrapper`}>
        <div
          ref={scrollviewRef}
          className={classNames([
            `${b("")}-wrapper-content`,
            `${b("")}-scroll`,
          ])}
        >
          {formatIcons().map((item, index) => {
            return (
              <div
                className={`${b("")}-content-slide scroll-slide`}
                key={"scroll" + index}
              >
                {renderScrollItem(item)}
              </div>
            );
          })}
        </div>

        <div className="swiper-custom-pagination">
          <div className="swiper-custom-pagination-bg" ref={barbg}>
            <div
              className="swiper-custom-pagination-slide"
              ref={barslide}
              style={barStyle}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  const renderScrollItem = (content: IDataItem[]) => {
    return content.map((citem, _idx) => {
      return (
        <div
          className={classNames([`${b("")}-item`])}
          key={"c" + citem.imageUrl}
          style={{ width: (100 / Number(columns)).toFixed(2) + "%" }}
          onClick={() => clickCback(citem)}
        >
          {typeof citem.imageUrl === "string" ? (
            <img
              className={classNames([`${b("")}-icon`])}
              src={citem.imageUrl}
              style={iconStyle}
            />
          ) : (
            <div style={iconStyle}>{citem.imageUrl}</div>
          )}
          <p className="desc">{citem.displayName}</p>
        </div>
      );
    });
  };
  useEffect(() => {
    if (slideMode == "slide") {
      setTimeout(() => {
        const _ref = scrollviewRef.current;
        if (_ref) {
          _ref.addEventListener("scroll", scrollChange);
        }
      }, 500);
    }
  }, [scrollviewRef.current]);

  const getInnerStyle = (barMoveWidth: number) => {
    setBarStyle({
      left: `${barMoveWidth}px`,
      background: `${indicatorActiveColor}`,
    });
  };

  const renderQuickEnter = () => {
    return (
      <Swiper
        width={contentWidth}
        autoPlay="0"
        loop={false}
        paginationVisible={indicatorVisible}
        paginationBgColor={indicatorBgColor}
        paginationColor={indicatorActiveColor}
      >
        {formatIcons().map((item, idx) => {
          return (
            <SwiperItem
              className={classNames([`${b("")}-content-slide`])}
              key={"swiper-item-" + item}
            >
              {renderSwiperItem(item)}
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  };
  const renderSwiperItem = (content: IDataItem[]) => {
    return content.map((item, _index) => {
      return (
        <div
          className={classNames([`${b("")}-item`])}
          style={{ width: (100 / Number(columns)).toFixed(2) + "%" }}
          key={"quick-enter-item" + item.imageUrl}
          onClick={() => clickCback(item)}
        >
          {typeof item.imageUrl === "string" ? (
            <img className="enter-icon" src={item.imageUrl} style={iconStyle} />
          ) : (
            <div style={iconStyle}>{item.imageUrl}</div>
          )}
          <p className="desc">{item.displayName}</p>
        </div>
      );
    });
  };
  const clickCback = (item: IDataItem) => {
    onClickItem(item);
  };

  return (
    <div
      ref={wrapperRef}
      className={classNames([b(), className, `${b("")}`])}
      style={style}
      {...rest}
    >
      {init &&
        (slideMode == "swiper" ? renderQuickEnter() : renderQuickScroll())}
    </div>
  );
};

QuickEnter.defaultProps = defaultProps;
QuickEnter.displayName = "NutQuickEnter";
