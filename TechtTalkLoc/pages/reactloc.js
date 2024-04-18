import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => setLocation(data));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {location ? (
        <>
          <Text>Latitude: {location.lat}</Text>
          <Text>Longitude: {location.lon}</Text>
          <MapView 
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.lat,
              longitude: location.lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.lat,
                longitude: location.lon,
              }}
            />
          </MapView>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}