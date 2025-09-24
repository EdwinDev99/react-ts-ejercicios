import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      background={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)),url(https://images.unsplash.com/photo-1577741314755-048d8525d31e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
      w="full"
      h={"calc(100vh - 64px)"}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: "100px" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Bienvenidos a <br />
            <Text as={"span"} color={"green.400"}>
              Game Sale
            </Text>
          </Heading>
          <Text color={"white"}>
            Una web para encontrar ofertas. Ademas contamos chistes:
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Empieza ahora
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
