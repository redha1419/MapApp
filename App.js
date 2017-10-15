import React from 'react';
import { AppRegistry,Navigator } from 'react-native';
import MyMap from './components/MyMap';
import Home from './components/Home';
import Reset from './components/Reset';


const SideMenu = require('react-native-side-menu');

export default class App extends React.Component {
  renderScene(route, navigator){
    if(route.name == 'Home'){
      return (<Home navigator={navigator} title="Home" />)
    }
    if(route.name == 'MyMap'){
      return (<MyMap data={route.data} navigator={navigator} title='MyMap' />)
    }
    if(route.name == 'Reset'){
      return (<Reset navigator={navigator} title='Reset' />)
    }
  }

  render() {
    return (
        <Navigator
          initialRoute={{name:'Home'}}
          renderScene={this.renderScene}
          configureScreen={(route, routeStack)=>Navigator.SceneConfigs.PushFromRight}
        />
    );
  }
}
AppRegistry.registerComponent('App',() => App);
