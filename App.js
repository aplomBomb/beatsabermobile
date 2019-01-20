import React, { Component } from "react";
import { Platform, View, Button, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
  NavigationActions
} from "react-navigation";

import NewSongData from "./Components/NewSongData";
import SearchSongData from "./Components/SearchSongData";
import { SearchBar } from "react-native-elements";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// type Props = {};
class App extends Component {
  // onChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  //   // console.log(this.state.userInput);
  // };

  // alertUser = userSearch => {
  //   alert({ value });
  // };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "black",
          paddingTop: 0,
          marginTop: 0,
          zIndex: 1,
          height: "100%"
        }}
      >
        <Text style={{ color: "white", alignSelf: "center" }}>
          Beat Saber Companion
        </Text>
        <SearchBar
          round
          placeholder="Search Beat Saver..."
          onSubmitEditing={userSearch => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "SearchSongs"
                  })
                ]
              })
            );
          }}
        />
        <Button
          title="New Songs"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "NewSongs" })]
              })
            );
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: { header: null }
    },
    NewSongs: {
      screen: NewSongData,
      navigationOptions: { header: null }
    },
    SearchSongs: {
      screen: SearchSongData,
      navigationOptions: { header: null }
    }
  },

  {
    initialRouteName: "App"
  }
);

export default createAppContainer(AppNavigator);
