import React, {
  FunctionComponent,
  CSSProperties,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { Button, Icon } from '@nutui/nutui-react'

import { IComponent } from '@/utils/typings'

export interface Idata {
  isSelected?: boolean
  type: string
  status?: string
  isShowDefault?: boolean
  title: string
  companyCode?: string
  address?: string
  companyPhone?: string
  bankDeposit?: string
  bankAccount?: string
  isDelete?: boolean
  isEdit?: boolean
}

export interface InvoiceTitleListProps extends IComponent {
  data: Idata
  className: string
  style: CSSProperties
  isShowEdit: boolean
  otherOperate: ReactNode
  onClick: (data: any) => void
  onDelete: (data: any) => void
  onEdit: (data: any) => void
}

const defaultProps = {
  isShowEdit: true,
  data: {
    isSelected: false,
    type: 'special',
    status: '-',
    isShowDefault: true,
    title: '-',
    companyCode: '-',
    address: '-',
    companyPhone: '-',
    bankDeposit: '-',
    bankAccount: '-',
    isDelete: true,
    isEdit: true
  }
} as InvoiceTitleListProps

export const InvoiceTitleList: FunctionComponent<
  Partial<InvoiceTitleListProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    isShowEdit,
    data,
    otherOperate,
    onClick,
    onDelete,
    onEdit,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('invoice-title-list')

  const statusMap: {
    [key: string]: string
  } = {
    pass: '通过',
    veto: '否决',
    approval: '审批中'
  }

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      <div className={b('main')} onClick={() => onClick && onClick(data)}>
        {data.isSelected && <i className="nutui-iconfont nut-icon nut-icon-checked nut-checkbox__icon" style={{fontSize: '18px', width: '18px',height: '18px'}}></i>}
        <div style={{marginLeft: data.isSelected ? '17px' : 0}}>
          <div className={b('main-title')}>
            {data.isShowDefault && <div className={b('main-default')}>默认</div>}
            <div className={b('main-text')}>{data.title}</div>
            {data.type === 'special' && <div className={classNames(b('main-status'), {pass: data.status === 'pass'}, {veto: data.status === 'veto'}, {approval: data.status === 'approval'})}>{statusMap[data.status || 'pass']}</div>}
            {data.type === 'normal' && data.isEdit && isShowEdit && <Icon name="edit" onClick={e => {
              e.stopPropagation()
              onEdit && onEdit(data)
            }} />}
          </div>
          <ul>
            <li className={b('info')}>
              <div className={b('info-title')}>纳税人识别号</div>
              <div className={b('info-content')}>{data.companyCode}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>注册地址</div>
              <div className={b('info-content')}>{data.address}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>公司电话</div>
              <div className={b('info-content')}>{data.companyPhone}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>开户行</div>
              <div className={b('info-content')}>{data.bankDeposit}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>银行账户</div>
              <div className={b('info-content')}>{data.bankAccount}</div>
            </li>
          </ul>
        </div>
      </div>
      {(otherOperate || data.isDelete || data.isEdit) && <div className={b('buttons')}>
        {otherOperate}
        {data.isDelete && <Button className={b('buttons-delete')} onClick={() => onDelete && onDelete(data)}>删除</Button>}
        {data.isEdit && <Button className={b('buttons-edit')} onClick={() => onEdit && onEdit(data)}>编辑</Button>}
      </div>}
    </div>
  )
}

InvoiceTitleList.defaultProps = defaultProps
InvoiceTitleList.displayName = 'NutInvoiceTitleList'
