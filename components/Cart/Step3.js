import CartContext from "@/context/CartContext"
import { calculatePrice, totalPrice } from "@/lib/utility"
import React, { useContext } from "react"

const Step3 = () => {
  let { cartItems } = useContext(CartContext)
  return (
    <div className="cart-step3">
      <h3>فاکتور سفارش : </h3>
      {cartItems.map((item, index) => (
        <React.Fragment key={index}>
          <nav>
            <span>
              {item.qty} عدد چلو جوجه کباب دستپخت {item.cooker}
            </span>
            <span>{calculatePrice(item.qty, item.price)} تومان</span>
          </nav>
          <div className="orders-devider"></div>
        </React.Fragment>
      ))}
      <nav>
        <span>هزینه ارسال :</span>
        <span>۷۵٬۰۰۰ تومان</span>
      </nav>
      <div className="orders-devider"></div>
      <nav>
        <span>تاریخ سفارش :</span>
        <span> جمعه ۱۴۰۲/۵/۲۰</span>
      </nav>
      <div className="orders-devider"></div>
      <nav>
        <span>نحوه ارسال :</span>
        <span>اسنپ</span>
      </nav>
      <div className="orders-devider"></div>
      <nav>
        <span>آدرس :</span>
        <span>البرز - ماهدشت - fd</span>
      </nav>
      <div className="orders-devider"></div>
      <nav>
        <span>اعمال کد تخفیف :</span>
        <div className="cart-takhfif">
          <input type="text" placeholder="کد را وارد کنید" />
          <span>اعمال</span>
        </div>
      </nav>
      <div className="orders-devider"></div>
      <nav className="cart-step3-total">
        <span>مجموع هزینه ها :</span>
        <span>{totalPrice(cartItems)} تومان</span>
      </nav>
      <p>
        توجه : سفارش شما پس از ثبت، توسط مامان‌پز بررسی و در صورت تایید، پیامکی
        جهت پرداخت هزینه، ارسال خواهد شد.
      </p>
    </div>
  )
}
export default Step3
