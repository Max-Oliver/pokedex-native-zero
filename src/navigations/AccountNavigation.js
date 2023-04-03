import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account";

const Stack = createNativeStackNavigator();

export default class AccountNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: "Cuenta de Usuario" }}
        />
      </Stack.Navigator>
    );
  }
}
