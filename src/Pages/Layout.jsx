import { Box } from "@chakra-ui/react";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";

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
