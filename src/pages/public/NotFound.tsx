import Loader from "@/components/ui/icons/Loader";
import Button from "@/components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { textBody3, textTitle1 } from "@/constants/styles";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative">
        <h1 className="font-allura text-[12rem] md:text-[16rem] text-primary/20 animate-gentle-bounce leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className={cn(textTitle1)}>Are you lost?</h2>
        </div>
      </div>
      <div className="text-center space-y-4 max-w-md">
        <p className={cn(textBody3)}>
          The page you are looking for could not be found. You might have typed
          the address incorrectly, or the page has been moved.
        </p>
        <div className="scale-75 opacity-70">
          <Loader type="main" />
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <Link to="/">
            <Button intent="primary" size="base">
              Back to Home
            </Button>
          </Link>
          <Button intent="outline" size="base" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </div>
      <div className="fixed -bottom-20 -left-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10" />
      <div className="fixed -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default NotFoundPage;
