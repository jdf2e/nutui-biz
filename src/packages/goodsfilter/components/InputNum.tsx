import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react'
import { IComponent } from '@/utils/typings'

export interface InputNumProps extends IComponent {
  value: string | number
  onNumInput: (val: string) => void
}

const defaultProps = {
  value: ''
} as InputNumProps

export const InputNum: FunctionComponent<
  Partial<InputNumProps> & HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { value, onNumInput } = {
    ...defaultProps,
    ...props
  }

  const [inputVal, setInputVal] = useState<string | number>('')

  const handleInput = (e: any) => {
    const value = e.target.value.replace(/\D+/, '')
    var retVal = ''
    if (value === '') {
      e.target.value = ''
      retVal = ''
    } else {
      setInputVal(e.target.value)
      retVal = e.target.value
    }
    onNumInput && onNumInput(retVal)
  };

  useEffect(() => {
    if(value != inputVal){
      setInputVal(value)
    }
  }, [value]);

  return (
    <input
      className="input-num"
      type="number"
      onInput={handleInput}
      value={inputVal}
    />
  )
}

InputNum.defaultProps = defaultProps
InputNum.displayName = "NutInputNum"
