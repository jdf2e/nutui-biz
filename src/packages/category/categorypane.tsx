import React, {
  useRef,
  CSSProperties,
  useState,
  useImperativeHandle
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames';
import bem from '@/utils/bem'
import { IComponent } from '@/utils/typings'
import { throttle } from "@/utils/throttle";
import { Image } from '@nutui/nutui-react';


interface CategoryPane {
  catId: string | number,
  catName: string,
  children?: Array<CategoryPaneItem>,
  [props: string]: any
}

interface CategoryPaneItem {
  backImg?: string,
  catId: string,
  catName: string,
  showPic?: boolean,
  [props: string]: any
}
export interface CategoryPaneProps extends IComponent {
  className?: string,
  style?: CSSProperties,
  showSkuImg: boolean,
  categoryChild: CategoryPane[],
  showSecondLevelQuickNav: boolean,
  isLazy:boolean,
  loadingImg:string,
  errorImg:string,
  onPanelNavClick:(index:number)=>void,
  onPanelThirdClick: (sku:CategoryPaneItem)=>void
}

const defaultProps = {
  categoryChild: [],
  showSkuImg: true,
  showSecondLevelQuickNav: false,
  isLazy:true,
  loadingImg:'https://img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  errorImg:'https://img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png',
  onPanelNavClick:()=>{},
  onPanelThirdClick: ()=>{}
} as CategoryPaneProps

export const CategoryPane = React.forwardRef<unknown, Partial<CategoryPaneProps>>((props,ref) => {
  const { locale } = useConfig()
  const {
    categoryChild,
    showSkuImg,
    showSecondLevelQuickNav,
    isLazy,
    loadingImg,
    errorImg,
    onPanelNavClick,
    onPanelThirdClick
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('category-pane')

  const bodyRef = useRef(null);
  const quickRef = useRef(null);
  const [paneIndex, setPaneIndex] = useState(0)
  const [forbidden, setForbidden] = useState(false)

  const changePane = (tab: number) => {
    if (tab != paneIndex) {
      setPaneIndex(tab)
      setForbidden(true)
      quickNavScroll(tab)
      bodyScroll(tab)
    }

    onPanelNavClick && onPanelNavClick(tab)
  }

  const checkActiveIndex = throttle(() => {

    if (forbidden) return
    const body: any = bodyRef.current
    if (!body) return
    const scrollTop = body.scrollTop

    const elements = body.getElementsByClassName('nut-category-pane__child-anchor')

    for (let i = 0; i < elements.length; i++) {
      const panel = elements.item(i) as HTMLElement

      if (!panel) continue
      const panelIndex = Number(panel.dataset['index'])
        
      if (panel.offsetTop + panel.clientHeight - 80 > scrollTop) {
        setPaneIndex(panelIndex)
        quickNavScroll(panelIndex)
        return
      }
      
    }
  }, 50)

  const bodyScroll = (index:number) => {
    const body: any = bodyRef.current
    if (!body) return

    const elements = body.getElementsByClassName('nut-category-pane__child-anchor')

    const idx = index || paneIndex
    const panel = elements.item(idx) as HTMLElement

    body.scrollTo({
      top: index == 0 ? 0 : Math.max(panel.offsetTop - 80, 0),
      behavior: 'auto'
    })

    setTimeout(() => {
      setForbidden(false)
    })

  }

  // 快捷导航滚动
  const quickNavScroll = (index:number) => {

    const quick: any = quickRef.current
    if (!quick) return

    const currentScroll = quick.scrollLeft

    const idx = index > -1 ? index : paneIndex
    if (currentScroll == 0 && idx > 1 || currentScroll != 0) {
    
      const nextScrollLeft = (idx - 1) * 96

      quick.scrollTo({
        left: nextScrollLeft,
        behavior: 'auto'
      })

    }

  }

  const panelSkuClick = (sku:CategoryPaneItem)=>{
    onPanelThirdClick && onPanelThirdClick(sku)
  }
  useImperativeHandle(ref, () => ({
    reset: () => {
      changePane(0)
    }
  }));

  return (
    <div className={classNames(b())}>

      {showSecondLevelQuickNav && (
        <div className={classNames(b('quick'))}>
          <div className={classNames(b('quick-box'))} ref={quickRef}>
            {
              categoryChild.map((child, index) => (
                <div key={index} onClick={() => changePane(index)} className={classNames([b('quick-child'), index == paneIndex && b('quick-child-active')])}>{child.catName}</div>
              ))
            }
          </div>
        </div>
      )}

      <div className={classNames(b('cate-list-right'))} ref={bodyRef} onScroll={checkActiveIndex}>
        {
          categoryChild.map((child, index) => (
            <div key={index} className={classNames(b('child-anchor'))} data-index={index}>
              <div className={classNames(b('child-title'))} >{child.catName}</div>

              <div className={classNames(b('child-item-list'))}>
                {
                  child.children?.map((sku, idx) => (
                    <div className={classNames([b('child-item'),!showSkuImg && b('child-item-no')])} key={idx} onClick={()=>panelSkuClick(sku)}>

                      {
                        showSkuImg && (<Image className={classNames(b('child-img'))} src={sku.backImg}  isLazy={isLazy} loadingImg={loadingImg}  errorImg={errorImg} />)
                      }
                      <div className={classNames(b(showSkuImg ? 'sku-img' : 'sku-name'))}>{sku?.catName}</div>
                    </div>
                  ))
                }
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
})

