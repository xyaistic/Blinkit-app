import { IconButton, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export const actions = (
  <>
    <IconButton
      icon={
        <Icon
          as={MaterialIcons}
          name="favorite-outline"
          size="lg"
          color="gray.800"
        />
      }
    />
    <IconButton
      icon={
        <Icon as={MaterialIcons} name="search" size="lg" color="gray.800" />
      }
    />
  </>
);
