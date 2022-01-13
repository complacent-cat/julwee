
import { GetCategoryPaths } from './categories'

export type PathList = Array<Path>

export type Path = {
  title: string
  route: string
  nested?: PathList
}

export const GetAllPaths = async() => {
  const catPaths = await GetCategoryPaths()
  const mainPaths: PathList = [
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

export const GetCurrentNestedPath = async(id: string) => {
  const allPaths = await GetAllPaths()
  const paths:any = (list:PathList) => {
    const l: PathList = []
    list.forEach(elem => {
      if (elem.title == id) {
        l.push(elem)
      } else if (elem.nested){
        const r:PathList = paths(elem.nested)
        if (r != null){
          l.push(elem)
          l.push(r[0])
        }
      }
    })
    return l
  };
  const arr:PathList = paths(allPaths)

  return arr
}

// export const GetRelivantPathArr = async() => {
//   const currentPath = GetCurrentNestedPath
// }