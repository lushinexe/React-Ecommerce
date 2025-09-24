import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context.jsx'
import { serverTimestamp, collection, addDoc } from "firebase/firestore"
import { db } from "../../Components/firebase/firebase.js"
import './Checkout.css'

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [validMail, setValidMail] = useState('')
  const [orderId, setOrderId] = useState(null)

  const { cart, getTotalPrice, clearCart } = useContext(Context)

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const FinalizarCompra = async (e) => {
    e.preventDefault()

    if (buyer.email !== validMail) {
      alert("Los correos no coinciden. Por favor, verifica ambos campos.")
      return
    }

    const order = {
      comprador: buyer,
      compras: cart,
      total: getTotalPrice(), // ✅ función correcta
      date: serverTimestamp()
    }

    try {
      const ventasRef = collection(db, "orders")
      const res = await addDoc(ventasRef, order)
      setOrderId(res.id)
      clearCart()
      setBuyer({})
      setValidMail('')
    } catch (error) {
      console.error("Error al finalizar compra:", error)
    }
  }

  return (
    <>
      {orderId ? (
        <div className="checkout-confirmation">
          <h2>✅ ¡Compra realizada con éxito!</h2>
          <h3>🧾 ID de la orden: {orderId}</h3>
        </div>
      ) : (
        <div className="checkout-form">
          <h1>Complete el siguiente formulario</h1>
          <form onSubmit={FinalizarCompra}>
            <input className='form-control' name='Name' placeholder='Nombre' type="text" onChange={buyerData} required />
            <input className='form-control' name='Lastname' placeholder='Apellido' type="text" onChange={buyerData} required />
            <input className='form-control' name='address' placeholder='Dirección' type="text" onChange={buyerData} required />
            <input className='form-control' name='email' placeholder='Correo electrónico' type="email" onChange={buyerData} required />
            <input className='form-control' name='second-email' placeholder='Repetir correo' type="email" onChange={(e) => setValidMail(e.target.value)} required />
            <button className='btn-submit' type='submit'>Finalizar Compra</button>
          </form>
        </div>
      )}
    </>
  )
}

export default Checkout
