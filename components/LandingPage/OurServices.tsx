import ServiceCarousel from "../ServiceCarousel";
import { getServicesForCarousel } from "@/lib/getData";

export default async function OurServices() {
  const data = await getServicesForCarousel();
  return (
    <div className="mt-4 mx-8 md:max-w-5xl md:mx-auto md:mt-6">
      <div className="pt-2 md:pt-4 w-full text-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          <span className="text-[#5a8ddc]">Our</span> Services
        </h1>
      </div>
      {data && <ServiceCarousel data={data}/>}
    </div>
  );
}
