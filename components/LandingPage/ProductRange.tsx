import { getProductData } from "@/lib/getData";
import ProductCard from "../Product/ProductCard";


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
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 30;
