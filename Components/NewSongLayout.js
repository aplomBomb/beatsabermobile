import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class NewSongLayout extends Component {
  render() {
    const { song } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: "black",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["white", "grey"]}
        >
          <View
            style={{
              paddingTop: 0,
              paddingBottom: 25,
              marginBottom: 0
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(song.linkUrl);
              }}
            >
              <Image
                style={{
                  width: 400,
                  height: 400,
                  borderWidth: 2,
                  borderColor: "black"
                }}
                source={{ uri: song.coverUrl }}
              />
            </TouchableOpacity>

            <Text
              numberOfLines={1}
              style={{
                color: "black",
                alignSelf: "center",
                marginTop: 10,
                maxWidth: "95%",
                fontWeight: "bold",
                fontSize: 22
              }}
            >
              {song.name}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: "grey",
                alignSelf: "center",
                marginTop: 5,
                maxWidth: "95%",
                fontSize: 18
              }}
            >
              {song.songSubName}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: "grey",
                position: "absolute",
                alignSelf: "center",
                bottom: 5,
                maxWidth: "95%",
                fontWeight: "bold"
              }}
            >
              ID:
              {song.key}
            </Text>

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                width: "90%",
                alignSelf: "center",
                marginTop: 25
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                maxWidth: 140,

                color: "purple",
                fontWeight: "bold",
                position: "absolute",
                bottom: 5,
                left: 5
              }}
            >
              {song.authorName}
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: 5,
                right: 5,
                fontWeight: "bold"
              }}
            >
              {song.upVotes}↑|↓ {song.downVotes}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
