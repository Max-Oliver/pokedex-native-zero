import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { capitalize } from "lodash";
import useAuth from "../../hooks/UseAuth";

export default function UserData() {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, {auth.username}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title={"Nombre"}
          text={`${capitalize(auth.firstName)} ${capitalize(auth.lastName)}`}
        />
        <ItemMenu title={"Username"} text={auth.username} />
        <ItemMenu title={"Email"} text={auth.email} />
        <ItemMenu title={"Total Favoritos"} text={`${0} pokemons`} />
      </View>
      <Button title="Cerrar Sesion" onPress={logout} style={styles.btnLogout} />
    </View>
  );
}

ItemMenu = (props) => {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemTitle}>{title}:</Text>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  itemText: {
    fontSize: 12,
    color: "grey",
    textAlign: "left",
    marginLeft: 10,
  },
  btnLogout: {
    paddingTop: 20,
  },
});
