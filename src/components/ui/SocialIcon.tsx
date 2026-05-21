export type SocialIconProps = {
  href: string;
  icon: React.ReactNode;
};

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <a
      href={href}
      className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="w-5 h-5 block">{icon}</span>
    </a>
  );
};

export default SocialIcon;
