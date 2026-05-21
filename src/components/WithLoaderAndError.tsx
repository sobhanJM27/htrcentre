import { type ReactNode } from "react";
import Loader from "./ui/Loader";
import ErrorHandler from "./ErrorHandler";

export type WithLoaderAndErrorProps<T> = {
  isError: boolean;
  isLoading: boolean;
  data: T;
  error: Error | null;
  children: ReactNode;
};

const WithLoaderAndError = <T,>({
  isError,
  isLoading,
  data,
  error,
  children,
}: WithLoaderAndErrorProps<T>) => {
  if (isError) {
    return <ErrorHandler error={error!} resetErrorBoundary={() => {}} />;
  }

  if (isLoading) return <Loader type="main" />;

  if (!data) {
    return <div>No data found</div>;
  }
  return <>{children}</>;
};

export default WithLoaderAndError;
