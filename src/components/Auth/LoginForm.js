import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  TextInput,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userAdmin, adminDetail } from "../../utils/userDB";
import useAuth from "../../hooks/UseAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValues) => {
      userValidation(formValues, setError, login);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Session</Text>
      <TextInput
        placeholder="Nombre de Usuario"
        style={styles.input}
        autoCapitalize="none"
        value={"zerobyone"}
        //value={formik.values.username}
        //onChangeText={(text) => formik.setFieldValue("username", 'zerobyone')}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <Text style={styles.errors}>{formik.errors.username}</Text>
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={"creativelab"}
        //value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        //onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Text style={styles.errors}>{formik.errors.password}</Text>
      <Button title="Iniciar Sesion" onPress={formik.handleSubmit} />
      <Text style={styles.errors}>{error}</Text>
    </View>
  );
}

initialValues = () => {
  return {
    username: "zerobyone",
    password: "creativelab",
  };
};
validationSchema = () => {
  return {
    //username: Yup.string().required("El usuario es un campo obligatiorio"),
    //password: Yup.string().required("El password es un campo obligatiorio"),
  };
};

userValidation = (formValues, setError, login) => {
  const { username, password } = formValues;

  if (username !== userAdmin.username || password !== userAdmin.password) {
    setError("El usuario o la contraseña no son correctos...");
  } else {
    console.log("Usuario cargado correctamente...");
    login(adminDetail);
  }
};
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 50,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  errors: {
    textAlign: "left",
    color: "red",
    marginLeft: 20,
  },
});
