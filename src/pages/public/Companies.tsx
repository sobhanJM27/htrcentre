import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  bgTextColor1,
  sectionStyle,
  shadows,
  textTitle1,
} from "@/constants/styles";
import { Logo } from "@/components/ui/Logo";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/api/company";
import WithLoaderAndError from "@/components/WithLoaderAndError";
import type { Company } from "@/types/apiTypes";
import SeoTags from "@/utils/seo";

const Companies = () => {
  const companyQuery = useQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(1, 10, true),
  });

  return (
    <>
      <SeoTags
        title="Companies"
        description="Explore companies involved in sustainable building, energy retrofit solutions, and innovative technologies improving building performance."
        keywords="retrofit companies, energy retrofit, sustainable buildings, construction technology, retrofit solutions"
      />
      <section
        className={cn("flex flex-col gap-14!", sectionStyle, bgTextColor1)}
      >
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className={textTitle1}>Companies</h1>
          <p className="text-foreground">
            Explore organizations contributing to sustainable building and
            energy retrofit innovation.
          </p>
        </div>
        <WithLoaderAndError
          {...{
            data: companyQuery.data,
            isLoading: companyQuery.isLoading,
            isError: companyQuery.isError,
            error: companyQuery.error,
          }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {companyQuery.data?.map((company: Company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className={cn(
                  "group relative flex flex-col gap-4 justify-between rounded-2xl border border-border bg-muted/20 p-6",
                  shadows.deepCard,
                  shadows.hoverSoft,
                )}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                      <Logo
                        src={
                          "https://retrofit-nxb4.onrender.com" + company.logoUrl
                        }
                        alt={company.name}
                        size="2rem"
                      />
                    </div>
                    <h3 className="text-xl font-semibold transition text-primary group-hover:text-primary/70">
                      {company.name}
                    </h3>
                  </div>
                  <p className="text-sm">{company.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    View Company →
                  </span>
                  <span className="text-xs text-foreground">
                    {company.user.firstName} {company.user.lastName}
                  </span>
                </div>
                <div className="absolute! inset-0! opacity-0! transition group-hover:opacity-100! bg-linear-to-tr! from-primary/20! rounded-xl via-transparent! to-transparent!" />
              </Link>
            ))}
          </div>
        </WithLoaderAndError>
      </section>
    </>
  );
};

export default Companies;
