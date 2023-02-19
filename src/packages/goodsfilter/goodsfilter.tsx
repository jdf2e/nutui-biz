import React, {
  FunctionComponent, HTMLAttributes, useMemo, useState,
} from 'react'
import { Icon, Popup } from '@nutui/nutui-react'
import { IComponent } from '@/utils/typings'
import bem from '@/utils/bem'
import { InputNum } from './components/InputNum'

export interface GoodsFilterProps extends IComponent {
  visiable: boolean
  confirmText: string
  resetText: string
  resetDisable: boolean
  priceRangeTitle: string
  priceRanges: Array<any>
  filterAttrs: Array<any>
  goodsAttrs: Array<any>
  maxLine: number
  selectedAddress: string
  addressTitle: string
  onClose: () => void
  onReset: () => void
  onConfirm: (res: any) => void
  onClickAddress: () => void
  onSelectedAttrs: (attr: any, selected: boolean, selectedAttrs: Array<any>) => void
  onSelectedPrice: (range: any) => void
  bottom: React.ReactNode,
}

const defaultProps = {
  visiable: false,
  confirmText: '确定',
  resetText: '重置',
  resetDisable: false,
  priceRangeTitle: '价格区间',
  maxLine: 2,
  selectedAddress: '',
  addressTitle: '配送地址',
} as GoodsFilterProps

