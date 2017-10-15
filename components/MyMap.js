import React from 'react';
import { AppRegistry,StyleSheet, View,Dimensions,Navigator } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width/height;
var iteming =[];
var temp =[];
//markers are in lONLAT format!! However MapView.Marker wants in LATLONG format, thus flipped

export default class MyMap extends React.Component {
  constructor(props){
    super(props);
    this.state={
      region:{
        latitude: 43.25862773572175,
        longitude: -79.92069840431213,
        latitudeDelta: 1,
        longitudeDelta: ASPECT_RATIO,
      },
      markers:[]
    }
    if(this.props.data == 3){
      temp =[];
    }
  }
  componentWillMount(){
    if(this.props.data == 4){
      iteming = [];
      temp = [];
        this.props.navigator.push({
          name:'Reset'
        });
    }
  }
  componentDidMount(){
    if(this.props.data==0){
      var rand=[];
        for (i=0;i<8;i++){
            rand[i]= Math.random()*100;
            //console.log(rand[i]);
        }
      this.setState({markers:[[rand[0],rand[1]],[rand[2],rand[3]],[rand[4],rand[5]],[rand[6],rand[7]]]});
    }
    if(this.props.data==1){
    this.fetchMarkers();
    }
    if (this.props.data == 3){
      this.setState({markers:iteming});
    }
  }
  fetchMarkers(){
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson')
    .then((response) =>  {return response.json();})
    .then((data) => {
      let items = [];
      for (i=0;i<data.features.length;i++){
        //console.log(data.features[i].geometry.coordinates);
        items.push(data.features[i].geometry.coordinates);
      }
      //console.log(items)
      this.setState({
        markers:items
      });
      //console.log(this.state.markers)
    });
  }
  onMapPress(e) {
    let coord=[];
    if(this.props.data == 2){
      try {
      e.nativeEvent.coordinate.longitude
      e.nativeEvent.coordinate.latitude
      }
      catch(err) {
      return
      }
      coord.push(e.nativeEvent.coordinate.longitude);
      coord.push(e.nativeEvent.coordinate.latitude);
      iteming.push(coord);
      //console.log(iteming);
      temp.push(coord);
      //console.log(temp);
      this.setState({markers:temp});
    }
      //console.log(this.state.markers)
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider="google"
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress.bind(this)}
        >
          {
            this.state.markers.map((item,idx) => {
              return (
                   <Marker
                     key={idx}
                     coordinate={{latitude:item[1],longitude:item[0]}}
                          />)
              })
          }
        </MapView>
      </View>
    );
  }
}
/*Map.propTypes = {
  provider: MapView.ProviderPropType,
};
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
AppRegistry.registerComponent('MyMap',() => MyMap);
