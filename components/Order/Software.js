"use client"
import Image from "next/legacy/image"
import iphone from "@/public/images/iphone.png"
import enterpriseAppScore from "@/public/images/enterprise-app-score.jpg" 
import { useEffect, useState } from "react"
import axios from "axios"
const Software = () => {
  const [title, setTitle] = useState([])
  const [descActive, setDescActive] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://mohamadddd1998.github.io/maman-paz-api/software.json"
      )
      return response.data
    }
    getData()
      .then((result) => {
        setTitle(result)
        result.forEach((element) => {
          if (element.isActive) {
            setDescActive(element.desc)
          }
        })
      })
      .catch((e) => console.log(e))
  }, [])
  const titleHandler = (id) => {
    let newTitle = [...title]
    newTitle = newTitle.map((item) => ({ ...item, isActive: false }))
    let titleIndex = newTitle.findIndex((item) => item.id == id)
    newTitle[titleIndex].isActive = true
    setTitle(newTitle)
    setDescActive(newTitle[titleIndex].desc)
  }
  return (
    <section className="software">
      <h1>نرم افزار شرکتی</h1>
      <div className="software-title">
        {title.length > 0 &&
          title.map((item, index) => (
            <p
              key={index}
              className={`${item.isActive ? "software-title-active" : ""}`}
              onClick={() => titleHandler(item.id)}
            >
              {item.title}
            </p>
          ))}
      </div>
      <div className="software-content">
        <div>
          <p>{descActive}</p>
          <button className="software-content-btn">نهار شرکتی میخاهم !</button>
        </div>
        <div className="software-content-img">
          <Image src={iphone} />
          <figure>
             <Image src={enterpriseAppScore} />
          </figure>
        </div>
      </div>
    </section>
  )
}
export default Software
