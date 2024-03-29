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
import { Icon, Checkbox } from '@nutui/nutui-react';
import bem from '@/utils/bem'
import {getRect} from '@/utils/useClientRect'
import { numericProp } from '@/utils/props'

import { IComponent } from '@/utils/typings'

export interface SettleBarProps extends IComponent {
  total: numericProp
  totalText: string
  totalAlign: string
  settleButtonText: string
  disabled: boolean
  loading: boolean
  safeAreaInsetBottom: boolean
  placeholder: boolean
  settleCount: ReactNode
  showZero: boolean
  noCount: boolean
  customWarning: ReactNode
  customTotal: ReactNode
  customSelectAll: ReactNode
  customTotalPrice: ReactNode
  customTotalExtra: ReactNode
  customButton: ReactNode
  isCheckedAll: boolean
  onClickButton: () => void
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
    customWarning,
    safeAreaInsetBottom = true,
    placeholder = false,
    showZero = true,
    noCount = false,
    customTotal,
    customSelectAll,
    customTotalPrice,
    customButton,
    customTotalExtra = '',
    isCheckedAll = false,
    onClickButton = () => {},
    onSelectAll = (checked: boolean) => {},
    ...rest
  } = {
    ...props,
  }

  const handleSettle = () => {
    !disabled && !loading && onClickButton()
  }

  let totalStyle = {
    alignItems: totalAlign === 'left' ? 'flex-start' : 'flex-end',
    textAlign: totalAlign
  } as CSSProperties

  const handleSelectAll = (checked: boolean) => {
    onSelectAll(checked)
  }

  const b = bem('settle-bar')

  const [height,setHeight] = useState(0)

  useEffect(() => {
    if(root.current) {
      setHeight(getRect(root.current).height)
    }
  }, ['height'])

  const renderCountAndUnit = () => {
    if(showZero || settleCount !== 0) {
      return <span className={b('main-num')}>({settleCount})</span>
    }
  }

  const renderButton = () => {
    return customButton || <div 
      className={classNames(`${b('main-buy')} ${(disabled || loading) ? 'disabled' : ''}`)}
      onClick={handleSettle}
    >
      {loading && <Icon name='loading' />}{settleButtonText}{!noCount && renderCountAndUnit()}
    </div>
  }

  const renderSelectAll = () => {
    if(!customSelectAll && customSelectAll !== undefined) return null;

    return <div className={b('main-select-all')}>{customSelectAll ? customSelectAll : <Checkbox checked={isCheckedAll} label={locale.settleBar.selectAll} onChange={handleSelectAll} />}</div>
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
                customTotalPrice ? customTotalPrice : <div className={b('main-total-inner')}>
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
