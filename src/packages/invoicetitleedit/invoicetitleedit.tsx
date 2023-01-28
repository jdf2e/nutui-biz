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
  submitText: string
  onSubmit: () => void
  onInput: () => void
}

export const InvoiceTitleEdit: FunctionComponent<
  Partial<InvoiceTitleEditProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    invoiceType = 'electronic',
    bottom,
    submitText = '提交',
    onSubmit,
    onInput,
    ...rest
  } = {
    ...props
  }

  const b = bem('invoice-title-edit')

  const [radioVal] = useState('1')

  const submitFun = () => {

  }

  return (
    <div className={classNames([b(),className])} style={style} {...rest}>
      <Form>
        {invoiceType === 'electronic' && <Item label="抬头类型">
          <RadioGroup value={radioVal} direction="horizontal">
            <Radio shape="button" value="1">个人或事业单位</Radio>
            <Radio shape="button" value="2">企业</Radio>
          </RadioGroup>
        </Item>}
        <Item label="发票抬头" rules={[{ required: true }]}>
          <Input placeholder="请输入发票抬头" onChange={() => onInput && onInput()} />
        </Item>
        <Item label="纳税人识别号">
          <Input placeholder="请输入纳税人识别号" />
        </Item>
        <Item label="注册地址" rules={[{ required: true }]}>
          <Input placeholder="请输入注册地址" />
        </Item>
        <Item label="注册电话" rules={[{ required: true }]}>
          <Input placeholder="请输入注册电话" />
        </Item>
        <Item label="开户行">
          <Input placeholder="请输入开户行" />
        </Item>
        <Item label="银行账户">
          <Input placeholder="请输入银行账户" />
        </Item>
      </Form>
      <div className="nut-invoice-title-edit__submit">
        <Button type="primary" block onClick={submitFun}>{submitText}</Button>
      </div>
      {bottom}
    </div>
  )
}

InvoiceTitleEdit.displayName = 'NutInvoiceTitleEdit'
