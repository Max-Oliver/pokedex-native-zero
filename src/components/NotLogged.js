import React from 'react'
import { StyleSheet ,View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NotLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver esta pantalla debes iniciar session</Text>
      <Button title='Ir a Login' onPress={() => navigation.navigate('Account')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 50,
    marginVertical: 50
  },
  text: {
    textAlign: "center",
    marginBottom: 10
  }
})