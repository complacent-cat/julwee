
export type Products = Array<Product>

export type Product = {
  id: number,
  title?: string,
  price?: number,
  description?: string,
  image?: string,
  rating?: {
    rate?: number,
    count?: number
  }
}
export const GetProductsList = async() => {
  const res = await fetch('https://fakestoreapi.com/products/1')
  const products = await res.json()
  return products
};

export const GetProductsInCategory = async(id:string): Promise<Products> => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${id}`)
  const products = await res.json()
  return products
}