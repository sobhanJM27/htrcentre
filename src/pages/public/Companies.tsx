import { cn } from "@/lib/utils";
import {
  bgTextColor1,
  mainStyle,
  sectionStyle,
  textTitle1,
} from "@/constants/styles";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/api/company";
import WithLoaderAndError from "@/components/WithLoaderAndError";
import type { Company } from "@/types/apiTypes";
import SeoTags from "@/utils/seo";
import { CompanyCard } from "@/components/CompanyCard";

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
      <main className={cn("flex flex-col gap-14!", mainStyle, bgTextColor1)}>
        <section
          className={cn("flex flex-col items-center text-center", sectionStyle)}
        >
          <h1 className={textTitle1}>Companies</h1>
          <p className="text-foreground">
            Explore organizations contributing to sustainable building and
            energy retrofit innovation.
          </p>
        </section>
        <WithLoaderAndError
          {...{
            data: companyQuery.data,
            isLoading: companyQuery.isLoading,
            isError: companyQuery.isError,
            error: companyQuery.error,
          }}
        >
          <section className="grid md:grid-cols-2 gap-4 px-4">
            {companyQuery.data?.map((company: Company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </section>
        </WithLoaderAndError>
      </main>
    </>
  );
};

export default Companies;
