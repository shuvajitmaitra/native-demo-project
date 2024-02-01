import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();
  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={(color, size) => (
          <AntDesign name="home" size={24} color={pathname ==='/home' ? "white" : "black"} />
        )}
        label={"Home"}
        labelStyle={{color: pathname ==='/home' ? "white" : "black"}}
        onPress={() => {
          router.push("/(drawer)/(tabs)/home");
        }}
        style={{backgroundColor: pathname ==='/home' ? "black" : "white"}}
      />
      <DrawerItem
        icon={(color, size) => (
          <MaterialIcons name="contacts" size={24} color={pathname ==='/contact' ? "white" : "black"} />
        )}
        label={"Contact"}
        labelStyle={{color: pathname ==='/contact' ? "white" : "black"}}
        onPress={() => {
          router.push("/(drawer)/(tabs)/contact");
        }}
        style={{backgroundColor: pathname ==='/contact' ? "black" : "white"}}
      />
      <DrawerItem
        icon={(color, size) => (
          <FontAwesome name="user-circle" size={24} color={pathname ==='/profile' ? "white" : "black"} />
        )}
        label={"Profile"}
        labelStyle={{color: pathname ==='/profile' ? "white" : "black"}}
        onPress={() => {
          router.push("/(drawer)/(tabs)/profile");
        }}
        style={{backgroundColor: pathname ==='/profile' ? "black" : "white"}}
      />
      <DrawerItem
        icon={(color, size) => (
          <AntDesign name="login" size={24} color={pathname ==='/login' ? "white" : "black"}/>
        )}
        label={"Login"}
        labelStyle={{color: pathname ==='/login' ? "white" : "black"}}
        onPress={() => {
          router.push("/login");
        }}
        style={{backgroundColor: pathname ==='/login' ? "black" : "white"}}
      />
      <DrawerItem
        icon={(color, size) => (
          <AntDesign name="pushpino" size={24} color={pathname ==='/register' ? "white" : "black"}/>
        )}
        label={"Sign Up"}
        labelStyle={{color: pathname ==='/register' ? "white" : "black"}}
        onPress={() => {
          router.push("/register");
        }}
        style={{backgroundColor: pathname ==='/register' ? "black" : "white"}}
      />
    </DrawerContentScrollView>
  );
};
export default function _layout() {
  const pathname = usePathname();
  return (
    <Drawer
      screenOptions={{
        title:
          (pathname == "/home" && "Home") ||
          (pathname == "/profile" && "Profile") ||
          (pathname == "/contact" && "Contact"),
          headerTitleAlign: 'center',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
    </Drawer>
  );
}
