import { Box, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  JavascriptOriginal,
  ReactOriginal,
  ReduxOriginal,
  Css3Original,
  GitOriginal,
  TailwindcssOriginal,
  GithubOriginal,
} from "devicons-react";
import { LuCode } from "react-icons/lu";
import { Tooltip } from "./ui/tooltip";

function Skills() {
  const skills = [
    "javascript",
    "react",
    "redux",
    "css",
    "tailwind",
    "git",
    "github",
  ];

  const iconSize = useBreakpointValue({ base: "50px", md: "50px", xl: "40px" });

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

      <Box
        w={{ base: "full", md: "full", xl: "fit-content" }}
        bg={{ base: "white", xl: "gray.300/30" }}
        mt={2}
        px={{ base: 0, xl: 4 }}
        py={4}
        gap={4}
        display="flex"
        flexDirection={{ base: "row", md: "row", xl: "row" }}
        alignItems={{ base: "center" }}
        overflowX={{ base: "scroll" }}
        rounded="xl"
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.5)",
            }}
            cursor="pointer"
          >
            {skill === "javascript" && (
              <Tooltip content="Javascript">
                <JavascriptOriginal size={iconSize} />
              </Tooltip>
            )}
            {skill === "react" && (
              <Tooltip content="React">
                <ReactOriginal size={iconSize} />
              </Tooltip>
            )}
            {skill === "redux" && (
              <Tooltip content="Redux">
                <ReduxOriginal size={iconSize} />
              </Tooltip>
            )}
            {skill === "css" && (
              <Tooltip content="CSS">
                <Css3Original size={iconSize} />
              </Tooltip>
            )}
            {skill === "tailwind" && (
              <Tooltip content="Tailwind">
                <TailwindcssOriginal size={iconSize} />
              </Tooltip>
            )}
            {skill === "git" && (
              <Tooltip content="GIT">
                <GitOriginal size={iconSize} />
              </Tooltip>
            )}
            {skill === "github" && (
              <Tooltip content="GitHub">
                <GithubOriginal size={iconSize} />
              </Tooltip>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
