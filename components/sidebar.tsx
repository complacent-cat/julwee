import { Dispatch, useState } from 'react'
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'


import { 
  PathList,
  Path
} from '../lib/paths'

type Props = {
  allPaths?: PathList,
  setState: Dispatch<boolean>,
  sidebar?: boolean
}
type MenuProps = {
  allPaths?: PathList,
}
const ListItem = ({path}:any) => {
  if (path.nested != null) {
    const [dropdown, setDropdown] = useState(true)
    return (
      <>
        <div className='flex py-2'>
          <Link href={path.route}>
            <a className='text-lg font-bold text-gray-700 self-center hover:underline uppercase'>
              {path.title}</a>
          </Link>
          <button
          onClick={dropdown ? () => setDropdown(false) : () => setDropdown(true)}>
            <ChevronDownIcon
            className={'h-8 w-8 m-1 text-blue-300 ' + (dropdown ? 'show' : 'hidden')}/>
            <ChevronUpIcon
            className={'h-8 w-8 m-1 text-blue-300 ' + (dropdown ? 'hidden' : 'show')}/>
          </button>
        </div>
        <div className={'pl-6 ' + (dropdown ? 'show' : 'invisible')}>
          <MenuList allPaths={path.nested} />
        </div> 
      </>
    )
  } else {
    return (
      <div className='flex py-2'>
        <Link href={path.route}>
          <a className='text-lg font-bold text-gray-700 self-center hover:underline uppercase'>
            {path.title}</a>
        </Link>
      </div>
    )
  }
}
const MenuList = (props:MenuProps) => {
  const arr = props.allPaths;
  const panel = arr?.map((item:any) => 
    <ListItem 
    key={item.title}
    path={item}>
    </ListItem>
  )
  return (
    <div>
      {panel}
    </div>
  )
}
const Sidebar = (props:Props) => {
  return (
    <div className={'lg:static lg:visible fixed h-full px-10 py-6 z-10 bg-blue-100 ' + (props.sidebar ? 'visible' : 'invisible')}>
      <MenuList 
      allPaths={props.allPaths}/>
    </div>
  )
}
export default Sidebar