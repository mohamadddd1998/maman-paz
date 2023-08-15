import Devider from "@/components/Devider"
import DeviderContent from "@/components/DeviderContent"
import Why from "@/components/Home/Why"
import Explain from "@/components/Order/Explain"
import Plan from "@/components/Order/Plan"
import Software from "@/components/Order/Software"
export const metadata = {
  title: "سفارش شرکتی",
}
const CompaniesPage = () => {
  return (
    <>
      <Devider>
        <DeviderContent />
      </Devider>
      <Why />
      <Devider> 
        <DeviderContent />
      </Devider>
      <Explain />
      <Devider>
        <DeviderContent />
      </Devider>
      <Plan />
      <Devider>
        <DeviderContent />
      </Devider>
      <Software />
    </>
  )
}
export default CompaniesPage
