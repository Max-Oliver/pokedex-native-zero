import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default class FavoriteNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{ title: "Favoritos" }}
        />
      </Stack.Navigator>
    );
  }
}
