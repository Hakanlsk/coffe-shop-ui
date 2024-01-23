import { LogBox, View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColors } from "../theme";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  "non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 0,
          borderRadius: 50,
          backgroundColor: themeColors.bgLight,
          marginHorizontal: 15,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={HomeScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "Home") {
    icon = focused ? (
      <Entypo name="home" size={24} color="black" />
    ) : (
      <AntDesign name="home" size={24} color="black" />
    );
  } else if (route.name === "Favourite") {
    icon = focused ? (
      <AntDesign name="heart" size={24} color="black" />
    ) : (
      <AntDesign name="hearto" size={24} color="black" />
    );
  } else if (route.name === "Cart") {
    icon = focused ? (
      <Ionicons name="bag-add" size={24} color="black" />
    ) : (
      <Ionicons name="bag-add-outline" size={24} color="black" />
    );
  }

  let buttonStyle = focused ? { backgroundColor: "white" } : {};
  return (
    <View
      style={{
        ...buttonStyle,
        display: "flex",
        alignItems: "center",
        borderRadius: 9999,
        padding: 12,
      }}
    >
      {icon}
    </View>
  );
};
