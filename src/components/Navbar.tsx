import { useState } from "react";
import DesktopNav from "./ui/DesktopNav";
import MobileNav from "./ui/MobileNav";
import Sidebar from "./ui/Sidebar";
import { cn } from "@/lib/utils";
import { shadows } from "@/constants/styles";

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
      <DesktopNav />
      <MobileNav setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
