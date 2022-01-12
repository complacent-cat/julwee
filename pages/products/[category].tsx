import { ReactNode } from "react"
import { NextPage } from "next"

import Layout from "../../components/layout"
import ProductList from "../../components/productList"
import { 
  GetCategoryPaths, 
  CategoryPaths, 
  GetCategoryPathNames, 
} from "../../lib/categories"
import { 
  Products,
  GetProductsInCategory 
} from '../../lib/products'

type Props = {
  children?: ReactNode,
  title?: string,
  categoryPaths?: CategoryPaths,
  products?: Products
}
const Category:NextPage = (props:any) => {
  const items = props.pro
  return (
    <Layout
    title={props.title}
    categoryPaths={props.categoryPaths}>
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
  const categoryPath = await GetCategoryPaths()
  const products = await GetProductsInCategory(params.category)
  const props:Props = {
    title: params.category,
    categoryPaths: categoryPath,
    products: products
  }
  return { props: props }
}
