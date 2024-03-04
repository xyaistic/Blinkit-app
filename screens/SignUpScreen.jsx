import React from "react";
import { Stack, Text, Input,Divider, Button, HStack, Box } from "native-base";
import { SocialIcons } from "../constant/socialIcons";
import SocialSignInButtons from "../components/SocialSignInButtons";

export default function SignUpScreen() {
  return (
    <Stack
      space={4}
      alignItems="center"
      p="4"
      marginTop={"40%"}
      w="90%"
      maxW="300px"
      mx="auto"
    >
      <Text fontSize="3xl" fontWeight="900">
        Sign Up
      </Text>
      <Text fontWeight={"bold"} mb="10" color={"muted.400"}>
        First create your account
      </Text>
      <Input
        placeholder="Full name"
        placeholderTextColor="muted.400"
        borderBottomColor={"muted.400"}
        variant="underlined"
        w="100%"
        h={"12"}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="muted.400"
        borderBottomColor={"muted.400"}
        variant="underlined"
        w="100%"
        h={"12"}
      />
      <Input
        type="password"
        placeholder="Password"
        placeholderTextColor="muted.400"
        borderBottomColor={"muted.400"}
        variant="underlined"
        w="100%"
        h={"12"}
      />
      <Input
        type="password"
        placeholder="Confirm your password"
        placeholderTextColor="muted.400"
        borderBottomColor={"muted.400"}
        variant="underlined"
        w="100%"
        h={"12"}
      />
      <Button
        colorScheme="black"
        backgroundColor={"black"}
        borderRadius={"xl"}
        variant="solid"
        width="100%"
        mt="4"
        mb="0"
      >
        SignUp
      </Button>
      <HStack space={0} alignItems={"center"} justifyContent="center" w="100%">
        <Text>Already have an account?</Text>
        <Button
          variant="link"
          _text={{
            color: "lime.500",
            textDecorationLine: "underline", // This adds the underline
          }}
          onPress={() => {}}
        >
          LOGIN
        </Button>
      </HStack>
      <HStack alignItems="center" space={2}>
        <Divider w="40%" thickness="1.5" bg="muted.300" />
        <Text fontSize="sm" color="black">
          Sign in with
        </Text>
        <Divider w="40%" thickness="1.5" bg="muted.300" />
      </HStack>
      <SocialSignInButtons icons={SocialIcons} />
      <Button variant="link" onPress={() => {}}>Skip now</Button>

    </Stack>
  );
}
