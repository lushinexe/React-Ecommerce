import { useContext } from "react"
import { Context } from "../../Context/Context"
import CartItemCounter from "./CartItemCounter"

const CartElements = () => {
    const { cart, setCart } = useContext(Context)

    const deleteProducts = (id) => {
        const newCart = cart.filter((element) => element.id !== id)
        setCart(newCart)
    }

    return (
        <>
            {cart.map((product) => (
                <div className="product-card-container" key={product.id}>
                    <img src={product.img} alt="product-card" />
                    <h3>{product.name}</h3>
                    <CartItemCounter product={product} />
                    <h4>${(Number(product.price) || 0).toFixed(2)}</h4>
                    <h3 className="cart-delete-product" onClick={() => deleteProducts(product.id)}>
                        ❌
                    </h3>
                </div>
            ))}
        </>
    )
}

export default CartElements