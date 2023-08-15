"use client"
import Image from "next/legacy/image"
import Banner from "@/public/images/logo-brand.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useState, useEffect } from "react"
import CartContext from "@/context/CartContext"
const Menu = () => {
  const pathname = usePathname()
  const [isShowMenu, setIsShowMenu] = useState(false)
  let { cartItems } = useContext(CartContext)
  useEffect(() => {
    if (isShowMenu) {
      setIsShowMenu(false)
    }
  }, [pathname])
  return (
    <>
      <div className="menu padding">
        <header className="right-menu">
          <nav>
            <Link href={"/"}>
              <Image src={Banner} width={40} height={40} />
            </Link>
            <Link href={"/companies"}>
              <span
                className={`${
                  pathname == "/companies" ? "right-menu-active-link" : ""
                }`}
              >
                سفارش شرکتی
              </span>
            </Link>
            <Link href={"/registeration"}>
              <span
                className={`${
                  pathname == "/registeration" ? "right-menu-active-link" : ""
                }`}
              >
                آشپزی در مامان پز
              </span>
            </Link>
            <Link href={"/foods"}>
              <span
                className={`${
                  pathname == "/foods" ? "right-menu-active-link" : ""
                }`}
              >
                ثبت سفارش آنلاین
              </span>
            </Link>
          </nav>
        </header>
        <div className="left-menu">
          <Link href={"/cart"} className="left-menu-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{cartItems.length}</span>
          </Link>
          <button className="left-menu-login-register">ورود / ثبت نام</button>
        </div>
      </div>
      <div className="menu-humber" onClick={() => setIsShowMenu(true)}>
        <a>
          <i class="fa-solid fa-bars"></i>
        </a>
      </div>
      <div className={`menu-mobile  ${isShowMenu ? "isShow-menu-moblie" : ""}`}>
        <header className="right-menu-mobile">
          <nav>
            <a id="xmark" onClick={() => setIsShowMenu(false)}>
              <i class="fa-solid fa-xmark"></i>
            </a>
            <Link href={"/"} id="banner">
              <Image src={Banner} width={40} height={40} />
            </Link>
            <Link href={"/"}>
              <span
                className={`${pathname == "/" ? "right-menu-active-link" : ""}`}
              >
                خانه
              </span>
            </Link>
            <Link href={"/companies"}>
              <span
                className={`${
                  pathname == "/companies" ? "right-menu-active-link" : ""
                }`}
              >
                سفارش شرکتی
              </span>
            </Link>
            <Link href={"/registeration"}>
              <span
                className={`${
                  pathname == "/registeration" ? "right-menu-active-link" : ""
                }`}
              >
                آشپزی در مامان پز
              </span>
            </Link>
            <Link href={"/foods"}>
              <span
                className={`${
                  pathname == "/foods" ? "right-menu-active-link" : ""
                }`}
              >
                ثبت سفارش آنلاین
              </span>
            </Link>
          </nav>
        </header>
        <div className="left-menu">
          <Link href={"/cart"} className="left-menu-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{cartItems.length}</span>
          </Link>
          <button className="left-menu-login-register">ورود / ثبت نام</button>
        </div>
      </div>
      <div
        className={`cover-menu  ${isShowMenu ? "isShow-cover-menu" : ""}`}
        onClick={() => setIsShowMenu(false)}
      ></div>
    </>
  )
}
export default Menu
