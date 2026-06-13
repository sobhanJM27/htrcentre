import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import Loader from "./components/ui/icons/Loader";
import ScrollToTop from "./utils/scrollToTop";

const Companies = lazy(() => import("./pages/public/Companies"));
const Company = lazy(() => import("./pages/public/Company"));
const AboutUs = lazy(() => import("./pages/public/AboutUs"));
const NotFound = lazy(() => import("./pages/public/NotFound"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="companies"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Companies />
              </Suspense>
            }
          />
          <Route
            path="company/:id/:slug?"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <Company />
              </Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader type="main" />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
