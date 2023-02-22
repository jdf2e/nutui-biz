import React, {
  FunctionComponent,
  useState,
  useEffect
} from 'react'
import { useConfig } from '@/packages/configprovider'
import {InputNumber} from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export interface SkuStepperProps extends IComponent {
  stepperMax: string | number
  stepperMin: string | number
  stepperExtraText: Function | boolean
  stepperTitle: string
  goods: {
    price: number
    imagePath: string
    skuId: string
  }
  onAdd: (value: number) => void
  onReduce: (value: number) => void
  onChangeStepper: (value: number) => void
  onOverLimit: () => void
}

export const SkuStepper: FunctionComponent<
  Partial<SkuStepperProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    stepperMax = 99999,
    stepperMin = 1,
    stepperExtraText,
    stepperTitle = '购买数量',
    onAdd,
    onReduce,
    onOverLimit,
    onChangeStepper
  } = {
    ...props,
  }

  const [goodsCount, setGoodsCount] = useState(stepperMin)

  useEffect(() => {
    setGoodsCount(stepperMin)
  }, [])

  const handleAdd = (value: any) => {
    console.log('value', value);
    
    onAdd && onAdd(value)
  }

  const handleReduce = (value: any) => {
    onReduce && onReduce(value)
  }

  const handleOverLimit = () => {
    onOverLimit && onOverLimit()
  }

  const handleChangeFuc = (value: any) => {
    setGoodsCount(value)
    onChangeStepper && onChangeStepper(value)
  }

  const getExtraText = () => {
    if (stepperExtraText && (typeof stepperExtraText == 'function')) {
      return stepperExtraText();
    } else {
      return '';
    }
  };

  return (
      <div className='nut-sku-stepper'>
          <div className='nut-sku-stepper-title'>{stepperTitle}</div>
          <div className='nut-sku-stepper-limit'>{getExtraText()}</div>
          <div className='nut-sku-stepper-count'>
            <InputNumber
              modelValue={1}
              min={stepperMin}
              max={stepperMax}
              onAdd={handleAdd}
              onReduce={handleReduce}
              onOverlimit={handleOverLimit}
              onChangeFuc={handleChangeFuc}
            />
          </div>
      </div>
  )
}

SkuStepper.displayName = 'NutSkuStepper'
