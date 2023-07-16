import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "./Home";
import Profile from "./Profile";
const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const [hideBottomBar, setHideBottomBar] = React.useState(false);

  const toggleBottomBarVisibility = () => {
    setHideBottomBar(!hideBottomBar);
  };

  return (
    <>
      {!hideBottomBar && (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          inactiveColor="#000"
          barStyle={{ backgroundColor: "#95B6FF" }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Camera") {
                iconName = "camera";
              } else if (route.name === "Settings") {
                iconName = "person";
              }

              return <Icon name={iconName} color={color} size={size} />;
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={AppCamera}
            options={{
              tabBarLabel: "Camera",
              tabBarIcon: ({ color }) => (
                <Icon name="camera" color={color} size={26} />
              ),
            }}
            listeners={({ navigation, route }) => ({
              tabPress: (e) => {
                e.preventDefault();
                toggleBottomBarVisibility();
              },
            })}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color }) => (
                <Icon name="person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
      {hideBottomBar && (
        <View style={{ flex: 1 }}>
          <AppCamera />
        </View>
      )}
    </>
  );
}
