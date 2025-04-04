import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface HoursListProps {
  hours: string[];
}

function HoursList({ hours }: HoursListProps) {
    const [isOpen, setIsOpen] = useState(false);

    return(
      <Collapsible 
        open={isOpen} 
        onOpenChange={setIsOpen}
        className=" 
          py-4
          px-8
          rounded-lg 
          border-solid 
          border-white
          bg-primary"
      >
        <CollapsibleTrigger className="
          flex justify-center items-center gap-3 
          cursor-pointer 
          border-b-2 border-white 
          w-fit 
          mx-auto" 
          asChild
        >
          <div>
            <h3 className="text-3xl text-center">HORÁRIOS</h3>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 w-full">
          <ul className="flex flex-col gap-4 w-full mt-6">
            {hours.map((hour, index) => (
              <li 
                key={index}
                className="text-2xl capitalize 
                lato-light 
                py-4
                rounded-lg 
                border
                border-solid 
                border-white"
              >
                {hour}
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    )
}

export default HoursList;
