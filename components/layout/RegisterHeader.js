"use client"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import Select from "react-select"
import { useEffect, useState } from "react"
import citiesJson from "@/config/cities"
import provincesJson from "@/config/provinces"

const RegisterHeader = () => {
  const [city, setCity] = useState(null)
  const [province, setProvince] = useState(null)
  const [provinceId, setProvinceId] = useState(null)
  const [citiesOfProvince, setCitiesOfProvince] = useState([])
  const [toggle, setToggle] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (provinceId) {
      let newCitiesOfProvince = citiesJson.filter((city) => {
        return city.province_value == provinceId
      })
      setCitiesOfProvince(newCitiesOfProvince)
    }
  }, [provinceId])

  const onSubmit = (data) => {
    if (city == null || province == null) {
      toast.error(".شهر و استان را انتخاب کنید")
      return
    }
    const newData = { ...data, city, province }
    toast.success(`.${data.name} عزیز ثبت نام شما انجام شد`)
  }
  const handleCity = () => {
    if (province) {
      setToggle(true)
      return
    }
    setToggle(false)
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} id="form2">
        <h3>فرم ثبت نام</h3>
        <div className="form2-name-mobile">
          <div className="form2-name">
            <label>نام : </label>
            <input
              type="text"
              {...register("name", {
                required: "این فیلد اجباری است",
              })}
              style={errors.name ? { border: "1px solid red" } : {}}
            />
            {errors.name && (
              <span className="header-content-error">
                {errors.name["type"] == "required" && errors.name.message}
              </span>
            )}
          </div>
          <div className="form2-mobile">
            <label>موبایل : </label>
            <input
              type="text"
              {...register("mobile", {
                pattern: {
                  value: /^(\+98|0)?9\d{9}$/,
                  message: "فرمت موبایل اشتباه است",
                },
                required: "این فیلد اجباری است",
              })}
              style={errors.mobile ? { border: "1px solid red" } : {}}
            />
            {errors.mobile && (
              <span className="header-content-error">
                {errors.mobile["type"] == "required" && errors.mobile.message}
              </span>
            )}
            {errors.mobile && (
              <span className="header-content-error">
                {errors.mobile["type"] == "pattern" && errors.mobile.message}
              </span>
            )}
          </div>
        </div>
        <div className="form2-tel-email">
          <div className="form2-tel">
            <label>تلفن ثابت : </label>
            <input
              type="text"
              {...register("tel", {
                required: "این فیلد اجباری است",
              })}
              style={errors.tel ? { border: "1px solid red" } : {}}
            />
            {errors.tel && (
              <span className="header-content-error">
                {errors.tel["type"] == "required" && errors.tel.message}
              </span>
            )}
          </div>
          <div className="form2-email">
            <label>ایمیل : </label>
            <input
              type="email"
              {...register("email", {
                required: "این فیلد اجباری است",
              })}
              style={errors.email ? { border: "1px solid red" } : {}}
            />
            {errors.email && (
              <span className="header-content-error">
                {errors.email["type"] == "required" && errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="form2-select">
          <div>
            <Select
              onChange={(e) => {
                setProvince(e.label)
                setProvinceId(e.value)
              }}
              options={provincesJson}
              placeholder={"استان"}
            />
          </div>
          <div>
            <Select
              onChange={(e) => setCity(e.label)}
              options={citiesOfProvince}
              onMenuOpen={handleCity}
              placeholder={"شهر"}
              menuIsOpen={toggle}
              onMenuClose={() => setToggle(false)}
            />
          </div>
        </div>
        <div className="form2-address">
          <label>آدرس : </label>
          <textarea
            rows={5}
            {...register("address", {
              required: "این فیلد اجباری است",
            })}
            style={errors.address ? { border: "1px solid red" } : {}}
          ></textarea>
          {errors.address && (
            <span className="header-content-error">
              {errors.address["type"] == "required" && errors.address.message}
            </span>
          )}
        </div>
        <div className="form2-personel">
          <label>تعداد پرسنل : </label>
          <input
            type="number"
            {...register("personel", {
              required: "این فیلد اجباری است",
            })}
            min={1}
            style={errors.personel ? { border: "1px solid red" } : {}}
          />
          {errors.personel && (
            <span className="header-content-error">
              {errors.personel["type"] == "required" && errors.personel.message}
            </span>
          )}
        </div>
        <input type="submit" value="ارسال سفارش" />
      </form>
    </>
  )
}
export default RegisterHeader
