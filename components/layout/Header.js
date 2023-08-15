"use client"
import Image from "next/legacy/image"
import HeaderBanner from "@/public/images/mamanpaz-main-bg.png"
import { usePathname } from "next/navigation"
import mainChef from "@/public/images/main-chef-bg.jpg"
import CompanyHeader from "./CompanyHeader"
import RegisterHeader from "./RegisterHeader"

const Header = () => {
  const pathname = usePathname()
  switch (pathname) {
    case "/":
      return (
        <section>
          <div className="header padding">
            <div className="header-content">
              <h1>ناهار شرکتی با طعمی از خونه</h1>
              <h4>
                مامان‌پز با غذاهای خانگی و سالم یک
                <br /> ناهار کاری فراموش نشدنی را برای شما رقم می‌زند.
              </h4>
              <button className="header-btn">ناهار شرکتی میخاهم</button>
            </div>

            <figure>
              <Image src={HeaderBanner}/>
            </figure>
          </div>
        </section>
      )
    case "/companies":
      return (
        <section>
          <div className="header padding">
            <div className="header-content">
              <CompanyHeader />
            </div>
            <figure>
              <Image src={HeaderBanner} />
            </figure>
          </div>
        </section>
      )
    case "/registeration":
      return (
        <section>
          <div className="header padding">
            <div className="header-content">
              <RegisterHeader />
            </div>
            <figure>
              <Image src={mainChef}  />
            </figure>
          </div>
        </section>
      )
    default:
      return null
  }
}
export default Header
