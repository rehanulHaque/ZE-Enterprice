"use client"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';



export default function ImageCarousel() {
    const images = [
        { id: 1, src: "/product-images/13.jpg", alt: "Image 1" },
        { id: 1, src: "/product-images/23.jpg", alt: "Image 1" },
        { id: 1, src: "/product-images/27.jpg", alt: "Image 1" },
        { id: 1, src: "/product-images/8.jpg", alt: "Image 1" },
        { id: 1, src: "/product-images/9.jpg", alt: "Image 1" },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('next');
  const slideInterval = 3000;

  useEffect(() => {
    let interval = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, slideInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, images.length]);
  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="relative w-full md:w-1/2 max-w-3xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-lg shadow-xl h-64 bg-gray-100">
        {/* Current slide */}
        <div className="h-full w-full">
          <Image
            fill 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className={`w-full h-full object-cover absolute transition-transform duration-500 ${
              slideDirection === 'next' ? 'animate-slide-left' : 'animate-slide-right'
            }`}
            style={{
              transform: 'translateX(0)'
            }}
          />
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
          onClick={prevSlide}
        >
          <ArrowLeft/>
        </button>
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
          onClick={nextSlide}
        >
          <ArrowRight/>
        </button>
        
        {/* Play/Pause button */}
        {/* <button 
          className="absolute top-2 right-2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
          onClick={togglePlayPause}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button> */}
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 mt-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-100 ease-linear"
          style={{ 
            width: `${(currentIndex / (images.length - 1)) * 100}%`,
          }}
        />
      </div>
      
      {/* Indicator dots */}
      {/* <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  )
}
