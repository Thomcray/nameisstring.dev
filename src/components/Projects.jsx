import { useState } from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import pedmonieScreenshot from "@/assets/pedmonie.png";
import pedMerchantScreenshot from "@/assets/pedmonieMerchant.png";

function Projects() {
  const payUrl = "https://pay4me-ruddy.vercel.app/home";
  const projects = [
    {
      name: "Pay4Me",
      screenshot: `https://api.microlink.io/?url=${payUrl}&screenshot=true&embed=screenshot.url`,
      link: payUrl,
    },
    {
      name: "Pedmonie",
      screenshot: pedmonieScreenshot,
      link: "https://pedmonie.com.ng",
    },
    {
      name: "Pedmonie Merchant",
      screenshot: pedMerchantScreenshot,
      link: "https://pedmonie.com.ng/merchant",
    },
  ];

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Box
      w={{ base: "full", md: "full", xl: "80%" }}
      as="section"
      id="projects"
      px={{ base: 2, md: 10, xl: 10 }}
      py={2}
      m="auto"
      display="flex"
      spaceY={4}
      flexDirection={{ base: "column", xl: "column" }}
      justifyContent="space-between"
    >
      <Box
        w="fit-content"
        px={4}
        py={2}
        rounded="xl"
        display="flex"
        flexDirection="column"
        textAlign="left"
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", xl: "2xl" }}
          fontFamily="Montserrat"
          fontWeight="bold"
          textTransform="uppercase"
          color="blackAlpha.800"
        >
          Projects
        </Text>
        <Text
          as="span"
          fontSize="md"
          fontFamily="Poppins"
          fontWeight="regular"
          color="blackAlpha.800"
        >
          Some of the projects I've worked on over the years.
        </Text>
      </Box>

      <Box
        w={{ base: "full", md: "full", xl: "fit-content" }}
        px={{ base: 0, xl: 4 }}
        py={4}
        gap={4}
        display="flex"
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {/* projetcs */}
        {projects.map((project) => (
          <Box
            maxW="350px"
            // h="200px"
            key={project.name}
            px={4}
            py={2}
            rounded="xl"
            display="flex"
            flexDirection="column"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              fontSize="sm"
              fontFamily="Poppins"
              color="blackAlpha.800"
            >
              <Image
                w="full"
                h="200px"
                src={project.screenshot}
                alt={project.name}
                onLoad={() => setIsImageLoaded(true)}
                objectFit="contain"
                loading="lazy"
              />
            </Link>
            <Text
              mt={4}
              fontSize="lg"
              fontWeight="bold"
              fontFamily="Montserrat"
              textTransform="uppercase"
              color="blackAlpha.800"
            >
              {project.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
