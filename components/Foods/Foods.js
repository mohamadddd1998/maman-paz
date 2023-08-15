"use client"
import Image from "next/legacy/image"
import React, {  useContext } from "react"
import icon1 from "@/public/images/icon1.jpg"
import FilterContext from "@/context/FilterContext"
import { useRouter } from "next/navigation"
import CartContext from "@/context/CartContext"
import { ToastContainer, toast } from "react-toastify"

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Foods = () => {
  const { foods } = useContext(FilterContext)
  const router = useRouter()
  let { addToCart,cartItems,decrementFromCart} = useContext(CartContext)
  return (
    <section style={{ margin: "0 auto" }}>
      <ToastContainer />
      <div className="food-items">
        {foods.length > 0 &&
          foods.map((food, index) => (
            <div className="food-item shadow" key={index}>
              <div className="food-item-banner">
                <Image
                  onClick={() => router.push(`/foods/${food.id}`)}
                  loader={imageLoader}
                  src={food.img}
                  alt={food.name}
                  height={190}
                  width={290}
                  loading="lazy"
                />
                <nav>
                  <a className="plus">
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        addToCart(food)
                        toast.success("به سبد خرید اضافه شد")
                      }}
                    ></i>
                  </a>
                  {cartItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <a
                        key={index}
                        className={`${
                          item.isShow == true && item.id == food.id
                            ? "count count-width"
                            : "count"
                        }`}
                      >
                        {item.isShow == true && item.id == food.id
                          ? item.qty
                          : ""}
                      </a>
                      {item.isShow == true && item.id == food.id && (
                        <a
                          className="minus"
                          onClick={() => {
                            decrementFromCart(food.id)
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </a>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </div>
              <nav className="food-item-title">
                <h4>{food.name}</h4>
                <span className="food-item-price">{food.price} تومان</span>
              </nav>
              <div className="food-item-amar">
                <nav>
                  <a>
                    <Image src={icon1} width={30} height={30} />
                    <span>{food.cooker}</span>
                  </a>
                </nav>
                <nav>
                  <a>
                    <i className="fa-solid fa-user"></i>
                    <span>({food.sell})</span>
                  </a>
                  <a>
                    <i className="fa-solid fa-star"></i>
                    <span>{food.rate}</span>
                  </a>
                </nav>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
export default Foods
