import { ProductTypes } from "@/types";
import request from "graphql-request";
import Image from "next/image";
import Link from "next/link";

const getProductData = async () => {
  const data = (await request(
    process.env.HYGRAPH_API_KEY!,
    `
    query getProducts {
      products(first: 9) {
        id
        title
        link
        productImage {
          url
        }
      }
    }
    `
  )) as ProductTypes;
  return data.products;
};

export default async function ProductRange() {
  const products = await getProductData();
  return (
    <div className="">
      <div className="py-2 w-full text-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          <span className="text-[#5a8ddc]">Product</span> Range
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-8 gap-4 mt-4 md:mt-8 md:gap-8 md:max-w-5xl md:mx-auto">
        {products.map((product) => (
          <div
            className="overflow-hidden shadow-xl bg-[#f3f3f3]"
            key={product.id}
          >
            <Link
              href={`/product/${product.link}`}
              className="flex flex-col shadow-2xl items-center gap-2 border border-gray-300"
            >
              <Image
                src={product.productImage[0].url}
                width={200}
                height={200}
                alt={product.title}
                className="w-full object-fill hover:scale-105 transition-all"
              />
              <div className="flex justify-between items-center w-full px-4 mb-3">
                <p className="font-semibold text-lg text-[#5a8ddc]">
                  {product.title}
                </p>
                <p>View Product</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 30;
