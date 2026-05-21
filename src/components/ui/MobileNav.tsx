import type { booleanStateHandleType } from "@/types/stateFnsTypes";
import ThemeToggle from "../ThemeToggle";
import Hamburger from "./icons/Hamburger";

export type MobileNavProps = {
  setOpen: booleanStateHandleType;
};

const MobileNav = ({ setOpen }: MobileNavProps) => {
  return (
    <nav className="flex md:hidden justify-between items-center z-10000">
      <div className="z-40">
        <ThemeToggle />
      </div>
      <span className="font-semibold text-lg text-background dark:text-foreground">HTRCentre</span>
      {/* <div className="flex items-center gap-3"> */}
      {/* <Link
          to="/login"
          className="text-sm hover:text-muted-foreground! transition-all duration-300"
        >
          Sign In
        </Link> */}
      <button onClick={() => setOpen((prev) => !prev)}>
        <Hamburger className="w-6 h-6 text-muted-foreground dark:text-foreground" />
      </button>
      {/* </div> */}
    </nav>
  );
};

export default MobileNav;
