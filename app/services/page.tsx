import PageFooter from "@/components/PageFooter";
import { serviceData } from "@/data/service";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServiceDetails } from "@/lib/getData";
import Testamonial from '@/components/Services/Testamonial'

export default async function page() {
  const data = await getServiceDetails();
  const firstFour = data.slice(0, -2)
  const lastTwo = data.slice(4)
  return (
    <section>
      <div className="mx-4 md:max-w-5xl md:mx-auto">
        <div className="text-center mt-4 md:mt-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Our <span className="text-[#5a8ddc]">Services</span>
          </h1>
        </div>
        <div className="my-4 md:my-8">
          <p>
            At ZE Enterprise, we provide top-quality bulk products alongside
            expert business services, including Digital Marketing, Event
            Management, and Consultancy. Our goal is to help businesses grow,
            streamline operations, and create impactful experiences.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {firstFour.map((item) => (
              <div className="flex flex-col gap-4 md:flex-row bg-[#f3f3f3] shadow-xl rounded-xl p-4" key={item.id}>
                <Image
                  src={item.serviceImage.url}
                  height={300}
                  width={300}
                  alt={item.title}
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#5a8ddc] my-1">
                    {item.title}
                  </h1>
                  <p className="text-sm my-1">{item.description}</p>
                  <RichText content={item.details.raw} renderers={{
                    li: ({children}) => <li className="text-sm">{children}</li>,
                  }} />
                  <Link href={`/services/${item.link}`}>
                  <Button className="mt-4 w-full bg-black text-white hover:bg-gray-800">View Details</Button>
                  </Link>
                </div>
              </div>
          ))}
        </div>
        <div>
          <div className="text-center mt-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Why <span className="text-[#5a8ddc]">Choose Us</span>
            </h1>
            <p className="my-2">{serviceData.whyChooseUs.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceData.whyChooseUs.details.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-3 shadow-xl bg-[#f3f3f3] py-8 px-6"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <item.icon className="col-span-1 h-10 w-10" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mt-4 md:mt-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              We Also <span className="text-[#5a8ddc]">provide</span>
            </h1>
          </div>
          <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {lastTwo.map((item) => (
              <Link href={`/services/${item.link}`} key={item.id}>
              <div
                className="p-4 shadow-xl bg-[#f3f3f3] rounded-xl"
                >
                <Image
                  src={item.serviceImage.url}
                  alt={item.title}
                  height={300}
                  width={400}
                  />
                <div>
                  <h1 className="font-bold text-lg md:text-2xl">
                    {item.title}
                  </h1>
                  <p className="my-2 md:text-sm">{item.description}</p>
                  <RichText content={item.details.raw} renderers={{
                    li: ({children}) => <li className="text-sm">{children}</li>,
                  }} />
                </div>
              </div>
                  </Link>
            ))}
          </div>
        </div>
        <Testamonial/>
      </div>
      <PageFooter />
    </section>
  );
}
