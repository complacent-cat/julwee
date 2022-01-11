
export type product = {
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
const GetProductsList = async() => {
  const res = await fetch('https://fakestoreapi.com/products/1')
  const products = await res.json()
  return products
};
export default GetProductsList