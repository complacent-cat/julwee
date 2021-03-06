import { ReactNode, useState } from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'
import { PathList } from '../lib/paths'

type Props = {
  children?: ReactNode,
  title?: string,
  allPaths?: PathList
  currentPath?: PathList
}

const Layout = (props: Props) => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='flex flex-col h-100'>
        <Topbar 
        setState={setSidebarVisible}
        sidebar={sidebarVisible}
        currentPath={props.currentPath}/>
        <div className='flex-initial'>
          <Sidebar 
          allPaths={props.allPaths}
          setState={setSidebarVisible}
          sidebar={sidebarVisible}/>
        </div>
        <div className='m-5'>
          {props.children}
        </div>
      </div>
    </>
  )
}
export default Layout 