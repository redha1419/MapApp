import React from 'react';
import { AppRegistry,StyleSheet, Text, View,Dimensions,Navigator,TouchableOpacity,Button } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(){
    super();
  }
  onPress(name,integer){
      this.props.navigator.push({
        name:name,
        data:integer
      });
  }
  render() {
    return (
    <View style ={styles.container}>
      <Text
        style={styles.text}>
        Welcome to MyMap
      </Text>
      <View style={styles.space}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={()=>this.onPress('MyMap')}>
               <Text style={styles.buttonText}>
                  Map
                </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.space}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={()=>this.onPress('MyMap',0)}>
              <Text style={styles.buttonText}>
                Random Points
              </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.space}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={()=>this.onPress('MyMap',1)}>
               <Text style={styles.buttonText}>
                  Earthquake Points
                </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.space}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={()=>this.onPress('MyMap',2)}>
               <Text style={styles.buttonText}>
                  Create Points
                </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.space}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={()=>this.onPress('MyMap',3)}>
               <Text style={styles.buttonText}>
                  Saved Points
                </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.space}>
          <TouchableOpacity
            style={styles.resetView}
            onPress={()=>this.onPress('MyMap',4)}>
               <Text style={styles.buttonText}>
                  Reset
                </Text>
          </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46a08c',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text:{
    fontSize: 30,
    fontWeight:'bold',
    padding: 35,
    justifyContent:'center'
  },
  buttonText:{
    fontSize: 20,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonView:{
    height:40,
    width:width,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  resetView:{
    height:60,
    width:200,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30
  },
  space:{
    padding:7.5
  },

});
AppRegistry.registerComponent('Home',() => Home);
