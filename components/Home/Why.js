import Image from "next/legacy/image"
import merit1 from "@/public/images/merit1.png"
import merit2 from "@/public/images/merit2.png"
import merit3 from "@/public/images/merit3.png"
import merit4 from "@/public/images/merit4.png"
import merit5 from "@/public/images/merit5.png"
import merit6 from "@/public/images/merit6.png"
const Why = () => {
  return (
    <section className="why">
      <h1 className="why-title">چرا مامان‌پز را انتخاب کنیم؟</h1>
      <div className="why-items">
        <figure>
          <Image src={merit1} />
          <figcaption>صرفه جویی در وقت</figcaption>
        </figure>
        <figure>
          <Image src={merit2} />
          <figcaption>همراه مشتریان</figcaption>
        </figure>
        <figure>
          <Image src={merit3} />
          <figcaption>یک طعم خانگی</figcaption>
        </figure>
        <figure>
          <Image src={merit4} />
          <figcaption>کار آفرینی برای زنان</figcaption>
        </figure>
        <figure>
          <Image src={merit5} />
          <figcaption>راهکار هوشمند</figcaption>
        </figure>
        <figure>
          <Image src={merit6} />
          <figcaption>برنامه غذایی متنوع</figcaption>
        </figure>
      </div>
    </section>
  )
}
export default Why
