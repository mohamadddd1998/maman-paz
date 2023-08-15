"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/legacy/image"
import chef1 from "@/public/images/chef1.jpg"
import chef2 from "@/public/images/chef2.jpg"
import chef3 from "@/public/images/chef3.jpg"
import food1 from "@/public/images/food1.jpg"
import food2 from "@/public/images/food2.jpg"
import food3 from "@/public/images/food3.jpg"
const Customer = () => {
  return (
    <section>
      <div className="center">
        <h1>مشتریان مامان‌پز چه می‌گویند؟</h1>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="swiper-customer"
      >
        <SwiperSlide className="swiper-slide-customer shadow">
          <figure className="swiper-slide-customer-banner">
            <Image src={chef1} />
          </figure>
          <div className="swiper-slide-customer-content">
            <figure>
              <Image src={food1} />
            </figure>
            <h3>عدس‌ پلو دستپخت مامان شقایق</h3>
            <p>خیلی خوشمزه و خوب بود، شبیه غذای مامان خودم</p>
            <span>صبا از اقتصاد بیدار</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-customer shadow">
          <figure className="swiper-slide-customer-banner">
            <Image src={chef2} />
          </figure>
          <div className="swiper-slide-customer-content">
            <figure>
              <Image src={food2} />
            </figure>
            <h3>عدس‌ پلو دستپخت مامان شقایق</h3>
            <p>خیلی خوشمزه و خوب بود، شبیه غذای مامان خودم</p>
            <span>صبا از اقتصاد بیدار</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-customer shadow">
          <figure className="swiper-slide-customer-banner">
            <Image src={chef3} />
          </figure>
          <div className="swiper-slide-customer-content">
            <figure>
              <Image src={food3} />
            </figure>
            <h3>عدس‌ پلو دستپخت مامان شقایق</h3>
            <p>خیلی خوشمزه و خوب بود، شبیه غذای مامان خودم</p>
            <span>صبا از اقتصاد بیدار</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Customer
