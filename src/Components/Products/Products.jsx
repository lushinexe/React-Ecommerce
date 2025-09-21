import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context/Context.jsx"
import "./products.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase.js"

const Products = ({ category }) => {
    const [products, setProducts] = useState([])
    const { buyProducts } = useContext(Context)

    useEffect(() => {
        const productsCollection = category
            ? query(collection(db, "productos"), where("category", "==", category))
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
    }, [category])

    // useEffect(() => {
    //    fetch("data.json")
    //    .then((response) => response.json())
    //    .then((data) => setProducts(data))
    //  }, [])


    return products.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="img-product-card" />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <button onClick={() => buyProducts(product)}>buy</button>
            </div>
        )
    })
}

export default Products