import React, {
  FunctionComponent,
  useState
} from 'react'
import { useConfig } from '@/packages/configprovider'

import { IComponent } from '@/utils/typings'
import { ItemContents } from './itemContents'
import bem from '@/utils/bem'
import { IDataInfo, functionType } from './addresslist'

export interface GeneralShellProps extends IComponent {
  item: IDataInfo
  longPress: boolean
  onLongCopy?: functionType
  onLongSet?: functionType
  onLongDel?: functionType
  onDelIcon?: functionType
  onEditIcon?: functionType
  onItemClick?: functionType
  onLongDown?: functionType
}

const defaultProps = {
  longPress: false
} as GeneralShellProps

export const LongPressShell: FunctionComponent<
  Partial<GeneralShellProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    item,
    longPress,
    onLongCopy,
    onLongSet,
    onLongDel,
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
      onLongCopy?.(event, item)
    }
    event.stopPropagation();
  }

  const setDefault = (event: any) => {
    if(item) {
      onLongSet?.(event, item)
    }
    event.stopPropagation();
  }

  const delClick = (event: any) => {
    if(item) {
      onLongDel?.(event, item)
    }
    event.stopPropagation();
  }

  const hideMaskClick = () => {
    setShowMaskRef(false)
  }

  const delShellClick = (event: any) => {
    if(item) {
      onDelIcon?.(event, item)
    }
    event.stopPropagation();
  }

  const editShellClick = (event: any) => {
    if(item) {
      onEditIcon?.(event, item)
    }
    event.stopPropagation();
  }

  const itemShellClick = (event: any) => {
    if(item) {
      onItemClick?.(event, item)
    }
    event.stopPropagation();
  }

  const holdingFunc = (event: Event) => {
    loop = 0;
    setShowMaskRef(true)
    if(item) {
      onLongDown?.(event, item)
    }
  }

  // 长按功能实现
  const holddownstart = (event: Event) => {
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
        // @ts-ignore
        onTouchStart={holddownstart}
        onTouchEnd={holddownend}
        onTouchMove={holddownmove}
      />
      {longPress && showMaskRef && <div className={b('general-mask')} onClick={maskClick}>
        <div className={b('general-mask-copy')} onClick={copyClick}>
          <div className={b('mask-contain')}> {locale.generalShell.copyAddress} </div>
        </div>
        {!item.defaultAddress && <div className={b('general-mask-set')} onClick={setDefault}>
          <div className={b('mask-contain')}> {locale.generalShell.setDefault} </div>
        </div>}
        <div className={b('general-mask-del')} onClick={delClick}>
          <div className={b('mask-contain')}> {locale.generalShell.deleteAddress} </div>
        </div>
      </div>}
      
      {showMaskRef && <div className={b('mask-bottom')} onClick={hideMaskClick}></div>}
    </div>
  )
}

LongPressShell.defaultProps = defaultProps
LongPressShell.displayName = 'NutGeneralShell'