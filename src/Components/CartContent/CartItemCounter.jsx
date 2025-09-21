import { useContext } from "react"
import { Context } from "../../Context/Context"

const CartItemCounter = ({ product }) => {
    const { cart, setCart, buyProducts } = useContext(Context)

    const productrepeat = cart.find((item) => item.id === product.id)
    const cantidad = productrepeat?.quanty || 0

    const decrese = () => {
        if (productrepeat) {
            if (productrepeat.quanty > 1) {
                setCart(
                    cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quanty: item.quanty - 1 }
                            : item
                    )
                )
            } else {
                setCart(cart.filter((item) => item.id !== product.id))
            }
        }
    }

    return (
        <>
            <p className="counter-button" onClick={decrese}>-</p>
            <p>{cantidad}</p>
            <p className="counter-button" onClick={() => buyProducts(product)}>+</p>
        </>
    )
}

export default CartItemCounter

