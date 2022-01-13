
import { GetCategoryPaths } from './categories'

export type AllPaths = Array<Path>

export type Path = {
  title: string
  route: string
  nested?: Array<Path>
}

export const GetAllPaths = async() => {
  const catPaths = await GetCategoryPaths()
  const mainPaths: AllPaths = [
    {
      title: 'home',
      route: '/'
    },
    {
      title: 'categories',
      route:'/products/categories',
      nested: catPaths
    }
  ]
  return mainPaths
}