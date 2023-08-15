import Filters from "@/components/Foods/Filters"
import Image from "next/legacy/image"
import banner from "@/public/images/baner.jpg"
import Foods from "@/components/Foods/Foods"
export const metadata = {
  title: "ثبت سفارش آنلاین",
}
const FoodsPage = () => {
  return (
    <section className="food-bg">
      <Filters />
      <div className="banner">
        <Image src={banner} />
      </div>
      <Foods />
      <div style={{margin:'75px 0px'}}></div>
    </section>
  )
}
export default FoodsPage
