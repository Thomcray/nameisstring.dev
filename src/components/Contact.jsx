import {
  Box,
  Button,
  Icon,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { GithubOriginal, LinkedinPlain } from "devicons-react";

function Contact() {
  const key = import.meta.env.VITE_FORM_KEY;

  const [state, handleSubmit] = useForm(key);

  if (state.succeeded) {
    return (
      <Text
        py={4}
        m="auto"
        fontFamily="Poppins"
        fontWeight="bold"
        color="blackAlpha.800"
      >
        Thanks for your submission!
      </Text>
    );
  }
  return (
    <Box h="full" display="flex" flexDirection="column">
      <Box
        w={{ base: "full", md: "full", xl: "80%" }}
        h="400px"
        m="auto"
        as="section"
        id="contact"
        px={{ base: 2, md: 10, xl: 10 }}
        py={2}
        display="flex"
        spaceY={4}
        flexDirection={{ base: "column", xl: "column" }}
        justifyContent="space-evenly"
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
            Contact Me
          </Text>
          <Text
            as="span"
            fontSize="md"
            fontFamily="Poppins"
            fontWeight="regular"
            color="blackAlpha.800"
          >
            Have a question or want to work together? I'm just an email away.
          </Text>
        </Box>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Input
            id="email"
            name="email"
            type="email"
            size="xl"
            fontFamily="Poppins"
            placeholder="Email Address"
            color="blackAlpha.800"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Input
            id="name"
            name="name"
            type="text"
            size="xl"
            fontFamily="Poppins"
            placeholder="Enter your name"
            color="blackAlpha.800"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <Textarea
            id="message"
            name="message"
            size="xl"
            fontFamily="Poppins"
            placeholder="Enter message"
            color="blackAlpha.800"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button
            bg="blackAlpha.800"
            w={{ base: "full", md: "fit-content", xl: "fit-content" }}
            type="submit"
            size="lg"
            disabled={state.submitting}
            border="2px solid blackAlpha.800"
            color="whiteAlpha.800"
            fontFamily="Poppins"
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box display="flex" flexDirection="row" gap={4} m="auto" pb={4}>
        <Link
          href="https://www.linkedin.com/in/terna-nanev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinPlain size="25px" />
        </Link>
        <Link
          href="https://github.com/Thomcray"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOriginal size="25px" />
        </Link>
      </Box>
    </Box>
  );
}

export default Contact;
