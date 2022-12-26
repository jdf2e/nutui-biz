import React, {
    FunctionComponent,
    useState
  } from 'react'
  import { useConfig } from '@/packages/configprovider'
  
  import { IComponent } from '@/utils/typings'
  import {ItemContents} from './itemContents'
  
  export interface GeneralShellProps extends IComponent {
    item: Object
    longPress: boolean
    onLongCopy: (event: Event, item: Object) => {}
    onLongSet: (event: Event, item: Object) => {}
    onLongDel: (event: Event, item: Object) => {}
    onSwipeDel: (event: Event, item: Object) => {}
    onDelIcon: (event: Event, item: Object) => {}
    onEditIcon: (event: Event, item: Object) => {}
    onItemClick: (event: Event, item: Object) => {}
    onLongDown: (event: Event, item: Object) => {}
  }
  
  export const GeneralShell: FunctionComponent<
    Partial<GeneralShellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
  > = (props) => {
    const { locale } = useConfig()
    const {
        item,
        longPress = false,
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
      ...props,
    }

    let loop: any = null;

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
        <div {...rest} className="nut-address-list-general">
            <ItemContents
              item={item}
              onDelIcon={delShellClick}
              onEditIcon={editShellClick}
              onClickItem={itemShellClick}
              onTouchStart={holddownstart}
              onTouchEnd={holddownend}
              onTouchMove={holddownmove}
            />
            {longPress && showMaskRef && <div className="nut-address-list-general__mask" v-if="" onClick={maskClick}>
                <slot name="longpressAll">
                    <div className="nut-address-list-general__mask-copy" onClick={copyClick}>
                        <div className="nut-address-list-mask-contain"> 复制<br />地址 </div>
                    </div>
                    <div className="nut-address-list-general__mask-set" onClick={setDefault}>
                        <div className="nut-address-list-mask-contain"> 设置<br />默认 </div>
                    </div>
                    <div className="nut-address-list-general__mask-del" onClick={delClick}>
                        <div className="nut-address-list-mask-contain"> 删除<br />地址 </div>
                    </div>
                </slot>
            </div>}
            
            {showMaskRef && <div className="nut-address-list__mask-bottom" onClick={hideMaskClick}></div>}
        </div>
    )
  }
  
  GeneralShell.displayName = 'NutGeneralShell'
  