import React from 'react';
import { AppRegistry,StyleSheet, Text, View,Dimensions,Navigator,TouchableOpacity,Button } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View
        style={styles.container}>
        <Text
          style={styles.text}>
          Data Deleted!
          {"\n"}
          Swipe back to start again
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    fontWeight:'bold',
    justifyContent:'center',
    color:'white'
  },
  titleBox:{
    
  }
});
AppRegistry.registerComponent('Home',() => Home);
