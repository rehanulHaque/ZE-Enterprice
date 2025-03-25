import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import request from "graphql-request";
import { ServicesTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";

const getMoreServices = async () => {
  const data = (await request(
    process.env.HYGRAPH_API_KEY!,
    `
        query MyQuery {
  services(first: 6) {
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

export default async function OurServices() {
  const data = await getMoreServices();
  return (
    <div className="mt-4 mx-8 md:max-w-5xl md:mx-auto md:mt-6">
      <div className="pt-2 md:pt-4 w-full text-center">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          <span className="text-[#5a8ddc]">Our</span> Services
        </h1>
      </div>

      <div>
        <div className="mt-4 md:mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={`/services/${item.link}`}>
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-between p-6 h-full">
                        <div>
                          <Image
                            src={item.serviceImage.url}
                            height={300}
                            width={300}
                            alt={item.title}
                          />
                        </div>
                        <h3 className="font-semibold text-lg mt-4">
                          {item.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
