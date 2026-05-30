import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { shadows, textBody1 } from "@/constants/styles";
import type { Company } from "@/types/apiTypes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

export const CompanyCard = ({ company }: { company: Company }) => {
  return (
    <Link to={`/company/${company.id}`} className="block">
      <Card
        className={cn(
          "relative h-full justify-between bg-muted/20 group hover:-translate-y-1 transition-transform",
          shadows.deepCard,
          shadows.hoverSoft,
        )}
      >
        <div>
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar size="lg" variant="rounded">
              <AvatarImage
                src={`https://retrofit-nxb4.onrender.com${company.logoUrl}`}
                alt={company.name}
                className="object-contain bg-white p-1"
              />
              <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle>{company.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={cn("text-foreground line-clamp-3 text-sm!", textBody1)}>
              {company.description}
            </p>
          </CardContent>
        </div>
        <CardFooter className="flex justify-between">
          <span className="text-sm font-medium text-primary">
            View Company →
          </span>
          <span className="text-xs text-muted dark:text-muted-foreground">
            {company.user.firstName} {company.user.lastName}
          </span>
        </CardFooter>
        <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-linear-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
      </Card>
    </Link>
  );
};
