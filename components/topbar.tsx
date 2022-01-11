import { MenuAlt2Icon, ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Dispatch } from 'react'

type Props = {
  setState: Dispatch<boolean>
  sidebar?: boolean
}

const Topbar = (props: Props) => {
  const openSidebar = () => props.setState(true)
  const closeSidebar = () => props.setState(false)
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
      </div>
    </div>
  )
}
export default Topbar