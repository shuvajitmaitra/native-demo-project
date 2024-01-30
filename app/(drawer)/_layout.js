import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { router } from "expo-router";


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem icon={(color, size) => <AntDesign name="home" size={24} color="black" />}
        label={"home"}
        onPress={() => {
          router.push('/(drawer)/(tabs)/home')
        }}
      />
      <DrawerItem icon={(color, size) => <MaterialIcons name="contacts" size={24} color="black" />}
        label={"Contact"}
        onPress={() => {
          router.push('/(drawer)/(tabs)/contact')
        }}
      />
      <DrawerItem icon={(color, size) => <FontAwesome name="user-circle" size={24} color="black" />}
        label={"Profile"}
        onPress={() => {
          router.push('/(drawer)/(tabs)/profile')
        }}
      />

    </DrawerContentScrollView>
  )
}
export default function _layout() {
  return <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} />;
}
