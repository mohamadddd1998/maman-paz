"use client"
import Header from "@/components/layout/Header"
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"
import "./responsive.css"
import Menu from "@/components/layout/Menu"
import Footer from "@/components/layout/Footer"
import { FilterProvider } from "@/context/FilterContext"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { CartProvider } from "@/context/CartContext"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    })
  }, [pathname])
  return (
    <html lang="fa">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 , user-scalable=no" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ProgressBar
          height="3px"
          color="#ff5851"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <CartProvider>
          <FilterProvider>
            <Menu />
            <Header />
            {children}

            <Footer />
          </FilterProvider>
        </CartProvider>
      </body>
    </html>
  )
}
