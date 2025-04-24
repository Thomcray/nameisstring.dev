import { Box, Loader } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import Header from "@/components/Header/Header";

function Layout() {
  const About = lazy(() => import("@/components/About"));
  const Projects = lazy(() => import("@/components/Projects"));
  const Experience = lazy(() => import("@/components/Experience"));
  const Contact = lazy(() => import("@/components/Contact"));
  return (
    <Suspense fallback={<Loader />}>
      <Box
        w={{
          lg: "62em",
          xl: "80em",
          "2xl": "96em",
        }}
        h="dvh"
        m="auto"
        py={4}
        spaceY={8}
        display="flex"
        flexDirection="column"
      >
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </Box>
    </Suspense>
  );
}

export default Layout;
