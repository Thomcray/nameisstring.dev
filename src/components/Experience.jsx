import { Box, Image, Text, Timeline } from "@chakra-ui/react";
import myExperience from "@/components/experienceData";

function Experience() {
  return (
    <Box
      w={{ base: "full", md: "full", xl: "80%" }}
      h="400px"
      as="section"
      id="experience"
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
          Experience
        </Text>
        <Text
          as="span"
          fontSize="md"
          fontFamily="Poppins"
          fontWeight="regular"
          color="blackAlpha.800"
        >
          A collection of my work experience and internships.
        </Text>
      </Box>
      <Timeline.Root px="4" py="2" overflow="scroll">
        {myExperience.map(
          ({
            id,
            company,
            location,
            position,
            mode,
            startDate,
            endDate,
            descOne,
            descTwo,
            descThree,
            logo,
          }) => (
            <Timeline.Item key={id}>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator
                  outline="1px solid"
                  outlineColor="blackAlpha.500"
                >
                  <Image
                    src={logo}
                    alt="company-logo"
                    loading="lazy"
                    objectFit="cover"
                    borderRadius="full"
                  />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title
                  fontFamily="Montserrat"
                  fontWeight="bold"
                  fontSize="lg"
                  color="blackAlpha.800"
                >
                  {company} {location}
                </Timeline.Title>
                <Timeline.Description
                  fontSize="sm"
                  fontFamily="Poppins"
                  fontWeight="regular"
                  color="gray.500"
                >
                  {position} - {mode}
                </Timeline.Description>
                <Timeline.Description
                  fontSize="sm"
                  fontFamily="Poppins"
                  fontWeight="regular"
                  color="gray.500"
                >
                  {startDate} - {endDate}
                </Timeline.Description>
                <Text
                  textStyle="sm"
                  fontFamily="Poppins"
                  fontWeight="regular"
                  color="blackAlpha.800"
                >
                  {descOne}
                </Text>
                <Text
                  textStyle="sm"
                  fontFamily="Poppins"
                  fontWeight="regular"
                  color="blackAlpha.800"
                >
                  {descTwo}
                </Text>
                <Text
                  textStyle="sm"
                  fontFamily="Poppins"
                  fontWeight="regular"
                  color="blackAlpha.800"
                >
                  {descThree}
                </Text>
              </Timeline.Content>
            </Timeline.Item>
          )
        )}
      </Timeline.Root>
    </Box>
  );
}

export default Experience;
