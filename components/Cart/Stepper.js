"use client"
import { useEffect } from "react"
const Stepper = ({ stepId }) => {
  useEffect(() => {
    const element = document.querySelectorAll(".cart-stepper nav span")
    for (let i = 0; i < element.length; i++) {
      element[i].style.color = "#6b7280"
      element[i].querySelector("a").style.background = "#e5e7eb"
      element[i].querySelector("div").style.background = "#e5e7eb"
    }
    for (let i = 0; i < stepId; i++) {
      element[i].style.color = "#ff5851"
      element[i].querySelector("a").style.background = "#ff5851"
      element[i].querySelector("div").style.background = "#ff5851"
    }
  }, [stepId])
  return (
    <div className="cart-stepper">
      <nav>
        <span>
          غذاها
          <a></a>
          <div></div>
        </span>
        <span>
          تایید آدرس
          <a></a>
          <div></div>
        </span>
        <span>
          ثبت
          <a></a>
          <div></div>
        </span>
      </nav>
    </div>
  )
}
export default Stepper
