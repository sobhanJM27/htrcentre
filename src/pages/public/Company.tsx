import { useParams } from "react-router-dom";
import {
  mainStyle,
  sectionStyle,
  textBody1,
  textTitle2,
} from "@/constants/styles";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { getCompany } from "@/api/company";
import WithLoaderAndError from "@/components/WithLoaderAndError";
import SeoTags from "@/utils/seo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const Company = () => {
  const { id } = useParams();

  const {
    data: companyData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["company", id],
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
        <main className={cn("mx-auto max-w-5xl", mainStyle)}>
          <section className={sectionStyle}>
            <Card className="overflow-hidden rounded-3xl flex flex-col gap-3 bg-card">
              {companyData?.imageUrl && (
                <img
                  src={
                    "https://retrofit-nxb4.onrender.com" + companyData.imageUrl
                  }
                  alt={`${companyData?.name} cover`}
                  className="h-full w-full"
                />
              )}
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar size="xl" variant="rounded" className="h-16 w-16">
                  <AvatarImage
                    src={
                      "https://retrofit-nxb4.onrender.com" +
                      companyData?.logoUrl
                    }
                    alt={companyData?.name}
                    className="object-contain bg-white p-1"
                  />
                  <AvatarFallback className="text-lg bg-muted text-foreground">
                    {companyData?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className={cn("text-primary", textTitle2)}>
                    {companyData?.name}
                  </CardTitle>
                  <CardDescription>
                    Founded by {companyData?.user?.firstName}{" "}
                    {companyData?.user?.lastName}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className={cn("text-muted-foreground", textBody1)}>
                  {companyData?.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center gap-6">
                {companyData?.website && (
                  <a
                    href={companyData.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Visit Website</Button>
                  </a>
                )}
                <span className="text-sm text-muted-foreground">
                  Contact: {companyData?.user?.email}
                </span>
              </CardFooter>
            </Card>
          </section>
        </main>
      </WithLoaderAndError>
    </>
  );
};

export default Company;
