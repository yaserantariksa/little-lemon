import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import logo from '../assets/Logo.svg'


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithNewsletter() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container as={Stack} maxW='1000px' py={10}>
                <SimpleGrid
                    templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Box>
                            <Image src={logo} />
                        </Box>
                        <Text fontSize={"sm"}>
                            © 2023 Little Lemon. All rights reserved
                        </Text>
                        <Stack direction={"row"} spacing={6}>
                            <SocialButton label={"Twitter"} href={"#"}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={"YouTube"} href={"#"}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={"Instagram"} href={"#"}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>Our Restourant</ListHeader>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#"}>Menu</Link>
                        <Link href={"#"}>Reservation</Link>
                        <Link href={"#"}>Order Online</Link>
                        <Link href={"#"}>Customers Reviews</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>Support</ListHeader>
                        <Link href={"#"}>Help Center</Link>
                        <Link href={"#"}>Terms of Service</Link>
                        <Link href={"#"}>Legal</Link>
                        <Link href={"#"}>Privacy Policy</Link>
                        <Link href={"#"}>Satus</Link>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={"row"}>
                            <Input
                                placeholder={"Your email address"}
                                bg={useColorModeValue(
                                    "blackAlpha.100",
                                    "whiteAlpha.100"
                                )}
                                border={0}
                                _focus={{
                                    bg: "whiteAlpha.300",
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue("green.400", "green.800")}
                                color={useColorModeValue("white", "gray.800")}
                                _hover={{
                                    bg: "green.600",
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
