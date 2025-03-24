"use client";
import { LayoutGrid, LayoutList } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: string;
  title: string;
  price: number;
  link: string;
  description: string;
  productImage: [
    {
      url: string;
    }
  ];
}

export default function ProductDetails(data: { data: ProductType[] }) {
  const [layout, setLayout] = useState<"grid" | "flex">("grid");

  return (
    <div>
      <div className="p-2 w-full flex justify-between bg-[#f3f3f3]">
        <div className="hidden md:flex gap-4 items-center">
          <Button
            onClick={() => setLayout("grid")}
            variant={"outline"}
            className={`${layout === "flex" ? "" : "bg-[#5a8ddc]"}`}
          >
            <LayoutGrid />
          </Button>
          <Button
            onClick={() => setLayout("flex")}
            variant={"outline"}
            className={`${layout === "flex" ? "bg-[#5a8ddc]" : ""}`}
          >
            <LayoutList />
          </Button>
        </div>
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold text-[#5a8ddc]">Products</h1>
        </div>
      </div>
      <div>
        <div
          className={`grid grid-cols-1 ${
            layout === "grid" ? "md:grid-cols-3" : "md:grid-cols-1 "
          } gap-4 mt-4 m-4 md:m-0`}
        >
          {data.data.map((product) => (
            <div
              className="overflow-hidden shadow-xl bg-[#f3f3f3]"
              key={product.id}
            >
              <Link
                href={`/product/${product.link}`}
                className={`shadow-2xl items-center  border border-gray-300 grid ${
                  layout === "grid" ? "md:grid-cols-1 gap-2" : "md:grid-cols-4"
                }`}
              >
                <Image
                  src={product.productImage[0].url}
                  width={200}
                  height={200}
                  alt={product.title}
                  className={`w-full object-fill hover:scale-105 transition-all ${
                    layout === "grid" ? "" : "md:col-span-1"
                  }`}
                />
                <div
                  className={`w-full px-4 mb-3 ${
                    layout === "grid" ? "" : "md:col-span-3"
                  }`}
                >
                  <p className="font-semibold text-xl text-[#5a8ddc]">
                    {product.title}
                  </p>
                  {layout === "grid" ? (
                    ""
                  ) : (
                    <p className="text-gray-700">{product.description}</p>
                  )}
                  <div className="flex gap-4">
                    <p className="hidden md:blockline-through text-gray-700">
                      {product.price + 20}
                    </p>
                    <p>{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
