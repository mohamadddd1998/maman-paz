"use client"
import CartContext from "@/context/CartContext"
import { calculatePrice, totalPrice } from "@/lib/utility"
import React, { useContext } from "react"

const Step1 = () => {
  let { cartItems, incrementToCart, decrementFromCart,deletItemCart} =
    useContext(CartContext)
  return (
    <div className="cart-step1">
      <nav className="cart-step1-title">
        <span>نام غذا </span>
        <span>آشپز</span>
        <span>قیمت</span>
        <span>تعداد</span>
        <span>جمع قیمت</span>
        <span>حذف</span>
      </nav>
      <div className="cart-step1-orders">
        {cartItems.map((item, index) => (
          <React.Fragment key={index}>
            <nav>
              <a>{item.name}</a>
              <a>{item.cooker}</a>
              <a>{item.price}</a>
              <a>
                <i
                  className="fa-solid fa-plus"
                  onClick={() => incrementToCart(item.id)}
                ></i>
                <span className="cart-step1-count">{item.qty}</span>
                <i
                  className="fa-solid fa-minus"
                  onClick={() => decrementFromCart(item.id)}
                ></i>
              </a>
              <a>{calculatePrice(item.qty, item.price)}</a>
              <a>
                <i className="fa-solid fa-trash" onClick={()=>deletItemCart(item.id)}></i>
              </a>
            </nav>
            <div className="orders-devider"></div>
          </React.Fragment>
        ))}
      </div>
      <nav className="cart-step1-price">
        <a>مجموع قابل پرداخت :</a>
        <a>{totalPrice(cartItems)} تومان</a>
      </nav>
    </div>
  )
}
export default Step1
