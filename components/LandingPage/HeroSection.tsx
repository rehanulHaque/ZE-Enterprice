import React from 'react'
import ImageCarousel from './Carousel'
import { HomePageData } from '@/data'
import request from 'graphql-request';
import { CarouselTypes } from "@/types";

const getMoreProducts = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getProducts {
           products(first: 8) {
            id
            productImage {
              url
            }
          }
        }
        `
    )) as CarouselTypes;
    return data.products;
  };

export default async function HeroSection() {
  const data = await getMoreProducts()
  return (
    <div className="flex md:justify-between flex-col md:flex-row md:items-center gap-8 px-4 md:px-28 py-4 md:py-28">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold mt-8 sm:mt-12 text-xl sm:text-3xl w-full md:max-w-3xl mx-auto">{HomePageData.heroTitle}</h1>
          <p className="mt-3">{HomePageData.heroSubtitle}</p>
        </div>
        <ImageCarousel data={data} />
      </div>
  )
}

export const revalidate = 30