// src/components/ContactItem.tsx
import { cn } from "@/lib/utils";
import IconWrapper from "./IconWrapper";
import SocialIcon, { type SocialIconProps } from "./SocialIcon";
import { shadows } from "@/constants/styles";

type ContactItemProps = {
  icon: SocialIconProps["icon"];
  mainHref: string;
  children: React.ReactNode;
};

const ContactItem = ({ icon, mainHref, children }: ContactItemProps) => {
  return (
    <div className="group flex items-center gap-4">
      <IconWrapper className="rounded-full group-hover:scale-110">
        <SocialIcon href={mainHref} icon={icon} />
      </IconWrapper>
      <div
        className={cn(
          "flex flex-wrap gap-x-2 text-muted dark:text-foreground",
          shadows.text,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ContactItem;
