import React, {
    FunctionComponent,
    ReactNode
  } from 'react'
  import { useConfig } from '@/packages/configprovider'
  import {Price} from '@nutui/nutui-react'
  
  import { IComponent } from '@/utils/typings'
  
  export interface SkuHeaderProps extends IComponent {
    goods: {
      price: number
      imagePath: string
      skuId: string
    }
    skuHeaderPrice: ReactNode
    skuHeaderExtra: ReactNode
  }
  
  export const SkuHeader: FunctionComponent<
    Partial<SkuHeaderProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
  > = (props) => {
    const { locale } = useConfig()
    const {
        goods = {
          price: 0,
          imagePath: '',
          skuId: ''
        },
        skuHeaderPrice,
        skuHeaderExtra
    } = {
      ...props,
    }

    const renderSkuHeaderExtra = () => {
        if(skuHeaderExtra) return skuHeaderExtra;
        if(!skuHeaderExtra && goods.skuId) {
            return <div className='nut-sku-header-right-extra'>{locale.skuheader.skuId}：{goods.skuId}</div>
        } else {
            return null;
        }
    }
  
    return (
        <div className='nut-sku-header'>
            <img src={goods.imagePath} alt="" />
            <div className='nut-sku-header-right'>
                {skuHeaderPrice || <Price price={goods.price} needSymbol={true} thousands={false} />}
                {renderSkuHeaderExtra()}
            </div>
        </div>
    )
  }
  
  SkuHeader.displayName = 'NutSkuHeader'
  