import Item from "./Item"
import "./Products.css"

const ItemList = ({ products, addToCart }) => (
  <div className="product-card-container">
    {products.map(product => (
      <Item key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
)

export default ItemList

