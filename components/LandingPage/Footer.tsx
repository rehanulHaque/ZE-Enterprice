import { HomePageData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-8 mt-8 w-full bg-purple-400">
      <div className="flex flex-col md:justify-between items-center gap-8 md:gap-0 w-full md:max-w-5xl mx-auto">
      <div>
        <Image
          src={HomePageData.mainLogo.src}
          alt={HomePageData.mainLogo.alt}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex md:gap-16">
        {HomePageData.footerData.map((footerData) => (
          <div key={footerData.id}>
            <h1 className="font-bold text-lg mb-4">{footerData.title}</h1>
            <div className="grid grid-cols-2 gap-2">
              {footerData.links.map((link) => (
                <Link href={link.href} key={link.id}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
