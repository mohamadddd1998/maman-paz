"use client"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Select from "react-select"
import { useEffect, useState } from "react"
import citiesJson from "@/config/cities"
import provincesJson from "@/config/provinces"

const MySwal = withReactContent(Swal)

const Step2 = ({ setValideAddress }) => {
  const [address, setAddress] = useState({
    province: "",
    city: "",
    addr: "",
    isValide: false,
  })
  useEffect(() => {
    if (address.province != "" && address.city != "" && address.addr != "") {
      setAddress((prev) => {
        return { ...prev, isValide: true }
      })
      setValideAddress(true)
    } else {
      setAddress((prev) => {
        return { ...prev, isValide: false }
      })
      setValideAddress(false)
    }
  }, [address.province, address.city, address.addr])
  return (
    <div className="cart-step2">
      <h3>لطفا آدرس خود را انتخاب کنید</h3>
      <nav className="cart-step2-title">
        <span>آدرس</span>
        <span>هزینه ارسال</span>
      </nav>
      <nav className="cart-step2-address">
        <span>
          {address.isValide
            ? `${address.province} - ${address.city} - ${address.addr}`
            : "---"}
        </span>
        <span>۷۵٬۰۰۰ تومان</span>
      </nav>
      <div className="cart-add-address">
        <a
          onClick={() =>
            MySwal.fire({
              title:
                "<span style='font-size:16px'>استان خود را انتخاب کنید :</span>",
              html: (
                <div className="select-address">
                  <div className="select-address-city-province">
                    <Select
                      onChange={(e) => {
                        setAddress((prev) => {
                          return { ...prev, province: e.label }
                        })
                      }}
                      options={provincesJson}
                      placeholder={"استان"}
                    />
                    <Select
                      onChange={(e) => {
                        setAddress((prev) => {
                          return { ...prev, city: e.label }
                        })
                      }}
                      options={citiesJson}
                      placeholder={"شهر"}
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="آدرس کامل خود را وارد کنید..."
                    onChange={(e) => {
                      setAddress((prev) => {
                        return { ...prev, addr: e.target.value }
                      })
                    }}
                  ></textarea>
                </div>
              ),
              confirmButtonText: "تایید",
            })
          }
        >
          <i className="fa-solid fa-plus"></i>
          {address.isValide ? (
            <span>ویرایش آدرس</span>
          ) : (
            <span>افزودن آدرس</span>
          )}
        </a>
      </div>
    </div>
  )
}
export default Step2
