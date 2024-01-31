import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarActiveBackgroundColor: "gray",
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: () => (
            <MaterialIcons name="contacts" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
