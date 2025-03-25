import PageFooter from "@/components/PageFooter";
import ExploreMoreService from "@/components/Service/ExploreMoreService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ServicesTypes } from "@/types";
import { RichText } from "@graphcms/rich-text-react-renderer";
import request from "graphql-request";
import Image from "next/image";

const getSingleService = async (id: string) => {
  const data = (await request(
    process.env.HYGRAPH_API_KEY!,
    `
    query MyQuery {
      services(where: {link: "${id}"}) {
        description
          details {
            raw
          }
        id
        link
        title
        serviceImage {
          url
        }
      }
    }
    `
  )) as ServicesTypes;
  return data.services[0];
};

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: serviceId } = await params;
  const data = await getSingleService(serviceId);
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
            <div className="flex justify-start items-center gap-4">
              <Input placeholder="Message us" className="bg-white" />
              <Button>Contact us</Button>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div>
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <Input placeholder="Name" id="name" className="bg-white" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Input placeholder="Email" id="email" className="bg-white" />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="text-sm">
                Mobile Number
              </label>
              <Input
                placeholder="Mobile Number"
                id="mobileNumber"
                className="bg-white"
              />
            </div>
            <div>
              <label htmlFor="quantityPrice" className="text-sm">
                Service
              </label>
              <Input placeholder="Service" list="serviceList" className="" />
              <datalist id="serviceList">
                <option value="digital marketing">Digital Marketing</option>
                <option value="Event Management">Event Management</option>
                <option value="Business Consultancy">
                  Business Consultancy
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Embroidery">Embroidery</option>
                <option value="Haj and Umrah">Haj & Umrah</option>
                <option value="other">Other</option>
              </datalist>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="requirements" className="text-sm">
                Details
              </label>
              <Textarea
                id="requirements"
                placeholder="Details"
                className="bg-white"
              />
            </div>
            <Button className="md:col-span-2">Send Enquiry</Button>
          </div>
        </div>
        <ExploreMoreService/>
      </div>
        <PageFooter/>
    </section>
  );
}

export const revalidate = 30;
