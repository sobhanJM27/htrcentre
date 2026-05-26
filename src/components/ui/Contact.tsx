import { mailItems, websiteItems } from "@/constants/socialItems";
import ContactItem from "./ContactItem";
import Globe from "./icons/Globe";
import LinkedIn from "./icons/Linkedin";
import Mail from "./icons/Mail";
import { sectionStyle, textBody1, textTitle4 } from "@/constants/styles";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section className={cn("flex flex-col", sectionStyle)}>
      <h2 className={textTitle4}>Support and Contact</h2>
      <p className={cn(textBody1)}>
        HTRC aims to provide clear support and communication channels for users
        and partners. For enquiries, partnerships, or support, you can contact
        us through our official communication channels.
      </p>
      <div className="flex flex-col gap-6">
        <ContactItem icon={<Mail />} mainHref="mailto:support@htrcentre.com">
          {mailItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="text-muted hover:text-primary! transition-colors duration-300 after:content-[','] last:after:content-['']"
            >
              {item.title}
            </a>
          ))}
        </ContactItem>
        <ContactItem icon={<Globe />} mainHref="https://htrcentre.com">
          {websiteItems.map((item) => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary! transition-colors duration-300 after:content-[','] last:after:content-['']"
            >
              {item.title}
            </a>
          ))}
        </ContactItem>
        <ContactItem
          icon={<LinkedIn />}
          mainHref="https://www.linkedin.com/in/babak-sadeghi-tabatabai"
        >
          <a
            href="https://www.linkedin.com/in/babak-sadeghi-tabatabai"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-primary! transition-colors duration-300 break-all"
          >
            linkedin.com/in/babak-sadeghi-tabatabai
          </a>
        </ContactItem>
      </div>
    </section>
  );
};

export default Contact;
