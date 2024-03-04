import React from "react";
import { Input, Icon, Center,VStack,Heading } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <Center flex={1} px="2">
      <Input
        mt={3}
        width="90%"
        fontSize="sm"
        placeholder="Search Anything..."
        backgroundColor="green.50"
        borderWidth={0}
        borderRadius={12}
        _focus={{}}
      />
      {/* <VStack w="100%" space={5} justifyContent={'center'}  alignSelf="center">
        <Input placeholder="Search People & Places" width="100%" justifyContent={'center'} borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
      </VStack> */}
    </Center>
  );
}
