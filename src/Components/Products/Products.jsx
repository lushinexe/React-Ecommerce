import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../Context/Context.jsx"
import "./Products.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase.js"
import ItemList from "./ItemList.jsx"

const Products = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const { addToCart  } = useContext(Context)

    useEffect(() => {
        const productsCollection = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos")

        getDocs(productsCollection)
            .then((res) => {
                const lista = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(lista)
            })
            .catch((error) => console.error("Error fetching products:", error))
    }, [categoryId])

    return <ItemList products={products} buyProducts={addToCart } />
}

export default Products
