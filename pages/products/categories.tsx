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
  AllPaths
} from '../../lib/paths'

type Props = {
  children?: ReactNode,
  categoryPaths?: CategoryPaths
  allPaths?: AllPaths
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
    title='Catergories'
    allPaths={props.allPaths}>
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
  const categoryPaths = await GetCategoryPaths()
  const allPaths = await GetAllPaths()
  const props:Props = {
    categoryPaths: categoryPaths,
    allPaths: allPaths
  }
  return { props: props }
}