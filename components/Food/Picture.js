"use client"
import Image from "next/legacy/image"

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
const Picture = ({ food }) => {
  return (
    <div className="food-picture shadow">
      <div>
        <Image
          loader={imageLoader}
          src={food.img}
          alt={food.name}
          height={265}
          width={400}
          loading="lazy"
        />
      </div>
      <h4>سایر غذاهای {food.cooker}</h4>
      <nav>
        <span>چلو خورش قورمه سبزی با گوشت گوسفندی</span>
        <span>۱۶۰٬۰۰۰ تومان</span>
      </nav>
      <div className="food-picture-devider"></div>
      <nav>
        <span>چلو خورش قورمه سبزی با گوشت گوسفندی</span>
        <span>۱۶۰٬۰۰۰ تومان</span>
      </nav>
      <div className="food-picture-devider"></div>
    </div>
  )
}
export default Picture
