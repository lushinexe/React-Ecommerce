import { useContext } from "react"
import { Context } from "../../Context/Context"
import { Link } from "react-router-dom"
import "./Products.css"

const Item = ({ product }) => {
    const { addToCart } = useContext(Context)

    const handleBuy = () => {
        addToCart({ ...product, quanty: 1 })
    }

    return (
        <div className="card">
            <Link to={`/item/${product.id}`}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
            </Link>
            <button onClick={handleBuy}>Buy</button>
        </div>
    )
}

export default Item
