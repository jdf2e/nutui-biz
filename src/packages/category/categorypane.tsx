import React, {
  FunctionComponent,
  ReactNode,
  useRef,
  CSSProperties,
  useState
} from 'react'
import { useConfig } from '@/packages/configprovider'
import classNames from 'classnames';
import bem from '@/utils/bem'
import './categorypane.scss'
import { IComponent } from '@/utils/typings'

interface CategoryPane {
  catId: string | number,
  catName: string,
  children?: Array<CategoryPaneItem>,
  [props:string]:any
}

interface CategoryPaneItem {
  backImg?: string,
  catId: string,
  catName: string,
  showPic?: boolean,
  [props:string]:any
}
export interface CategoryPaneProps extends IComponent {
  className?: string,
  style?: CSSProperties,
  showSkuImg:boolean,
  categoryChild:CategoryPane[]
}

const defaultProps = {
  categoryChild:[],
  showSkuImg:true,
} as CategoryPaneProps

export const CategoryPane: FunctionComponent<
  Partial<CategoryPaneProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    categoryChild,
    showSkuImg
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('category-pane')

  const pageView = useRef(null);
  const [paneIndex,setPaneIndex] = useState(0)

  const changePane = (tab:number)=>{
    if(tab != paneIndex)  setPaneIndex(tab)
  }

  return (
    <div className={classNames(b())} ref={pageView}>

      <div className={classNames(b('quick'))}>
        <div className={classNames(b('quick-box'))}>
          {
            categoryChild.map((child,index)=>(
              <div onClick={()=>changePane(index)} className={classNames([b('quick-child'),index == paneIndex && b('quick-child-active')])}>{ child.catName }</div>
            ))
          }
        </div>
      </div>
      <div className={classNames(b('cate-list-right'))}>
        {
          categoryChild.map((child,index)=>(
            <div key={index}>
              <div className={classNames(b('child-title'))}>{ child.catName }</div>

              <div className={classNames(b('child-item-list'))}>
                {
                child.children?.map((sku,idx)=>(
                  <div className={classNames(b('child-item'))} key={idx}>

                    {
                      showSkuImg && (<img className={classNames(b('child-img'))} src={sku.backImg} />)
                    }
                      
                      <div className={classNames(b(showSkuImg?'sku-img':'sku-name'))}>{ sku?.catName }</div>
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
}

