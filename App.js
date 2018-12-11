import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    console.log("Hello");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World1</Text>
        <Text style={styles.welcome}>Hello World2</Text>
        <Text style={styles.welcome}>Hello World3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    //textAlign: "center",
    margin: 10,
    backgroundColor: "brown"
  }
});
