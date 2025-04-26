import { keyframes } from "@emotion/react";
import { Box, Image, Text } from "@chakra-ui/react";
import myPicture from "@/assets/nameisstring.png";
import Skills from "./Skills";

const spin = keyframes`
from {transform: rotate(0deg); }
to { transform: rotate(360deg);b}
`;
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
          position="relative"
          w={{ base: "290px", md: "390px", xl: "390px" }}
          h={{ base: "290px", md: "290px", xl: "390px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Outer spinning ring */}
          <Box
            px={4}
            py={4}
            borderRadius="full"
            borderWidth="4px"
            borderStyle="solid"
            borderColor="transparent"
            borderRightColor="orange.500/40"
            borderLeftColor="orange.500/40"
            animation={`${spin} 5s linear infinite`}
            _hover={{
              transform: "scale(1.05)",
              animationPlayState: "paused",
            }}
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            w="100%"
            h="100%"
            zIndex={0}
          />

          {/* Static image container */}
          <Box
            w={{ base: "250px", md: "350px", xl: "350px" }}
            h={{ base: "250px", md: "250px", xl: "350px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="full"
            overflow="hidden"
            borderWidth="2px"
            borderColor="gray.200"
            bg="white"
            zIndex={1}
          >
            <Image
              src={myPicture}
              alt="nameisstring-image"
              objectFit="cover"
              boxSize="100%"
              loading="lazy"
            />
          </Box>
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
