import React from "react";
import Home from "../screens/Home";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Details from "../screens/Details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      //drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
        // drawerIcon: ({ focused, size }) => (
        //   <Ionicons
        //     name="md-home"
        //     size={size}
        //     color={focused ? "#7cc" : "#ccc"}
        //   />
        // ),
      }}
    >
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} /> */}
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      /> */}
      {/* <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}
