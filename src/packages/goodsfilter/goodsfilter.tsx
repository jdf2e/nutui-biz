import React, {
  FunctionComponent, HTMLAttributes, useEffect, useMemo, useState, CSSProperties, ReactNode
} from 'react'
import { Icon, Popup } from '@nutui/nutui-react'
import { IComponent } from '@/utils/typings'
import bem from '@/utils/bem'
import { numericProp } from '@/utils/props'
import { InputNum } from './components/InputNum'
import classNames from 'classnames'

export interface valueType {
  id?: numericProp
  name?: string
  [x:string]: any
}
export interface goodsAttrsResType {
  id?:numericProp
  value?:string[]
  [x:string]:any
}

export interface resType {
  address: string
  price:{
    low: numericProp,
    high: numericProp
  }
  filterAttrs: valueType
  goodsAttrs: goodsAttrsResType
}

export interface priceRangesType {
    low: string
    high: string
    desc: string
    id?: numericProp
    extra: any
}

export interface goodsAttrsType {
  title: string
  id: numericProp,
  values: valueType
}

export interface selectedGoodsAttrType {
  id: numericProp
  isExpand: boolean|undefined
  showRow : numericProp
  title:string
  [x:string]:any
}
 
export interface selectDataType {
  filterAttrs: valueType[]
  goodsAttrs: goodsAttrsType[]
  price: {
    low:string,
    high:string,
  }
}


export interface GoodsFilterProps extends IComponent {
  visible?: boolean
  confirmText?: React.ReactNode
  resetText?: React.ReactNode
  priceRangeTitle?: string
  addressTitle?: string
  selectedAddress: string
  resetDisable?: boolean
  priceRanges?: priceRangesType[]
  filterAttrs?: valueType[]
  goodsAttrs?: goodsAttrsType[]
  specStyle?: CSSProperties
  selectedSpecShow?: boolean
  maxLine: number
  icon?: string
  selectData?: selectDataType
  onClose?: () => void
  onReset?: () => void
  onConfirm?: (res: resType) => void
  onClickAddress?: () => void
  onSelectedAttrs?: (attr: valueType, selected: boolean, selectedAttrs:valueType[]) => void
  onSelectedPrice?: (range: priceRangesType) => void
  onBeforeSelected?: (done: () => void, selectedValue: goodsAttrsResType) => void
  onSelectedGoodsAttr?: (attrs: selectedGoodsAttrType, value: valueType) => void
  bottom?: React.ReactNode,
}

const defaultProps = {
  visible: false,
  confirmText: '确定',
  resetText: '重置',
  priceRangeTitle: '价格区间',
  addressTitle: '配送地址',
  selectedAddress: '',
  resetDisable: false,
  selectedSpecShow: true,
  maxLine: 2,
  icon: 'arrow-down',
  onBeforeSelected: (done: () => void) => {
    done()
  },
} as GoodsFilterProps

