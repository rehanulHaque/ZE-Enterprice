import PageFooter from "@/components/PageFooter";
import ExploreMore from "@/components/Product/ExploreMore";
import { ProductsNamesTypes } from "@/types";
import request from "graphql-request";
import Link from "next/link";
import React from "react";
const getProductNames = async () => {
  try {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getNamesProduct {
        products(first: 4) {
          id
          link
          title
        }
      }
      `
    )) as ProductsNamesTypes;
    return data.products;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default async function page() {
  const data = await getProductNames();
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-full w-full md:max-w-5xl md:mx-auto">
        <div className="md:col-span-5 p-4">
          <h1 className="text-[#5a8ddc] text-2xl font-bold py-3">About us</h1>
          <p>
            Welcome to ZE Enterprise, your one-stop destination for premium bulk
            products and professional services. We specialize in high-quality
            leather belts, mobile stands, leather jackets, cups, and more,
            catering to retailers, wholesalers, and businesses. Additionally, we
            offer expert digital marketing, event management, and consultancy
            services, helping businesses grow and succeed in a competitive
            market. At ZE Enterprise, we believe in quality, precision, and
            customer satisfaction. Every product in our collection is crafted
            with premium materials, ensuring durability, functionality, and
            style. Our services are designed to provide businesses with the
            right strategies, event execution, and expert advice to maximize
            growth and efficiency.
          </p>
          <h2 className="text-[#5a8ddc] text-2xl font-bold py-3">
            Why Buy from us?
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <b>Premium Quality Products</b>{" "}
              <p>
                We offer only the best, ensuring that every item in our
                inventory is crafted with precision and high-quality materials.
              </p>
            </li>
            <li>
              <b>Affordable Bulk Pricing</b>{" "}
              <p>
                We understand the importance of cost-effectiveness for
                businesses. Our competitive bulk pricing model ensures that you
                get the best value without compromising quality.
              </p>
            </li>
            <li>
              <b>Wide Product & Service Range</b>{" "}
              <p>
                From stylish leather goods to expert digital marketing, event
                management, and consultancy, we cover all your business needs.
              </p>
            </li>
            <li>
              <b>Fast Shipping & Reliable Support</b>{" "}
              <p>
                Timely delivery and dedicated assistance for a smooth
                experience.
              </p>
            </li>
            <li>
              <b>Business Growth Solutions</b>{" "}
              <p>
                Our expert consultancy and digital marketing services help
                businesses scale efficiently. <br /> <br />
              </p>
            </li>
          </ul>
          <p>
            At ZE Enterprise, we make bulk purchasing and business solutions
            simple, efficient, and cost-effective. Whether you need high-quality
            products, marketing expertise, or event management, we are here to
            support your growth. <br /> <br /> Partner with ZE Enterprise today and experience
            excellence in both products and services!
          </p>
          <div className="mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="odd:bg-[#f3f3f3] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <td className="px-6 py-4">Name</td>
                  <td className="px-6 py-4">Md Khalid Hussain</td>
                </tr>
                <tr className="odd:bg-[#f3f3f3] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <td className="px-6 py-4">Contact No.</td>
                  <td className="px-6 py-4">+91 80603171076</td>
                </tr>
                <tr className="odd:bg-[#f3f3f3] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <td className="px-6 py-4">Email</td>
                  <td className="px-6 py-4">example@gmail.com</td>
                </tr>
                <tr className="odd:bg-[#f3f3f3] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <td className="px-6 py-4">Location</td>
                  <td className="px-6 py-4">Sakri</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ExploreMore />
        </div>
        <div className="md:col-span-1 mt-12 p-8 md:p-0">
          <div className="border border-gray-500 p-2 bg-[#f3f3f3]">
            <h1 className="text-[#5a8ddc]">Products</h1>
            <div className="flex flex-col gap-3">
              {data?.map((item) => (
                <div key={item.id} className="border border-b-gray-500">
                  <Link href={`/product/${item.link}`} className="">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </section>
  );
}
