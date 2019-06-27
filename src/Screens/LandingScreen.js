//  For using this component you want to install the some modules given below
//          react-native-track-player
//  link for the module : "https://www.npmjs.com/package/react-native-track-player?activeTab=versions"


import React ,{Component}from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class LandingScreen extends Component {
  static navigationOptions = {
    title: "React Native Track Player"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Example Demos</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Playlist")}>
          <Text>Playlist Example</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center"
  }
});
