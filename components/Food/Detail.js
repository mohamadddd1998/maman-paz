"use client"
import icon1 from "@/public/images/icon1.jpg"
import Image from "next/legacy/image"
import rice from "@/public/images/rice.svg"
import chicken from "@/public/images/chicken.svg"
import cheese from "@/public/images/cheese.svg"
import potato from "@/public/images/potato.svg"
import tomato from "@/public/images/tomato.svg"
import { useContext } from "react"
import CartContext from "@/context/CartContext"
import { ToastContainer, toast } from "react-toastify"

const Detail = ({ food }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="food-detail shadow">
      <ToastContainer />
      <nav className="food-detail-title">
        <span>{food.name}</span>
        <span>{food.price} تومان</span>
      </nav>
      <div className="food-item-amar padding-amar">
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
      <p className="fodd-detail-desc">{food.desc}</p>
      <span
        className="food-detail-add-cart"
        onClick={() => {
         addToCart(food)
          toast.success("به سبد خرید اضافه شد")
        }}
      >
        <i className="fa-solid fa-plus"></i>
        <span>افزودن به سبد خرید</span>
      </span>
      <h3 className="food-detail-recepie-title">دستور پخت</h3>
      <p className="food-detail-recepie">{food.recepi}</p>
      <h3 className="food-detail-ingredients-title">ترکیبات غذایی</h3>
      <div className="food-detail-ingredients">
        <figure>
          <Image src={rice} width={40} height={40} />
          <figcaption>برنج</figcaption>
        </figure>
        <figure>
          <Image src={chicken} width={40} height={40} />
          <figcaption>مرغ</figcaption>
        </figure>
        <figure>
          <Image src={cheese} width={40} height={40} />
          <figcaption>کره</figcaption>
        </figure>
        <figure>
          <Image src={potato} width={40} height={40} />
          <figcaption>سیب زمینی</figcaption>
        </figure>
        <figure>
          <Image src={tomato} width={40} height={40} />
          <figcaption>گوجه</figcaption>
        </figure>
      </div>
      <h3 className="food-detail-comment-title">نظرات</h3>
      <div className="food-detail-comments">
        <div className="food-detail-comment">
          <div className="food-detail-comment-content">
            <span>
              <i className="fa-solid fa-user"></i>
              <span>صابر</span>
            </span>
            <span>
              <span>۱۴۰۱/۱۲/۲۴</span>
              <span className="food-detail-comment-matn">برنج مرغوب نبود</span>
            </span>
          </div>
          <div className="food-detail-comment-reply">
            <div>
              <span>سلام ممنون از نظرتون.حتما اصلاح میکنم</span>
            </div>
            <a>
              <Image src={icon1} width={30} height={30} />
              <span>مامان الناز</span>
            </a>
          </div>
          <div className="comment-devider"></div>
        </div>
        <div className="food-detail-comment">
          <div className="food-detail-comment-content">
            <span>
              <i className="fa-solid fa-user"></i>
              <span>نوشین</span>
            </span>
            <span>
              <span>۱۴۰۱/۱۱/۰۳</span>
              <span className="food-detail-comment-matn">
                کیفیت مثل همیشه نبود
              </span>
            </span>
          </div>
          <div className="food-detail-comment-reply">
            <div>
              <span>سعی میکنم رضایتتون رو مثل قبل جلب کنم.تشکر</span>
            </div>
            <a>
              <Image src={icon1} width={30} height={30} />
              <span>مامان الناز</span>
            </a>
          </div>
          <div className="comment-devider"></div>
        </div>
      </div>
    </div>
  )
}
export default Detail
