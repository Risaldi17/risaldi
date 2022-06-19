import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const RecentWork = () => {
  return (
    <Box px={{ base: "10px", md: "80px" }} py={{ base: "25px", md: "60px" }}>
      <Flex direction={"column"}>
        <Box px={{ lg: "39px", xl: "270px" }}>
          <Heading fontSize={"34px"} width={{ md: "600px", lg: "800px" }} fontFamily={"Raleway"} textAlign={"center"}>
            Recent Work
          </Heading>
        </Box>
        <Box px={{ lg: "10px", xl: "270px" }} align={"center"} mt={"10px"}>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non magnam debitis magni cumque natus aspernatur quaerat culpa quam doloremque.</Text>
        </Box>
      </Flex>
      <Flex direction={{ base: "column-reverse", md: "row" }} mt={"50px"} px={{ lg: "30px", xl: "180px" }} gap={"50px"}>
        <Box w={{ md: "300px", lg: "445px" }} h={"494px"}>
          <Image src="4.png" borderRadius={"10px"} />
          <Heading mt={"40px"} mb={"10px"} fontSize={"24px"} fontFamily={"Raleway"} w={"100%"}>
            User Interface Apps
          </Heading>
          <Text fontSize={"14px"} fontFamily={"IBM Plex Mono"} w={{ md: "250px", lg: "400px" }} color={"#9C9C9C"}>
            Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
          </Text>
          <Button px={"24px"} py={"10px"} colorScheme={"#3F8E00;"} mt={"20px"} size={"md"}>
            <Text fontSize={"14px"} fontFamily={"IBM Plex Mono"}>
              Know more
            </Text>
          </Button>
        </Box>
        <Box w={{ md: "300px", lg: "445px" }} h={{ base: "400px", md: "494px" }}>
          <Image src="5.png" borderRadius={"10px"} />
          <Heading mt={"40px"} mb={"10px"} fontSize={"24px"} fontFamily={"Raleway"} w={"100%"}>
            User Research
          </Heading>
          <Text fontSize={"14px"} fontFamily={"IBM Plex Mono"} w={{ md: "250px", lg: "400px" }} color={"#9C9C9C"}>
            Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
          </Text>
          <Button px={"24px"} py={"10px"} w={"139px"} colorScheme={"#3F8E00;"} mt={"20px"} size={"md"}>
            <Text fontSize={"14px"} fontFamily={"IBM Plex Mono"}>
              Know more
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default RecentWork;
