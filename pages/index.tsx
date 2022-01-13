import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';

import Layout from '../components/layout';
import { 
  GetAllPaths, 
  PathList,
  GetCurrentNestedPath
} from '../lib/paths';

type Props = {
  children?: ReactNode,
  title?: string,
  allPaths?: PathList,
  currentPaths?: PathList,
}

const Home: NextPage = (props: Props) => {
  return (
    <Layout 
    title='julwee'
    allPaths={props.allPaths}>
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
  const title = 'julwee'
  const allPaths = await GetAllPaths()

  const props:Props = {
    title: 'julwee',
    allPaths: allPaths,
  }
  return {
    props: props
  }
}

