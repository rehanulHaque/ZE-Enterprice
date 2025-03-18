/* eslint-disable @typescript-eslint/no-explicit-any */
import PageFooter from "@/components/PageFooter";
import ExploreMore from "@/components/Product/ExploreMore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SingleProductTypes } from "@/types";
import request from "graphql-request";
import Image from "next/image";
import React from "react";

const getProduct = async (id: string) => {
  try {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getSingleProduct {
    product(where: {link: "${id}"}) {
      id
      link
      feature
      description
      price
      material
      productImage {
        url
      }
      title
    }
  }
      `
    )) as SingleProductTypes;
    return data.product;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;
  const data = await getProduct(productId);
  return (
    <section>
      <div className="mx-4 md:max-w-5xl md:mx-auto  flex flex-col md:flex-row gap-4 items-center justify-center md:justify-evenly mt-8 md:mt-16 bg-purple-400 p-4 rounded-xl shadow-md">
        <div>
          <Image
            src={data?.productImage[0].url! || ""}
            height={300}
            width={300}
            alt={data?.title || ""}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-start items-center gap-4">
            <Input placeholder="Quantity" className="bg-white" />
            <Button>Get Best price</Button>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-2">{data?.title || ""}</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">Price</td>
                    <td className="px-6 py-4">{data?.price || ""}</td>
                  </tr>
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

      <div className="mx-4 md:max-w-5xl md:mx-auto  mt-8 md:mt-16 bg-purple-400 p-4 rounded-xl shadow-md">
        <h1 className="font-bold text-2xl my-2 text-center text-gray-900">
          Looking for {data?.title || ""}?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div>
            <label htmlFor="name" className="text-sm">Name</label>
            <Input placeholder="Name" id="name" className="bg-white" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <Input placeholder="Email" id="email" className="bg-white" />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="text-sm">Mobile Number</label>
            <Input
              placeholder="Mobile Number"
              id="mobileNumber"
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="quantityPrice" className="text-sm">Quantity</label>
            <div className="flex gap-4">
              <Input
                placeholder="Quantity"
                id="quantityPrice"
                className="bg-white"
              />
              <Input
                placeholder="Price"
                id="quantityPrice"
                className="bg-white"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="requirements" className="text-sm">Requirements Details</label>
            <Textarea
              id="requirements"
              placeholder="Requirements Details"
              className="bg-white"
            />
          </div>
          <Button className="md:col-span-2">Send Enquiry</Button>
        </div>
      </div>

      <ExploreMore/>
      <PageFooter/>
    </section>
  );
}
