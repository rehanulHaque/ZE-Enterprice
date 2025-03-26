import { HomePageData } from "@/data";
import { Phone } from "lucide-react";
import Image from "next/image";
import FindUsForm from "../Forms/FindUsForm";
import { getProductNameAndId } from "@/lib/getData";

export default async function QuickEnquiry() {
  const data = await getProductNameAndId()
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl md:mx-auto mt-10 mx-8">
      {/* Left */}
      <div className="md:col-span-2 flex flex-col items-start gap-4 p-4 rounded-xl bg-[#f3f3f3] shadow-xl">
        <h1 className="text-2xl font-bold">HOW TO FIND US</h1>
        {HomePageData.details.map((item) => (
          <div className="flex gap-4 items-center justify-center" key={item.id}>
            <item.icon className="h-7 w-7 font-medium" />
            <p className="font-medium">{item.text}</p>
          </div>
        ))}
        <div className="flex gap-4 items-center justify-center">
            <Phone className="h-7 w-7 font-medium" />
            <p className="font-medium"><a href="tel:+918603171076">+91 8603171076</a></p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Image src={"/whatsapp_icon.svg"} height={30} width={30} alt="Icon" className="h-7 w-7 font-medium" />
            <p className="font-medium"><a href="tel:+918603171076">Chat on WhatsApp</a></p>
          </div>
      </div>
      {/* Right */}
      <div className="md:col-span-3 bg-[#f3f3f3] p-4 rounded-xl shadow-xl">
        <FindUsForm data={data}/>
      </div>
    </div>
  );
}
