import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
   <Tabs screenOptions={{headerShown: false}}>
    <Tabs.Screen  name="home" options={{tabBarLabel: "Home", title: "Home", tabBarIcon: ()=>(
        <AntDesign name="home" size={24} color="black" />
    )}}/>
    <Tabs.Screen  name="profile" options={{tabBarLabel: "Profile", title: "Home", tabBarIcon: ()=>(
        <FontAwesome name="user-circle" size={24} color="black" />
    )}}/>
    <Tabs.Screen  name="contact" options={{tabBarLabel: "Contact", title: "Home", tabBarIcon: ()=>(
        <FontAwesome name="user-circle" size={24} color="black" />
    )}}/>
   </Tabs>
  )
}