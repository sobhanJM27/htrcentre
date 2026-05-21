import Presentation from "@/components/ui/icons/Presentation";
import ShieldCheck from "@/components/ui/icons/ShieldCheck";
import Zap from "@/components/ui/icons/Zap";
import { v4 as uuidv4 } from "uuid";

export const whyChooseItems = [
  {
    icon: ShieldCheck,
    title: "Accurate and Reliable",
    desc: "Built with advanced building physics methods using real-world data.",
    id: uuidv4(),
  },
  {
    icon: Zap,
    title: "Fast Calculation",
    desc: "Instant results without registration or installation.",
    id: uuidv4(),
  },
  {
    icon: Presentation,
    title: "Visual Reports",
    desc: "Get professional and easy-to-understand summary outputs.",
    id: uuidv4(),
  },
];
