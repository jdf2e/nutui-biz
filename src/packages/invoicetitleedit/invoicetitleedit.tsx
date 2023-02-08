import React, {
  FunctionComponent,
  CSSProperties,
  useState,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { IComponent } from '@/utils/typings'
import { Form, Radio, Input, Button } from '@nutui/nutui-react'

const { RadioGroup } = Radio
const { Item } = Form

export interface InvoiceTitleEditProps extends IComponent {
  className: string
  style: CSSProperties
  invoiceType: string
  bottom: ReactNode
  onSubmit: (arg: any) => void
  onInput: () => void
}

export const InvoiceTitleEdit: FunctionComponent<
  Partial<InvoiceTitleEditProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    invoiceType = 'special',
    bottom,
    onSubmit,
    onInput,
    ...rest
  } = {
    ...props
  }

  const b = bem('invoice-title-edit')

  const [titleType, setTitleType] = useState<string>('1')

  const submitFailed = (error: any) => {
    onSubmit && onSubmit(error)
  }

  const submitSucceed = (obj: any) => {
    onSubmit && onSubmit(obj)
  }

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      <Form 
        onFinish={obj => submitSucceed(obj)} 
        onFinishFailed={error => submitFailed(error)}
      >
        {invoiceType === 'normal' && <Item 
          label="抬头类型"
          name="titleType"
        >
          <RadioGroup value={titleType} direction="horizontal" onChange={v => setTitleType(v as string)}>
            <Radio shape="button" value='1'>个人或事业单位</Radio>
            <Radio shape="button" value='2'>企业</Radio>
          </RadioGroup>
        </Item>}
        <Item 
          label="发票抬头"
          name="title"
          rules={[{ required: true, message: "请输入发票抬头" }]}
        >
          <Input placeholder="请输入发票抬头" onChange={() => onInput && onInput()} />
        </Item>
        <Item 
          label="纳税人识别号"
          name="companyCode"
          rules={[{ required: (invoiceType === 'special' || (invoiceType === 'normal' && titleType === '1')), message: "请输入纳税人识别号" }]}
        >
          <Input placeholder="请输入纳税人识别号" readonly={invoiceType === 'special'} />
        </Item>
        <Item 
          label="注册地址"
          name="address"
          rules={[{ required: invoiceType === 'special', message: "请输入注册地址" }]}
        >
          <Input placeholder="请输入注册地址" />
        </Item>
        <Item 
          label="注册电话"
          name="companyPhone"  
          rules={[{ required: invoiceType === 'special', message: "请输入注册电话" }]}
        >
          <Input placeholder="请输入注册电话" />
        </Item>
        <Item 
          label="开户行"
          name="bankDeposit"  
          rules={[{ required: invoiceType === 'special', message: "请输入开户行" }]}
        >
          <Input placeholder="请输入开户行" />
        </Item>
        <Item 
          label="银行账户"
          name="bankAccount"  
          rules={[{ required: invoiceType === 'special', message: "请输入银行账户" }]}
        >
          <Input placeholder="请输入银行账户" />
        </Item>
        <Item>
          <div className="nut-invoice-title-edit__submit">
            <Button type="primary" block>{invoiceType === 'special' ? '提交审批' : '提交'}</Button>
          </div>
        </Item>
      </Form>
      {bottom}
    </div>
  )
}

InvoiceTitleEdit.displayName = 'NutInvoiceTitleEdit'
