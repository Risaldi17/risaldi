import { Box, ButtonSpinner, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Testimoni = () => {
  return (
    <Box bgColor={"black"} px={{ base: "20px", md: "180px" }} py={"80px"}>
      <Flex direction={"column"} align={"center"}>
        <Heading color={"White"} fontFamily={"Raleway"} fontSize={"34px"} mb={"10px"}>
          Testimonial
        </Heading>
        <Box w={{ base: "300px", sm: "600px" }} h={{ base: "100px", sm: "60px" }}>
          <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} color={"white"} align={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias quia cumque facere voluptates enim magni fugit adipisci, ratione pariatur? Libero impedit consequuntur pariatur et!
          </Text>
        </Box>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={"60px"} gap={"60px"} justifyContent={"center"}>
        <Box
          width={{ base: "270px", md: "445px" }}
          height={{ md: "230px", lg: "212px" }}
          px={{ base: "22px", md: "30px" }}
          py={"30px"}
          borderLeft={"1px"}
          borderY={"1px"}
          bgGradient="linear(to-r, #080808, #000101)"
          borderRadius={"10px"}
        >
          <Image src={"kutip.png"} w={"30px"} mt={"-10"} color={"white"} />
          <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} width={{ md: "250px", lg: "400px" }} color={"#9C9C9C"} mt={"10px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Stack direction={"row"} spacing={"20px"} mt={"30px"}>
            <Image src="https://bit.ly/code-beast" w={"50px"} h={"50px"} borderRadius={"150px"} />
            <Heading fontFamily={"Raleway"} fontSize={"18px"} color={"white"} pt={"10px"}>
              Thomy
            </Heading>
          </Stack>
        </Box>
        <Box
          width={{ base: "270px", md: "445px" }}
          height={{ md: "230px", lg: "212px" }}
          px={"30px"}
          py={"30px"}
          borderLeft={"1px"}
          borderY={"1px"}
          bgGradient="linear(to-r, #080808, #000101)"
          borderRadius={"10px"}
        >
          <Image src={"kutip.png"} w={"30px"} mt={"-10"} color={"white"} />
          <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} width={{ md: "250px", lg: "400px" }} color={"#9C9C9C"} mt={"10px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Stack direction={"row"} spacing={"20px"} mt={"30px"}>
            <Image src="https://bit.ly/prosper-baba" w={"50px"} h={"50px"} borderRadius={"150px"} />
            <Heading fontFamily={"Raleway"} fontSize={"18px"} color={"white"} pt={"10px"}>
              Jhon Shalby
            </Heading>
          </Stack>
        </Box>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={"60px"} gap={"60px"} justifyContent={"center"}>
        <Box
          width={{ base: "270px", md: "445px" }}
          height={{ md: "230px", lg: "212px" }}
          px={"30px"}
          py={"30px"}
          borderLeft={"1px"}
          borderY={"1px"}
          bgGradient="linear(to-r, #080808, #000101)"
          borderRadius={"10px"}
        >
          <Image src={"kutip.png"} w={"30px"} mt={"-10"} color={"white"} />
          <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} width={{ md: "250px", lg: "400px" }} color={"#9C9C9C"} mt={"10px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Stack direction={"row"} spacing={"20px"} mt={"30px"}>
            <Image src="https://bit.ly/kent-c-dodds" w={"50px"} h={"50px"} borderRadius={"150px"} />
            <Heading fontFamily={"Raleway"} fontSize={"18px"} color={"white"} pt={"10px"}>
              Artur
            </Heading>
          </Stack>
        </Box>
        <Box
          width={{ base: "270px", md: "445px" }}
          height={{ md: "230px", lg: "212px" }}
          px={"30px"}
          py={"30px"}
          borderLeft={"1px"}
          borderY={"1px"}
          bgGradient="linear(to-r, #080808, #000101)"
          borderRadius={"10px"}
        >
          <Image src={"kutip.png"} w={"30px"} mt={"-10"} color={"white"} />
          <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} width={{ md: "250px", lg: "400px" }} color={"#9C9C9C"} mt={"10px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Stack direction={"row"} spacing={"20px"} mt={"30px"}>
            <Image src="https://bit.ly/ryan-florence" w={"50px"} h={"50px"} borderRadius={"150px"} />
            <Heading fontFamily={"Raleway"} fontSize={"18px"} color={"white"} pt={"10px"}>
              Churly
            </Heading>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
export default Testimoni;
