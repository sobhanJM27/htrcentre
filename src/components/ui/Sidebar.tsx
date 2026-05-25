import { navbarTabs } from "@/constants/navbarTabs";
import NavbarTab from "./NavbarTab";
import { cn } from "@/lib/utils";
import BackDrop from "./BackDrop";
import Close from "./icons/Close";
import type { booleanStateHandleType } from "@/types/stateFnsTypes";
import IconWrapper from "./IconWrapper";
import { Logo } from "./Logo";
import Slogan from "./Slogan";

type SidebarProps = {
  open: boolean;
  setOpen: booleanStateHandleType;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "hidden fixed top-0 left-0 z-40 w-64 bg-sidebar-background text-sidebar-foreground rounded-xl max-sidebar:flex flex-col gap-2 border-2 border-sidebar-border opacity-0 translate-x-full transition-all duration-300",
          { "opacity-100 translate-x-0 z-50": open },
        )}
      >
        <div className="flex justify-between items-start p-6 border-b border-border">
          <div className="flex flex-col gap-2">
            <Logo src="./logo.png" size="2rem" />
            <Slogan />
          </div>
          <button onClick={() => setOpen(false)}>
            <IconWrapper hasHoverEffect={false} className="p-2">
              <Close className="w-5 h-5" />
            </IconWrapper>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
          {navbarTabs.map((item) => (
            <NavbarTab
              key={item.id}
              url={item.path}
              text={item.name}
              place="sidebar"
            />
          ))}
        </ul>
      </aside>
      <BackDrop open={open} setOpen={setOpen} />
    </>
  );
};

export default Sidebar;
