import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="TabFavorites"
          component={FavoriteNavigation}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="TabPokedex"
          component={PokedexNavigation}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => renderPokeball(),
          }}
        />

        <Tab.Screen
          name="TabAccount"
          component={AccountNavigation}
          options={{
            tabBarLabel: "Cuenta",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const renderPokeball = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75 , top: -15}}
    />
  );
};
