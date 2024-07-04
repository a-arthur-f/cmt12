import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from '@/components/ui/drawer';

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
              <a href="/equipe" className="underline">
                A equipe 
              </a>
            </NavItem>
            <NavItem>
              <a href="/o-mestre" className="underline">
                O mestre 
              </a>
            </NavItem>
            <NavItem>
              <a href="/boxe" className="underline">
                Boxe 
              </a>
            </NavItem>
            <NavItem>
              <a href="/muaythai" className="underline">
                Muay Thai 
              </a>
            </NavItem>
            <NavItem>
              <a href="/jiujitsu" className="underline">
                Jiu Jitse 
              </a>
            </NavItem>
            <NavItem>
              <a href="/lutalivre" className="underline">
                Luta Livre 
              </a>
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
