import React, {
  FunctionComponent,
  useState,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import {cn2} from '@/utils/bem'

import { IComponent } from '@/utils/typings'
import { Form, Radio, Input, Button, ButtonProps } from '@nutui/nutui-react'

const { RadioGroup } = Radio
const { Item } = Form

export interface InvoiceTitleEditProps extends IComponent {
  invoiceType: string
  bottom: ReactNode
  buttonProps: Partial<Omit<ButtonProps, "type | block">>;
  onSubmit: (arg: any) => void
  onInput: () => void;
}

export const InvoiceTitleEdit: FunctionComponent<
  Partial<InvoiceTitleEditProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    invoiceType = 'special',
    bottom,
    buttonProps,
    onSubmit,
    onInput,
    ...rest
  } = {
    ...props
  }

  const b = cn2('invoice-title-edit')

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
          <Input placeholder="请输入发票抬头" border={false} onChange={() => onInput && onInput()} />
        </Item>
        <Item 
          label="纳税人识别号"
          name="companyCode"
          rules={[{ required: (invoiceType === 'special' || (invoiceType === 'normal' && titleType === '1')), message: "请输入纳税人识别号" }]}
        >
          <Input placeholder="请输入纳税人识别号" border={false} readonly={invoiceType === 'special'} />
        </Item>
        <Item 
          label="注册地址"
          name="address"
          rules={[{ required: invoiceType === 'special', message: "请输入注册地址" }]}
        >
          <Input placeholder="请输入注册地址" border={false} />
        </Item>
        <Item 
          label="注册电话"
          name="companyPhone"  
          rules={[{ required: invoiceType === 'special', message: "请输入注册电话" }]}
        >
          <Input placeholder="请输入注册电话" border={false} />
        </Item>
        <Item 
          label="开户行"
          name="bankDeposit"  
          rules={[{ required: invoiceType === 'special', message: "请输入开户行" }]}
        >
          <Input placeholder="请输入开户行" border={false} />
        </Item>
        <Item 
          label="银行账户"
          name="bankAccount"  
          rules={[{ required: invoiceType === 'special', message: "请输入银行账户" }]}
        >
          <Input placeholder="请输入银行账户" border={false} />
        </Item>
        <Item>
          <div className={b('submit')}>
            <Button type="primary" block {...buttonProps}>{invoiceType === 'special' ? '提交审批' : '提交'}</Button>
          </div>
        </Item>
      </Form>
      {bottom}
    </div>
  )
}

InvoiceTitleEdit.displayName = 'NutInvoiceTitleEdit'
