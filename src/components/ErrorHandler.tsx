import { useEffect } from "react";
import toast from "react-hot-toast";
import type { FallbackProps } from "react-error-boundary";

// export type ErrorHandlerProp = { error: Error; resetErrorBoundary: () => void };

export default function ErrorHandler({ error }: FallbackProps) {
  useEffect(() => {
    console.error(error);
    toast.error("Connection error. Please try again.");
  });
  return <></>;
}
