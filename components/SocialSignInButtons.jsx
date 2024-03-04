import React from "react";
import { HStack, Icon, Pressable } from "native-base";

// You can add more icon libraries if needed
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const iconLibraries = {
  MaterialCommunityIcons: MaterialCommunityIcons,
  AntDesign: AntDesign,
  // add more libraries here as needed
};

export default function SocialSignInButtons({ icons }) {
  return (
    <HStack space={6} justifyContent="center" alignItems="center">
      {icons.map((icon, index) => (
        <Pressable key={index} onPress={icon.onPress}>
          <Icon
            as={iconLibraries[icon.library]}
            name={icon.name}
            color={icon.color}
            size={icon.iconSize}
          />
        </Pressable>
      ))}
    </HStack>
  );
}
