import { Box, Image, Text } from "@chakra-ui/react";
import myPicture from "@/assets/nameisstring.png";
import Skills from "./Skills";

function About() {
  return (
    <Box
      w={{ base: "full", md: "full", xl: "80%" }}
      as="section"
      id="about"
      px={{ base: 5, md: 10, xl: 10 }}
      m="auto"
      pt={24}
      gapX={4}
      gapY={4}
      display="flex"
      flexDirection={{ base: "column", xl: "column" }}
      justifyContent="space-between"
    >
      <Box
        w="full"
        display="flex"
        flexDirection={{ base: "column", md: "row", xl: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gapX={{ md: 10 }}
        spaceY={4}
      >
        <Box
          w={{ base: "250px", md: "350px", xl: "350px" }}
          h={{ base: "250px", md: "250px", xl: "350px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          overflow="hidden"
          border="md"
          borderColor="gray.200"
        >
          <Image
            src={myPicture}
            alt="nameisstring-image"
            loading="lazy"
            objectFit="cover"
            boxSize="100%"
          />
        </Box>
        <Box
          w={{ base: "full", md: "full", xl: "1/2" }}
          display="flex"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          textAlign="left"
        >
          <Text
            as="h1"
            color="blackAlpha.800"
            fontFamily="Montserrat"
            fontSize="6xl"
            textTransform="uppercase"
            lineHeight="1"
            fontWeight="bold"
            hideBelow="sm"
            cursor="pointer"
          >
            Terna Thompson Nanev
          </Text>
          <Text
            as="h1"
            color="blackAlpha.800"
            fontFamily="Montserrat"
            fontSize="xl"
            textTransform="uppercase"
            lineHeight="1"
            fontWeight="bold"
            cursor="pointer"
          >
            Frontend Developer
          </Text>
          <Text
            w="full"
            as="h1"
            color="blackAlpha.800"
            fontSize="md"
            fontFamily="Poppins"
            fontWeight="regular"
            cursor="pointer"
          >
            Hi, I'm Terna Nanev, a Frontend Developer with over 3 years of
            experience working with JavaScript and React.js. I'm passonate about
            building high-performance, scalable web applications, visually
            engaging user interfaces, and creating seamless user experiences.
          </Text>
        </Box>
      </Box>
      <Skills />
    </Box>
  );
}

export default About;
