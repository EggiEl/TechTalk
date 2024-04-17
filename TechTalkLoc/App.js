import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from "expo-location";
import MapView , {Marker} from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [location , setLocation] = useState();

 useEffect(() => { 
  const getPermission = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    

    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
  }
  let currentLocation = await Location.getCurrentPositionAsync({});
  setLocation(currentLocation);
  console.log("Location:"); 
  console.log(currentLocation);
  }
  getPermission();
 }, []) 

  return (
    <View>
      <View style={styles.locationBox}>
        {location && (
          <Text style={styles.locationText}>
            Latitude: {location.coords.latitude.toFixed(2)}, Longitude: {location.coords.longitude.toFixed(2)}
          </Text>
        )}
      </View>

      <View style={{height : windowHeight *0.6}} >
        <MapView style={{ flex: 1 }}>
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          )}
        </MapView>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationBox: {
    marginBottom : 100 , 
    marginTop : 100, 
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
  },
});