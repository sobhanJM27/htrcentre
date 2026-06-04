import { v4 as uuidv4 } from "uuid";

export const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Calculator", path: "#", id: uuidv4() },
      { name: "Find Experts", path: "#", id: uuidv4() },
      { name: "Affiliate Suppliers", path: "#", id: uuidv4() },
    ],
    id: uuidv4(),
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", path: "/about-us", id: uuidv4() },
      { name: "Privacy Policy", path: "/about-us", id: uuidv4() },
      { name: "Terms of Service", path: "/about-us", id: uuidv4() },
    ],
    id: uuidv4(),
  },
  {
    title: "Contact",
    links: [
      {
        name: "support@htrcentre.com",
        path: "mailto:support@htrcentre.com",
        id: uuidv4(),
      },
      // { name: "+1 234 567 890", path: "tel:+1234567890", id: uuidv4() },
    ],
    id: uuidv4(),
  },
];
