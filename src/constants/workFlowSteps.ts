import { v4 as uuidv4 } from "uuid";

export const workFlowSteps = [
  {
    number: "01",
    title: "Input Building Details",
    desc: "Enter building data for heat loss estimation.",
    id: uuidv4(),
  },
  {
    number: "02",
    title: "Select Room Components",
    desc: "Choose specific room components and explore various thermal retrofit scenarios.",
    id: uuidv4(),
  },
  {
    number: "03",
    title: "Get Your Report",
    desc: "Receive a detailed room results: energy saving & payback time.",
    id: uuidv4(),
  },
];
