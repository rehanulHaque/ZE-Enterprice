import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { serviceData } from '@/data/service'
import { Card, CardContent } from '../ui/card'

export default function testamonial() {
  return (
    <div>
          <div className="text-center mt-4 md:mt-8">
            <h1 className="text-2xl md:text-4xl font-bold text-[#5a8ddc]">
              Testamonials
            </h1>
          </div>
          <div className="mt-4 md:mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {serviceData.testamonial.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full">
                      <CardContent className="flex flex-col justify-between p-6 h-full">
                        <div>
                          <p className="text-gray-600 mb-4 italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="mt-4">
                          <h3 className="font-semibold text-lg">
                            {testimonial.username}
                          </h3>
                          <p className="text-gray-500">
                            {testimonial.companyName}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
  )
}
