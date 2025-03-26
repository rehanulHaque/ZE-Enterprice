import {
  Card,
  CardContent
} from "@/components/ui/card";
import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <Card>
      <Link href={`/products/${product.link}`}>
        <CardContent>
          <div>
            <Image
              src={product.productImage[0].url}
              width={200}
              height={200}
              alt={product.title}
              className="w-full object-fill hover:scale-105 transition-all"
            />
            <p className="font-semibold text-lg text-[#5a8ddc] mt-2">
                {product.title}
              </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
