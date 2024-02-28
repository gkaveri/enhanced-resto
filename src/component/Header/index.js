import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {GrCart} from 'react-icons/gr'
import Cookies from 'js-cookie'

import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => {
  const {cartList, restaurantName} = useContext(CartContext)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <Link to="/cart">
        <button type="button" className="cart-icon-button">
          <GrCart className="cart-icon" />
        </button>
      </Link>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0  cart-count">{cartList.length}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <Link to="/">
        <h1 className="m-0 logo-heading">{restaurantName}</h1>
      </Link>
      <div className="d-flex flex-row align-items-center ms-auto">
        <p className="d-none mt-0 mb-0 mr-0 d-sm-block my-orders-text">
          My Orders
        </p>
        <button
          type="button"
          className="btn btn-outline-danger ms-2 btn-sm"
          onClick={onLogout}
        >
          Logout
        </button>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default withRouter(Header)
