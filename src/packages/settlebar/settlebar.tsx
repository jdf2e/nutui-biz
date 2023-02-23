import React, {
  FunctionComponent,
  CSSProperties,
  useRef,
  useState,
  useEffect,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames';
import { Icon, Checkbox, IconProps, CheckboxProps } from '@nutui/nutui-react';
import {cn2} from '@/utils/bem'
import {getRect} from '@/utils/useClientRect'

import { IComponent } from '@/utils/typings'

export interface SettleBarProps extends IComponent {
  total: number
  totalText: string
  totalAlign: string
  settleButtonText: string
  disabled: boolean
  loading: boolean
  className: string
  style: CSSProperties
  safeAreaInsetBottom: boolean
  placeholder: boolean
  settleCount: number | string
  settleUnit: string
  showZero: boolean
  noCount: boolean
  customWarning: ReactNode
  customTotal: ReactNode
  customSelectAll: ReactNode
  customTotalPrice: ReactNode
  customTotalExtra: ReactNode
  customButton: ReactNode
  iconProps: Partial<IconProps>
  checkboxProps: CheckboxProps
  onSettle: () => void
  onSelectAll: (checked: boolean) => void
}

export const SettleBar: FunctionComponent<
  Partial<SettleBarProps>
> = (props) => {
  const { locale } = useConfig()
  const root = useRef(null)
  const {
    total = 0,
    totalText = locale.settleBar.totalText,
    totalAlign = 'right',
    settleButtonText = locale.settleBar.settleButtonText,
    disabled = false,
    loading = false,
    className,
    style,
    settleCount = 0,
    settleUnit = '',
    customWarning,
    safeAreaInsetBottom = true,
    placeholder = false,
    showZero = true,
    noCount = false,
    customTotal,
    customSelectAll,
    customTotalPrice,
    customButton,
    iconProps,
    checkboxProps,
    customTotalExtra = '',
    onSettle = () => {},
    onSelectAll = (checked: boolean) => {},
    ...rest
  } = {
    ...props,
  }

  const handleSettle = () => {
    !disabled && !loading && onSettle && onSettle()
  }

  let totalStyle = {
    alignItems: totalAlign === 'left' ? 'flex-start' : 'flex-end',
    textAlign: totalAlign
  } as CSSProperties

  const handleSelectAll = (checked: boolean) => {
    onSelectAll && onSelectAll(checked)
  }

  const b = cn2('settle-bar')

  const [height,setHeight] = useState(0)

  useEffect(() => {
    if(root.current) {
      setHeight(getRect(root.current).height)
    }
  }, ['height'])

  const renderCountAndUnit = () => {
    if(showZero || settleCount !== 0) {
      return <span className={b('main-num')}>({settleCount}{settleUnit})</span>
    }
  }

  const renderButton = () => {
    return customButton || <div 
      className={classNames(`${b('main-buy')} ${(disabled || loading) ? 'disabled' : ''}`)}
      onClick={handleSettle}
    >
      {
        loading ? <Icon name='loading' {...iconProps} /> :  <>{settleButtonText}{!noCount && renderCountAndUnit()}</>
      }
    </div>
  }

  const renderSelectAll = () => {
    if(!customSelectAll && customSelectAll !== undefined) return null;

    return <div className={b('main-select-all')}>{customSelectAll ? customSelectAll : <Checkbox label={locale.settleBar.selectAll} onChange={handleSelectAll} {...checkboxProps} />}</div>
  }

  const renderSettleBar = () => {
    return <div ref={root} className={classNames([b(),className,{'nut-biz-safe-area-bottom':safeAreaInsetBottom}])} style={style} {...rest}>
      {
        customWarning && 
        <div className={b('warning')}>
          <div className={b('warning-mask')}></div>
          <div className={b('warning-content')}>{customWarning}</div>
        </div>
      }
      <div className={b('main')}>
        {renderSelectAll()}
        <div className={b('main-total')} style={totalStyle}>
          {
            customTotal ? customTotal : <>
              {
                customTotalPrice ? customTotalPrice : <div>
                  <span>{totalText}：</span>
                  <span>¥{total}</span>
                </div>
              }
              {customTotalExtra}
            </>
          }
        </div>
        {renderButton()}
      </div>
    </div>
  }

  const renderSettleBarWithPlaceholder = () => {
    return <div style={{height}} className={`${b('')}--placeholder`}>
      {renderSettleBar()}
    </div>
  }

  return (
    placeholder ? renderSettleBarWithPlaceholder() : renderSettleBar()
  )
}

SettleBar.displayName = 'NutSettleBar'
