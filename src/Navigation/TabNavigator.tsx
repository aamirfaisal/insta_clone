import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
//* !!----------BOTTOM_TAB SCREENS----------!!
import Home from "../Screens/Home";
import Notification from "../Screens/Notification";
import Post from "../Screens/Post";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";

type Props = {};

const TabNavigator = (props: Props) => {
  type BottomTabParamList = {
    Home: undefined;
    Search: undefined;
    Post: undefined;
    Notification: undefined;
    Profile: undefined;
  };

  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "ios-search-outline";
          } else if (route.name === "Post") {
            iconName = focused ? "add-circle-sharp" : "add-circle-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person-circle" : "ios-person-outline";
          }
          return <Ionic name={iconName} size={size} color={"#000"} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
