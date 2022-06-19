import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const Feedback = () => {
  return (
    <Box bgColor={"black"} px={{ md: "100px", lg: "340px" }} py={"60px"}>
      <Flex direction={"column"} alignContent={"center"}>
        <Box align={"center"}>
          <Heading fontSize={"34px"} w={{ lg: "200px", xl: "800px" }} fontFamily={"Raleway"} color={"white"}>
            FeedBack
          </Heading>
        </Box>
        <Box align={"center"} mt={"10px"}>
          <Text fontFamily={"IBM Plex Mono"} fontSize={"14px"} w={{ lg: "330px", xl: "530px" }} color={"white"} mt={"10px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
      </Flex>
      <Flex direction={"row"} justify={"center"}>
        <Box w={{ base: "210px", md: "400px" }}>
          <FormControl>
            <FormLabel htmlFor="email" fontFamily={"IBM Plex Mono"} fontSize={"14px"} textColor={"white"} w={"auto"} h={"40px"} mb={"-10px"} mt={"40px"}>
              Email address
            </FormLabel>
            <Input id="email" type="email" placeholder="Plese Enter Your Email" bgColor={"white"} fontSize={"12px"} />
          </FormControl>
          <FormControl htmlFor={"Number"} fontFamily={"IBM Plex Mono"} fontSize={"14px"} textColor={"white"} w={"auto"} h={"40px"} mb={"-5px"} mt={"20px"}>
            Number Phone
          </FormControl>
          <Input id="number" type={"number"} placeholder="your number" bgColor={"white"} fontSize={"12px"} mt={"-5px"} />
          <FormControl htmlFor={"Number"} fontFamily={"IBM Plex Mono"} fontSize={"14px"} textColor={"white"} w={"auto"} h={"40px"} mb={"-5px"} mt={"20px"}>
            Message
          </FormControl>
          <Textarea placeholder="your massage" bgColor={"white"} fontSize={"12px"} mt={"-5px"} />
          <Button px={"24px"} py={"10px"} w={{ base: "210px", md: "400px" }} h={"50px"} colorScheme={"#3F8E00;"} mt={"20px"} size={"md"} mb={"60px"}>
            <Text fontSize={"14px"} fontFamily={"IBM Plex Mono"}>
              Submit
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
export default Feedback;
