import React from "react";
import Home from "../screens/Home";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
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
