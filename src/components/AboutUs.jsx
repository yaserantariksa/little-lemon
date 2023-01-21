import {
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
} from "@chakra-ui/react";
import marioadrian1 from "../assets/marioadrian1.jpg";
import marioadrian2 from "../assets/marioadrian2.jpg";

export default function SplitScreen() {
    return (
        <Box backgroundColor={"gray.50"} paddingBlock={"8"}>
            <Container maxW="1000px">
                <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
                    <Flex p={8} flex={1} align={"center"} justify={"center"}>
                        <Stack spacing={6} w={"full"} maxW={"lg"}>
                            <Heading display={"flex"} flexDirection={"column"}>
                                <Text
                                    as={"span"}
                                    position={"relative"}
                                    color={"yellow.500"}
                                    fontSize={{
                                        base: "4xl",
                                        md: "5xl",
                                        lg: "6xl",
                                    }}
                                >
                                    Little Lemon
                                </Text>
                                <Text
                                    color={"teal.900"}
                                    as={"span"}
                                    fontSize={{
                                        base: "3xl",
                                        md: "4xl",
                                        lg: "5xl",
                                    }}
                                >
                                    Chicago
                                </Text>{" "}
                            </Heading>

                            <Text
                                fontSize={{ base: "md", lg: "lg" }}
                                color={"gray.700"}
                            >
                                We are a familly owned Mediterranian restourant,
                                focused on traditional recipes served with a
                                modern twist
                            </Text>
                        </Stack>
                    </Flex>
                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            position={"relative"}
                            width={"400px"}
                            height={"370px"}
                        >
                            <Image
                                w={"280px"}
                                h={"240px"}
                                alt={"Login Image"}
                                objectFit={"cover"}
                                src={marioadrian1}
                                position={"absolute"}
                                top={"0"}
                                left={"0"}
                            />
                            <Image
                                w={"280px"}
                                h={"240px"}
                                alt={"Login Image"}
                                objectFit={"cover"}
                                src={marioadrian2}
                                position={"absolute"}
                                right={"0"}
                                bottom={"0"}
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}
