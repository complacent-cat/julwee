import { Dispatch } from 'react'

import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

type Props = {
  pageLinks?: Array<string>,
  setState: Dispatch<boolean>,
  sidebar?: boolean
}
type MenuProps = {
  pageLinks?: Array<string>,
}
const MenuList = (props:MenuProps) => {
  const arr = props.pageLinks;
  const panel = arr?.map((s:any) => 
    <div key={s}>
      {s}
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
      pageLinks={props.pageLinks}/>
    </div>
  )
}
export default Sidebar