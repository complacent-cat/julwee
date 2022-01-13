import { Dispatch } from 'react'
import Link from 'next/link'
import { 
  MenuAlt2Icon, 
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'

import { PathList } from '../lib/paths'

type Props = {
  setState: Dispatch<boolean>
  sidebar?: boolean
  currentPath?: PathList
}

const PathNav = ({item, last}:any) => {
  return (
    <>
      <Link href={item.route}>
        <a className='px-2 self-center text-gray-300'>{item.title}</a>
      </Link>
      { !last &&
        <ChevronRightIcon 
        className='h-8 w-8 m-1 self-center text-gray-300'/>
      }
    </>
  )
}
const Topbar = (props: Props) => {
  const openSidebar = () => props.setState(true)
  const closeSidebar = () => props.setState(false)
  let pathId = props.currentPath?.length
  {pathId && (pathId -= 1)} 
  const pathNavList = props.currentPath?.map((item, i) => 
    <PathNav 
    key={item.title}
    item={item}
    last={(pathId == i)? true : false }/>
  );
  return (
    <div className='flex-initial'>
      <div 
      className='bg-blue-200 text-5xl text-white py-2 border-b border-gray-200'>
        hello
      </div>
      <div className='flex p-1 border-b border-gray-300'>
        <button
        className={'border-r border-gray-300 pr-0.5'}
        onClick={(props.sidebar ? closeSidebar : openSidebar)}>
          <MenuAlt2Icon 
          className={'h-8 w-8 m-1 text-blue-300 ' + (props.sidebar ? 'hidden' : 'show')}/>
          <ChevronDoubleLeftIcon 
          className={'h-8 w-8 m-1 text-blue-300 ' + (props.sidebar ? 'show' : 'hidden')}/>
        </button>
        <div className='flex pl-4'>
          {pathNavList}
        </div>
      </div>
    </div>
  )
}
export default Topbar