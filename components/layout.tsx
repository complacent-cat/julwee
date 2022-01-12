import { ReactNode, useState } from 'react'
import Head from 'next/head'

import Sidebar from '../components/sidebar'
import Topbar from '../components/topbar'
import { CategoryPaths } from '../lib/categories'

type Props = {
  children?: ReactNode,
  title?: string,
  categoryPaths?: CategoryPaths
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
        sidebar={sidebarVisible}/>
        <div className='flex-initial'>
          <Sidebar 
          categoryPaths={props.categoryPaths}
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