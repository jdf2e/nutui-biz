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
  skuOperate: ReactNode
  operateBtn: ReactNode
  goods: {
    price: number
    imagePath: string
    skuId: string
  }
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
  Partial<SkuProps>
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
    skuOperate,
    goods,
    sku = [],
    stepperMax = 99999,
    stepperMin = 1,
    stepperExtraText = false,
    stepperTitle = locale.sku.buyNumber,
    btnOptions = ['confirm'],
    btnExtraText = '',
    buyText = locale.sku.buyNow,
    addCartText = locale.sku.addToCard,
    confirmText = locale.sku.confirm,
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
      onClose={()=>closePopup('close')}
      onClickCloseIcon={()=>closePopup('icon')}
      onClickOverlay={()=>closePopup('overlay')}
      {...props}
    >
      <div className={classNames([b(),className])} style={style}>
        {renderSkuHeader()}
        <div className='nut-sku-content'>
          {skuSelectTop}
          {skuSelect || <SkuSelect sku={sku} selectSku={handleSelectSku} />}
          {skuStepper || <SkuStepper 
            goods={goods}
            stepperTitle={stepperTitle}
            stepperMax={stepperMax}
            stepperMin={stepperMin}
            stepperExtraText={stepperExtraText} 
            onAdd={() => handleAdd}
            onReduce={() => handleReduce}
            onOverLimit={handleOverLimit}
            onChangeStepper={() => handleChangeFuc}
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
          skuOperate = {skuOperate}
          onClickBtnOperate = {handleClickBtnOperate} />
      </div>
    </Popup>
  )
}

Sku.displayName = 'NutSku'
