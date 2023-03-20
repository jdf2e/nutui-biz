import React, {
  FunctionComponent,
  useState
} from 'react'
import { useConfig } from '@/packages/configprovider'
import { Button, Swipe } from '@nutui/nutui-react'
import { IComponent } from '@/utils/typings'
import { ItemContents } from './itemContents'
import bem from '@/utils/bem'
import { IDataInfo, functionType } from './addresslist'

export interface SwipeShellProps extends IComponent {
  item: IDataInfo
  onDelIcon?: functionType
  onEditIcon?: functionType
  onItemClick?: functionType
  onSwipeDel?: functionType
}

export const SwipeShell: FunctionComponent<
  Partial<SwipeShellProps>
> = (props) => {
  const { locale } = useConfig()
  const {
    item,
    onDelIcon,
    onEditIcon,
    onItemClick,
    onSwipeDel,
    ...rest
  } = {
    ...props,
  }

  const b = bem('address-list')

  const [moveRef, setMoveRef] = useState<boolean>(false)

  const stop = (event: Event) => {
    event.stopPropagation();
  }

  const delClick = (event: Event) => {
    if(item) {
      onDelIcon?.(event, item)
    }
    stop(event);
  }

  const editClick = (event: Event) => {
    if(item) {
      onEditIcon?.(event, item)
    }
    stop(event);
  }

  const itemClick = (event: Event) => {
    if(moveRef) return;
    
    if(item) {
      onItemClick?.(event, item)
    }
    stop(event);
  }

  const swiper = (isMove: boolean) => {
    setMoveRef(isMove)
  }

  const swipeDelClick = (event: Event) => {
    if(item) {
      onSwipeDel?.(event, item)
    }
    event.stopPropagation();
  }

  return (
    <Swipe rightAction={<Button shape="square" style={{height: '100%'}} type="danger" onClick={swipeDelClick}>{locale.swipeShell.delete}</Button>}>
      <div className={b('swipe')}>
        <ItemContents
          item={item}
          onDelIcon={delClick}
          onEditIcon={editClick}
          onClickItem={itemClick}
          onTouchMove={() => swiper(true)}
          onTouchStart={() => swiper(false)}
        />
      </div>
    </Swipe>
  )
}

SwipeShell.displayName = 'NutSwipeShell'
  