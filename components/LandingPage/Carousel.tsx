"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import Image from "next/image";
  import Autoplay from "embla-carousel-autoplay"
  
  
  
  export default function ImageCarousel(data: {data: any[]}) {
    return (
      <div className="w-full shadow-xl h-[300px] md:w-[350px]">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 1500,
              // jump: true
            })
          ]}
        >
          <CarouselContent className="">
            {data.data.map((item: any) => (
              <CarouselItem key={item.id} className="basis-full">
                <div className="">
                  <Image
                    src={item.productImage[0].url}
                    alt={item.id}
                    height={300}
                    width={300}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }