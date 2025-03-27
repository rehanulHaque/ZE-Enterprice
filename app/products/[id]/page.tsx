/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import ProductContact from "@/components/Forms/ProductContact";
import QuickEnquiryForm from "@/components/Forms/QuickEnquiryForm";
import PageFooter from "@/components/PageFooter";
import ProductCarousel from "@/components/ProductCarousel";
import { getProductsForCarousel, getSingleProduct } from "@/lib/getData";
import Image from "next/image";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;
  const data = await getSingleProduct(productId);
  const dataforCarousel = await getProductsForCarousel();
  return (
    <section>
      <div className="mx-4 md:max-w-5xl md:mx-auto  flex flex-col md:flex-row gap-4 items-center justify-center md:justify-evenly mt-8 md:mt-16 p-4 rounded-xl shadow-md bg-[#f3f3f3]">
        <div>
          <Image
            src={data?.productImage[0].url! || ""}
            height={300}
            width={300}
            alt={data?.title || ""}
          />
        </div>
        <div className="flex flex-col gap-4">
          <QuickEnquiryForm id={data?.id} type="product"/>
          <div>
            <h1 className="font-bold text-2xl my-2">{data?.title || ""}</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">Material</td>
                    <td className="px-6 py-4">{data?.material || ""}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">Feature</td>
                    <td className="px-6 py-4">{data?.feature || ""}</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">Description</td>
                    <td className="px-6 py-4">{data?.description || ""}</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold text-2xl my-2">
                Preferred Buyer From
              </p>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">Location</td>
                    <td className="px-6 py-4">All Country</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 md:max-w-5xl md:mx-auto  mt-8 md:mt-16 p-4 rounded-xl shadow-md bg-[#f3f3f3]">
        <h1 className="font-bold text-2xl my-2 text-center text-gray-900">
          Looking for{" "}
          <span className="text-[#5a8ddc]">{data?.title || ""}?</span>
        </h1>
        <ProductContact productId={data?.id}/>
      </div>

      <div className="mx-4 md:max-w-5xl md:mx-auto mt-6 md:mt-8">
        <h1 className="font-bold text-2xl my-2 text-center pt-2 text-gray-900">
          Explore More <span className="text-[#5a8ddc]">Products</span>
        </h1>
        {dataforCarousel && <ProductCarousel data={dataforCarousel} />}
      </div>
      <PageFooter />
    </section>
  );
}

export const revalidate = 30;
