import Detail from "@/components/Food/Detail"
import Picture from "@/components/Food/Picture"
import axios from "axios"

const getData = async (id) => {
  const response = await axios.get(
    "https://mohamadddd1998.github.io/maman-paz-api/foods.json"
  )
  const result = response.data.find((item) => item.id == id)
  return result
}

const FoodPage = async ({ params }) => {
  const food = await getData(params.id)
  return (
    <section>
      <div className="food-layout">
        <Detail food={food} />
        <Picture food={food}  />
      </div>
      <div style={{ margin: "75px 0px" }}></div>
    </section>
  )
}
export default FoodPage
