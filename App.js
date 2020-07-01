import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BillScreen from "./src/screens/BillScreen";
import SearchScreen from "./src/screens/SearchScreen";
import FollowingScreen from "./src/screens/FollowingScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Bills") {
              iconName = focused
                ? "format-list-bulleted"
                : "format-list-bulleted";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search";
            } else {
              iconName = focused ? "favorite-border" : "favorite-border";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#a5a9ad",
          inactiveTintColor: "#4c545c",
          activeBackgroundColor: "#1f2933",
          inactiveBackgroundColor: "#1f2933",
        }}
      >
        <Tab.Screen name="Bills" component={Bills} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Following" component={Following} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Bills() {
  return <BillScreen />;
}

function Search() {
  return <SearchScreen />;
}


function Following() {
  return <FollowingScreen />;
}
