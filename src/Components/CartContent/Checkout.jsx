import React, { useContext, useState } from 'react'
import ContextProvider, { Context } from '../../Context/Context.jsx'
import { serverTimestamp, collection, addDoc } from "firebase/firestore"
import { db } from "../../Components/firebase/firebase.js"

import './Checkout.css'

const Checkout = () => {
  const [buyer, setBuyer] = useState({})
  const [validMail, setValidMail] = useState('')
  const [orderId, setOrderId] = useState(null)

  const { cart, total, clearCart } = useContext(Context)

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const FinalizarCompra = (e) => {
    e.preventDefault()

    // Validación de correos
    if (buyer.email !== validMail) {
      alert("Los correos no coinciden. Por favor, verifica ambos campos.")
      return
    }

    const order = {
      comprador: buyer,
      compras: cart,
      total: total(),
      date: serverTimestamp()
    }

    const Ventas = collection(db, "orders")

    addDoc(Ventas, order)
      .then((res) => {
        setOrderId(res.id)
        clearCart()               // Limpia el carrito
        setBuyer({})          // Limpia los datos del comprador
        setValidMail('')      // Limpia el segundo correo
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      {orderId ? (
        <div>
          <h2>✅ Realizaste tu Compra Correctamente</h2>
          <h3>🧾 ID de la Compra: {orderId}</h3>
        </div>
      ) : (
        <div>
          <h1>Complete el siguiente formulario</h1>
          <form onSubmit={FinalizarCompra}>
            <input className='form-control' name='Name' placeholder='Ingrese su nombre' type="text" onChange={buyerData} />
            <input className='form-control' name='Lastname' placeholder='Ingrese su apellido' type="text" onChange={buyerData} />
            <input className='form-control' name='address' placeholder='Ingrese su dirección' type="text" onChange={buyerData} />
            <input className='form-control' name='email' placeholder='Ingrese su correo' type="email" onChange={buyerData} />
            <input className='form-control' name='second-email' placeholder='Repita su correo' type="email" onChange={(e) => setValidMail(e.target.value)} />
            <button className='btn-submit' type='submit'>Completar Compra</button>
          </form>
        </div>
      )}
    </>
  )
}

export default Checkout
