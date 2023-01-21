import React, { useState } from "react";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    useToast,
    Text,
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Radio,
    Stack,
    RadioGroup,
} from "@chakra-ui/react";
import restaurant from "../assets/restaurant.jpg";
import restaurantchef from "../assets/restaurantchef.jpg";
import creditcard from "../assets/creditcard.svg";

const Form1 = () => {
    const [value, setValue] = React.useState("1");
    return (
        <>
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
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                paddingBottom={"5"}
                paddingTop={"10"}
            >
                <Text
                    color={"gray.50"}
                    as={"span"}
                    fontSize={{
                        base: "lg",
                        md: "xl",
                        lg: "2xl",
                    }}
                >
                    Find a table for any occasion
                </Text>
            </Flex>
            <Flex
                gap={"5"}
                alignItems={"center"}
                justifyContent={"center"}
                marginBottom={"10"}
            >
                <Box flex={"1"}>
                    <Image
                        alt={"Login Image"}
                        objectFit={"contain"}
                        src={restaurant}
                    />
                </Box>
                <Box flex={"1"}>
                    <Image
                        alt={"Login Image"}
                        objectFit={"contain"}
                        src={restaurantchef}
                    />
                </Box>
            </Flex>

            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="date" fontWeight={"normal"}>
                        Pick a Date
                    </FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                        id="date"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="time" fontWeight={"normal"}>
                        Time
                    </FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="time"
                        id="time"
                    />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="numberofdiners" fontWeight={"normal"}>
                    Number of Diners
                </FormLabel>
                <NumberInput
                    defaultValue={1}
                    min={1}
                    max={20}
                    id="numberofdiners"
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper color={"gray.50"} />
                        <NumberDecrementStepper color={"gray.50"} />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="occasions" fontWeight={"normal"} mt="2%">
                    Occasions
                </FormLabel>
                <Select placeholder="Occasions">
                    <option
                        style={{ backgroundColor: "#1D4044", fontSize: "1em" }}
                    >
                        Birthday
                    </option>
                    <option
                        style={{ backgroundColor: "#1D4044", fontSize: "1em" }}
                    >
                        Anniversary
                    </option>
                </Select>
            </FormControl>

            <RadioGroup onChange={setValue} value={value}>
                <Text mt={"2%"}>Seating option</Text>
                <Stack px={"1em"}>
                    <Radio value="standard">Standard</Radio>
                    <Radio value="outside">Outside</Radio>
                </Stack>
            </RadioGroup>
        </>
    );
};

const Form2 = () => {
    return (
        <>
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
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                paddingBottom={"5"}
                paddingTop={"10"}
            >
                <Text
                    color={"gray.50"}
                    as={"span"}
                    fontSize={{
                        base: "lg",
                        md: "xl",
                        lg: "2xl",
                    }}
                >
                    Sign in to collect points
                </Text>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                    First Name
                </FormLabel>
                <Input
                    id={"first-name"}
                    name={"first-name"}
                    placeholder="First Name"
                    type={"text"}
                />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                    Last Name
                </FormLabel>
                <Input
                    id={"last-name"}
                    name={"last-name"}
                    placeholder="Last Name"
                    type={"text"}
                />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="phone" fontWeight={"normal"}>
                    Phone Number
                </FormLabel>
                <Input
                    id={"phone"}
                    name={"phone"}
                    placeholder="Phone Number"
                    type={"tel"}
                />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                    Email
                </FormLabel>
                <Input
                    id={"email"}
                    name={"email"}
                    placeholder="Email"
                    type={"email"}
                />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="password" fontWeight={"normal"}>
                    Password
                </FormLabel>
                <Input
                    id={"password"}
                    name="password"
                    placeholder="Password"
                    type="password"
                />
            </FormControl>

            <FormControl mt="2%">
                <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                    Custom Request
                </FormLabel>
                <Textarea placeholder="Add custom request" />
            </FormControl>
        </>
    );
};

const Form3 = () => {
    const { value, setValue } = useState("");
    return (
        <>
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

            <FormControl mt="10%">
                <FormLabel htmlFor="booking-details" fontWeight={"normal"}>
                    Booking Details
                </FormLabel>
                <Input
                    id={"booking-details"}
                    name={"booking-details"}
                    placeholder="Date - Time - Number of diners"
                    type={"text"}
                />
            </FormControl>

            <FormControl mt="5%">
                <FormLabel htmlFor="credit-card" fontWeight={"normal"}>
                    Credit Card details
                </FormLabel>
                <Input
                    id={"credit-card"}
                    name={"credit-card"}
                    placeholder="Credit Card Number"
                    type={"number"}
                />

                <Input
                    name={"card-name"}
                    placeholder="First Name / Last Name"
                    type={"text"}
                    mt={"2%"}
                />
            </FormControl>

            <FormControl mt="2%">
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"5px"}
                >
                    <Box flex={"1"}>
                        <FormLabel htmlFor="exp-date" fontWeight={"normal"}>
                            Exp Date
                        </FormLabel>
                        <Input
                            id={"exp-date"}
                            name={"exp-date"}
                            placeholder="Expire Card Date"
                            type={"number"}
                        />
                    </Box>
                    <Box flex={"1"}>
                        <FormLabel htmlFor="ccv" fontWeight={"normal"}>
                            CVV
                        </FormLabel>
                        <Flex gap={"8px"}>
                            <Input
                                id={"ccv"}
                                name={"ccv"}
                                placeholder="CCV Number"
                                type={"number"}
                            />
                            <Box
                                backgroundColor={"gray.50"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                borderRadius={"8px"}
                                border={"none"}
                            >
                                <Image src={creditcard} />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </FormControl>

            <RadioGroup onChange={setValue} value={value} mt={"5%"}>
                <Stack px={"1em"}>
                    <Radio value="standard">
                        Send me booking confirmation via text
                    </Radio>
                    <Radio value="outside">
                        Send me booking confirmation via email
                    </Radio>
                </Stack>
            </RadioGroup>
        </>
    );
};

export default function Multistep() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <>
            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
                bgColor={"teal.900"}
                color={"gray.50"}
            >
                <Progress
                    hasStripe
                    value={progress}
                    mb="5%"
                    mx="5%"
                    isAnimated
                ></Progress>
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1);
                                    setProgress(progress - 33.33);
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%"
                            >
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 3}
                                onClick={() => {
                                    setStep(step + 1);
                                    if (step === 3) {
                                        setProgress(100);
                                    } else {
                                        setProgress(progress + 33.33);
                                    }
                                }}
                                colorScheme="teal"
                                variant="outline"
                            >
                                Next
                            </Button>
                        </Flex>
                        {step === 3 ? (
                            <Button
                                w="7rem"
                                colorScheme="red"
                                variant="solid"
                                onClick={() => {
                                    toast({
                                        title: "Account created.",
                                        description:
                                            "We've created your account for you.",
                                        status: "success",
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                }}
                            >
                                Submit
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}
