
import { Product, Products } from "../lib/products"

type Props = {
  title?: string,
  list?: Products
}
type CardProps = {
  product?: Product
}

const ProductCard = (props: CardProps) => {
  return <h2>{props.product?.title}</h2>
}
const ProductList = (props: Props) => {
  const arr = props.list
  const list = arr?.map((item) => 
    <ProductCard
    key={item.id.toString()}
    product={item}
    />
  );
  return (
    <>
      <h2>Viewing - {props.title}</h2>
      <div>{list}</div>
    </>
  )
}
export default ProductList