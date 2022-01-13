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
  PathList,
  GetCurrentNestedPath
} from "../../lib/paths"

type Props = {
  children?: ReactNode,
  title?: string,
  allPaths?: PathList,
  products?: Products,
  currentPaths?: PathList
}
const Category:NextPage = (props:any) => {
  // const items = props.pro
  console.log(props.currentPaths)

  return (
    <Layout
    title={props.title}
    allPaths={props.allPaths}
    currentPath={props.currentPaths}>
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
  const nestedPaths = await GetCurrentNestedPath(params.category)
  const props:Props = {
    title: params.category,
    allPaths: allPaths,
    products: products,
    currentPaths: nestedPaths
  }
  return { props: props }
}
