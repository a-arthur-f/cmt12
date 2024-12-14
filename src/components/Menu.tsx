import {
  Drawer,
  DrawerTrigger,
  DrawerContent
} from '@/components/ui/drawer';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

function Menu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <i className="fa-solid fa-bars"></i>
      </DrawerTrigger>
      <DrawerContent className="w-3/4 h-full left-auto right-0 rounded-none bg-primary border-none">
        <nav>
          <ul className="uppercase">
            <NavItem>
              <a href="/equipe">
                A equipe 
              </a>
            </NavItem>
            <NavItem>
              <a href="/o-mestre">
                O mestre 
              </a>
            </NavItem>
            <NavItem>
              <Accordion type="single" collapsible className="border-none">
                <AccordionItem value="treinos" className="border-none">
                  <AccordionTrigger className="p-0 uppercase">Treinos</AccordionTrigger> 
                  <AccordionContent>
                    <ul className="space-y-2 pt-5 pl-2 text-2xl">
                      <li>
                        <a href="/boxe">
                          Boxe 
                        </a>
                      </li>
                      <li>
                        <a href="/muaythai">
                          Muay Thai 
                        </a>
                      </li>
                      <li>
                        <a href="/jiujitsu">
                          Jiu Jitsu 
                        </a>
                      </li>
                      <li>
                        <a href="/lutalivre">
                          Luta Livre 
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </NavItem>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="py-4 px-6 text-white text-3xl border-b border-secondary">
      {children}
    </li>
  );
}

export default Menu;
