import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SearchSongData extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: "black" }}>{this.props.userSearch}</Text>
      </View>
    );
  }
}
