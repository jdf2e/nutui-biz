import React, {
  FunctionComponent,
  useState,
  ReactNode
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import bem from '@/utils/bem'
import { numericProp } from '@/utils/props'

import { IComponent } from '@/utils/typings'
import { Form, Radio, Input, Button, ButtonProps } from '@nutui/nutui-react'

const { RadioGroup } = Radio
const { Item } = Form

export interface Idata {
  titleType?: string
  title: string
  companyCode: string
  address: string
  companyPhone: string
  bankDeposit: string
  bankAccount: string
}

export type invoiceType = "special" | "normal";

export interface InvoiceTitleEditProps extends IComponent {
  invoiceType: invoiceType
  bottom: ReactNode
  buttonProps: Partial<Omit<ButtonProps, "type | block">>;
  submitButtonText: string
  data: Idata
  onSubmit: (arg: any) => void
  onInput: (value: numericProp, event?: Event) => void;
}

const defaultProps = {
  invoiceType: 'special',
  submitButtonText: '提交审批',
  onSubmit: (arg: any) => {}
} as InvoiceTitleEditProps

export const InvoiceTitleEdit: FunctionComponent<
  Partial<InvoiceTitleEditProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    invoiceType,
    bottom,
    buttonProps,
    submitButtonText,
    data,
    onSubmit,
    onInput,
    ...rest
  } = {
    ...defaultProps,
    ...props
  }

  const b = bem('invoice-title-edit')

  const [titleType, setTitleType] = useState<string>(data?.titleType || 'personal')
  const [title, setTitle] = useState<string>(data?.title)
  const [address, setAddress] = useState<string>(data?.address)
  const [companyPhone, setCompanyPhone] = useState<string>(data?.companyPhone)
  const [bankDeposit, setBankDeposit] = useState<string>(data?.bankDeposit)
  const [bankAccount, setBankAccount] = useState<string>(data?.bankAccount)
  const [companyCode, setCompanyCode] = useState<string>(data?.companyCode)

  const submitFailed = (error: any) => {
    onSubmit(error)
  }

  const submitSucceed = (obj: any) => {
    onSubmit(obj)
  }

  const handleChangeTitle = (val: string) => {
    if(onInput) {
      onInput(val)
    } else {
      setTitle(val)
    }
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
            <Radio shape="button" value='personal'>个人或事业单位</Radio>
            <Radio shape="button" value='enterprise'>企业</Radio>
          </RadioGroup>
        </Item>}
        <Item 
          label="发票抬头"
          name="title"
          rules={[{ required: true, message: "请输入发票抬头" }]}
        >
          <Input 
            placeholder="请输入发票抬头" 
            border={false} 
            onChange={handleChangeTitle}
            defaultValue={title}
          />
        </Item>
        <Item 
          label="纳税人识别号"
          name="companyCode"
          rules={[{ required: invoiceType === 'normal' && titleType === 'enterprise', message: "请输入纳税人识别号" }]}
        >
          <Input 
            placeholder={invoiceType === 'special' ? '' : '请输入纳税人识别号'} 
            border={false} 
            readonly={invoiceType === 'special'} 
            defaultValue={companyCode}
            onChange={(val: string) => setCompanyCode(val)}
          />
        </Item>
        <Item 
          label="注册地址"
          name="address"
          rules={[{ required: invoiceType === 'special', message: "请输入注册地址" }]}
        >
          <Input 
            placeholder="请输入注册地址" 
            border={false} 
            defaultValue={address}
            onChange={(val: string) => setAddress(val)}
          />
        </Item>
        <Item 
          label="注册电话"
          name="companyPhone"  
          rules={[{ required: invoiceType === 'special', message: "请输入注册电话" }]}
        >
          <Input 
            placeholder="请输入注册电话" 
            border={false} 
            defaultValue={companyPhone}
            onChange={(val: string) => setCompanyPhone(val)}
          />
        </Item>
        <Item 
          label="开户行"
          name="bankDeposit"  
          rules={[{ required: invoiceType === 'special', message: "请输入开户行" }]}
        >
          <Input 
            placeholder="请输入开户行" 
            border={false}
            defaultValue={bankDeposit}
            onChange={(val: string) => setBankDeposit(val)}
          />
        </Item>
        <Item 
          label="银行账户"
          name="bankAccount"  
          rules={[{ required: invoiceType === 'special', message: "请输入银行账户" }]}
        >
          <Input 
            placeholder="请输入银行账户" 
            border={false}
            defaultValue={bankAccount}
            onChange={(val: string) => setBankAccount(val)}
          />
        </Item>
        {bottom}
        <Item>
          <div className={b('submit')}>
            <Button type="primary" block {...buttonProps}>{submitButtonText}</Button>
          </div>
        </Item>
      </Form>
    </div>
  )
}

InvoiceTitleEdit.defaultProps = defaultProps
InvoiceTitleEdit.displayName = 'NutInvoiceTitleEdit'
