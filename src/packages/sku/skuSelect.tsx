import React, {
    FunctionComponent,
    useEffect,
    useState
  } from 'react'
import { useConfig } from '@/packages/configprovider'
  
import { IComponent } from '@/utils/typings'
import classNames from 'classnames'
  
export interface SkuSelectProps extends IComponent {
  sku: Array<any>
  selectSku: (object: any) => void
}

interface SkuInfo {
  name: string;
  id: number;
  active: boolean;
  disable: boolean;
  [props: string]: any;
}
  
export const SkuSelect: FunctionComponent<
  Partial<SkuSelectProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    sku = [],
    selectSku
  } = {
    ...props,
  }

  const [skuInfo, setSkuInfo] = useState<SkuInfo[]>([])

  useEffect(() => {
    if (sku.length > 0) {
      setSkuInfo([].slice.call(sku))
    }
  }, [])

  useEffect(() => {
    if (sku.length > 0) {
      setSkuInfo([].slice.call(sku))
    }
  }, [sku])

  const changeSaleChild = (attrItem: SkuInfo, index: number, parentItem: SkuInfo, parentIndex: number) => {
    if (attrItem.checkFlag || attrItem.disable) {
      return;
    }

    selectSku && selectSku({
      sku: attrItem,
      skuIndex: index,
      parentSku: parentItem,
      parentIndex: parentIndex
    })
  }

  return (
      <div className='nut-sku-select'>
        {
          skuInfo.map((item, index) => {
            return <div className='nut-sku-select-item' key={item.id}>
              <div className='nut-sku-select-item-title'>{item.name}</div>
              <div className='nut-sku-select-item-skus'>
                {
                  item.list.map((itemAttr: SkuInfo, itemAttrIndex: number) => {
                    return <div 
                      className={classNames(['nut-sku-select-item-skus-sku', { active: !itemAttr.disable && itemAttr.active }, { disable: itemAttr.disable }])}
                      key={itemAttr.name}
                      onClick={()=>changeSaleChild(itemAttr, itemAttrIndex, item, index)}
                    >
                      {itemAttr.name}
                    </div>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
  )
}

SkuSelect.displayName = 'NutSkuSelect'
  