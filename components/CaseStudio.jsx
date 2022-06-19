import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
const CaseStudio = () => {
  return (
    <Box px={{ md: "20px", lg: "80px" }} pt={"60px"} bgColor={"#F5F5F5"}>
      <Box>
        <Flex direction={"column"} alignItems={"center"}>
          <Heading fontSize={"34px"} fontWeight={"800"} fontFamily={"Raleway"} color={"#080808"}>
            Case Studies
          </Heading>
          <Box w={{ sm: "300", md: "570px" }} h={{ sm: "110", md: "72px" }}>
            <Text color={"#9C9C9C"} fontFamily={"IBM Plex Mono"} fontSize={{ base: "12px", md: "14px" }} fontWeight={"400"} mt={"10px"} textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum quod nam perspiciatis eligendi voluptatem possimus at! Quidem dicta quis, impedit sequi voluptatum magni atque optio
              quos. Minima, vel.
            </Text>
          </Box>
        </Flex>
        <Flex direction={{ base: "column-reverse", sm: "row" }} mt={{ base: "30px", sm: "60px" }} mb={"80px"} gap={"26px"} px={{ lg: "50px", xl: "108px" }} justifyContent={"center"}>
          <Box w={{ base: "305px", md: "421px" }} h={{ base: "130px", md: "96px" }}>
            <Box width={"74px"} height={"24px"} bgColor={"#FFF6E9"} borderRadius={"50px"} px={"10px"} pt={"5px"}>
              <Heading fontSize={"12px"} color={"#FFA217"} fontFamily={"IBM Plex Mono"}>
                Fintech
              </Heading>
            </Box>
            <Heading mt={"20px"} mb={"10px"} fontSize={"24px"} fontWeight={"800"} fontFamily={"Raleway"} color={"#080808"}>
              UX Research
            </Heading>
            <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} fontWeight={"400"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
            <Button bgColor={"#FFA217"} mt={{ lg: "30px", xl: "40px" }} color={"white"} fontSize={"14px"}>
              View Case Studi
            </Button>
          </Box>
          <Image src="1.png" w={"445px"} h={"300px"} borderRadius={"10px"} />
        </Flex>
        <Flex direction={{ base: "column", sm: "row" }} gap={"31px"} mt={{ base: "160px", sm: "0" }} px={{ lg: "50px", xl: "180px" }} justifyContent={"center"}>
          <Image src="2.png" w={"445px"} h={"300px"} borderRadius={"10px"} />
          <Box w={{ base: "305px", md: "421px" }} h={{ base: "130px", md: "96px" }}>
            <Box w={"64px"} h={"24px"} bgColor={"#D0E6FF"} borderRadius={"50px"} px={"10px"} pt={"5px"}>
              <Heading fontSize={"12px"} color={"#000AFF"} fontFamily={"IBM Plex Mono"}>
                EdTech
              </Heading>
            </Box>
            <Heading mt={"30px"} mb={"10px"} fontSize={"24px"} fontWeight={"800"} fontFamily={"Raleway"} color={"#080808"}>
              Nature Library
            </Heading>
            <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} fontWeight={"400"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
            <Button bgColor={"#000AFF"} mt={{ lg: "30px", xl: "40px" }} color={"white"} fontSize={"14px"}>
              View Case Studi
            </Button>
          </Box>
        </Flex>
        <Flex
          direction={{ base: "column-reverse", sm: "row" }}
          mt={{ base: "160px", sm: "60px" }}
          mb={{ base: "160px", sm: "80px" }}
          gap={"26px"}
          px={{ lg: "50px", xl: "108px" }}
          justifyContent={"center"}
        >
          <Box w={{ base: "300px", md: "421px" }} h={{ base: "120", md: "96px" }}>
            <Box width={"74px"} height={"24px"} bgColor={"#E0FFF8"} borderRadius={"50px"} px={"10px"} pt={"5px"}>
              <Heading fontSize={"12px"} color={"#2AB090"} fontFamily={"IBM Plex Mono"}>
                Pharma
              </Heading>
            </Box>
            <Heading mt={"20px"} mb={"10px"} fontSize={"24px"} fontWeight={"800"} fontFamily={"Raleway"} color={"#080808"}>
              Healt Nature
            </Heading>
            <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} fontWeight={"400"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
            <Button bgColor={"#2AB090"} mt={{ lg: "30px", xl: "40px" }} color={"white"} fontSize={"14px"}>
              View Case Studi
            </Button>
          </Box>
          <Image src="3.png" w={"445px"} h={"300px"} borderRadius={"10px"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default CaseStudio;
