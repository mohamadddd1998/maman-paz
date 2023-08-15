import Image from "next/legacy/image"
import merit1 from "@/public/images/merit7.png"
import merit2 from "@/public/images/merit8.png"
import merit3 from "@/public/images/merit12.png"
import merit4 from "@/public/images/merit13.png"
import merit5 from "@/public/images/merit14.png"
import merit6 from "@/public/images/merit15.png"
const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <h1 className="benefits-title">مامان پزی شو چون ... </h1>
        <div className="benefits-items">
          <div className="benefits-item">
            <div>
              <Image src={merit1} width={175} height={150} />
            </div>
            <h4>درآمد از آشپزخانه</h4>
            <span>
              با کمک مامان‌پز در آشپزخانه خودتون کسب‌وکاری راه بندازید و درآمد
              خوب و مستمری داشته باشید.
            </span>
          </div>
          <div className="benefits-item">
            <div>
              <Image src={merit2} width={175} height={150} />
            </div>
            <h4>تسویه حساب روزانه</h4>
            <span>
              ما خیلی خوش قولیم! هر تعداد غذایی که روزانه بفروشید، فردای اون روز
              پولش نشسته تو حساب‌تون.
            </span>
          </div>
          <div className="benefits-item">
            <div>
              <Image src={merit3} width={175} height={150} />
            </div>
            <h4>بازاریابی، فروش و پشتیبانی با ما</h4>
            <span>
              کافیه فقط شما غذا رو آماده کنید. باقی کارها و دردسرهاش به عهده
              ماست و نمی‌ذاریم آب تو دلتون تکون بخوره.
            </span>
          </div>
          <div className="benefits-item">
            <div>
              <Image src={merit4} width={175} height={150} />
            </div>
            <h4>فروش بیشتر با افزایش ظرفیت</h4>
            <span>
              نگران محدودیت‌های آشپزخانه‌تون نباشید. همین که به ما نشون بدید
              آشپز خوبی هستید، ما کنارتونیم تا این موانع رو رفع کنیم.
            </span>
          </div>
          <div className="benefits-item">
            <div>
              <Image src={merit5} width={175} height={150} />
            </div>
            <h4>بسته‌بندی و ارسال هم با ما</h4>
            <span>
              نگران پیدا کردن جعبه و یا پیچیدگی‌های ارسال نباشید. بعد از پخت،
              غذاها رو در جعبه‌های مخصوص مامان‌پز بذارید و به پیک‌های ما تحویل
              بدید.
            </span>
          </div>
          <div className="benefits-item">
            <div>
              <Image src={merit6} width={175} height={150} />
            </div>
            <h4>گزارش‌های مالی</h4>
            <span>
              شما با اپلیکیشن مامان‌پز می‌تونید بهتر حواستون به دخل و خرجتون
              باشه و گزارش‌های دوره ای از فروشتون داشته باشید.
            </span>
          </div>
        </div>
      </section>
      <section className="benefits-btn">
        <button>نهار شرکتی میخام !</button>
      </section>
    </>
  )
}
export default Benefits
