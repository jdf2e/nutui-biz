import React, {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  useState,
  useEffect
} from 'react'
import { useConfig } from '@/packages/configprovider'
import {Popup} from '@nutui/nutui-react'
import {SkuHeader} from './skuHeader'
import {SkuSelect} from './skuSelect'
import {SkuStepper} from './skuStepper'
import {SkuOperate} from './skuOperate'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { IComponent } from '@/utils/typings'

export interface SkuProps extends IComponent {
  className: string
  style: CSSProperties
  visible: boolean
  skuHeaderPrice: ReactNode
  skuHeaderExtra: ReactNode
  skuHeader: ReactNode
  skuSelectTop: ReactNode
  skuSelect: ReactNode
  skuStepper: ReactNode
  skuStepperBottom: ReactNode
  operateBtn: ReactNode
  goods: object
  sku: Array<any>
  stepperMax: string | number
  stepperMin: string | number
  stepperExtraText: Function | boolean
  stepperTitle: string
  btnOptions: Array<string>
  btnExtraText: string
  buyText: string
  addCartText: string
  confirmText: string
  onClickBtnOperate: (btn: string) => void
  onClose: () => void
  onClickCloseIcon: () => void
  onClickOverlay: () => void
  onSelectSku: (skus: any) => void
  onAdd: (value: number) => void
  onReduce: (value: number) => void
  onChangeStepper: (value: number) => void
  onOverLimit: () => void
}

export const Sku: FunctionComponent<
  Partial<SkuProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    visible = false,
    className,
    style,
    skuHeader,
    skuHeaderPrice,
    skuHeaderExtra,
    skuSelectTop,
    skuSelect,
    skuStepper,
    skuStepperBottom,
    goods,
    sku = [],
    stepperMax = 99999,
    stepperMin = 1,
    stepperExtraText = false,
    stepperTitle = '购买数量',
    btnOptions = ['confirm'],
    btnExtraText = '',
    buyText = '立即购买',
    addCartText = '加入购物车',
    confirmText = '确定',
    operateBtn,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onSelectSku,
    onAdd,
    onReduce,
    onOverLimit,
    onChangeStepper,
    onClickBtnOperate
  } = {
    ...props,
  }

  const [goodsCount, setGoodsCount] = useState(stepperMin)
  const [showPopup, setShowPopup] = useState(visible)

  const close = () => {
    onClose && onClose();
  }

  useEffect(() => {
    setShowPopup(visible)
  }, [visible])

  useEffect(() => {
    if(!showPopup) close()
  }, [showPopup])

  const closePopup = (type: string) => {
    if (type == 'icon') {
      onClickCloseIcon && onClickCloseIcon();
    }

    if (type == 'overlay') {
      onClickOverlay && onClickOverlay();
    }

    if (type == 'close') {
      onClose && onClose();
    }
  }

  const handleClickBtnOperate = (btn: string) => {
    onClickBtnOperate && onClickBtnOperate(String(goodsCount))
  }

  const handleAdd = (value: number) => {
    onAdd && onAdd(value)
  }

  const handleReduce = (value: number) => {
    onReduce && onReduce(value)
  }

  const handleOverLimit = () => {
    onOverLimit && onOverLimit()
  }

  const handleChangeFuc = (value: number) => {
    setGoodsCount(value)
    onChangeStepper && onChangeStepper(value)
  }

  const b = bem('sku')

  const renderSkuHeader = () => {
    return skuHeader || <SkuHeader goods={goods} skuHeaderPrice={skuHeaderPrice} skuHeaderExtra={skuHeaderExtra} />
  }

  const handleSelectSku = (skus: any) => {
    onSelectSku && onSelectSku(skus)
  }

  return (
    <Popup
      visible={visible}
      position="bottom"
      closeable
      round
      style={{"height": '75%'}}
      onClose={closePopup.bind(this, 'close')}
      onClickCloseIcon={closePopup.bind(this, 'icon')}
      onClickOverlay={closePopup.bind(this, 'overlay')}
    >
      <div className={classNames([b(),className])} style={style}>
        {renderSkuHeader()}
        <div className='nut-sku-content'>
          {skuSelectTop}
          {skuSelect || <SkuSelect sku={sku} selectSku={handleSelectSku} />}
          {skuStepper || <SkuStepper 
            stepperTitle={stepperTitle}
            stepperMax={stepperMax}
            stepperMin={stepperMin}
            stepperExtraText={stepperExtraText} 
            onAdd={() => handleAdd}
            onReduce={() => handleReduce}
            onOverLimit={handleOverLimit}
            onChangeFuc={() => handleChangeFuc}
          />}
          {skuStepperBottom}
        </div>
        <SkuOperate
          btnOptions = {btnOptions}
          btnExtraText = {btnExtraText}
          buyText = {buyText}
          addCartText = {addCartText}
          confirmText = {confirmText}
          operateBtn={operateBtn}
          onClickBtnOperate = {handleClickBtnOperate} />
      </div>
    </Popup>
  )
}

Sku.displayName = 'NutSku'
