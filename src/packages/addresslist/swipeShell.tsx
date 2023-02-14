import React, {
    FunctionComponent,
    useState
  } from 'react'
  import { useConfig } from '@/packages/configprovider'
  import {Button,Swipe} from '@nutui/nutui-react'
  
  import { IComponent } from '@/utils/typings'
  import {ItemContents} from './itemContents'
  
  export interface SwipeShellProps extends IComponent {
    onDelIcon: (event: Event, item: Object) => void
    onEditIcon: (event: Event, item: Object) => void
    onItemClick: (event: Event, item: Object) => void
    onSwipeDel: (event: Event, item: Object) => void
    item: {
      phone: string
      addressName: string
      defaultAddress: string
      fullAddress: string
    }
  }
  
  export const SwipeShell: FunctionComponent<
    Partial<SwipeShellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
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

    const [moveRef, setMoveRef] = useState<boolean>(false)

    const delClick = (event: Event) => {
        if(item) {
            onDelIcon && onDelIcon(event, item)
        }
      event.stopPropagation();
    }

    const editClick = (event: Event) => {
        if(item) {
            onEditIcon && onEditIcon(event, item)
        }
      event.stopPropagation();
    }

    const itemClick = (event: Event) => {
        if(item) {
            onItemClick && onItemClick(event, item)
        }
      event.stopPropagation();
    }

    const swiperstart = () => {
        setMoveRef(false)
    }

    const swipermove = () => {
        setMoveRef(true)
    }

    const swipeDelClick = (event: Event) => {
        if(item) {
            onSwipeDel && onSwipeDel(event, item)
        }
      event.stopPropagation();
    }
  
    return (
        <Swipe rightAction={<Button shape="square" style={{height: '100%'}} type="danger" onClick={swipeDelClick}>{locale.swipeShell.delete}</Button>}>
          <div className="nut-address-list-swipe">
              <ItemContents
                item={item}
                onDelIcon={delClick}
                onEditIcon={editClick}
                onClickItem={itemClick}
                onTouchMove={swipermove}
                onTouchStart={swiperstart}
              />
          </div>
        </Swipe>
    )
  }
  
  SwipeShell.displayName = 'NutSwipeShell'
  