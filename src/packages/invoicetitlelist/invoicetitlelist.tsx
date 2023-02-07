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

export interface InvoiceTitleListProps extends IComponent {
  className: string
  style: CSSProperties
  isShowOperate: boolean
  isShowEdit: boolean
  data: {
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
  }
  otherOperate: ReactNode
  onClick: () => void
  onDelete: () => void
  onEdit: () => void
}

export const InvoiceTitleList: FunctionComponent<
  Partial<InvoiceTitleListProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    isShowOperate = true,
    isShowEdit = true,
    data = { //todo 设置默认值失效
      isSelected: false,
      type: 'special',
      status: '-',
      isShowDefault: true,
      title: '-',
      companyCode: '-',
      address: '-',
      companyPhone: '-',
      bankDeposit: '-',
      bankAccount: '-'
    },
    otherOperate,
    onClick,
    onDelete,
    onEdit,
    ...rest
  } = {
    ...props,
  }

  const b = bem('invoice-title-list')

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      <div className={b('main')} onClick={() => onClick && onClick()}>
        {data?.isSelected && <i className="nutui-iconfont nut-icon nut-icon-checked nut-checkbox__icon" style={{fontSize: '18px', width: '18px',height: '18px'}}></i>}
        <div style={{marginLeft: data?.isSelected ? '17px' : 0}}>
          <div className={b('main-title')}>
            {data?.isShowDefault && <div className={b('main-default')}>默认</div>}
            <div className={b('main-text')}>{data?.title}</div>
            {data?.type === 'special' && <div className={classNames(b('main-status'), {pass: data?.status === '通过'}, {veto: data?.status === '否决'}, {approval: data?.status === '审批中'})}>{data?.status}</div>}
            {data?.type === 'normal' && isShowEdit && <Icon name="edit" onClick={e => {
              e.stopPropagation()
              onEdit && onEdit()
            }} />}
          </div>
          <ul>
            <li className={b('info')}>
              <div className={b('info-title')}>纳税人识别号</div>
              <div className={b('info-content')}>{data?.companyCode}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>注册地址</div>
              <div className={b('info-content')}>{data?.address}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>公司电话</div>
              <div className={b('info-content')}>{data?.companyPhone}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>开户行</div>
              <div className={b('info-content')}>{data?.bankDeposit}</div>
            </li>
            <li className={b('info')}>
              <div className={b('info-title')}>银行账户</div>
              <div className={b('info-content')}>{data?.bankAccount}</div>
            </li>
          </ul>
        </div>
      </div>
      {isShowOperate && <div className={b('buttons')}>
        {otherOperate}
        <Button className={b('buttons-delete')} onClick={() => onDelete && onDelete()}>删除</Button>
        <Button className={b('buttons-edit')} onClick={() => onEdit && onEdit()}>编辑</Button>
      </div>}
    </div>
  )
}

InvoiceTitleList.displayName = 'NutInvoiceTitleList'
