import React from "react";
import { VStack, HStack, Image, Text, Button } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DealCard = ({ deal }) => {
  return (
    <VStack
      borderWidth={"1"}
      borderColor={"gray.100"}
      space={4}
      alignItems="flex-start"
      bg="white"
      width={"180"}
      shadow={2}
      rounded="lg"
      borderRadius={20}
    >
      <Image
        bg={"green.50"}
        source={deal.image}
        alt={deal.name}
        borderTopRadius={20}
        size="lg"
        width={"100%"}
        height={"120"}
      />
      <Text ml="3" fontWeight="bold">
        {deal.name}
      </Text>
      <Text ml="3" color="gray.500">
        {deal.description}
      </Text>
      <HStack
        space={12}
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Text color="dark.500" ml="3" fontWeight="bold">
          {deal.price}
        </Text>
        <Button
          size="md"
          ml="3"
          borderRadius="2xl"
          bgColor="green.500"
          _text={{ color: "white" }}
          startIcon={
            <MaterialCommunityIcons name="plus" size={24} color="white" />
          }
        />
      </HStack>
    </VStack>
  );
};

export default DealCard;
