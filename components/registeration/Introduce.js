import chef4 from "@/public/images/chef4.jpg"
import chef5 from "@/public/images/chef5.jpg"
import Image from "next/legacy/image"
import quotation from '@/public/images/quotation-mark.png'
const Introduce = () => {
  return (
    <>
      <section className="introduce">
        <div className="introduce-item">
          <div className="introduce-item-img">
            <Image src={chef4} />
          </div>
          <div className="introduce-item-content">
            <Image src={quotation} />
            <h2>مامان تاج ماه</h2>
            <p>
              از اینکه با مامان‌پز آشنا شدم و مشغول فعالیت هستم فوق‌العاده
              خوشحالم، جدای از کسب درآمد، اینکه هر مامان یه اسمی داره و منم اسم
              مادربزرگم رو دارم خیلی دوست داشتنیه.
            </p>
          </div>
        </div>
        <div className="introduce-item">
          <div className="introduce-item-img">
            <Image src={chef5} />
          </div>
          <div className="introduce-item-content">
          <Image src={quotation} />
            <h2>مامان ترنج</h2>
            <p>
              از اینکه با مامان‌پز آشنا شدم و مشغول فعالیت هستم فوق‌العاده
              خوشحالم، جدای از کسب درآمد، اینکه هر مامان یه اسمی داره و منم اسم
              مادربزرگم رو دارم خیلی دوست داشتنیه.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Introduce
