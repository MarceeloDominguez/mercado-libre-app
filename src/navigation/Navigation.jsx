import React from "react";
import Home from "../screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Details from "../screens/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Drawer.Screen name="StackHome" component={StackHome} />
    </Drawer.Navigator>
  );
}

function StackHome() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: true, headerTitle: "" }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
