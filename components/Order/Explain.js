import Image from "next/legacy/image"
import explain1 from '@/public/images/img1.png'
import explain2 from '@/public/images/img2.jpg'
import explain3 from '@/public/images/img3.png'
const Explain = () => {
  return (
    <>
    <section className="explain">
      <div className="explian-item">
        <div className="explian-item-img">
          <Image src={explain1}/>
        </div>
        <div className="explian-item-content">
          <h2>پشتیبانی</h2>
          <p>
            با مامان‌پز نگران کارهای اجرایی غذای شرکتی‌تون نباشید. ما هر روز غذا
            رو سر ساعت و در بسته‌بندی‌های مناسب به شما تحویل می‌دیم. همین‌طور با
            یک سیستم جامع نظرسنجی سعی می‌کنیم نظر شما رو درباره غذاها بدونیم و
            روز به روز خودمون رو به سلیقه شما نزدیک‌تر کنیم.
          </p>
        </div>
      </div>
      <div className="explian-item">
        <div className="explian-item-img">
          <Image src={explain2}/>
        </div>
        <div className="explian-item-content">
          <h2>حساب و کتاب شفاف</h2>
          <p>
            با مامان‌پز نگران کارهای اجرایی غذای شرکتی‌تون نباشید. ما هر روز غذا
            رو سر ساعت و در بسته‌بندی‌های مناسب به شما تحویل می‌دیم. همین‌طور با
            یک سیستم جامع نظرسنجی سعی می‌کنیم نظر شما رو درباره غذاها بدونیم و
            روز به روز خودمون رو به سلیقه شما نزدیک‌تر کنیم.
          </p>
        </div>
      </div>
      <div className="explain-btn">
        <button >نهار شرکتی میخام !</button>
    </div>
    </section>
    
    </>
  )
}
export default Explain