export const GoodsFilter: FunctionComponent<
  Partial<GoodsFilterProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    visible,
    confirmText,
    selectData,
    resetText,
    priceRangeTitle,
    addressTitle,
    selectedAddress,
    resetDisable,
    priceRanges,
    filterAttrs,
    goodsAttrs,
    specStyle,
    selectedSpecShow,
    maxLine,
    icon,
    onClose,
    onReset,
    onConfirm,
    onClickAddress,
    onSelectedAttrs,
    onSelectedPrice,
    onBeforeSelected,
    onSelectedGoodsAttr,
    bottom,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('goods-filter')

  useEffect(()=>{
    if(visible &&selectData ){
      let obj:goodsAttrsResType = {}
      if(selectData.goodsAttrs){
        selectData.goodsAttrs.forEach(item => obj[item.id] = item);
      }
        setSelectedValues({
          ...selectedValues,
          filterAttrs: selectData.filterAttrs||[],
          goodsAttrs: obj||{}
        })
        setPriceLow(selectData?.price?.low||"")
        setPriceHigh(selectData?.price?.high||"")
        setPriceId(undefined)
    }
  },[selectData,visible])

  const [selectedValues, setSelectedValues] = useState({
    filterAttrs: [] as  valueType[] ,
    goodsAttrs: {} as goodsAttrsResType ,
  })
  const [priceLow, setPriceLow] = useState<numericProp>('')
  const [priceHigh, setPriceHigh] = useState<numericProp>('')

  // 地址选择
  const chooseAddress = () => {
    onClickAddress && onClickAddress()
  }

  // 筛选分类类型
  const filterAttrsHandler = (attr:valueType ) => {
    const idx = selectedValues.filterAttrs.findIndex((cattr: valueType) => {
      return cattr.id === attr.id
    })
    let newFilterAttrs = [] as valueType[]
    newFilterAttrs = selectedValues.filterAttrs.slice()
    if (idx !== -1) {
      newFilterAttrs.splice(idx, 1)
      setSelectedValues({
        ...selectedValues,
        filterAttrs: newFilterAttrs
      })
      onSelectedAttrs?.(attr, false, newFilterAttrs)
    } else {
      newFilterAttrs.push(attr)
      setSelectedValues({
        ...selectedValues,
        filterAttrs: newFilterAttrs
      })
      onSelectedAttrs?.(attr, true, newFilterAttrs)
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

  const [priceId,setPriceId] = useState<numericProp|undefined>()

  // 点击推荐价格
  const onClickRecPrice = (range: priceRangesType) => {
    if(range.id==priceId){
      setPriceId(undefined)
      setPriceLow('')
      setPriceHigh('')
      const data = {
        low:'',
        high: '',
        desc: '',
        id:'',
        extra: ''
      }
      onSelectedPrice?.(data)
    }else{
      setPriceLow(range.low)
      setPriceHigh(range.high)
      setPriceId(range.id)
      onSelectedPrice?.(range)
    }
    
  }

  // 价格区间格式化
  const norPriceRanges = useMemo(() => {
    return priceRanges?.map((range, index: number) => {
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
    return goodsAttrs?.map((attr, index) => {
      const defaultItem = {
        isExpand: selectedValues.goodsAttrs.hasOwnProperty(attr.id)
          && selectedValues.goodsAttrs[attr.id].isExpand, // 是否展开
        showRow: 1 // 折叠后，显示在外侧的行数
      }
      return Object.assign(attr, defaultItem)
    })
  }, [goodsAttrs, selectedValues.goodsAttrs])

  // 副标题，选中的值
  const renderSelectedValues = (attrs:selectedGoodsAttrType)=>{
    const allAttrs = attrs.values
    const id = selectedValues.goodsAttrs[attrs.id]
    if (id) {
      const sValues = id.values
      const sAttrs = allAttrs.filter((attrs: { id: number }) => sValues.indexOf(attrs.id) != -1)
      return sAttrs.map((s: { name: string }) => s.name).join(',')
    }
  }

  // 商品属性选择
  const selectedGoodsAttr = (attrs: selectedGoodsAttrType, attr: valueType) => {
    const { filterAttrs, goodsAttrs } = selectedValues
    let selectedVal = {} as goodsAttrsResType
    if (goodsAttrs[attrs.id]) {
      selectedVal = goodsAttrs[attrs.id]
    } else {
      selectedVal = {
        id: attrs.id,
        values: [],
        isExpand: false
      }
    }

    const done = () => {
      if (goodsAttrs.hasOwnProperty(attrs.id)) {
        const idx = goodsAttrs[attrs.id].values.indexOf(attr.id)
        if (idx != -1) {
          goodsAttrs[attrs.id].values.splice(idx, 1)
        } else {
          goodsAttrs[attrs.id].values.push(attr.id)
        }
      } else {
        goodsAttrs[attrs.id] = {
          id: attrs.id,
          values: [attr.id]
        }
      }
      setSelectedValues({
        filterAttrs: filterAttrs.slice(),
        goodsAttrs: Object.assign({}, goodsAttrs)
      })
      onSelectedGoodsAttr?.(attrs, attr)
    }
    onBeforeSelected?.(done, selectedVal)
  }

  const onClickIcon = (attrs: selectedGoodsAttrType) => {
    const { filterAttrs, goodsAttrs } = selectedValues
    if (goodsAttrs[attrs.id]) {
      goodsAttrs[attrs.id].isExpand = !goodsAttrs[attrs.id].isExpand
    } else {
      const selectedVal = {
        id: attrs.id,
        values: [],
        isExpand: !attrs.isExpand
      }
      goodsAttrs[attrs.id] = selectedVal
    }
    setSelectedValues({
      filterAttrs: filterAttrs.slice(),
      goodsAttrs: Object.assign({}, goodsAttrs)
    })
  }

  // 重置
  const reset = () => {
    if (!resetDisable) { 
      setSelectedValues({
        filterAttrs: [],
        goodsAttrs: {}
      })
      setPriceLow('')
      setPriceHigh('')
      onReset && onReset()
    }
  }

  // 确定
  const confirm = () => {
    const { filterAttrs, goodsAttrs } = selectedValues
    const sGoods:goodsAttrsResType = Object.keys(goodsAttrs).map(id => (goodsAttrs[id]))
    let pricelow:numericProp = ""
    let pricehigh:numericProp = ""
    if(+priceLow > +priceHigh){
      pricelow = priceHigh
      pricehigh = priceLow 
      setPriceHigh(priceLow)
      setPriceLow(priceHigh)
    }
    const res = {
      address: selectedAddress,
      price:{
        low:pricelow|| priceLow,
        high: pricehigh||priceHigh
      },
      filterAttrs: filterAttrs,
      goodsAttrs: sGoods
    }
    onConfirm?.(res)
  }

  return (
    <Popup
      visible={visible}
      position='right'
      round
      style={{ width: '80%', height: '100%' }}
      onClose={()=>onClose?.()}
    >
      <div className={classNames([b(), className])} style={style} {...rest}  >
        {/* 地址选择 */}
        <div className={`${b('chunk')} ${b('chunk')}--address`}>
          <div className={b('chunk__label')}>{ addressTitle }</div>
          <div className={b('chunk__group')}>
            <Icon
              className={b('chunk__group__icon')}
              name='location2'
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
              filterAttrs && filterAttrs?.map((attr) => {
                return <div
                  key={attr?.id}
                  className={ selectedValues.filterAttrs && selectedValues.filterAttrs.some((cAttr) => { return cAttr.id === attr.id }) ? 'active' : '' }
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
              norPriceRanges?.length ? <div className={b('chunk__price--recommend')}>
                {
                  norPriceRanges.map((range) => {
                    return <div
                      className={classNames([b('chunk__price--recommend__item'), priceId==range.id?'active':'' ])}
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
                  key={attrs.id}
                >
                  <div className={b('chunk__list--item__top')}>
                    <div className={b('chunk__list--item__title')}>{attrs.title}</div>
                    {
                      selectedSpecShow && <div className={b('chunk__list--item__subTitle')}>{renderSelectedValues(attrs)}</div>
                    }
                    <Icon name={icon} className={b('chunk__list--item__icon') + (attrs.isExpand ? ' expand' : '')}onClick={() => onClickIcon(attrs)}></Icon>
                  </div>
                 
                  <div className={b('chunk__groups')}>
                    {
                      (attrs.isExpand ? attrs.values : attrs.values.slice(0, 3 * maxLine)).map((attr: valueType) => {
                        return <div
                          key={attr.id}
                          className={b('chunk__groups--item') +
                            (selectedValues.goodsAttrs[attrs.id] && selectedValues.goodsAttrs[attrs.id].values.includes(attr.id) ? ' active' : '')
                          }
                          style={specStyle}
                          onClick={() => selectedGoodsAttr(attrs, attr)}
                        >{ attr.name }</div>
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
