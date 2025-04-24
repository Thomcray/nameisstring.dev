import { lazy, Suspense } from "react";
import Layout from "./Pages/Layout";
import Loader from "./components/Loader";

function App() {
  const Home = lazy(() => import("./Pages/Layout"));
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}

export default App;
