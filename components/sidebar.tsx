import { Dispatch } from 'react'
import Link from 'next/link';

import { CategoryPaths } from '../lib/categories'

type Props = {
  categoryPaths?: CategoryPaths,
  setState: Dispatch<boolean>,
  sidebar?: boolean
}
type MenuProps = {
  categoryPaths?: CategoryPaths,
}
const MenuList = (props:MenuProps) => {
  const arr = props.categoryPaths;
  const panel = arr?.map((item:any) => 
    <div key={item.title}>
      <Link href={item.path}>
        <a>{item.title}</a>
      </Link>
    </div>
  )
  return (
    <div>
      {panel}
    </div>
  )
}
const Sidebar = (props:Props) => {
  return (
    <div className={'lg:static lg:visible fixed h-full z-10 bg-red-100 ' + (props.sidebar ? 'visible' : 'invisible')}>
      <MenuList 
      categoryPaths={props.categoryPaths}/>
    </div>
  )
}
export default Sidebar