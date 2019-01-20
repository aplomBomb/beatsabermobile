import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  text: {
    fontFamily: "Bangers",
    fontSize: 50,
    color: "white",
    textAlign: "center"
  }
});

export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={styles.text}>Beat Saber Companion</Text>
          {/* <Button title="Push This" onPress= /> */}
        </View>
      </React.Fragment>
    );
  }
}
