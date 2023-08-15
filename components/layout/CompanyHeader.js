"use client"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"

const CompanyHeader = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    toast.success(`.${data.name} عزیز اسم شما ثبت شد`)
  }
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} id="form1">
        <h3>سفارش شرکتی</h3>
        <label>نام : </label>
        <input
          type="text"
          {...register("name", { required: "این فیلد اجباری است" })}
          style={errors.name ? { border: "1px solid red" } : {}}
        />
        {errors.name && (
          <span className="header-content-error">
            {errors.name["type"] == "required" && errors.name.message}
          </span>
        )}
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
        <label>تلفن ثابت : </label>
        <input
          type="text"
          {...register("tel", { required: "این فیلد اجباری است" })}
          style={errors.tel ? { border: "1px solid red" } : {}}
        />
        {errors.tel && (
          <span className="header-content-error">
            {errors.tel["type"] == "required" && errors.tel.message}
          </span>
        )}
        <label>نام شرکت : </label>
        <input
          type="text"
          {...register("company", {
            required: "این فیلد اجباری است",
          })}
          style={errors.company ? { border: "1px solid red" } : {}}
        />
        {errors.company && (
          <span className="header-content-error">
            {errors.company["type"] == "required" && errors.company.message}
          </span>
        )}
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
        <input type="submit" value="ارسال سفارش" />
      </form>
    </>
  )
}
export default CompanyHeader
