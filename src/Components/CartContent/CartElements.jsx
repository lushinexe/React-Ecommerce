import { useContext } from "react"
import { Context } from "../../Context/Context"
import "./CartElement.css"

const CartElements = () => {
    const { cart, removeFromCart, addToCart, removeOne } = useContext(Context)

    return (
        <div className="cart-elements">
            {cart.map((product) => (
                <div className="product-card-container" key={product.id}>
                    <img src={product.img} alt={product.name} className="cart-img" />
                    <div className="cart-info">
                        <h3>{product.name}</h3>
                        <p>Precio unitario: ${product.price}</p>
                        <div className="counter">
                            <button onClick={() => removeOne(product.id)}>-</button>
                            <span>{product.quanty}</span>
                            <button onClick={() => addToCart({ ...product, quanty: 1 })}>+</button>
                        </div>
                        <p>Subtotal: ${(product.price * product.quanty).toFixed(2)}</p>
                    </div>
                    <button className="cart-delete-button" onClick={() => removeFromCart(product.id)}>❌</button>
                </div>
            ))}
        </div>
    )
}

export default CartElements
