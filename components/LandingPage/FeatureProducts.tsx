import request from "graphql-request";
import { ProductTypes } from "@/types";
import OpenModalButton from "../OpenModalButton";
import Image from "next/image";

const getFeatureProduct = async() => {
  const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getProducts {
         products(first: 4) {
          id
          title
          description
          price
          link
          productImage {
            url
          }
          material
          feature
        }
      }
      `
    )) as ProductTypes
    return data.products
}

export default async function FeatureProducts() {
  const data = await getFeatureProduct()
  return (
    <div className="my-5 md:my-16 bg-white">
      <div className="py-4 md:py-6 w-full bg-black text-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Feature Product
        </h1>
      </div>
      {/* Main Container */}
      <div className="mt-8 mx-8 md:max-w-5xl md:mx-auto md:mt-10">
        {/* Loop */}
        {data.map((item, idx) => (
          <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 ${
            idx % 2 == 0 ? "" : "md:[direction:rtl]"
          } `}
           key={item.id}
        >
          {/* left */}
          <div className="p-8 rounded-xl bg-purple-400 flex items-center justify-center w-full aspect-square">
            <div>
              <Image alt={item.title} fill src={item.productImage[0].url} className="object-fill h-[250px] md:h-[300px] rounded-xl" />
            </div>
          </div>
          {/* right */}
          <div className="p-8 rounded-xl bg-purple-400 flex items-center justify-center w-full text-left aspect-square">
            <div className="space-y-1 bg-white p-4 md:p-8 h-[250px] md:h-[300px] rounded-xl">
              <h1 className="font-bold text-2xl">{item.title} <div className="w-fit h-0.5 bg-black mb-1"></div></h1>
              <p>
                <b>Material</b>: {item.material}
              </p>
              <p>
                <b>Feature</b>: {item.feature}
              </p>
              <p>
                <b>Description</b>: {item.description}
              </p>
              <OpenModalButton id={item.id} image={item.productImage[0].url}/>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}