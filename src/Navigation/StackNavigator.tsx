import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* !!----------STACK SCREENS----------!!
import Login from "../Screens/Login";
import TabNavigator from "./TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../Context/AuthProvider";

const Navigation = (props: any) => {
  type AppStackParamList = {
    Login: undefined;
    BottomTabs: undefined;
  };
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const value = await AsyncStorage.getItem("IS_USER_LOGGED_IN");
    if (value) setUser(JSON.parse(value));
    if (initializing) setInitializing(false);
  };
  const Stack = createNativeStackNavigator<AppStackParamList>();
  if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={user ? "BottomTabs" : "Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
