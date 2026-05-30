import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./components/ErrorHandler.tsx";
import { HelmetProvider } from "react-helmet-async";
import { border1, shadows } from "./constants/styles.ts";
import handleTheme from "./utils/handleTheme.ts";
import { cn } from "./lib/utils.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

handleTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Toaster
        gutter={12}
        containerStyle={{ zIndex: 10001 }}
        toastOptions={{
          duration: 4000,
          className: cn(
            "bg-background text-foreground shadow-xl rounded-xl px-4 py-3 text-sm flex items-center gap-3",
            border1,
          ),
          success: {
            className: `bg-primary! text-primary-foreground! border border-primary-foreground ${shadows.glow}`,
            iconTheme: {
              primary: "rgb(0, 172, 95)", // dark primary
              secondary: "rgb(243, 251, 246)", // light destructive-foreground
            },
          },
          error: {
            className: `bg-destructive! text-destructive-foreground! border border-destructive-foreground ${shadows.glow}`,
            iconTheme: {
              primary: "rgb(255, 35, 53)", // dark destructive
              secondary: "rgb(252, 234, 232)", // dark destructive-foreground
            },
          },
        }}
      />
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
);
