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


interface CategoryTab {
  catId: string | number,
  catName: string,
  showPic: boolean,
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
  showPic?: boolean,
  [props: string]: any
}
export interface CategoryProps extends IComponent {
  className?: string,
  style?: CSSProperties,
  type: "classify" | "text",
  showSkuImg: boolean,
  category: CategoryTab[],
  onClick: () => void
}

const defaultProps = {
  type: 'classify',
  category: [],
  showSkuImg:true,
  onClick: () => { }
} as CategoryProps

export const Category: FunctionComponent<
  Partial<CategoryProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    showSkuImg
  } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('biz-category')

  const [checkIndex, setCheckIndex] = useState<number>(0)
  const [checkTabId, setCheckTabId] = useState<number | string>('reccat')

  const changeTabs = (tab:number) => {
    if(tab !== checkIndex) setCheckIndex(tab)
  }

  return (
    <div className={classNames([b()])} >
      <div className={classNames(b('cate-list'))}>

        {
          (props.type == 'classify' || props.type == 'text') && (
            <div className={classNames(b('cate-list-left'))}>
              {
                props.category?.map((item, index) => (
                  <div 
                    key={index} 
                    className={classNames([checkIndex == index ? b('cate-list-item-checked') : b('cate-list-item')])} 
                    onClick={()=>changeTabs(index)}>
                    {item.catName}
                  </div>
                ))
              }
            </div>
          )
        }

        <CategoryPane 
          categoryChild={props.category && props.category[checkIndex].children}
          showSkuImg={showSkuImg}
          ></CategoryPane>
      </div>
    </div>
  )
}

Category.defaultProps = defaultProps
Category.displayName = 'NutCategory'
