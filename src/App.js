import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './component/Home'
import Login from './component/Login'
import Cart from './component/Cart'
import NotFound from './component/NotFound'

import ProtectedRoute from './component/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])
  const [restaurantName, setRestaurantName] = useState('')

  const addCartItem = dish => {
    const isAlreadyAdded = cartList.find(item => item.dishId === dish.dishId)

    if (!isAlreadyAdded) {
      setCartList(prev => [...prev, dish])
    } else {
      setCartList(prev =>
        prev.map(item =>
          item.dishId === dish.dishId
            ? {...item, Quantity: item.quantity + dish.quantity}
            : item,
        ),
      )
    }
  }

  const removeCartItem = dishId => {
    setCartList(prev => prev.filter(item => item.dishId !== dishId))
  }

  const removeAllCartItems = () => setCartList([])

  const incrementCartItemQuantity = dishId => {
    setCartList(prevState =>
      prevState.map(item =>
        item.dishId === dishId ? {...item, Quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = dishId => {
    setCartList(prevState =>
      prevState.map(item =>
        item.dishId === dishId ? {...item, Quantity: item.quantity - 1} : item,
      ),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        restaurantName,
        setRestaurantName,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </CartContext.Provider>
  )
}

export default App
