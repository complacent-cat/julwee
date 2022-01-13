import type { NextPage } from 'next'
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { 
  GetCategoriesList, 
  Categories,
  GetCategoryPaths,
  CategoryPaths,
} from '../../lib/categories';
import {
  GetAllPaths,
  PathList,
  GetCurrentNestedPath
} from '../../lib/paths'

type Props = {
  children?: ReactNode,
  title?: string,
  categoryPaths?: CategoryPaths,
  allPaths?: PathList,
  currentPaths?: PathList
}

const Card = (props:any) => {
  return <div className='bg-blue-300'>{props.path.title}</div>
}
const CardPanel = (props:any) => {
  const arr = props.categoryPaths;
  const panel = arr?.map((item:any) => 
    <Card 
    key={item.title}
    path={item}/>
  );
  return (
    <div 
    className='grid grid-cols-2 grid-rows-2 gap-5 m-5'>
      {panel}
    </div>
  )
}
const categories: NextPage = (props: Props) => {
  return (
    <Layout
    title={props.title}
    allPaths={props.allPaths}
    currentPath={props.currentPaths}>
      <h1>Categories</h1>
      <CardPanel 
      categoryPaths={props.categoryPaths}/>
      <h2>
        <Link href='/'>
          <a>Back to home!</a>
        </Link>
      </h2>
    </Layout>
  )
}
export default categories

export const getStaticProps = async() => {
  const title = 'categories'
  const categoryPaths = await GetCategoryPaths()
  const allPaths = await GetAllPaths()
  const currentPaths = await GetCurrentNestedPath(title)

  const props:Props = {
    title: title,
    categoryPaths: categoryPaths,
    allPaths: allPaths,
    currentPaths: currentPaths
  }
  return { props: props }
}