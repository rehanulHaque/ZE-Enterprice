import { HomePageData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageFooter() {
  return (
    <div className="w-full  mt-4 md:mt-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-8">
        <div className="order-last md:order-first">
          <p>
            All Rights Reserved. <b>ZE Exports International</b>
          </p>
          <p className="text-xs">
            Developed & Managed By{" "}
            <Link href={"https://mdrehanulhaque.vercel.app/"} target="_blank">
              Md Rehanul Haque
            </Link>
            .
          </p>
        </div>
        <div className="flex justify-between items-center">
            
        <div className="grid grid-cols-1 md:grid-cols-4 order-first md:order-last">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/contact"}>Contact us</Link>
        </div>
        <div>
                <Image src={HomePageData.mainLogo.src} alt={HomePageData.mainLogo.alt} height={80} width={80} className="md:hidden rounded-full"/>
            </div>
        </div>
      </div>
    </div>
  );
}
