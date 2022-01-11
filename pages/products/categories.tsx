import type { NextPage } from 'next'
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import GetCategoriesList, { Categories } from '../../lib/categories';

type Props = {
  children?: ReactNode,
  categories?: Categories
}

const n = [
  '1',
  '2',
  '3',
  '4',
]

const Card = (props:any) => {
  return <div className='bg-blue-300'>{props.value}</div>
}
const CardPanel = (props:any) => {
  const arr = props.pageLinks;
  const panel = arr?.map((s:any) => 
    <Card key={s} value={s}/>
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
    pageLinks={props.categories}>
      <h1>Categories</h1>
      <CardPanel 
      pageLinks={props.categories}/>
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
  const categories = await GetCategoriesList()
  const props:Props = {
    categories: categories
  }
  return {
    props: props
  }
}