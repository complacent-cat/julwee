import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

import Layout from '../components/layout';
import { 
  GetCategoryPaths, 
  CategoryPaths
} from '../lib/categories';

type Props = {
  children?: ReactNode,
  categoryPaths?: CategoryPaths
}

const Home: NextPage = (props: Props) => {
  return (
    <Layout 
    title='julwee'
    categoryPaths={props.categoryPaths}>
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
  const categoryPaths = await GetCategoryPaths()
  const props:Props = {
    categoryPaths: categoryPaths,
  }
  return {
    props: props
  }
}

