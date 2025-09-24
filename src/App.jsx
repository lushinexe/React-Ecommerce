import Navbar from "./Components/Navbar/Navbar.jsx"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

