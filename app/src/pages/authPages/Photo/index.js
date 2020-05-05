import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Icon } from "react-native-elements";
import styles from "./styles";
import Container from "../../../components/Container";

export default function App({ route, navigation }) {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let [photo, setPhoto] = React.useState("");
  const { userData } = route.params;

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({
      localUri: pickerResult.uri,
    });

    setPhoto({
      photo: pickerResult.base64,
    });
  };

  const cancelHandler = () => {
    setSelectedImage(null);
    setPhoto("");
  };

  const continueHandle = () => {
    const data = {
      ...userData,
      photo:
        "https://s3.amazonaws.com/uifaces/faces/twitter/jonathansimmons/128.jpg",
    };
    navigation.navigate("location", { userData: data });
  };

  return (
    <View style={styles.container}>
      {selectedImage === null ? (
        <ImageBackground
          source={require("../../../images/catPhoto.png")}
          style={styles.logo}
        >
          <Container>
            <View style={styles.backIcon}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={"arrow-back"} color={"black"} />
              </TouchableOpacity>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>
                Também precisamos de uma foto sua, é só clicar na camêra aqui em
                baixo!
              </Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={openImagePickerAsync}
                style={styles.button}
              >
                <Icon name={"camera-alt"} color="gray" />
              </TouchableOpacity>
            </View>
          </Container>
        </ImageBackground>
      ) : (
          <View style={styles.container}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
            <View style={styles.selectText}>
              <Text style={styles.text} >
                Clique em continuar para prosseguir com o cadastro, ou voltar para
                escolher outra foto.
            </Text>
            </View>
            <TouchableOpacity style={{ flex: 1, margin: 16 }} onPress={async () => {
              const wikiTermsUrl = "https://mia-ajuda.github.io/Documentation/#/_docs/termos";
              const supported = await Linking.canOpenURL(wikiTermsUrl);
              if(supported) {
                Linking.openURL("https://mia-ajuda.github.io/Documentation/#/_docs/termos");
              } else {
                Alert.alert("Erro", "Não foi possível abrir os Termos de Uso e Política de Privacidade, por favor visite nossa wiki: https://mia-ajuda.github.io");
              }
            }}>
              <View
                style={{
                  borderBottomColor: '#686868',
                  borderBottomWidth: 1,
                }}
              />
              <Text style={styles.smallText}>
                Ao clicar em continuar você concorda com os
                <Text style={styles.hyperLink}>
                  {" "}Termos de Uso{" "}
                </Text>
                e a
                <Text style={styles.hyperLink}>
                  {" "}Política de Pivacidade
                </Text>
                .
                </Text>
              <View
                style={{
                  borderBottomColor: '#686868',
                  borderBottomWidth: 1,
                }}
              />
            </TouchableOpacity>
            <View style={styles.buttonPreview}>
              <TouchableOpacity onPress={cancelHandler} style={styles.btn}>
                <Text style={styles.btnText}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn1} onPress={continueHandle}>
                <Text style={styles.btnText1}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
    </View>
  );
}
