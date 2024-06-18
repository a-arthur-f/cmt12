import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface CustomCarouselProps {
  imgs: string[];
}

function ImageCoursel({ imgs }: CustomCarouselProps) {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index}>
            <img src={img} />
          </CarouselItem>
        ))} 
      </CarouselContent>
      <CarouselPrevious className="left-1 bg-transparent"/>
      <CarouselNext className="right-1 bg-transparent"/>
    </Carousel>
  );
}

export default ImageCoursel;
