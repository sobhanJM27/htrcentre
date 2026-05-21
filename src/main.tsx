import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./components/ErrorHandler.tsx";
import { HelmetProvider } from "react-helmet-async";
import { shadows } from "./constants/styles.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Toaster
        gutter={12}
        containerStyle={{ zIndex: 10001 }}
        toastOptions={{
          duration: 4000,
          className:
            "bg-background text-foreground border border-border shadow-xl rounded-xl px-4 py-3 text-sm flex items-center gap-3",
          success: {
            className: `bg-primary! text-primary-foreground! border border-primary-foreground ${shadows.glow}`,
            iconTheme: {
              primary: "#10b981",
              secondary: "#ecfdf5",
            },
          },
          error: {
            className: `bg-destructive! text-destructive-foreground! border border-destructive-foreground ${shadows.glow}`,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fef2f2",
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
