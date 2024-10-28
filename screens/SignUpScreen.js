import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>SignUp Screen Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});