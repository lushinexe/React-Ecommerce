import { createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // ✅ Agregar producto o sumar cantidad
    const addToCart = (product) => {
        const existing = cart.find((item) => item.id === product.id)

        if (existing) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quanty: item.quanty + product.quanty }
                        : item
                )
            )
        } else {
            setCart([...cart, product])
        }
    }

    // ✅ Restar una unidad
    const removeOne = (id) => {
        const item = cart.find((p) => p.id === id)
        if (item.quanty > 1) {
            setCart(
                cart.map((p) =>
                    p.id === id ? { ...p, quanty: p.quanty - 1 } : p
                )
            )
        } else {
            removeFromCart(id)
        }
    }

    // ✅ Eliminar producto
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    // ✅ Vaciar carrito
    const clearCart = () => {
        setCart([])
    }

    // ✅ Total a pagar
    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price || 0) * (item.quanty || 0), 0)
    }

    // ✅ Total de ítems para CartWidget
    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quanty, 0)
    }

    return (
        <Context.Provider
            value={{
                cart,
                addToCart,
                removeOne,
                removeFromCart,
                clearCart,
                getTotalPrice,
                getTotalItems
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
