import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames'
import { CategoryPane } from './categorypane'
import { IComponent } from '@/utils/typings'
import bem from '@/utils/bem'


interface Category {
  catId: string | number,
  catName: string,
  children?: Array<CategoryPane>,
  [props: string]: any
}

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
  [props: string]: any
}
export interface CategoryProps extends IComponent {
  className?: string,
  style?: CSSProperties,
  showSkuImg: boolean,
  category: Category[],
  showSecondLevelQuickNav:boolean,
  isLeftAutoSlide:boolean,
  onChange: (index:Category) => void,
  onPanelNavClick:(index:number)=>void,
  onPanelThirdClick: (sku:CategoryPaneItem)=>void
}

const defaultProps = {
  category: [],
  showSkuImg:true,
  showSecondLevelQuickNav:false,
  isLeftAutoSlide:true,
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
    onChange,
    onPanelNavClick,
    onPanelThirdClick
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('biz-category')

  const panelRef = useRef(null);
  const listRef = useRef(null)
  const [checkIndex, setCheckIndex] = useState<number>(0)

  const changeTabs = (tab:number) => {
    if(tab !== checkIndex){
      setCheckIndex(tab)

      const panel:any =  panelRef?.current
      panel.reset();

      isLeftAutoSlide && scrollListTo(tab)

      onChange && onChange(category[tab])
    }
  }

  const scrollListTo = (index:number)=>{
    const listDom: any = listRef.current
    if(!listDom) return
    const height = listDom?.clientHeight / 2
    const elements = listDom.getElementsByClassName('nut-biz-category__cate-list-item')
    const panel = elements[index]
    listDom.scrollTo({
      top: Math.max(0,panel.offsetTop - height + 25),
      behavior: 'auto'
    })
  }

  return (
    <div className={classNames([b()])} >
      {
        category &&category?.length > 0 && (
          <div className={classNames(b('cate-list'))} >
            {
              <div className={classNames(b('cate-list-left'))} ref={listRef}>
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
