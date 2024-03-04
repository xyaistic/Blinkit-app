import React from 'react';
import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { VStack, HStack, IconButton, Icon, Text, Box, Divider } from 'native-base';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      {/* Custom Header */}
      <VStack space={4} bg="lime.500" px="4" pt="5" pb="3">
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize="xl" fontWeight="bold">Home</Text>
          <HStack>
            <IconButton
              icon={<Icon as={AntDesign} name="hearto" color="white" size="md" />}
              onPress={() => {/* logic for favorite goes here */}}
            />
            <IconButton
              icon={<Icon as={Ionicons} name="search" color="white" size="md" />}
              onPress={() => {/* logic for search goes here */}}
            />
          </HStack>
        </HStack>
        <HStack alignItems="center">
          <Icon as={MaterialIcons} name="location-on" color="white" size="md" />
          <Text color="white" fontSize="md" pl="2">Location here</Text>
        </HStack>
      </VStack>

      <Divider my="2" />

      {/* Drawer Navigation Items */}
      <DrawerItemList {...props} />
      
      {/* Additional Drawer Items */}
      <DrawerItem
        label="Help"
        icon={({ color, size }) => (
          <Icon as={MaterialIcons} name="help-outline" size="md" color={color} />
        )}
        onPress={() => {/* logic for help goes here */}}
      />

      {/* You can add more DrawerItems here as needed */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
