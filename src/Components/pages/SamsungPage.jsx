import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context/Context"
import "../Products/Products.css"
import NavBar from "../Navbar/Navbar"

const SamsungPage = () => {
    const [products, setProducts] = useState([])
    const { buyProducts } = useContext(Context)

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                const samsungOnly = data.filter(
                    (product) => product.category.toLowerCase() === "samsung"
                )
                setProducts(samsungOnly)
            })
            .catch((err) => console.error("Error loading products:", err))
    }, [])

    return (
        <>
            <NavBar />
            <h1 className="titulo">Productos de la marca Samsung</h1>
            <div className="product-card-container">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <h4>${product.price}</h4>
                        <button onClick={() => buyProducts(product)}>Buy</button>
                    </div>
                ))}
            </div>
        </>
    )
}


export default SamsungPage
