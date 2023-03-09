import { ReactNode, CSSProperties } from 'react';
import { IComponent } from '@/utils/typings';

export interface RegionData {
  name?: string;
  [key: string]: any;
}

export interface ChangeCallBack {
  next: string;
  value: RegionData;
  custom: string;
}
export interface CloseCallBackData extends SelectedRegionObj {
  addressIdStr: string;
  addressStr: string;
}

export interface CloseCallBack {
  data: CloseCallBackData | AddressList;
  type: string;
}

export interface AddressList {
  id?: string | number;
  provinceName: string;
  cityName: string;
  countyName: string;
  townName: string;
  addressDetail: string;
  selectedAddress: boolean;
  name?: string;
  phone?: string;
}
export interface NextListObj {
  next: string;
  value: RegionData;
  custom: string;
  selectedRegion?: SelectedRegionObj;
}
// 已选地址
export interface SelectedRegionObj {
  province: RegionData;
  city: RegionData;
  country: RegionData;
  town: RegionData;
}
export interface baseAddressInfo {
  province: RegionData[];
  city: RegionData[];
  country: RegionData[];
  town: RegionData[];
}
export interface AddressResult extends AddressList, baseAddressInfo {
  addressIdStr: string;
  addressStr: string;
}
export type AddressType = 'exist' | 'custom' | 'elevator';
export type HotCityList = Array<{
  id: number;
  name: string;
  title: string;
}>;

export interface ExistRenderProps {
  type: string;
  existAddress: AddressList[] | [];
  defaultIcon: ReactNode;
  selectedIcon: ReactNode;
  isShowCustomAddress: boolean;
  customAndExistTitle: ReactNode;
  onSelected?: (prevExistAdd: AddressList, item: AddressList, copyExistAdd: AddressList[]) => void;
  onClose?: (cal: { closeWay: string }) => void;
  onSwitchModule?: (cal: { type: string }) => void;
}

export interface AddressProps extends IComponent, baseAddressInfo {
  className?: string;
  style?: CSSProperties;
  modelValue: boolean;
  modelSelect: (string | number)[];
  type: AddressType;
  isShowCustomAddress: boolean;
  existAddress: AddressList[];
  loading: boolean;
  // hotCities: HotCityList;
  customAddressTitle: ReactNode;
  existAddressTitle: ReactNode;
  customAndExistTitle: ReactNode;
  height: string | number;
  defaultIcon: ReactNode;
  selectedIcon: ReactNode;
  closeBtnIcon: string;
  backBtnIcon: string;
  bottom: ReactNode;
  onSelected?: (prevExistAdd: AddressList, item: AddressList, copyExistAdd: AddressList[]) => void;
  onClose?: (cal: CloseCallBack) => void;
  // onClickHotCity?: (city: { id: number; name: string }) => void;
  onCloseMask?: (cal: { closeWay: string }) => void;
  onSwitchModule?: (cal: { type: string }) => void;
  onChange?: (cal: ChangeCallBack) => void;
  onClickItem?: (cal: ChangeCallBack, resolve: (value: boolean | PromiseLike<boolean>) => void) => Promise<void>;
  onTabChecked?: (cal: string) => void;
}

export interface CustomRenderProps extends baseAddressInfo {
  modelValue: (string | number)[];
  type: string;
  height: string | number;
  loading: boolean;
  // hotCities: HotCityList;
  onNextArea?: (cal: NextListObj, lazyStatus: boolean) => void;
  emitSelectedRegion?: (cal: SelectedRegionObj) => void;
  onTabClick?: (type: string) => void;
  onClose?: () => void;
  onClickItem?: (cal: ChangeCallBack, resolve: (value: boolean | PromiseLike<boolean>) => void) => Promise<void>;

  // onClickHotCity?: (city: { id: number; name: string; title: string }) => void;
}
export interface CustomRegionData {
  title: string;
  list: any[];
}

export interface MapRef {
  province: React.RefObject<HTMLDivElement>;
  city: React.RefObject<HTMLDivElement>;
  country: React.RefObject<HTMLDivElement>;
  town: React.RefObject<HTMLDivElement>;
}
