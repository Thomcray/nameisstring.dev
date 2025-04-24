import { useState } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import MobileDrawer from "./MobileDrawer";

function Header() {
  const sections = ["about", "projects", "experience", "contact"];

  const [location, setLocation] = useState(window.location.href);

  const handleChange = (e) => {
    const newLocation = e.target.href;
    const currentSection = newLocation.split("#")[1];

    setLocation(currentSection);
  };

  return (
    <Box
      w={{ base: "10/12", md: "3/4", xl: "3/4" }}
      px={4}
      py={4}
      bg="gray.300/50" //opacity: color/opacity
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      alignSelf="center"
      position="fixed"
      zIndex="1000"
      rounded="xl"
    >
      <Text
        color="blackAlpha.800"
        style={{ fontFamily: "Montserrat" }}
        fontWeight="bold"
        fontSize="2xl"
      >
        TERNA
      </Text>
      <Box
        gap={2}
        display="flex"
        flexDirection="row"
        hideBelow="sm"
        fontFamily="Montserrat"
        fontWeight="medium"
        gapX={4}
      >
        {sections.map((section) => (
          <Box display="flex" flexDirection="column" key={section}>
            <Link
              display="flex"
              href={`#${section}`}
              color={location === section ? "orange.500" : "blackAlpha.800"}
              justifySelf=""
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
              borderBottom={location === section ? "2px solid orange" : "none"}
            ></Box>
          </Box>
        ))}
      </Box>
      <MobileDrawer
        sections={sections}
        location={location}
        handleChange={handleChange}
      />
    </Box>
  );
}

export default Header;
