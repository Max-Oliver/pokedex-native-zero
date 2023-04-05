import { Text, SafeAreaView, View } from "react-native";
import React, { Component, useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/UseAuth";

export default function AccountScreen() {
  const { auth } = useAuth();

  return (
    <View>
      {auth ? (
        <UserData
          username={auth.username}
          firstName={auth.firstName}
          lastName={auth.lastName}
          email={auth.email}
        />
      ) : (
        <LoginForm />
      )}
    </View>
  );
}
