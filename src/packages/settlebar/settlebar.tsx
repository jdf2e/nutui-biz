import React, {
  FunctionComponent,
  CSSProperties,
  ReactElement
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames';
import { Icon, Checkbox } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';
import bem from '@/utils/bem'

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
  settleCount: number | string
  settleUnit: string
  customWarning: ReactElement
  customTotal: ReactElement
  customTotalExtra: ReactElement
  customSelectAll: ReactElement
  customTotalPrice: ReactElement
  isEdit: boolean
  onSettle: () => void
  onDelete: () => void
  onSelectAll: () => void
}

const defaultProps = {
  total: 0,
  totalText: '合计',
  totalAlign: 'right',
  settleButtonText: '去结算',
  disabled: false,
  loading: false,
  settleCount: 0,
  settleUnit: '件',
  isEdit: false,
  onSettle: () => {},
  onDelete: () => {},
  onSelectAll: () => {}
} as SettleBarProps

export const SettleBar: FunctionComponent<
  Partial<SettleBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    total,
    totalText,
    totalAlign,
    settleButtonText,
    disabled,
    loading,
    className,
    style,
    settleCount,
    settleUnit,
    customWarning,
    isEdit,
    customTotal,
    customTotalExtra,
    customSelectAll,
    customTotalPrice,
    onSettle,
    onDelete,
    onSelectAll,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const handleSettle = () => {
    !disabled && onSettle && onSettle()
  }

  let totalStyle = {
    alignItems: totalAlign === 'left' ? 'flex-start' : 'flex-end'
  }

  const handleDelete = () => {
    onDelete && onDelete()
  }

  const handleSelectAll = () => {
    onSelectAll && onSelectAll()
  }

  const b = bem('settle-bar')

  return (
    <div className={`${b()} ${className || ''}`} style={style} {...rest}>
      {
        customWarning && 
        <div className='nut-settle-bar-warning'>
          <div className='nut-settle-bar-warning-mask'></div>
          <div className='nut-settle-bar-warning-content'>{customWarning}</div>
        </div>
      }
      <div className='nut-settle-bar-main'>
        <div>{customSelectAll ? customSelectAll : <Checkbox label="全选" onChange={handleSelectAll} checked={false} />}</div>
        {
          isEdit ? <div>
            <div className="btn" onClick={handleDelete}>删除</div>
          </div> : <>
            <div className='total' style={totalStyle}>
              {
                customTotal ? customTotal : <>
                  {
                    customTotalPrice ? customTotalPrice : <div className="total-main">
                      <span>{totalText}：</span>
                      <span>¥{total}</span>
                    </div>
                  }
                  {
                    customTotalExtra ? customTotalExtra : <span className="total-tip">已优惠¥100.00</span>
                  }
                </>
              }
            </div>
            <div 
              className={classNames(`buy ${(disabled || loading) ? 'disabled' : ''}`)}
              onClick={handleSettle}
            >
              {
                loading ? <Icon name="loading" /> :  <>{settleButtonText}<span className="num">({settleCount}{settleUnit})</span></>
              }
            </div>
          </>
        }
      </div>
    </div>
  )
}

SettleBar.defaultProps = defaultProps
SettleBar.displayName = 'NutSettleBar'
