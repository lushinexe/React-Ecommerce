import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/">
          <h1 className="navbar-logo">AstroTech</h1>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/samsung">Samsung</Link></li>
          <li><Link to="/category/iphone">iPhone</Link></li>
          <li><Link to="/category/xiaomi">Xiaomi</Link></li>
        </ul>

        <Link to="/cart">
          <h2 className="navbar-cart">🛒</h2>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
