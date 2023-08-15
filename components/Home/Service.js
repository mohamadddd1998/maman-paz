import Image from "next/legacy/image"
import enterprise1 from "@/public/images/enterprise1.png"
import enterprise2 from "@/public/images/enterprise2.png"
import enterprise3 from "@/public/images/enterprise3.png"
import enterprise4 from "@/public/images/enterprise4.png"
const Service = () => {
  return (
    <section>
      <div className="service">
        <h1>چطور غذای شرکتی سفارش دهیم؟</h1>
        <div className="service-cards padding">
          <div className="service-card">
            <figure>
              <Image src={enterprise1} />
            </figure>
            <h4>ثبت درخواست</h4>
            <p>
              با ثبت درخواست در سایت،
              <br /> کارشناسان ما با شما در تماس خواهند بود.
            </p>
          </div>
          <div className="service-card">
            <figure>
              <Image src={enterprise2} />
            </figure>
            <h4>دریافت برنامه اختصاصی</h4>
            <p>
              بر اساس سلیقه‌ شما، یک برنامه
              <br />
              غذایی ویژه سازمانتان ارائه می‌کنیم.
            </p>
          </div>
          <div className="service-card">
            <figure>
              <Image src={enterprise3} />
            </figure>
            <h4>پخت غذا با مامان‌ها</h4>
            <p>
              مامان‌ها غذاها را با تازه‌ترین مواد
              <br />
              اولیه آماده می‌کنند.
            </p>
          </div>
          <div className="service-card">
            <figure>
              <Image src={enterprise4} />
            </figure>
            <h4>ارسال غذاها</h4>
            <p>
              غذاها را طبق برنامه و در یک
              <br />
              بسته‌بندی مناسب به دست شما می‌رسانیم.
            </p>
          </div>
        </div>
        <button className="service-more">
            اطلاعات بیشتر
        </button>
      </div>
    </section>
  )
}
export default Service
