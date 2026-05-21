import { Link } from "react-router-dom";
import { navbarTabs } from "@/constants/navbarTabs";
import ThemeToggle from "../ThemeToggle";
import NavbarTab from "./NavbarTab";
import { Logo } from "./Logo";
import Slogan from "./Slogan";

const DesktopNav = () => {
  return (
    <nav className="relative hidden md:flex justify-between items-center h-12 z-10000 rounded-2xl">
      <div className="flex gap-1 items-center">
        <Link to="/">
          <Logo src="/logo.png" size="3.5rem" />
        </Link>
        <Slogan className="text-lg" />
      </div>
      <ul className="absolute left-3/7 -translate-x-1/2 flex gap-6">
        {navbarTabs.map((item) => (
          <NavbarTab
            key={item.id}
            url={item.path}
            text={item.name}
            place="navbar"
          />
        ))}
      </ul>
      {/* <Link to="/login">
        <span className="font-semibold hover:text-muted-foreground transition-all duration-300">
        Sign In
        </span>
        </Link> */}
      <ThemeToggle />
    </nav>
  );
};

export default DesktopNav;
