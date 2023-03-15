import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import bem from '@/utils/bem';
import { Icon, Elevator } from '@nutui/nutui-react';
import { useConfig } from '@/packages/configprovider';
import { SelectedRegionObj, RegionData, NextListObj, CustomRenderProps, CustomRegionData, MapRef } from './type';

const defaultProps = {
  modelValue: [],
  type: 'custom',
  province: [],
  city: [],
  country: [],
  town: [],
  height: '200px',
  loading: false
  // hotCities: []
} as CustomRenderProps;

export const CustomRender: FunctionComponent<Partial<CustomRenderProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { locale } = useConfig();
  const {
    children,
    type,
    modelValue,
    height,
    province,
    city,
    country,
    town,
    // hotCities,
    onNextArea,
    onTabClick,
    onClose,
    onClickItem,
    emitSelectedRegion,
    loading,
    ...rest
  } = {
    ...defaultProps,
    ...props
  };

  const b = bem('address');
  const privateTabName = ['province', 'city', 'country', 'town'];
  const tabName = useRef(['province', 'city', 'country']);
  const currentClickItem = useRef<RegionData | string>('');

  const [privateType] = useState<string>(type);
  const [tabIndex, setTabIndex] = useState(0);
  const provinceRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const townRef = useRef(null);

  const regionLine = useRef(null);
  // Elevator
  const isCustom2 = () => {
    return type === 'elevator';
  };

  const transformData = (data: RegionData[]) => {
    if (!Array.isArray(data)) throw new TypeError('params must be array.');

    if (!data.length) return [];

    data.forEach((item: RegionData) => {
      if (!item.title) {
        console.error('[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .');
      }
    });

    const newData: CustomRegionData[] = [];

    data = data.sort((a: RegionData, b: RegionData) => {
      return a.title.localeCompare(b.title);
    });

    data.forEach((item: RegionData) => {
      const index = newData.findIndex((value: CustomRegionData) => value.title === item.title);
      if (index <= -1) {
        newData.push({
          title: item.title,
          list: ([] as RegionData[]).concat(item)
        });
      } else {
        newData[index] = {
          title: item.title,
          list: newData[index].list.concat(item)
        };
      }
    });

    return newData;
  };

  const [regionList, setRegionList] = useState<{
    province: RegionData[] | CustomRegionData[];
    city: RegionData[] | CustomRegionData[];
    country: RegionData[] | CustomRegionData[];
    town: RegionData[] | CustomRegionData[];
  }>({
    province: isCustom2() ? transformData(province) : province,
    city: isCustom2() ? transformData(city) : city,
    country: isCustom2() ? transformData(country) : country,
    town: isCustom2() ? transformData(town) : town
  });

  // 已选择的 省、市、县、镇
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegionObj>({
    province: { name: '' },
    city: { name: '' },
    country: { name: '' },
    town: { name: '' }
  });

  type SelectedRegionType = keyof SelectedRegionObj;

  const [lineDistance, setLineDistance] = useState(20);

  // 获取已选地区列表名称
  const getTabName = (item: RegionData, index: number) => {
    if (tabIndex > index) {
      return item.name;
    }
    return locale.select;
  };

  const mapRef = {
    province: provinceRef,
    city: cityRef,
    country: countryRef,
    town: townRef
  };

  type MapRefType = keyof typeof mapRef;
  // 移动下面的红线
  const lineAnimation = (index: string | number) => {
    setTimeout(() => {
      const name: MapRefType = tabName.current[index as number] as MapRefType;

      const refD: MapRef = mapRef;

      if (name && refD[name] && refD[name].current) {
        const distance = (refD[name].current as HTMLDivElement).offsetLeft;
        setLineDistance(distance || 20);
      }
    }, 0);
  };
  // 切换下一级列表
  const nextAreaList = async (item: RegionData) => {
    let calBack: NextListObj = {
      next: privateTabName[tabIndex + 1],
      value: item,
      custom: tabName.current[tabIndex]
    };
    const bbselectedRegion = selectedRegion ? { ...selectedRegion } : null;
    if (bbselectedRegion) {
      setSelectedRegion({
        ...bbselectedRegion,
        [tabName.current[tabIndex]]: item
      });

      calBack.selectedRegion = {
        ...bbselectedRegion,
        [tabName.current[tabIndex]]: item
      };
    }
    currentClickItem.current = item;
    let lazyPromise = new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void) => {
      if (onClickItem) {
        onClickItem(calBack, resolve);
      } else {
        resolve(true);
      }
    });
    let lazyRes: boolean = await lazyPromise;

    if (tabIndex < 4) {
      // 切换下一个
      if (tabIndex === 3) {
        calBack.next = '';
      } else {
        if (tabIndex + 1 < tabName.current.length) {
          setTabIndex(() => tabIndex + 1);
          lineAnimation(tabIndex + 1);
        }
        calBack.next = privateTabName[tabIndex + 1];
      }
      calBack.value = item;
      onNextArea && onNextArea(calBack, lazyRes);
    } else {
      onClose && onClose();
    }
  };

  // 切换地区Tab
  const changeRegionTab = (item: RegionData, index: number, key: string) => {
    if (getTabName(item, index)) {
      setTabIndex(index);
      lineAnimation(index);
    }
    onTabClick && onTabClick(key);
    changeSelectedRegion(index);
  };
  // 点击 tab 重置后续 已选地址信息
  const changeSelectedRegion = (index: number) => {
    const selectedRegionC = selectedRegion && Object.assign(selectedRegion);

    tabName.current.forEach((string: string, ind: number) => {
      if (ind > index) {
        selectedRegionC[string] = { name: '' };
      }
    });
    setSelectedRegion(selectedRegionC);
  };
  // 默认选中项
  const initCustomSelected = () => {
    if (modelValue.length > 0) {
      let tagIndex = 0;
      const selectedRegionC = selectedRegion && Object.assign(selectedRegion);

      for (let index = 0; index < modelValue.length; index++) {
        if (!tabName.current[index] || regionList[tabName.current[index] as SelectedRegionType].length === 0) {
          tagIndex = index - 1;
          setTabIndex(index - 1);
          break;
        } else {
          const val = modelValue[index];
          const arr = regionList[tabName.current[index] as SelectedRegionType];
          if (val == '0' || !val) {
            break;
          }
          if (privateType === 'custom') {
            let filterRes = (arr as RegionData[]).filter((item: RegionData) => item.id == val)[0];
            if (!filterRes) {
              break;
            }
            selectedRegionC[tabName.current[index]] = filterRes;
          } else if (privateType === 'elevator') {
            const sumArr: any = [];
            arr.forEach((item) => {
              sumArr.push(...(item as any).list);
            });
            let filterRes = sumArr.filter((item: RegionData) => item.id == val)[0];
            if (!filterRes) {
              break;
            }
            selectedRegionC[tabName.current[index]] = filterRes;
          }

          tagIndex = index;
          setSelectedRegion(selectedRegionC);
        }
      }

      setTabIndex(tagIndex);
      window.requestAnimationFrame(() => {
        lineAnimation(tagIndex);
      });
      emitSelectedRegion && emitSelectedRegion(selectedRegionC);
    }
  };

  const handleElevatorItem = (key: string, item: RegionData) => {
    nextAreaList(item);
  };
  const judgeSelectStatus = (item: RegionData) => {
    return (
      selectedRegion && selectedRegion[tabName.current[tabIndex] as SelectedRegionType].id == (item as RegionData).id
    );
  };
  const judgeClickItem = (item: RegionData) => {
    return currentClickItem.current && (currentClickItem.current as RegionData).id == (item as RegionData).id;
  };
  useEffect(() => {
    const { province } = { ...defaultProps, ...props };
    setRegionList({
      ...regionList,
      province: isCustom2() ? transformData(province) : province
    });
  }, [province]);

  useEffect(() => {
    const { city } = { ...defaultProps, ...props };

    setRegionList({
      ...regionList,
      city: isCustom2() ? transformData(city) : city
    });
  }, [city]);

  useEffect(() => {
    const { country } = { ...defaultProps, ...props };

    setRegionList({
      ...regionList,
      country: isCustom2() ? transformData(country) : country
    });
  }, [country]);

  useEffect(() => {
    const { town } = { ...defaultProps, ...props };
    setRegionList({
      ...regionList,
      town: isCustom2() ? transformData(town) : town
    });
    if (town && town.length > 0) {
      tabName.current.push('town');
    }
  }, [town]);

  useEffect(() => {
    initCustomSelected();
  }, [modelValue]);

  return (
    <div className={b('custom')}>
      <div className={b('region-tab')}>
        {selectedRegion &&
          (Object.keys(selectedRegion) as SelectedRegionType[]).map((key: SelectedRegionType, index) => {
            return (
              <div
                className={`${b('tab-item')} ${index === tabIndex ? 'active' : ''}`}
                key={index}
                ref={mapRef[key]}
                onClick={() => changeRegionTab(selectedRegion[key], index, key)}>
                {index <= tabIndex && <div>{getTabName(selectedRegion[key], index)}</div>}
              </div>
            );
          })}
        <div className={b('tab-line')} ref={regionLine} style={{ left: `${lineDistance}px` }} />
      </div>

      {privateType === 'custom' && (
        <div className={b('region-con')}>
          <ul className={b('region-group')}>
            {false ? (
              <div className="loading_box">
                <Icon name="loading"></Icon>
              </div>
            ) : (
              tabName.current[tabIndex] &&
              (regionList[tabName.current[tabIndex] as SelectedRegionType] as RegionData[]).map(
                (item: RegionData, index: number) => {
                  return (
                    <li
                      key={index}
                      className={`${b('region-item')} ${judgeSelectStatus(item) ? 'active' : ''}`}
                      onClick={() => {
                        nextAreaList(item);
                      }}>
                      {loading
                        ? judgeClickItem(item) && (
                            <Icon className={b('region-item--loading')} name="loading" size="13px"></Icon>
                          )
                        : judgeSelectStatus(item) && (
                            <Icon className={b('region-item--icon')} name="Check" color="#FA2C19" size="13px" />
                          )}
                      {item.name}
                    </li>
                  );
                }
              )
            )}
          </ul>
        </div>
      )}

      {privateType === 'elevator' && (
        <div className={b('elevator-group')}>
          <Elevator
            height={height}
            indexList={regionList[tabName.current[tabIndex] as SelectedRegionType]}
            onClickItem={handleElevatorItem}>
            <Elevator.Context.Consumer>
              {(item) => {
                return (
                  <div className={`${b('region-item')} ${judgeSelectStatus(item) ? 'active' : ''}`}>
                    {loading
                      ? judgeClickItem(item) && (
                          <Icon className={b('region-item--loading')} name="loading" size="13px"></Icon>
                        )
                      : judgeSelectStatus(item) && (
                          <Icon className={b('region-item--icon')} name="Check" color="#FA2C19" size="13px" />
                        )}
                    {item?.name}
                  </div>
                );
              }}
            </Elevator.Context.Consumer>
          </Elevator>
        </div>
      )}
    </div>
  );
};
