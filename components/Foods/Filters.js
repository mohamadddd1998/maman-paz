"use client"
import FilterContext from "@/context/FilterContext"
import {  useContext } from "react"
import Select from "react-select"

const Filters = () => {
  const { setSort, setCategory,sortsOptions,categoriesOptions } = useContext(FilterContext)
  return (
    <div className="filters shadow">
      <Select
        onChange={(e) => setCategory(e.value)}
        options={categoriesOptions}
        placeholder={"دسته بندی"}
      />
      <Select
        onChange={(e) => setSort(e.value)}
        options={sortsOptions}
        placeholder={"مرتب سازی"}
      />
    </div>
  )
}
export default Filters
