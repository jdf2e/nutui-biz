import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useConfig } from "@/packages/configprovider";
import { IComponent } from "@/utils/typings";
import classNames from "classnames";
import bem from "@/utils/bem";
import { Swiper, SwiperItem } from "@nutui/nutui-react";
interface IDataItem {
  displayName: string; // 展示名称
  imageUrl: React.ReactNode; // icon 图片链接或html标签
}
export interface QuickEnterProps extends IComponent {
  className: string;
  style: CSSProperties;
  columns: number; // 一行展示几个
  rows: number; // 展示几行
  data: Array<IDataItem>; // 数据展示
  slideMode: "swiper" | "slide"; // 数据展示
  iconSize: Array<number>; // 图标大小
  indicatorBg: string; // 指示器背景色
  indicatorVisible: boolean; // 指示器是否展示
  indicatorBgColor: string; // 指示器背景颜色
  indicatorActiveColor: string; // 指示器选中颜色
  onClickItem: (val: IDataItem) => {}; //回调函数
}

const defaultProps = {
  iconSize: [30, 30],
  columns: 5,
  rows: 2,
  slideMode: "swiper",
  indicatorVisible: false,
  indicatorBgColor: "rgba(0, 0, 0, 0.2)",
  indicatorActiveColor: "#fa2c19",
} as QuickEnterProps;

export const QuickEnter: FunctionComponent<
  Partial<QuickEnterProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">
> = (props) => {
  const time = new Date().getTime();

  // const { locale } = useConfig();
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
  const iconstyle = () => {
    return {
      width: `${iconSize?.[0]}px`,
      height: `${iconSize?.[1]}px`,
    };
  };
  const formatIcons = () => {
    const screenNumber = columns * rows;
    let quicks = [];
    let index = 0;
    while (index < data.length) {
      quicks.push(data.slice(index, (index += screenNumber)));
    }

    return quicks;
  };

  const [contentWidth, setContentWidth] = useState(document.body.clientWidth);
  useEffect(() => {
    const w = document.getElementsByClassName("quick-enter-" + time)[0];
    w && setContentWidth(w.clientWidth);
  }, [document.getElementsByClassName("quick-enter" + time)[0]]);

  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, [contentWidth]);

  const scrollviewRef = useRef<any>(null);
  const barbg = useRef<any>(null);
  const barslide = useRef<any>(null);
  const [barStyle, setBarStyle] = useState({}); // 滚动条样式
  const [timestamp, setTimestamp] = useState(new Date().getTime());

  const scrollChange = () => {
    const scrollContentW =
      scrollviewRef.current.offsetWidth * formatIcons().length;
    const bgBarW = barbg.current.offsetWidth; // 滚动条的背景长度
    const barXWidth = barslide.current.offsetWidth; // 滚动条的长度
    let moveWidth = Number(
      document.getElementsByClassName("quick-enter-scroll" + timestamp)[0]
        .scrollLeft
    );
    let barMoveDistance = 0; // 移动的位置
    barMoveDistance = (bgBarW / scrollContentW) * moveWidth;
    if (barMoveDistance >= bgBarW - barXWidth) {
      barMoveDistance = bgBarW - barXWidth;
    }
    if (barMoveDistance <= 0) {
      barMoveDistance = 0;
    }
    getInnerStyle(barMoveDistance);
  };
  const renderQuickScroll = () => {
    return (
      <div className="wrapper" ref={scrollviewRef}>
        <div className={"wrapper-content quick-enter-scroll" + timestamp}>
          {formatIcons().map((item, index) => {
            return (
              <div
                className="quickenter-content-slide scroll-slide"
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
  const renderScrollItem = (content: any[]) => {
    return content.map((citem, _idx) => {
      return (
        <div
          className="quickenter-item"
          key={"c" + _idx}
          style={{ width: (100 / columns).toFixed(2) + "%" }}
          onClick={() => clickCback(citem)}
        >
          {typeof citem.imageUrl === "string" ? (
            <img
              className="enter-icon"
              src={citem.imageUrl}
              style={iconstyle()}
            />
          ) : (
            <div style={iconstyle()}>{citem.imageUrl}</div>
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
          // setScrollContentW(_ref.offsetWidth * formatIcons().length);
          // setBgBarW(barbg.current.offsetWidth);
          // setBarXWidth(barslide.current.offsetWidth);
          document
            .getElementsByClassName("quick-enter-scroll" + timestamp)[0]
            .addEventListener("scroll", scrollChange);
        }

        // return () => {
        //   document
        //     .getElementsByClassName("quick-enter-scroll")[0]
        //     .removeEventListener("scroll", scrollChange);
        // };
      }, 300);
    }
  }, [scrollviewRef]);

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
              className="quickenter-content-slide"
              key={"swiper-item-" + idx}
            >
              {renderSwiperItem(item)}
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  };
  const renderSwiperItem = (content: any[]) => {
    return content.map((item, _index) => {
      return (
        <div
          className="quickenter-item"
          style={{ width: (100 / columns).toFixed(2) + "%" }}
          key={"quickenter-item" + _index}
          onClick={() => clickCback(item)}
        >
          {typeof item.imageUrl === "string" ? (
            <img
              className="enter-icon"
              src={item.imageUrl}
              style={iconstyle()}
            />
          ) : (
            <div style={iconstyle()}>{item.imageUrl}</div>
          )}
          <p className="desc">{item.displayName}</p>
        </div>
      );
    });
  };
  const clickCback = (item: IDataItem) => {
    onClickItem && onClickItem(item);
  };
  const b = bem("quick-enter");

  return (
    <div
      className={classNames([b(), className, , "quick-enter-" + time])}
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
