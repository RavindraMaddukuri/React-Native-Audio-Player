//  For using this component you want to install the some modules given below
//          react-native-track-player
//  link for the module : "https://www.npmjs.com/package/react-native-track-player?activeTab=versions"



import { Component } from 'react';

export default class Screen extends Component {
  navigateTo = path => {
    this.props.navigation.navigate(path);
  };
}