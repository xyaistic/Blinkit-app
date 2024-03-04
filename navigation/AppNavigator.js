import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import { drawerRoutes } from "../routes/routes";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // This hides the header
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {drawerRoutes.map((route, index) => (
        <Drawer.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
