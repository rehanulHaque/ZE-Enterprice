import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { ProductTypes, ServicesTypes } from "@/types";
  import request from "graphql-request";
  import Image from "next/image";
  import Link from "next/link";
  
  const getMoreProducts = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query MyQuery {
  services(first: 6) {
    description
    details {
      raw
    }
    id
    link
    title
    serviceImage {
      url
    }
  }
}
        `
    )) as ServicesTypes;
    return data.services;
  };
  
  export default async function ExploreMoreService() {
    const data = await getMoreProducts();
    return (
      <div className="mx-4 md:max-w-5xl md:mx-auto mt-8 md:mt-16 shadow-md rounded-xl bg-[#f3f3f3]">
        <h1 className="font-bold text-2xl my-2 text-center pt-2 text-gray-900">
          Explore More <span className="text-[#5a8ddc]" >Services</span>
        </h1>
  
        <div className="relative px-8 py-4 shadow-md"> {/* Add padding for arrows */}
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1, // Scroll 1 item at a time
            }}
            className="w-full"
          >
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 bg-[#f3f3f3]" // 1 item on mobile, 2 on tablet, 3 on desktop
                >
                  <Link href={`/services/${item.link}`}>
                    <Image
                      src={item.serviceImage.url}
                      alt={item.title}
                      height={200}
                      width={200}
                      className="w-full h-auto shadow-md"
                    />
                    <h2 className="text-lg font-semibold py-2 text-center bg-[#dee8f8]">{item.title}</h2>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Arrows */}
            <CarouselPrevious className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-[#5a8ddc]" />
            <CarouselNext className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-[#5a8ddc]" />
          </Carousel>
        </div>
      </div>
    );
  }

  export const revalidate = 30