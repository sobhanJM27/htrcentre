// src/components/footer/Footer.tsx
import { footerLinks } from "@/constants/footerLinks";
import FooterColumn from "./ui/FooterColumn";
import { Link } from "react-router-dom";
import SocialIcon from "./ui/SocialIcon";
import LeftArrow from "./ui/icons/LeftArrow";
import IconWrapper from "./ui/IconWrapper";
import { Logo } from "./ui/Image";
import LinkedIn from "./ui/icons/Linkedin";
import Mail from "./ui/icons/Mail";
import { cn } from "@/lib/utils";
import { border1 } from "@/constants/styles";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-background border-t border-border/50 py-18">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex max-footer:flex-col gap-4 max-footer:gap-8 px-6 pb-8 justify-between max-footer:items-center">
          <div className="lg:col-span-4 flex flex-col items-center footer:items-start gap-3">
            <Link to="/">
              <Logo size="4rem" src="./logo.png" />
            </Link>
            <p className="leading-relaxed text-center footer:text-left max-w-sm">
              Professional tools for home thermal efficiency. We make complex
              calculations simple and accessible for everyone.
            </p>
            <div className="flex gap-5">
              <IconWrapper className="rounded-full">
                <SocialIcon
                  href="https://www.linkedin.com/in/babak-sadeghi-tabatabai/"
                  icon={<LinkedIn />}
                />
              </IconWrapper>
              <IconWrapper className="rounded-full">
                <SocialIcon
                  href="mailto:sadeghi.t.b@gmail.com"
                  icon={<Mail />}
                />
              </IconWrapper>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
            {footerLinks.map((section) => (
              <FooterColumn
                key={section.id}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-border/40 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} HTRCentre. Built with precision.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-muted dark:text-muted-foreground hover:text-primary! transition-colors duration-300"
          >
            <span>Back to top</span>
            <div
              className={cn(
                "p-2 rounded-full group-hover:border-primary transition-colors",
                border1,
              )}
            >
              <LeftArrow className="w-4 h-4 rotate-90" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
