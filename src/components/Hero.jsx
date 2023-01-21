import {
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/restauranfood.jpg";

export default function SplitScreen() {
    let navigate = useNavigate()
    const toReserveTable = () => {navigate('table-reservation')}
    return (
        <Box backgroundColor={"teal.900"} paddingBlock={"8"}>
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
                                    color={"gray.50"}
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
                                color={"gray.300"}
                            >
                                We are a familly owned Mediterranian restourant,
                                focused on traditional recipes served with a
                                modern twist
                            </Text>
                            <Stack
                                direction={{ base: "column", md: "row" }}
                                spacing={4}
                            >
                                <Button
                                    rounded={"16px"}
                                    bg={"yellow.500"}
                                    color={"teal.900"}
                                    _hover={{
                                        bg: "yellow.600",
                                    }}
                                    paddingInline={"10"}
                                    paddingBlock={"6"}
                                    fontSize={"xl"}
                                    my={"10"}
                                    onClick={toReserveTable}
                                >
                                    Reserve a Table
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex
                        flex={1}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image
                            w={"400px"}
                            h={"450px"}
                            alt={"Login Image"}
                            objectFit={"cover"}
                            src={heroImage}
                        />
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}
