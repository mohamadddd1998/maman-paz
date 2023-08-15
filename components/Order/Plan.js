"use client"
import { useState } from "react"
import Select from "react-select"
import { ToastContainer, toast } from "react-toastify"

const optionsDiff = [
  { value: "type1", label: "یک نوع غذا در روز" },
  { value: "type2", label: "دو نوع غذا در روز" },
  { value: "type3", label: "سه نوع غذا در روز" },
]
const optionsPrice = [
  { value: "price1", label: "اقتصادی" },
  { value: "price2", label: "استاندارد" },
]
const Plan = () => {
  const [price, setPrice] = useState(null)
  const [diff, setDiff] = useState(null)
  const handleSelect = () => {
    if (price == null || diff == null) {
      toast.error("انتخاب خود را کامل کنید.")
      return
    }
    toast.success("برنامه ارسال شد.")
  }
  return (
    <section className="plan">
      <ToastContainer />
      <h2>برنامه هفتگی اختصاصی</h2>
      <p>
        اینجا یکی از مهم‌ترین بخش‌های سفارش غذا از مامان‌پزه. با تکیه به دانش و
        تجربه چندین ساله در ارایه غذای شرکتی، مصاحبه‌های دقیقی قبل از ثبت سفارش
        با شما خواهیم داشت تا برنامه غذایی متناسب با دغدغه‌های کارفرما و سلیقه
        کارمندها طراحی ‌کنیم.
      </p>
      <div className="plan-select">
        <div className="plan-select-price">
          <Select
            onChange={(e) => setDiff(e.label)}
            options={optionsDiff}
            placeholder={"تنوع غذایی"}
          />
        </div>
        <div className="plan-select-diff">
          <Select
            onChange={(e) => setPrice(e.label)}
            options={optionsPrice}
            placeholder={"محدوده ی قیمت"}
          />
        </div>
      </div>
      <button className="plan-btn" onClick={handleSelect}>
        دریافت برنامه
      </button>
    </section>
  )
}
export default Plan
