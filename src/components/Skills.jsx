import { Box, Grid, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  JavascriptOriginal,
  ReactOriginal,
  ReduxOriginal,
  Css3Original,
  GitOriginal,
  TailwindcssOriginal,
  GithubOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { LuCode } from "react-icons/lu";
import { Tooltip } from "./ui/tooltip";

function Skills() {
  const skills = [
    "javascript",
    "typescript",
    "react",
    "redux",
    "css",
    "tailwind",
    "git",
    "github",
  ];

  const iconSize = useBreakpointValue({ base: "50px", md: "50px", xl: "60" });

  return (
    <Box
      w="full"
      mt={4}
      px={{ base: 0, md: 4, xl: 4 }}
      py={{ base: 2, md: 4, xl: 4 }}
      display="flex"
      flexDirection="column"
    >
      <Box
        w="fit-content"
        py={2}
        rounded="xl"
        display="flex"
        flexDirection="row"
        alignItems="center"
        spaceX={2}
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", xl: "2xl" }}
          fontFamily="Montserrat"
          fontWeight="bold"
          textTransform="uppercase"
          color="blackAlpha.800"
        >
          Skills
        </Text>
      </Box>

      <Grid
        w={{ base: "full", md: "full", xl: "full" }}
        alignSelf={{ base: "center", md: "center", xl: "center" }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        mt={2}
        py={4}
        gap={4}
        alignItems={{ base: "center" }}
        overflowX={{ base: "scroll" }}
        rounded="xl"
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            w="full"
            h={{ base: "fit-content", md: "150px", xl: "150px" }}
            px={4}
            py={4}
            border="1px solid"
            borderColor="gray.500"
            justifyContent="center"
            borderRadius="xl"
            // transition="all 0.2s ease-in-out"
            // _hover={{
            //   transform: "scale(1.5)",
            //   border: "0px solid #000000",
            // }}
            cursor="pointer"
          >
            {skill === "javascript" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="Javascript">
                  <JavascriptOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  JavaScript
                </Text>
              </Box>
            )}
            {skill === "typescript" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="Typescript">
                  <TypescriptOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  TypeScript
                </Text>
              </Box>
            )}
            {skill === "react" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="React">
                  <ReactOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  React JS
                </Text>
              </Box>
            )}
            {skill === "redux" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="Redux">
                  <ReduxOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  Redux
                </Text>
              </Box>
            )}
            {skill === "css" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="CSS">
                  <Css3Original size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  CSS
                </Text>
              </Box>
            )}
            {skill === "tailwind" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="Tailwind">
                  <TailwindcssOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  Tailwind
                </Text>
              </Box>
            )}
            {skill === "git" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="GIT">
                  <GitOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  GIT
                </Text>
              </Box>
            )}
            {skill === "github" && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                spaceY="2"
              >
                <Tooltip content="GitHub">
                  <GithubOriginal size={iconSize} />
                </Tooltip>
                <Text
                  color="blackAlpha.800"
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  GitHub
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
