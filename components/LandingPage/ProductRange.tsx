import { ProductTypes } from "@/types";
import request from "graphql-request";
import Image from "next/image";
import Link from "next/link";

const getProductData = async () => {
  const data = (await request(
    process.env.HYGRAPH_API_KEY!,
    `
    query getProducts {
      products {
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
    <div className="mt-8">
      <div className="py-4 md:py-6 w-full bg-black text-center">
      <h1 className="text-white text-2xl md:text-4xl font-bold">
          Product Range
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-8 gap-4 mt-8 md:mt-16 md:gap-8 md:max-w-5xl md:mx-auto">
        {products.map((product) => (
          <div
            className="flex flex-col shadow-2xl hover:scale-105 transition-all items-center gap-2 border border-gray-300 bg-purple-400 rounded-md"
            key={product.id}
          >
            <Image
              src={product.productImage[0].url}
              width={200}
              height={200}
              alt={product.title}
              className="w-full object-fill"
            />
            <div className="flex justify-between items-center w-full px-4 mb-3">
              <p className="font-semibold text-lg">{product.title}</p>
              <Link
                href={`/product/${product.link}`}
                className="text-sm text-white"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 30