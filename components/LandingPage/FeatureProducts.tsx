import request from "graphql-request";
import { ProductTypes } from "@/types";
import OpenModalButton from "../OpenModalButton";
import Image from "next/image";

const getFeatureProduct = async() => {
  const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getProducts {
         products(first: 2) {
          id
          title
          description
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
    <div className="my-2 md:my-8">
      <div className="pt-2 md:pt-4 w-full text-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          <span className="text-[#5a8ddc]">Feature</span> Product
        </h1>
      </div>
      {/* Main Container */}
      <div className="mt-4 mx-8 md:max-w-5xl md:mx-auto md:mt-6">
        {/* Loop */}
        {data.map((item, idx) => (
          <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 ${
            idx % 2 == 0 ? "" : "md:[direction:rtl]"
          } `}
           key={item.id}
        >
          {/* left */}
          <div className="p-8 rounded-xl bg-[#dee8f8] flex items-center justify-center w-full">
            <div>
              <Image height={250} width={300} alt={item.title} src={item.productImage[0].url} className="object-fill h-[250px] md:h-[300px] rounded-xl" />
            </div>
          </div>
          {/* right */}
          <div className="p-8 rounded-xl bg-[#dee8f8] flex items-center justify-center w-full text-left aspect-square">
            <div className="space-y-1 bg-[#f3f3f3] p-4 md:p-8 h-[250px] md:h-[300px] rounded-xl">
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

export const revalidate = 30