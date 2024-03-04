// import React from "react";
// import {
//   VStack,
//   HStack,
//   IconButton,
//   Icon,
//   Text,
//   Box,
//   StatusBar,
// } from "native-base";
// import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { AntDesign } from '@expo/vector-icons';

// export default function AppBar() {
//   return (
//     <>
//       <StatusBar bg="#3700B3" barStyle="light-content" />
//       <Box safeAreaTop bg="lime.500" />
//       <VStack space={1} bg="lime.500" px="1" w="100%">
//         <HStack
//           py="3"
//           justifyContent="space-between"
//           alignItems="center"
//           w="100%"
//         >
//           <HStack alignItems="center">
//             <IconButton 
//               icon={
//                 <Icon
//                   size={"xl"}
//                   as={MaterialIcons}
//                   name="menu"
//                   mt="1"
//                   color="gray.800"
//                 />
//               }
//             />
//             <Text color="gray.800" ml="1" fontSize="20" fontWeight="bold">
//               Home
//             </Text>
//           </HStack>
//           <HStack>
//             <IconButton
//               icon={
//                 <Icon
//                   as={MaterialIcons}
//                   name="favorite-outline" // Correct icon name for heart outline
//                   size="lg"
//                   color="gray.800"
//                 />
//               }
//             />
//             <IconButton
//               icon={
//                 <AntDesign name="shoppingcart" size={24}  color="gray.800" />
//               }
//             />
//             <IconButton
//               icon={
//                 <Ionicons
//                   name="notifications-outline"
//                   size={24}
//                   color="black"
//                 />
//               }
//             />
//           </HStack>
//         </HStack>
//         <HStack px="2" py="4" mt="-7" alignItems="center">
//           <Icon
//             as={MaterialCommunityIcons}
//             name="map-marker"
//             size="lg"
//             color="gray.800"
//           />
//           <Text color="muted.700" ffontSize="14" pl="2">
//             Location here
//           </Text>
//         </HStack>
//       </VStack>
//     </>
//   );
// }


import React from 'react';
import { VStack, HStack, IconButton, Icon, Text, Box, StatusBar } from 'native-base';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

const AppBar = ({navigation, title, actions }) => {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="lime.500" />
      <VStack space={1} bg="lime.500" px="1" w="100%">
        <HStack py="3" justifyContent="space-between" alignItems="center" w="100%">
          <HStack alignItems="center">
          <IconButton
  icon={<Icon size="xl" as={MaterialIcons} name="menu" mt="1" color="gray.800" />}
  onPress={() => navigation.toggleDrawer()}
/>
            <Text color="gray.800" ml="1" fontSize="20" fontWeight="bold">
              {title}
            </Text>
          </HStack>
          <HStack>{actions}</HStack>
        </HStack>
        <HStack px="2" py="4" mt="-7" alignItems="center">
          <Icon as={MaterialIcons} name="location-on" size="lg" color="gray.800" />
          <Text color="muted.700" fontSize="14" pl="2">
            Location here
          </Text>
        </HStack>
      </VStack>
    </>
  );
};

export default AppBar;
