import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog';

interface CustomCarouselProps {
  imgs: string[];
}

function ImageCoursel({ imgs }: CustomCarouselProps) {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <Dialog>
              <DialogTrigger>
                <img src={img} />
              </DialogTrigger>
              <DialogContent className="p-0 border-none min-w-[50%]">
                <img src={img}/>
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))} 
      </CarouselContent>
      <CarouselPrevious className="left-1 bg-transparent"/>
      <CarouselNext className="right-1 bg-transparent"/>
    </Carousel>
  );
}

export default ImageCoursel;
