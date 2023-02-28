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
  hotCities: []
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
    hotCities,
    onNextArea,
    onTabClick,
    onClose,
    onClickHotCity,
    emitSelectedRegion,
    ...rest
  } = {
    ...defaultProps,
    ...props
  };

  const b = bem('address');
  const privateTabName = ['province', 'city', 'country', 'town'];
  const tabName = useRef(['province', 'city', 'country']);
  // const tabName = ['province', 'city', 'country'];
  const [privateType] = useState<string>(type);
  const [tabIndex, setTabIndex] = useState(0);
  // const [tabName] = useState<string[]>(['province', 'city', 'country', 'town']);
  const [isShowHotCities, setIsShowHotCities] = useState<boolean>(true);

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
        const distance = (refD[name as MapRefType] as any).current.offsetLeft;
        setLineDistance(distance || 20);
      }
    }, 0);
  };
  // 切换下一级列表
  const nextAreaList = (item: RegionData | string) => {
    // onchange 接收的参数
    const calBack: NextListObj = {
      next: '',
      value: '',
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
      /* TODO 不会执行 */
      for (let i = tabIndex; i < tabIndex - 1; i++) {
        setSelectedRegion({
          ...bbselectedRegion,
          [tabName.current[i + 1]]: null
        });

        calBack.selectedRegion = {
          ...bbselectedRegion,
          [tabName.current[i + 1]]: {}
        };
      }
    }
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
      calBack.value = item as string;

      onNextArea && onNextArea(calBack);
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
    if (index < 2) {
      setIsShowHotCities(true);
    }
    changeSelectedRegion(index);
  };
  // 点击 tab 重置后续 已选地址信息
  const changeSelectedRegion = (index: number) => {
    const selectedRegionC: any = selectedRegion && Object.assign(selectedRegion);

    tabName.current.forEach((string: any, ind: number) => {
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
      const selectedRegionC: any = selectedRegion && Object.assign(selectedRegion);

      for (let index = 0; index < modelValue.length; index++) {
        if (!tabName.current[index] || (regionList as any)[tabName.current[index]].length === 0) {
          tagIndex = index - 1;
          setTabIndex(index - 1);
          break;
        } else {
          const val = modelValue[index];
          const arr: [] = (regionList as any)[tabName.current[index]];
          if (val == '0' || !val) {
            break;
          }
          if (privateType === 'custom') {
            let filterRes = arr.filter((item: RegionData) => item.id == val)[0];
            if (!filterRes) {
              break;
            }
            selectedRegionC[[tabName.current[index]] as any] = filterRes;
          } else if (privateType === 'elevator') {
            const sumArr: any = [];
            arr.forEach((item) => {
              sumArr.push(...(item as any).list);
            });
            let filterRes = sumArr.filter((item: RegionData) => item.id == val)[0];
            if (!filterRes) {
              break;
            }
            selectedRegionC[[tabName.current[index]] as any] = filterRes;
          }

          tagIndex = index;
          console.log('initCustomSelected', selectedRegionC);
          if (selectedRegionC.country && selectedRegionC.country.id) {
            setIsShowHotCities(false);
          }
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

  const handleElevatorItem = (key: string, item: RegionData | string) => {
    nextAreaList(item);
  };
  const judgeSelectStatus = (item: RegionData) => {
    return (
      selectedRegion && selectedRegion[tabName.current[tabIndex] as SelectedRegionType].id == (item as RegionData).id
    );
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

  const handleClickHotCity = (city: { id: number; name: string; title: string }) => {
    onClickHotCity && onClickHotCity(city);
    nextAreaList(city);
    setIsShowHotCities(false);
  };
  return (
    <div className={b('custom')}>
      <div className={b('region-tab')}>
        {selectedRegion &&
          Object.keys(selectedRegion).map((key: string | SelectedRegionType, index) => {
            return (
              <div
                className={`${b('tab-item')} ${index === tabIndex ? 'active' : ''}`}
                key={index}
                ref={mapRef[key as SelectedRegionType]}
                onClick={() => changeRegionTab(selectedRegion[key as SelectedRegionType], index, key)}>
                {index <= tabIndex && <div>{getTabName(selectedRegion[key as SelectedRegionType], index)}</div>}
              </div>
            );
          })}
        <div className={b('tab-line')} ref={regionLine} style={{ left: `${lineDistance}px` }} />
      </div>

      {hotCities.length > 0 && isShowHotCities && (
        <div>
          <div className="hot-title">热门城市</div>
          <ul className="hot-citys">
            {hotCities.map((city, index) => {
              return (
                <li key={city.id} onClick={() => handleClickHotCity(city)}>
                  {city.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {privateType === 'custom' && (
        <div className={b('region-con')}>
          <ul className={b('region-group')}>
            {tabName.current[tabIndex] &&
              regionList[tabName.current[tabIndex] as SelectedRegionType].map(
                (item: RegionData | CustomRegionData, index: number) => {
                  return (
                    <li key={index} className={`${b('region-item')} ${judgeSelectStatus(item) ? 'active' : ''}`}>
                      <div
                        onClick={() => {
                          nextAreaList(item as RegionData);
                        }}>
                        {judgeSelectStatus(item) && (
                          <Icon className={b('region-item--icon')} name="Check" color="#FA2C19" size="13px" />
                        )}
                        {(item as RegionData).name}
                      </div>
                    </li>
                  );
                }
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
                  <div className={judgeSelectStatus(item) ? 'active' : ''}>
                    {judgeSelectStatus(item) && (
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
