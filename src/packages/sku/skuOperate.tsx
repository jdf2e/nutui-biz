import React, {
  FunctionComponent,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { IComponent } from '@/utils/typings'
import classNames from 'classnames'

export interface SkuOperateProps extends IComponent {
  btnOptions: Array<string>
  btnExtraText: string
  operateBtn: ReactNode
  skuOperate: ReactNode
  buyText: string
  addCartText: string
  confirmText: string
  onClickBtnOperate: (btn: string) => void
}

export const SkuOperate: FunctionComponent<
  Partial<SkuOperateProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    btnOptions,
    btnExtraText,
    operateBtn,
    buyText,
    addCartText,
    confirmText,
    skuOperate,
    onClickBtnOperate
  } = {
    ...props,
  }

  const clickBtnOperate = (btn: string) => {
    onClickBtnOperate && onClickBtnOperate(btn)
  }

  const getBtnDesc = (type: string) => {
    if(typeof confirmText === 'undefined' || typeof addCartText === 'undefined' || typeof buyText === 'undefined') return;

    let mapD: { [props: string]: string } = {
      confirm: confirmText,
      cart: addCartText,
      buy: buyText
    };

    return mapD[type];
  };

  return (
    <>
      {btnOptions && btnOptions.length > 0 ? <div className='nut-sku-operate'>
      {btnExtraText && <div className='nut-sku-operate-desc'>{btnExtraText}</div>}
      { skuOperate }
      {operateBtn || <div className='nut-sku-operate-btn'>
      {
        btnOptions.map((btn, i) => {
          return <div 
              className={classNames([`nut-sku-operate-btn-${btn}`, 'nut-sku-operate-btn-item'])}
              key={i}
              onClick={()=>clickBtnOperate(btn)}
            >
              {getBtnDesc(btn)}
          </div>
        })
      }
      </div>}
      </div> : null}
    </>
  )
}

SkuOperate.displayName = 'NutSkuOperate'
