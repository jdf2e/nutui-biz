import React, {
  FunctionComponent,
  useState
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'
import {ItemContents} from './itemContents'
import bem from '@/utils/bem'

export interface GeneralShellProps extends IComponent {
  item: {
    phone: string
    addressName: string
    defaultAddress: string
    fullAddress: string
  }
  longPress: boolean
  onLongCopy: (event: Event, item: Object) => void
  onLongSet: (event: Event, item: Object) => void
  onLongDel: (event: Event, item: Object) => void
  onSwipeDel: (event: Event, item: Object) => void
  onDelIcon: (event: Event, item: Object) => void
  onEditIcon: (event: Event, item: Object) => void
  onItemClick: (event: Event, item: Object) => void
  onLongDown: (event: Event, item: Object) => void
}

const defaultProps = {
  longPress: false
} as GeneralShellProps

export const GeneralShell: FunctionComponent<
  Partial<GeneralShellProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    item,
    longPress,
    onLongCopy,
    onLongSet,
    onLongDel,
    onSwipeDel,
    onDelIcon,
    onEditIcon,
    onItemClick,
    onLongDown,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('address-list')

  let loop: number = 0;

  const [showMaskRef, setShowMaskRef] = useState<boolean>(false)

  const maskClick = (event: any) => {
    if (loop != 0) {
      // 排除长按时触发点击的情况
      setShowMaskRef(false)
    }
    event.stopPropagation();
    event.preventDefault();
  };

  const copyClick = (event: any) => {
    if(item){
      onLongCopy && onLongCopy(event, item)
    }
    event.stopPropagation();
  }

  const setDefault = (event: any) => {
    if(item) {
      onLongSet && onLongSet(event, item)
    }
    event.stopPropagation();
  }

  const delClick = (event: any) => {
    if(item) {
      onLongDel && onLongDel(event, item)
    }
    event.stopPropagation();
  }

  const hideMaskClick = () => {
    setShowMaskRef(false)
  }

  const delShellClick = (event: any) => {
    if(item) {
      onDelIcon && onDelIcon(event, item)
    }
    event.stopPropagation();
  }

  const editShellClick = (event: any) => {
    if(item) {
      onEditIcon && onEditIcon(event, item)
    }
    event.stopPropagation();
  }

  const itemShellClick = (event: any) => {
    if(item) {
      onItemClick && onItemClick(event, item)
    }
    event.stopPropagation();
  }

  const holdingFunc = (event: Event) => {
    loop = 0;
    setShowMaskRef(true)
    if(item) {
      onLongDown && onLongDown(event, item)
    }
  }

  // 长按功能实现
  const holddownstart = (event: any) => {
    loop = setTimeout(() => {
      holdingFunc(event);
    }, 300);
  }

  const holddownmove = () => {
    // 滑动不触发长按
    clearTimeout(loop);
  }
  
  const holddownend = () => {
    // 删除定时器，防止重复注册
    clearTimeout(loop);
  }

  return (
    <div {...rest} className={b('general')}>
      <ItemContents
        item={item}
        onDelIcon={delShellClick}
        onEditIcon={editShellClick}
        onClickItem={itemShellClick}
        // onTouchStart={holddownstart}
        // onTouchEnd={holddownend}
        // onTouchMove={holddownmove}
      />
      {longPress && showMaskRef && <div className={b('general-mask')} v-if="" onClick={maskClick}>
        <slot name="longpressAll">
          <div className={b('general-mask-copy')} onClick={copyClick}>
            <div className={b('mask-contain')}> {locale.generalShell.copy}<br />{locale.generalShell.address} </div>
          </div>
          <div className={b('general-mask-set')} onClick={setDefault}>
            <div className={b('mask-contain')}> {locale.generalShell.set}<br />{locale.generalShell.default} </div>
          </div>
          <div className={b('general-mask-del')} onClick={delClick}>
            <div className={b('mask-contain')}> {locale.generalShell.delete}<br />{locale.generalShell.address} </div>
          </div>
        </slot>
      </div>}
      
      {showMaskRef && <div className={b('mask-bottom')} onClick={hideMaskClick}></div>}
    </div>
  )
}

GeneralShell.defaultProps = defaultProps
GeneralShell.displayName = 'NutGeneralShell'