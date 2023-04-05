import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

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
        <Stack.Screen
          name="Pokemon"
          component={PokemonScreen}
          options={{ title: "", headerTransparent: true }}
        />
      </Stack.Navigator>
    );
  }
}
