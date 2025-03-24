import PageFooter from "@/components/PageFooter";
import Pagination from "@/components/Pagination";
import ProductDetails from "@/components/Product/ProductDetails";
import { getProducts } from "@/lib/getData";

export default async function page({searchParams}: {searchParams: Promise<{page: string | string[] | undefined}>}) {
  const page = (await searchParams).page
  const currentPage =  typeof page === 'string' ? parseInt(page) : 1;
  const itemsPerPage = 12;

  const { products, totalCount } = await getProducts(currentPage, itemsPerPage);
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <section className="">
      <div className="w-full md:max-w-5xl md:mx-auto py-4">
        {products && <ProductDetails data={products} />}
        <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
      />
      </div>
      <PageFooter />
    </section>
  );
}
