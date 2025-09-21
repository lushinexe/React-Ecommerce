import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to='/'>
          <h1 className="navbar-logo">AstroTech</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SamsungPage">Samsung</Link></li>
          <li><Link to="/IphonePage">Iphone</Link></li>
          <li><Link to="/XiaomiPage">Xiaomi</Link></li>
        </ul>
        <Link to='/cart'>
          <h2 className="navbar-cart">🛒</h2>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar