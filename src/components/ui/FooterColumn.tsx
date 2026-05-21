// src/components/footer/FooterColumn.tsx
import { Link } from "react-router-dom";

export type FooterColumnProps = {
  title: string;
  links: { name: string; path: string; id: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4 text-center sm:text-left">
      <h3 className="font-bold text-sm uppercase tracking-wider">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className="text-muted! dark:text-muted-foreground! dark:hover:text-primary! text-sm hover:text-primary! transition-all duration-300 inline-block hover:translate-x-1! break-all"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
