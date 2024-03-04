import React from "react";
import { Stack, Text, Input, Button, HStack, Divider } from "native-base";
import { SocialIcons } from "../constant/socialIcons";
import SocialSignInButtons from "../components/SocialSignInButtons";

export default function SignInScreen() {
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
        Sign In
      </Text>
      <Text fontWeight={"bold"} mb="10" color={"muted.400"}>
        Enter your email and password
      </Text>
      <Input
        placeholder="Email"
        placeholderTextColor="muted.400"
        borderBottomColor={"muted.400"}
        variant="underlined"
        w="100%"
        h={"12"}
      />
      <HStack w="100%" alignItems="center">
        <Input
          type="password"
          placeholderTextColor="muted.400"
          borderBottomColor={"muted.400"}
          placeholder="Password"
          variant="underlined"
          flex={1}
          w="100%"
          h={"12"}
          mr={5} // Adjust this value as needed to prevent overlap
        />
        <Button
          variant="link"
          position="absolute"
          right={0}
          _text={{ color: "lime.500", fontSize: "xs" }}
          fontWeight={"extrabold"}
          onPress={() => {
            console.log("Forgot works");
          }}
        >
          Forgot password?
        </Button>
      </HStack>
      <Button
        colorScheme="black"
        backgroundColor={"black"}
        borderRadius={"xl"}
        variant="solid"
        width="100%"
        mt="4"
        mb="0"
      >
        LOGIN
      </Button>
      <HStack space={0} alignItems={"center"} justifyContent="center" w="100%">
        <Text>Don't have an account?</Text>
        <Button
          variant="link"
          _text={{
            color: "lime.500",
            textDecorationLine: "underline", // This adds the underline
          }}
          onPress={() => {}}
        >
          Sign Up
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
    </Stack>
  );
}
