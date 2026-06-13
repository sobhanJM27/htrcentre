import { useState } from "react";
import MobileNav from "./ui/MobileNav";
import Sidebar from "./ui/Sidebar";
import { cn } from "@/lib/utils";
import { shadows } from "@/constants/styles";
import { Link } from "react-router-dom";
import Slogan from "./ui/Slogan";
import Image from "./ui/Image";
import { navbarTabs } from "@/constants/navbarTabs";
import NavbarTab from "./ui/NavbarTab";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "bg-primary-foreground sticky top-0 w-full p-4 z-50",
        shadows.navbar,
      )}
    >
      <Sidebar open={open} setOpen={setOpen} />
      <nav className="hidden md:flex items-center h-12 rounded-2xl gap-5">
        <div className="flex flex-1 items-center gap-1">
          <Link to="/">
            <Image src="/logo.png" size="3.5rem" />
          </Link>
          <Slogan className="text-lg" />
        </div>
        <ul className="flex justify-center gap-6">
          {navbarTabs.map((item) => (
            <NavbarTab
              key={item.id}
              url={item.path}
              text={item.name}
              place="navbar"
            />
          ))}
        </ul>
        <div className="flex flex-1 justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <MobileNav setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
