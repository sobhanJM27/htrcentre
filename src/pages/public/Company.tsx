import { useParams } from "react-router-dom";
import { border1, sectionStyle, shadows, textTitle2 } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "@/api/company";
import WithLoaderAndError from "@/components/WithLoaderAndError";
import SeoTags from "@/utils/seo";

const Company = () => {
  const { id } = useParams();

  const {
    data: companyData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCompany(id as string),
  });

  return (
    <>
      <SeoTags
        title={companyData?.name!}
        description={companyData?.description}
        keywords={`retrofit company, energy retrofit, sustainable buildings, construction technology, retrofit solutions, ${companyData?.name}`}
      />
      <WithLoaderAndError {...{ data: companyData, isLoading, isError, error }}>
        <section
          className={cn("mx-auto max-w-5xl flex flex-col", sectionStyle)}
        >
          <div
            className={cn(
              "flex flex-col rounded-3xl bg-card",
              shadows.baseCard,
              border1,
            )}
          >
            <img
              src={"https://retrofit-nxb4.onrender.com" + companyData?.imageUrl}
              alt={companyData?.name}
              className="h-full w-full object-cover rounded-t-3xl"
            />
            <div className="flex flex-col gap-8 p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted">
                  <Logo
                    src={
                      "https://retrofit-nxb4.onrender.com" +
                      companyData?.logoUrl
                    }
                    size="2.5rem"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className={cn("text-primary", textTitle2)}>
                    {companyData?.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Founded by {companyData?.user.firstName}{" "}
                    {companyData?.user.lastName}
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {companyData?.description}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a href={companyData?.website} target="_blank">
                  <Button>Visit Website</Button>
                </a>
                <span className="text-sm text-muted-foreground">
                  Contact: {companyData?.user.email}
                </span>
              </div>
            </div>
          </div>
        </section>
      </WithLoaderAndError>
    </>
  );
};

export default Company;
