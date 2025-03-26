import ServiceContact from "@/components/Forms/ServiceContact";
import PageFooter from "@/components/PageFooter";
import ServiceCarousel from "@/components/ServiceCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getServicesForCarousel, getSingleService } from "@/lib/getData";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";


export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: serviceId } = await params;
  const data = await getSingleService(serviceId);
  const moreService = await getServicesForCarousel()
  return (
    <section>
      <div className="mx-4 md:max-w-5xl md:mx-auto">
        {/* level one */}
        <div className="mx-4 md:max-w-5xl md:mx-auto  flex flex-col md:flex-row gap-4 items-center justify-center md:justify-evenly mt-8 md:mt-16 p-4 rounded-xl shadow-md bg-[#f3f3f3]">
          <div>
            <Image
              src={data?.serviceImage.url || ""}
              height={300}
              width={300}
              alt={data?.title || ""}
            />
          </div>
          <div className="flex flex-col gap-4">
            <form className="flex justify-start items-center gap-4">
              <Input placeholder="Message us" className="bg-white" />
              <Button type="submit">Contact us</Button>
            </form>
            <div>
              <h1 className="font-bold text-2xl my-2">{data?.title || ""}</h1>
              <div className="overflow-x-auto">
                <RichText
                  content={data.details.raw}
                  renderers={{
                    li: ({ children }) => (
                      <li className="text-sm">{children}</li>
                    ),
                  }}
                />
                <p className="font-semibold text-2xl my-2">Services</p>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                      <td className="px-6 py-4">Service Type</td>
                      <td className="px-6 py-4">All Types</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Level Two */}

        <div className="mx-4 md:max-w-5xl md:mx-auto  mt-8 md:mt-16 p-4 rounded-xl shadow-md bg-[#f3f3f3]">
          <h1 className="font-bold text-2xl my-2 text-center text-[#5a8ddc]">
            Contact us
          </h1>
          <ServiceContact/>
        </div>
        <div>
          <h1 className="font-bold text-2xl my-2 text-center pt-2 text-gray-900">
            Explore More <span className="text-[#5a8ddc]">Services</span>
          </h1>
        </div>
        <ServiceCarousel data={moreService} />
      </div>
      <PageFooter />
    </section>
  );
}

export const revalidate = 30;
