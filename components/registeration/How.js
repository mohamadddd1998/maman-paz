import Image from "next/legacy/image"
import chef3 from "@/public/images/chef3.png"
import chef2 from "@/public/images/chef2.png"
import chef1 from "@/public/images/chef1.png"
const How = () => {
  return (
    <>
      <section className="how">
        <h2>چطور با مامان‌پز همکاری کنیم؟</h2>
        <p>
          برای اینکه به تیم مامان‌پز اضافه بشید باید سه مرحله رو پشت سر بذارید.
          ما در اینجا بهتون می‌گیم که چی‌کار کنید.
        </p>
        <div className="how-item">
          <div className="how-item-img">
            <Image src={chef1} />
          </div>
          <div className="how-item-content">
            <h2>ثبت نام کنید.</h2>
            <p>
              فرم ثبت‌نامی که تو این صفحه قرار داره رو پر کنید. اطلاعات شما در
              اختیار کارشناس‌های ما قرار می‌گیره و با شما در تماس خواهند بود.
            </p>
          </div>
        </div>
        <div className="how-item">
          <div className="how-item-img">
            <Image src={chef2} />
          </div>
          <div className="how-item-content">
            <h2>تست غذا بفرستید.</h2>
            <p>
              برای اینکه بتونیم کیفیت آشپزی‌تون رو بسنجیم، با هماهنگی قبلی از
              شما می‌خوایم که چهار نمونه غذای مختلف بپزید و برای ما بفرستید.
              کارشناس‌های ما این غذاها رو بررسی می‌کنن و در صورت تایید، وارد
              مرحله سوم و پایانی می‌شید.{" "}
            </p>
          </div>
        </div>
        <div className="how-item">
          <div className="how-item-img">
            <Image src={chef3} />
          </div>
          <div className="how-item-content">
            <h2>مامان پزی شوید.</h2>
            <p>
              مرحله سوم جاییه که شما مامان‌پزی می‌شید. از شما دعوت می‌کنیم که به
              دفتر ما بیاید تا در جریان دستورالعمل‌های جامع مامان‌پز مثل اصول
              بهداشتی، استانداردهای هر پرس غذا، نحوه بسته‌بندی، چارچوب
              قیمت‌گذاری و نظام محاسبه پاداش و جریمه قرار بگیرید. یادتون باشه که
              شما یک ماه فرصت خواهید داشت تا کارت بهداشت خودتون رو از یکی از
              مراکز بهداشت شهر دریافت کنید.
            </p>
          </div>
        </div>
        <div className="how-btn">
          <button>نهار شرکتی میخام !</button>
        </div>
      </section>
    </>
  )
}
export default How
