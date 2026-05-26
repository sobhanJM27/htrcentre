import { NavLink } from "react-router-dom";

type Props = {
  url: string;
  text: string;
  place: "navbar" | "sidebar";
};

const NavbarTab = ({ url, text, place }: Props) => {
  return (
    <li className="font-medium">
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive
            ? "text-primary border-b-2 border-primary transition duration-300 rounded-sm"
            : "text-muted-foreground border-b-2 border-transparent"
        }
      >
        {place === "navbar" ? (
          text
        ) : (
          <>
            <span>{text}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavbarTab;
