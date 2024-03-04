import React from "react";
import { ScrollView, HStack, Text, Box, Button } from "native-base";
import CategoryCard from "./CategoryCard";
import { categories } from "../constant/category";
export default function CategoryCards() {
  return (
    <Box>
      <HStack justifyContent="space-between" alignItems="center" px="4" pt="4">
        <Text fontSize="xl" fontWeight="bold">
          Categories
        </Text>
        <Button
          size="sm"
          variant="outline"
          borderWidth={0}
          colorScheme="muted"
          fontWeight="bold"
        >
          View All
        </Button>
      </HStack>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack space={2} alignItems="center" px="4" py="2">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </HStack>
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack space={2} alignItems="center" px="4" py="2">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
}
