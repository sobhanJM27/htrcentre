import type { booleanStateHandleType } from "@/types/stateFnsTypes";
import ThemeToggle from "../ThemeToggle";
import Hamburger from "./icons/Hamburger";

export type MobileNavProps = {
  setOpen: booleanStateHandleType;
};

const MobileNav = ({ setOpen }: MobileNavProps) => {
  return (
    <nav className="flex md:hidden justify-between items-center">
      <div className="z-40">
        <ThemeToggle />
      </div>
      <span className="font-semibold text-lg text-background dark:text-foreground">
        HTRCentre
      </span>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{ touchAction: "manipulation" }} 
        className="relative z-100 touch-manipulation cursor-pointer"
      >
        <Hamburger className="w-6 h-6 text-muted-foreground dark:text-foreground" />
      </button>
    </nav>
  );
};

export default MobileNav;
