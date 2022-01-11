

export type Categories = Array<string>

const GetCategoriesList = async() => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json()
  return categories
};
export default GetCategoriesList