import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';

interface CustomCardProps {
  title?: string;
  href: string;
  img: string;
  imgDesk?: string;
  children?: React.ReactNode; 
}

function CustomCard({ title, href, img, children, imgDesk }: CustomCardProps) {
  return (
    <Card 
      className="border-none 
      overflow-hidden 
      bg-primary 
      text-white 
      flex flex-col"
    >
      <CardHeader className="p-0 space-y-8 mb-8">
        <div className="h-[428px] md:h-full md:max-h-[840px] overflow-hidden">
          <img className="w-full min-h-[428px] md:hidden" src={img} />
          <img className="w-full min-h-[428px] md:block" src={imgDesk ? imgDesk : img} />
        </div>
        {title && 
          <CardTitle className="lato-light text-[32px] uppercase px-6">
            {title}
          </CardTitle>
        }
      </CardHeader>
      <CardContent className="py-0 px-6">
        {children} 
      </CardContent>
      <CardFooter className="flex justify-center mt-8">
        <a href={href.replace(/\s/g, '')} className="underline">SAIBA MAIS</a>
      </CardFooter>
    </Card>
  )
}

export default CustomCard;
