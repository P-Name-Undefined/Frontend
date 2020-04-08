<<<<<<< HEAD
import React from "react";

import { View, Text, TouchableOpacity, ToastAndroid, Alert } from "react-native";
=======
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
>>>>>>> dd3f558... Creating a LocationModal
import styles from "./styles";
import userService from '../../../services/User';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import Button from "../../../components/UI/button";
import LocationModal from "./LocationModal";


export default function Location({ route, navigation }) {

  const handleLocation = async() => {
    const { userData } =route.params;
    const newUserData = { 
      ...userData, 
      location: {
        type: "Point",
        coordinates:[ -49.255, -16.6799]
      },
      address: {
            cep: "72870336",
            number: 13,
            city: "Valparadise",
            state: "Goias"
        }
    }

    try {
      await userService.signUp(newUserData);

      Alert.alert(
        "Sucesso",
        "Usuário cadastrado com sucesso!",
        [
          {text: 'OK', onPress: () => {}},
        ],
        { cancelable: false }
      )
      navigation.navigate('login');
    } catch(err) {  
      Alert.alert(
        "Erro",
        "Erro ao cadastrar usuário. Tente novamente!",
        [
          {text: 'OK', onPress: () => {}},
        ],
        { cancelable: false }
      );
      
      navigation.navigate('login');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textMapContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Pressione e arraste para ajustar a sua posição.</Text>
        </View>
        <MapView initialRegion={currentRegion} style={styles.map}>
          {currentRegion && (
            <Marker
            coordinate={{
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude
            }}
            draggable
            onDragEnd={newCoordinates => {
              const {
                latitude,
                longitude
              } = newCoordinates.nativeEvent.coordinate;
              setCurrentRegion({ ...currentRegion, latitude, longitude });
            }}
            />
            )}
        </MapView>
        <View style={styles.instructionBox}>
          <Text style={styles.instruction}>Precisamos, também, obter a sua localização. Isso será util quando você for pedir ajuda!</Text>
        </View>
      </View>
      <View style={styles.buttonsBox}>
        <View style={styles.locationButton}>
          <Button title="Voltar" type="warning" press={() => navigation.goBack()} large />
        </View>
        <View style={styles.locationButton}>
          <Button title="Confirmar" type="default" press={() => saveLocation(currentRegion)} large />
        </View>
      </View>
      <LocationModal 
        modalIsVisible={modalIsVisible}
        onBackdropPress={()=>setModalIsVisible(false)}
      />
    </View>
  );
}
