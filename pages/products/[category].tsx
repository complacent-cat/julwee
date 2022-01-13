import { ReactNode } from "react"
import { NextPage } from "next"

import Layout from "../../components/layout"
import ProductList from "../../components/productList"
import { GetCategoryPathNames } from "../../lib/categories"
import { 
  Products,
  GetProductsInCategory 
} from '../../lib/products'
import { 
  GetAllPaths,
  AllPaths
} from "../../lib/paths"

type Props = {
  children?: ReactNode,
  title?: string,
  allPaths?: AllPaths,
  products?: Products
}
const Category:NextPage = (props:any) => {
  const items = props.pro
  return (
    <Layout
    title={props.title}
    allPaths={props.allPaths}>
      <ProductList 
      title={props.title}
      list={props.products}/>
    </Layout>
  )
}
export default Category

export const getStaticPaths = async() => {
  const paths = await GetCategoryPathNames();
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async({params}:any) => {
  const allPaths = await GetAllPaths()
  const products = await GetProductsInCategory(params.category)
  const props:Props = {
    title: params.category,
    allPaths: allPaths,
    products: products
  }
  return { props: props }
}
