"use client"
import support1 from "@/public/images/bg1.jpg"
import support2 from "@/public/images/bg2.png"
import Image from "next/legacy/image"
import { useState } from "react"
const Support = () => {
  const [title, setTitle] = useState([
    { id: 1, title: "سفارش شرکتی", isActive: true },
    { id: 2, title: "سفارش آنلاین", isActive: false },
  ])
  const [titleId, setTitleId] = useState(1)
  const handleTitle = (id) => {
    let newTitle = [...title]
    newTitle = newTitle.map((item) => ({ ...item, isActive: false }))
    let titleIndex = title.findIndex((item) => {
      return item.id == id
    })
    newTitle[titleIndex].isActive = true
    setTitle(newTitle)
    setTitleId(newTitle[titleIndex].id)
  }
  return (
    <section className="center">
      <h1>مامان‌پز چه خدماتی دارد؟</h1>
      <div className="support">
        <div className="support-title">
          {title.map((item, index) => (
            <p
              key={index}
              style={item.isActive ? { color: "#ff5851" } : {}}
              onClick={() => handleTitle(item.id)}
            >
              {item.title}
              <span
                style={item.isActive ? { backgroundColor: "#ff5851" } : {}}
              ></span>
            </p>
          ))}
        </div>
        {titleId == 1 && (
          <div className="support-content">
            <div>
              <Image src={support1} width={320} height={220} />
            </div>
            <div>
              <p>
                شما می‌توانید از روی سایت و به طور مستقیم هم سفارش خود را از
                میان غذاهای مامان‌پز انتخاب و ثبت کنید. فقط در نظر داشته باشید
                که به دلیل محدودیت مامان‌ها در تهیه مواد اولیه‌، باید یک روز
                زودتر غذای خود را سفارش دهید. هر مامان در صورتی که چهار سفارش
                برای غذای مورد‌نظر دریافت کند آن را تهیه می‌کند.
              </p>
              <button>میخاهم سفارش دهم</button>
            </div>
          </div>
        )}
        {titleId == 2 && (
          <div className="support-content">
            <div>
              <Image src={support2} width={320} height={220} />
            </div>
            <div>
              <p>
                اگر شرکتی هستید که می‌خواهید برای تامین غذای روزانه کارکنان خود
                از خدمات مامان‌پز استفاده کنید، فقط کافیست اطلاعات تماس خود را
                با ما به اشتراک بگذارید تا کارشناسان مامان‌پز با شما تماس
                بگیرند. .
              </p>
              <button>میخاهم سفارش دهم</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default Support
