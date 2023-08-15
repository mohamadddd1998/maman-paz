import Customer from "@/components/Home/Customer"
import Devider from "@/components/Devider"
import DeviderBtn from "@/components/DeviderBtn"
import DeviderContent from "@/components/DeviderContent"
import Service from "@/components/Home/Service"
import Support from "@/components/Home/Support"
import Why from "@/components/Home/Why"

export const metadata = {
  title: "مامان پز",
}
export default function Home() {
  return (
    <>
      <Devider>
        <DeviderContent />
      </Devider>
      <Service />
      <Devider>
        <DeviderContent />
      </Devider>
      <Why />
      <Devider>
        <DeviderBtn />
      </Devider>
      <Customer />
      <Devider>
        <DeviderContent />
      </Devider>
      <Support />
    </>
  )
}
