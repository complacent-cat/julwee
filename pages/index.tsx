import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

import Layout from '../components/layout';
import GetCategoriesList, { Categories } from '../lib/categories';
// import type Categories from '../lib/categories'

type Props = {
  children?: ReactNode,
  categories?: Categories
}

const Home: NextPage = (props: Props) => {
  return (
    <Layout 
      title='julwee'
      pageLinks={props.categories}>
        <h1>
          Read{' '}
          <Link href='/products/categories'>
            <a>this page!</a>
          </Link>
        </h1>
    </Layout>
  )
}
export default Home

export const getStaticProps = async() => {
  const categories = await GetCategoriesList()
  const props:Props = {
    categories: categories
  }
  return {
    props: props
  }
}

