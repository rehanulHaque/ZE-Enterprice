import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { ServiceType } from "@/types";

export default function ServiceCarousel({ data }: { data: ServiceType[] }) {
  return (
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
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`/services/${item.link}`}>
                <Card className="">
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    <div>
                      <Image
                        src={item.serviceImage.url}
                        height={300}
                        width={300}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="font-semibold text-lg mt-4">{item.title}</h3>
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
  );
}
