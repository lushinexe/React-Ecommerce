import { createContext, useState } from "react"

export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const clearCart = () => {
        setCart([]);
    };

    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.id === product.id)

        if (productrepeat) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quanty: item.quanty + product.quanty }
                        : item
                )
            );
        } else {
            setCart([...cart, product]);
        }

    }

    const total = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quanty, 0)
    }

    return (
        <Context.Provider value={{ cart, setCart, buyProducts, total, clearCart }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

