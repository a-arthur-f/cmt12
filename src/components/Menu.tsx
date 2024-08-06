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
              <a href="/boxe">
                Boxe 
              </a>
            </NavItem>
            <NavItem>
              <a href="/muaythai">
                Muay Thai 
              </a>
            </NavItem>
            <NavItem>
              <a href="/jiujitsu">
                Jiu Jitse 
              </a>
            </NavItem>
            <NavItem>
              <a href="/lutalivre">
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
