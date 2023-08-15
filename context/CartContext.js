"use client"
import { getLocalStorage } from "@/lib/utility"
import React, { createContext, useState } from "react"

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getLocalStorage())
  const addToCart = (cartItem) => {
    let newCartItems = [...cartItems]
    let stateIndex = newCartItems.findIndex((item) => item.id == cartItem.id)
    if (stateIndex == -1) {
      newCartItems = [...newCartItems, { ...cartItem, qty: 1, isShow: true }]
    } else {
      newCartItems[stateIndex].qty += 1
    }
    setCartItems(newCartItems)
    localStorage.setItem("cart", JSON.stringify(newCartItems))
  }
  const incrementToCart = (id) => {
    let newCartItems = [...cartItems]
    let stateIndex = newCartItems.findIndex((item) => item.id == id)
    newCartItems[stateIndex].qty += 1
    setCartItems(newCartItems)
    localStorage.setItem("cart", JSON.stringify(newCartItems))
  }
  const decrementFromCart = (id) => {
    let newCartItems = [...cartItems]
    let stateIndex = newCartItems.findIndex((item) => item.id == id)
    if (newCartItems[stateIndex].qty != 1) {
      newCartItems[stateIndex].qty -= 1
      setCartItems(newCartItems)
      localStorage.setItem("cart", JSON.stringify(newCartItems))
    }
  }
  const deletItemCart = (id) => {
    let newCartItems = [...cartItems]
    newCartItems = newCartItems.filter((item) => item.id != id)
    setCartItems(newCartItems)
    localStorage.setItem("cart", JSON.stringify(newCartItems))
  }
  const deleteCart=()=>{
    localStorage.removeItem('cart')
    setCartItems([])
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        incrementToCart,
        decrementFromCart,
        deletItemCart,
        deleteCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartContext
