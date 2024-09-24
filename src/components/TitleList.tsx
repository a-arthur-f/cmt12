import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface TitleListProps {
  federation: string;
  titles: Title[];
}

export interface Title {
  campeonato: string;
  data: string;
  divisaoPeso: string;
  divisaoIdade: string;
  posicao: string | number;
}

function TitleList({ federation, titles }: TitleListProps) {
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
        <CollapsibleTrigger className="flex justify-between items-center" asChild>
          <div>
            <h3 className="text-2xl capitalize text-center">{federation}</h3>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <ul className="">
            {titles.map((title, index) => (
              <li key={index} className="py-3">
                {title.campeonato}
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    )
}

export default TitleList;
