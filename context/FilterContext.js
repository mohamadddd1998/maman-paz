"use client"
import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

const FilterContext = createContext(null)
const categoriesOptions = [
  { value: "0", label: "همه" },
  { value: "1", label: "خوراک" },
  { value: "2", label: "خورش" },
  { value: "3", label: "دسر" },
  { value: "4", label: "کباب" },
  { value: "5", label: "سالاد" },
]
const sortsOptions = [
  { value: "1", label: "گران ترین" },
  { value: "2", label: "ارزان ترین" },
]
export const FilterProvider = ({ children }) => {
  const [sort, setSort] = useState(null)
  const [category, setCategory] = useState(null)
  const [foods, setFoods] = useState([])
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const response = await axios.get(
        "https://mohamadddd1998.github.io/maman-paz-api/foods.json"
      )
      setLoading(false)
      return response.data
    }
    getData().then((result) => {
      setFoods(result)
      if (category && category != 0) {
        let newFoods = result.filter((food) => {
          return food.category_id == category
        })
        setFoods(newFoods)
      }
    })
  }, [category])
  return (
    <FilterContext.Provider
      value={{
        setSort,
        setCategory,
        categoriesOptions,
        sortsOptions,
        foods,
        loading
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
export default FilterContext
