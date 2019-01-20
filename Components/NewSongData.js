import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import NewSongLayout from "./NewSongLayout";

export default class NewSongData extends Component {
  state = {
    songData: []
  };

  async componentDidMount() {
    try {
      const songData = await axios.get(
        "https://beatsaver.com/api/songs/new/{start?"
      );

      this.setState({
        songData: songData.data.songs
      });
      //   console.log(this.state.songData);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <ScrollView>
        {this.state.songData.map(song => (
          <NewSongLayout key={song.id} song={song} />
        ))}
      </ScrollView>
    );
  }
}
