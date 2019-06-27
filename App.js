import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LandingScreen from "./src/Screens/LandingScreen";
import PlaylistScreen from "./src/Screens/PlaylistScreen";

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen
    },
    Playlist: {
      screen: PlaylistScreen
    }
  },
  { initialRouteName: "Landing" }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

// import React,{Component} from "react";
// import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import TrackPlayer from 'react-native-track-player';
// import playlistData from "./src/Data/Playlist.json";
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       paused:false
//     }
//   }
//   ComponentWillMount(){
//     useEffect(() => {
//       TrackPlayer.setupPlayer();
//       TrackPlayer.updateOptions({
//         stopWithApp: true,
//         capabilities: [
//           TrackPlayer.CAPABILITY_PLAY,
//           TrackPlayer.CAPABILITY_PAUSE,
//           TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
//           TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
//           TrackPlayer.CAPABILITY_STOP
//         ],
//         compactCapabilities: [
//           TrackPlayer.CAPABILITY_PLAY,
//           TrackPlayer.CAPABILITY_PAUSE
//         ]
//       });
//     }, []);
//   }


//   playing(){
//     TrackPlayer.setupPlayer().then(async () => {
//       await TrackPlayer.add(playlistData);
//       {TrackPlayer.play() }
//      this.setState({
//       paused:true
//      })
//     });
//   }
//   stop(){
//     TrackPlayer.pause();
//     this.setState({paused:false})
//   }
// skipToNext(){
//   TrackPlayer.skipToNext();
// }
// skipToPrevious(){
//   TrackPlayer.skipToPrevious();
// }
//   render(){
//     return (
//       <View style={styles.container}>
//       <TouchableOpacity activeOpacity={0.0} >
//         <Image style={[styles.secondaryControl,]}
//           source={require('./src/Images/backBtn.png')}/>
//       </TouchableOpacity>
//       <View style={{width: 40}} />
//       <TouchableOpacity 
//      onPress={this.skipToPrevious.bind(this)}>
//         <Image style={{tintColor:"white"}} source={require('./src/Images/backBtn.png')}/>
//       </TouchableOpacity>
//       <View style={{width: 20}} />
//       {!this.state.paused ?
//         <TouchableOpacity onPress={this.playing.bind(this)}>
//           <View style={styles.playButton}>
//             <Image style={{tintColor:"white"}} source={require('./src/Images/playbutton.png')}/>
//           </View>
//         </TouchableOpacity> :
//         <TouchableOpacity 
//         onPress={this.stop.bind(this)}>
//           <View style={styles.playButton}>
//             <Image style={{tintColor:"white"}} source={require('./src/Images/pausebutton.png')}/>
//           </View>
//         </TouchableOpacity>
//       }
//       <View style={{width: 20}} />
//       <TouchableOpacity 
//        onPress={this.skipToNext.bind(this)}>
//         <Image style={[{tintColor:"white"}]}
//           source={require('./src/Images/nextButton.png')}/>
//       </TouchableOpacity>
//       <View style={{width: 40}} />
//       <TouchableOpacity activeOpacity={0.0}>
//         <Image style={[styles.secondaryControl,]}
//           source={require('./src/Images/repeat-button.png')}/>
//       </TouchableOpacity>
//     </View>
//     )
//   }
  
// }
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 8,
//     backgroundColor:"black"
//   },
//   playButton: {
//     height: 72,
//     width: 72,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 72 / 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   secondaryControl: {
//     height: 18,
//     width: 18,
//     tintColor:"white"
//   },
//   off: {
//     opacity: 0.30,
//   }
// })
