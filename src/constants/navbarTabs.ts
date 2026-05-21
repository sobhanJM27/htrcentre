import { v4 as uuidv4 } from "uuid";

export const navbarTabs = [
  {
    name: "Home",
    path: "/",
    id: uuidv4(),
  },
  {
    name: "Companies",
    path: "/companies",
    id: uuidv4(),
  },
  {
    name: "About Us",
    path: "/about-us",
    id: uuidv4(),
  },
];
