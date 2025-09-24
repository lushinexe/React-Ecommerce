import {useContext } from "react"
import { Context } from "../../Context/Context"
import { Link } from "react-router-dom"
import "./CartTotal.css"

const CartTotal = () => {
    const {cart} = useContext(Context)

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0 )
  return (
    <div className="cartTotal">
        <h3>total a pagar: {total}</h3>
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
  )
}

export default CartTotal