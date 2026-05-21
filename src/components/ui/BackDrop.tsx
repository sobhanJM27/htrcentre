import type { booleanStateHandleType } from "@/types/stateFnsTypes";
import { cn } from "../../lib/utils";

export type BackdropProps = {
  open: boolean;
  setOpen: booleanStateHandleType;
};

const BackDrop = ({ open, setOpen }: BackdropProps) => {
  return (
    <div
      className={cn(
        "hidden fixed top-0 left-0 w-full h-full bg-black/10 z-30",
        open && "block",
      )}
      onClick={() => setOpen(false)}
    ></div>
  );
};

export default BackDrop;
