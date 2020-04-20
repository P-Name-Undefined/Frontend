import React, {useContext, useEffect} from "react";
import { View, Text,Image } from "react-native";
import styles from "./styles";
import Button from "../../../components/UI/button"
import moment from "moment"
import {UserContext} from "../../../store/contexts/userContext"
import HelpService from "../../../services/Help"
export default function HelpDescription({route}) {
  
  const {
    user
  } = useContext(UserContext)

  const { 
    helpDescription,
    categoryName,
    helpId,
    userName,
    birthday,
    city,
    helperId,
    possibleHelpers,
  } = route.params;

  //console.log(helpDescription,categoryName,user);
  
  const currentYear = moment().format("YYYY")
  const birthYear = moment(birthday).format("YYYY")

  const age = currentYear - birthYear;

  const userPosition = possibleHelpers.indexOf(user.info._id);

  let buttonDisable = false;

  async function chooseHelp() {   
    await HelpService.chooseHelp(helpId,user.info._id,user.accessToken)
  }

  if(helperId || userPosition>=0){
    buttonDisable=true;
  }
  
  return (
    <View style={styles.container}>
      <View style = { styles.userInfo}>
          <Image
            source = {require("../../../../assets/images/pessoa.jpg")}
            style = {styles.profileImage}
          />
        <View style = {styles.infoTextView}>
          <Text style={[styles.infoText, { fontFamily: "montserrat-semibold" }]}>{userName}</Text>
          <Text style={styles.infoText}><Text style={{ fontFamily: "montserrat-semibold" }}>Idade: </Text>{age}</Text>
          <Text style={styles.infoText}><Text style={{ fontFamily: "montserrat-semibold"}}>Cidade: </Text>{city}</Text>
        </View>
      </View>
      <View style = {styles.helpInfo}>
        <View style = {styles.helpInfoText}>
          <Text style={styles.infoText}><Text style={{ fontFamily: "montserrat-semibold" }}>Categoria: </Text>{categoryName}</Text> 
          <Text style={[styles.infoText, { fontFamily: "montserrat-semibold",marginTop:20,marginBottom:10}]}>Descrição:</Text>
          <Text style = {styles.infoText}>{helpDescription}</Text>
        </View>
        <View style = {styles.helpButtons}>
          <Button
            title = "Oferecer Ajuda"
            large
            disabled={buttonDisable}
            press = {chooseHelp}
          />
        </View>
      </View>
    </View>
  );
}
