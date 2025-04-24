import { Box, CloseButton, Drawer, Icon, Link, Portal } from "@chakra-ui/react";
import { LinkedinPlain } from "devicons-react";
import { FaGithub } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
function MobileDrawer({ sections, location, handleChange }) {
  return (
    <Drawer.Root placement="end">
      <Drawer.Trigger asChild>
        <Icon color="blackAlpha.800" size="xl" hideFrom="sm" cursor="pointer">
          <LuMenu />
        </Icon>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title
                fontFamily="Montserrat"
                color="whiteAlpha.800"
                fontWeight="bold"
                fontSize="2xl"
              >
                TERNA
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body
              gap={4}
              display="flex"
              flexDirection="column"
              fontFamily="Montserrat"
              fontSize="xl"
              fontWeight="medium"
            >
              {sections.map((section) => (
                <Box
                  w="fit-content"
                  gapY={2}
                  display="flex"
                  flexDirection="column"
                  key={section}
                  border="1px solid #000"
                >
                  <Link
                    display="flex"
                    href={`#${section}`}
                    color={
                      location === section ? "orange.500" : "whiteAlpha.800"
                    }
                    textDecoration="none"
                    _focus={{ outline: "none", boxShadow: "none" }}
                    _focusVisible={{ outline: "none", boxShadow: "none" }}
                    _hover={{ color: "orange.500" }}
                    onClick={handleChange}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                  <Box
                    w="1/2"
                    display="flex"
                    alignSelf="center"
                    fontWeight="bold"
                    color="orange.500"
                    borderBottom={
                      location === section ? "2px solid orange" : "none"
                    }
                  ></Box>
                </Box>
              ))}
            </Drawer.Body>
            <Drawer.Footer
              spaceX={4}
              display="flex"
              flexDirection="row"
              justifyContent="left"
            >
              <Link
                href="https://www.linkedin.com/in/terna-nanev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinPlain size="25px" color="white" />
              </Link>
              <Link
                href="https://github.com/Thomcray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon>
                  <FaGithub size={30} />
                </Icon>
              </Link>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default MobileDrawer;
