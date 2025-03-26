import PageFooter from "@/components/PageFooter";
import ProductCarousel from "@/components/ProductCarousel";
import Table from "@/components/Table";
import { aboutData } from "@/data/about";
import {
  getProductNames,
  getProductsForCarousel,
  getServicesNames,
} from "@/lib/getData";
import Link from "next/link";
import React from "react";

export default async function page() {
  const moreProducts = await getProductsForCarousel();
  const productNames = await getProductNames();
  const servicesNames = await getServicesNames();
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-full w-full md:max-w-5xl md:mx-auto">
        <div className="md:col-span-5 p-4">
          <h1 className="text-[#5a8ddc] text-2xl font-bold py-3">About us</h1>
          <p>{aboutData.mainPara}</p>
          <h2 className="text-[#5a8ddc] text-2xl font-bold py-3">
            {aboutData.whyBuy.title}
          </h2>
          <ul className="flex flex-col gap-2">
            {aboutData.whyBuy.details.map((item) => (
              <li key={item.id}>
                <b>{item.title}</b> <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Table data={aboutData.tableData} />
          </div>

          <div>
            <h1 className="font-bold text-2xl my-2 text-center pt-2 text-gray-900">
              Explore More <span className="text-[#5a8ddc]">Products</span>
            </h1>
            <ProductCarousel data={moreProducts} />
          </div>

          {/* <ExploreMore /> */}
        </div>
        <div className="md:col-span-1 mt-12 p-8 md:p-0">
          <div className="border border-gray-500 p-2 bg-[#f3f3f3]">
            <h1 className="text-[#5a8ddc]">Products</h1>
            <div className="flex flex-col gap-3">
              {productNames?.map((item) => (
                <div key={item.id} className="border border-b-gray-500">
                  <Link href={`/products/${item.link}`} className="">
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-gray-500 p-2 bg-[#f3f3f3] mt-4">
            <h1 className="text-[#5a8ddc]">Services</h1>
            <div className="flex flex-col gap-3">
              {servicesNames?.map((item) => (
                <div key={item.id} className="border border-b-gray-500">
                  <Link href={`/services/${item.link}`} className="">
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
