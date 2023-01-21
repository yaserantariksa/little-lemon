import {
    Box,
    SimpleGrid,
    Text,
    Stack,
    Flex,
    Container,
    Button,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function SimpleThreeColumns() {
    return (
        <Container
            maxW="1000px"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            paddingBlock={"10"}
        >
            <Stack
                w={"100%"}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justifyContent={'space-between'}
            >
                <Box
                    minW={"400px"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Text fontSize={"30"} fontWeight={"600"}>
                        This Week Specials
                    </Text>
                </Box>
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
                >
                    Menu
                </Button>
            </Stack>
            <Box
                p={4}
                minH="80vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </SimpleGrid>
            </Box>
        </Container>
    );
}
