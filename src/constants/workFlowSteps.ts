import { v4 as uuidv4 } from "uuid";

export const workFlowSteps = [
  {
    number: "01",
    title: "Input Building Details",
    desc: "Enter dimensions and current insulation status.",
    id: uuidv4(),
  },
  {
    number: "02",
    title: "Select Target Grade",
    desc: "Choose your desired thermal efficiency level.",
    id: uuidv4(),
  },
  {
    number: "03",
    title: "Get Your Report",
    desc: "Receive a detailed PDF with recommendations.",
    id: uuidv4(),
  },
];
