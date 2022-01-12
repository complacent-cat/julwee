
export type Categories = Array<string>
export type CategoryPaths = Array<paths>
type paths = {
  title: string,
  path: string
}
export const GetCategoriesList = async(): Promise<Categories> => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json()
  return categories
};

export const GetCategoryPaths = async() => {  
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json()
  const paths = categories.map((item: string) =>{
    return {
      title: item,
      path: `/products/${item}`
    }
  })
  return paths
}

export const GetCategoryPathNames = async() => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json()
  return categories.map((c: any) => {
    return {
      params: { category: c }
    }
  })
}