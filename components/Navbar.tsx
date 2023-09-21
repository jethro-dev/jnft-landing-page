import React from "react";
import { Button } from "@/components";
import Link from "next/link";

type Props = {};
type NavLinkType = {
  id: string;
  href: string;
  name: string;
};
const navLinks: NavLinkType[] = [
  { id: "home", href: "/", name: "Home" },
  { id: "auctions", href: "/auctions", name: "Auctions" },
  { id: "marketplacae", href: "/marketplace", name: "Marketplace" },
  { id: "about", href: "/about", name: "About" },
];

const Navbar = (props: Props) => {
  return (
    <nav className="h-16 border-b border-tertiary px-10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="h-full max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className="h-full flex items-center justify-center">
          <span>LOGO</span>
        </div>

        <div className="h-full flex items-center gap-8">
          <div className="h-full flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItems {...link} />
            ))}
          </div>
          <Button name="Collect Wallet" />
        </div>
      </div>
    </nav>
  );
};

const NavItems = ({ id, href, name }: NavLinkType) => {
  return (
    <Link key={id} href={href} className="hover:text-white hover:scale-110">
      {name}
    </Link>
  );
};
export default Navbar;
