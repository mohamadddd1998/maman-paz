"use client"
import { useContext, useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Stepper from "./Stepper"
import CartContext from "@/context/CartContext"
import empty from "@/public/images/empty.svg"
import Image from "next/legacy/image"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

const Cart = () => {
  let { cartItems, deleteCart } = useContext(CartContext)
  const [stepId, setStepId] = useState(1)
  const [valideAddress, setValideAddress] = useState(false)
  const router = useRouter()
  const sabtAlert = () => {
    Swal.fire({
      icon: "success",
      text: "سفارش شما با موفقیت ثبت شد",
    })
    deleteCart()
    router.push("/")
  }
  return (
    <section id="cart-layout">
      {cartItems.length > 0 ? (
        <div className="cart-layout">
          <Stepper stepId={stepId} />
          {stepId == 1 && <Step1 />}
          {stepId == 2 && <Step2 setValideAddress={setValideAddress} />}
          {stepId == 3 && <Step3 />}
          <div className="cart-next-prev">
            {stepId != 1 && (
              <span
                onClick={() => {
                  setStepId((prevId) => {
                    return prevId - 1
                  })
                }}
              >
                قبلی
              </span>
            )}
            {stepId == 1 && (
              <span
                onClick={() => {
                  setStepId((prevId) => {
                    return prevId + 1
                  })
                }}
              >
                بعدی
              </span>
            )}
            {valideAddress == true && stepId == 2 && (
              <span
                onClick={() => {
                  setStepId((prevId) => {
                    return prevId + 1
                  })
                }}
              >
                بعدی
              </span>
            )}
            {stepId == 3 && (
              <span className="sabt" onClick={sabtAlert}>
                ثبت
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="empty">
          <a>
            <span>سبد خرید خالی است</span>
            <Image src={empty}></Image>
          </a>
        </div>
      )}
    </section>
  )
}
export default Cart
