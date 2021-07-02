import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Rating from "./Rating";
import Search from "./Search";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Critique":
                iconName = focused ? "star" : "star-outline";
                break;
              case "Recherche":
                iconName = focused ? "search" : "search-outline";
                break;
              default:
                iconName = "ban";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#0A0A15",
          activeBackgroundColor: "white",
          inactiveTintColor: "white",
          inactiveBackgroundColor: "#0A0A15",
        }}
      >
        <Tabs.Screen name="Critique" component={Rating} />
        <Tabs.Screen name="Recherche" component={Search} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;