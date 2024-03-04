import React from "react";
import { Box, HStack, Text, Image } from "native-base";
import foodTrading from "./../assets/foodtrading.png";
export default function Adds() {
  return (
    <Box
      bg="white"
      shadow={2}
      rounded="lg"
      overflow="hidden"
      width="90%"
      height={150}
      alignSelf="center"
      mt="5"
    >
      <HStack>
        <Box bg={"lime.500"} width={"60%"} height={150}>
          <Text
            color="dark.50"
            fontSize="2xl"
            mt={8}
            ml="5"
            fontWeight="bold"
           style={{ fontFamily: 'ProtestRiot-Regular', fontSize: 20 }}

          >
            Fresh{"\n"}Vegetables
          </Text>
        </Box>
        <Image
          source={foodTrading}
          alt="Fresh Vegetables"
          width="70%"
          height="100%"
        />
      </HStack>
    </Box>
  );
}
