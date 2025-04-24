import { lazy } from "react";
import { Box } from "@chakra-ui/react";

const Header = lazy(() => import("@/components/Header/Header"));
const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));
function Layout() {
  return (
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
  );
}

export default Layout;
