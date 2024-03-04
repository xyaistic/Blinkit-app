import React from "react";
import { VStack, Box, Text, Image } from "native-base";

const CategoryCard = ({ category }) => {
  return (
    <VStack key={category.name} space={1} alignItems="center">
      <Box rounded="md" borderWidth={1} borderRadius={10} borderColor="orange.300">
        <Image source={category.image} alt={category.name} size="sm" resizeMode="contain" />
      </Box>
      <Text>{category.name}</Text>
    </VStack>
  );
};

export default CategoryCard;
