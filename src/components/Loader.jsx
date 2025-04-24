import { Box, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Box display="flex" h="dvh">
      <Spinner color="blackAlpha.800" size="lg" m="auto" />
    </Box>
  );
}

export default Loader;