export const GoodsFilter: FunctionComponent<
  Partial<GoodsFilterProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    visiable,
    confirmText,
    resetText,
    selectedAddress,
    addressTitle,
    filterAttrs,
    goodsAttrs,
    priceRangeTitle,
    priceRanges,
    onClose,
    onReset,
    onConfirm,
    onClickAddress,
    onSelectedAttrs,
    onSelectedPrice,
    bottom
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('goods-filter')

  const [selectedValues, setSelectedValues] = useState({
    filterAttrs: [] as any,
    norGoodsAttrs: {} as any
  })
  const [priceLow, setPriceLow] = useState<number | string>('')
  const [priceHigh, setPriceHigh] = useState<number | string>('')

  // 关闭 Popup
  const onHandleClose = () => {
    onClose && onClose()
  }

  // 地址选择
  const chooseAddress = () => {
    onClickAddress && onClickAddress()
  }

  // 筛选分类类型
  const filterAttrsHandler = (attr: any) => {
    const idx = selectedValues.filterAttrs.findIndex((cattr: any) => {
      return cattr.id === attr.id
    })
    let newFilterAttrs = [] as Array<any>
    if (idx !== -1) {
      newFilterAttrs = selectedValues.filterAttrs.slice()
      newFilterAttrs.splice(idx, 1)
      setSelectedValues({
        ...selectedValues,
        filterAttrs: newFilterAttrs
      })
      onSelectedAttrs && onSelectedAttrs(attr, false, newFilterAttrs)
    } else {
      newFilterAttrs = selectedValues.filterAttrs.slice()
      newFilterAttrs.push(attr)
      setSelectedValues({
        ...selectedValues,
        filterAttrs: newFilterAttrs
      })
      onSelectedAttrs && onSelectedAttrs(attr, true, newFilterAttrs)
    }
  }

  // 价格
  const handleInput = (val: string, type: 'low' | 'high')=> {
    if (type === 'low') {
      setPriceLow(val)
    } else {
      setPriceHigh(val)
    }
  }

  // 点击推荐价格
  const onClickRecPrice = (range: any) => {
    setPriceLow(range.low)
    setPriceHigh(range.high)

    onSelectedPrice && onSelectedPrice(range)
  }

  // 价格区间格式化
  const norPriceRanges = useMemo(() => {
    return priceRanges.map((range, index: number) => {
      const defaultItem = {
        id: 0,
        low: "",
        high: "",
        desc: "",
        extra: {},
      }
      return Object.assign(defaultItem, { id: index }, range)
    })
  }, [priceRanges])

  // 商品属性格式化
  const norGoodsAttrs = useMemo(() => {
    return goodsAttrs.map((attrs, index) => {
      const defaultItem = {
        isExpandName:1,
        isExpand: selectedValues.hasOwnProperty(attrs.id)?[1]:[], // 是否展开
        showRow:1 // 折叠后，显示在外侧的行数
      }
      return Object.assign(attrs, defaultItem)
    })
  }, [goodsAttrs])

  // 重置
  const reset = () => {
    setSelectedValues({
      filterAttrs:[],
      norGoodsAttrs:{}
    })
    setPriceLow('')
    setPriceHigh('')
    onReset && onReset()
  }

  // 确定
  const confirm = () => {
    const { filterAttrs, norGoodsAttrs } = selectedValues
    const sGoods = Object.keys(norGoodsAttrs).map(id => (norGoodsAttrs[id]))
    const res = {
      address: selectedAddress,
      price:{
        low: priceLow,
        high: priceHigh
      },
      filterAttrs: filterAttrs,
      goodsAttrs: sGoods
    }
    onConfirm && onConfirm(res)
  }

  return (
    <Popup
      visible={visiable}
      position='right'
      round
      style={{ width: '80%', height: '100%' }}
      onClose={onHandleClose}
    >
      <div className={b()}>
        {/* 地址选择 */}
        <div className={`${b('chunk')} ${b('chunk')}--address`}>
          <div className={b('chunk__label')}>{ addressTitle }</div>
          <div className={b('chunk__group')}>
            <Icon
              className={b('chunk__group__icon')}
              name="location2"
              size="12"
            ></Icon>
            <div className={b('chunk__group__address')} onClick={chooseAddress}>
              {
                <span>{selectedAddress ? selectedAddress : '您还没有选中的地址'}</span>
              }
            </div>
            <div className={b('chunk__group__modify')} onClick={chooseAddress}>修改</div>
          </div>
        </div>

        {/* 类型选择 */}
        <div className={b('chunk')}>
          <div className={b('chunk__type')}>
            {
              filterAttrs && filterAttrs?.map((attr: any) => {
                return <div
                  key={attr?.id}
                  className={ selectedValues.filterAttrs && selectedValues.filterAttrs.some((cAttr: any) => { return cAttr.id === attr.id }) ? 'active' : '' }
                  onClick={() => filterAttrsHandler(attr)}
                >
                  { attr?.name }
                </div>
              })
            }
          </div>
        </div>

        {/* 价格 */}
        <div className={b('chunk')}>
          <div className={b('chunk__label')}>{ priceRangeTitle }</div>
          <div className={b('chunk__price')}>
            <div className={b('chunk__price--range')}>
              <div className={`${b('chunk__price--range__item')} ${b('chunk__price--range__item')}--low`}>
                {
                  priceLow === '' ? <span className={`${b('chunk__price--range__item')} ${b('chunk__price--range__item')}--placeholder`}>最低价</span> : ''
                }
                <InputNum onNumInput={(val: string) => handleInput(val, 'low')} value={priceLow}></InputNum>
              </div>
              <span className={b('chunk__price--range__cable')}></span>
              <div className={`${b('chunk__price--range__item')} ${b('chunk__price--range__item')}--high`}>
                {
                  priceHigh === '' ? <span className={`${b('chunk__price--range__item')} ${b('chunk__price--range__item')}--placeholder`}>最高价</span> : ''
                }
                <InputNum onNumInput={(val: string) => handleInput(val, 'high')} value={priceHigh}></InputNum>
              </div>
            </div>
            {/* 推荐价格范围 */}
            {
              norPriceRanges.length ? <div className={b('chunk__price--recommend')}>
                {
                  norPriceRanges.map((range) => {
                    return <div
                      className={b('chunk__price--recommend__item')}
                      key={range.id}
                      onClick={() => onClickRecPrice(range)}
                    >
                      <div>{ range.low }-{ range.high }</div>
                      <div>{ range.desc }</div>
                    </div>
                  })
                }
              </div> : ''
            }
          </div>
        </div>

        {/* 间隔 */}
        <div className={b('chunk__gap')}></div>
        
        {/* 折叠面板 */}
        {
          norGoodsAttrs && norGoodsAttrs.length > 0 && <div className={b('chunk__list')}>
            {
              norGoodsAttrs.map((attrs) => {
                return <div
                  className={b('chunk__list--item')}
                >
                  <div className={b('chunk__list--item__top')}>
                    <div className={b('chunk__list--item__title')}>{attrs.title}</div>
                    <div className={b('chunk__list--item__subTitle')}>副标题</div>
                    <Icon name='arrow-up'></Icon>
                  </div>
                  <div className={b('chunk__groups')}>
                    {
                      attrs.values.slice(0, 4).map((attrsValue: any) => {
                        return <div key={attrsValue.id} className={b('chunk__groups--item')}>{ attrsValue.name }</div>
                      })
                    }
                    {
                      attrs.values.slice(4).map((attrsValue: any) => {
                        return <div key={attrsValue.id} className={b('chunk__groups--item')}>{ attrsValue.name }</div>
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        }
        {/* 操作 */}
        <div className={b('operate')}>
          {
            bottom ? bottom : <>
              <div className={`${b('operate__btn')} ${b('operate__btn')}--reset`} onClick={reset}>{ resetText }</div>
              <div className={`${b('operate__btn')} ${b('operate__btn')}--confirm`} onClick={confirm}>{ confirmText }</div>
            </>
          }
        </div>
      </div>
    </Popup>
  )
}

GoodsFilter.defaultProps = defaultProps
GoodsFilter.displayName = 'NutGoodsFilter'
