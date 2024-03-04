import { Box, Text, ScrollView, HStack } from "native-base";
import { deals } from "../constant/deal";
import DealCard from "../components/DealCard";

export default function SpecialDeals() {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" p="4">
        Special Deals
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        px="4"
      >
        <HStack space={5} alignItems="center">
          {deals.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
}
