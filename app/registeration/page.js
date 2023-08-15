import Devider from "@/components/Devider"
import DeviderContent from "@/components/DeviderContent"
import How from "@/components/registeration/How"
import Introduce from "@/components/registeration/Introduce"
import Benefits from "@/components/registeration/Benefits"
export const metadata = {
  title: "آشپزی در مامان پز",
}
const RegisterationPage = () => {
  return (
    <>
      <Devider>
        <DeviderContent />
      </Devider>
      <How />
      <Devider>
        <DeviderContent />
      </Devider>
      <Introduce />
      <Devider>
        <DeviderContent />
      </Devider>
      <Benefits />
      <div style={{ margin: "75px" }}></div>
    </>
  )
}
export default RegisterationPage
