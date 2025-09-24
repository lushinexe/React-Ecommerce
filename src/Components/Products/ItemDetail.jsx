import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase.js"
import { Context } from "../../Context/Context.jsx"
import "./ItemDetail.css"
import "./Products.css"

const ItemDetail = () => {
    const { itemId } = useParams()
    const [product, setProduct] = useState(null)
    const { addToCart } = useContext(Context)

    useEffect(() => {
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then((res) => {
                if (res.exists()) {
                    setProduct({ id: res.id, ...res.data() })
                } else {
                    console.error("Producto no encontrado")
                }
            })
            .catch((error) => console.error("Error al obtener el producto:", error))
    }, [itemId])

    const handleBuy = () => {
        addToCart({ ...product, quanty: 1 })
    }

    if (!product) return <p>Cargando producto...</p>

    return (
        <div className="item-detail">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleBuy} className="button">Comprar</button>
        </div>
    )
}

export default ItemDetail

