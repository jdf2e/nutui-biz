import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
  ElementRef,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import { IComponent } from '@/utils/typings'
import {CategoryPane} from './categorypane'
import {cn2} from '@/utils/bem'
import { errorImg } from '@/utils'
import {Category as BaseCategory , CategoryPaneItem, CategoryPaneHandler } from './props';


export interface CategoryProps extends IComponent {
  className?: string,
  style?: CSSProperties,
  showSkuImg: boolean,
  category: BaseCategory[],
  showSecondLevelQuickNav:boolean,
  isLeftAutoSlide:boolean,
  isLazy:boolean,
  loadingImg:string,
  errorImg:string,
  onChange: (index:BaseCategory) => void,
  onPanelNavClick:(index:number)=>void,
  onPanelThirdClick: (sku:CategoryPaneItem)=>void
}

const defaultProps = {
  category: [],
  showSkuImg:true,
  showSecondLevelQuickNav:false,
  isLeftAutoSlide:true,
  isLazy:true,
  loadingImg: errorImg,
  errorImg,
  onChange: () => {},
  onPanelNavClick:()=>{},
  onPanelThirdClick: ()=>{}
} as CategoryProps

export const Category: FunctionComponent<
  Partial<CategoryProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    category,
    showSkuImg,
    showSecondLevelQuickNav,
    isLeftAutoSlide,
    isLazy,
    loadingImg,
    errorImg,
    onChange,
    onPanelNavClick,
    onPanelThirdClick
  } = {
    ...defaultProps,
    ...props,
  }

  const b = cn2('category')

  const panelRef = useRef<CategoryPaneHandler>(null);
  const listRef = useRef<HTMLDivElement>(null)
  const [checkIndex, setCheckIndex] = useState<number>(0)

  const changeTabs = (tab:number) => {
    if(tab !== checkIndex){
      setCheckIndex(tab)

      const panel =  panelRef?.current
      panel && panel.reset();

      isLeftAutoSlide && scrollListTo(tab)

      onChange(category[tab])
    }
  }

  const scrollListTo = (index:number)=>{
    const listDom = listRef?.current
    if(!listDom) return
    const height = listDom?.clientHeight / 2
    const elements = listDom.getElementsByClassName('nb-category__cate-list-item')
    const panel:any = elements[index]
    listDom.scrollTo({
      top: Math.max(0,panel.offsetTop - height + 25),
      behavior: 'auto'
    })
  }

  return (
    <div className={classNames([b()])} >
      {
        category &&category?.length > 0 && (
          <div className={b('cate-list')} >
            {
              <div className={b('cate-list-left')} ref={listRef}>
                {
                  props.category?.map((item, index) => (
                    <div 
                      key={index} 
                      data-index={index}
                      className={classNames([b('cate-list-item'), checkIndex == index && b('cate-list-item-checked') ])} 
                      onClick={()=>changeTabs(index)}>
                      {item.catName}
                    </div>
                  ))
                }
              </div>
            }

            <CategoryPane 
              ref={panelRef}
              categoryChild={props.category && props.category[checkIndex].children}
              showSkuImg={showSkuImg}
              showSecondLevelQuickNav={showSecondLevelQuickNav}
              isLazy={isLazy}
              loadingImg={loadingImg}
              errorImg={errorImg}
              onPanelNavClick={onPanelNavClick}
              onPanelThirdClick={onPanelThirdClick}
              ></CategoryPane>
          </div>
        )
      }
    </div>
  )
}

Category.defaultProps = defaultProps
Category.displayName = 'NutCategory'
