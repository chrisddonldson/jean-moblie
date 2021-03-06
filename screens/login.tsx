import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


import Logo from "../components/Logo";
import {BackgroundEnvironment} from "../components/BackgroundEnvironment";
import styled from "styled-components/native";
import { apiUrl } from "../Utility/Environment";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userActions";


export default function LoginScreen({navigation}) {
  const [text, setText] = useState("");
  React.useEffect(()=>{
    console.log(apiUrl + '/api/workouts')
    fetch(apiUrl + '/api/workouts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(resp=>resp.json()).then(json =>
    console.log(json)
    )
    
  .catch(e=>{console.log(e)})
 },[])
 const dispatch = useDispatch();

  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb={"Login"} hideToolbar>
      {/* <Logo /> */}
      <LoginContainer >
      <H1>Sign in</H1>
        <LabelTextBoxContainer>
        <PrimaryButton
          onPress={() => {navigation.navigate("Dashboard"); dispatch(setUser("chris")) }}
          title="Sample User - Chris"
        />
        <PrimaryButton
          onPress={() => {navigation.navigate("Dashboard"); dispatch(setUser("brie")) }}
          title="Sample User - Brie"
        />
          </LabelTextBoxContainer>

      </LoginContainer>
    </BackgroundEnvironment>
  );
}

const PrimaryButton = styled.Button`
margin-top: 8px;
margin-bottom: 13px;
`

const LabelTextBoxContainer = styled.View`
padding-top: 8px;

`
const H1 =styled.Text`
padding-bottom:8px;
font-size: 32px;
color: white;
`
const FieldLabel =styled.Text`

color: white;
`

const LoginContainer = styled.View`
   flex: 1;

   max-width: 200px;
    align-items: stretch;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
`

const StyledTextBox = styled.TextInput`

border-radius:8px;
padding-left: 16px;
padding-right: 16px;
text-align: center;
padding-top: 4px;
padding-bottom: 4px;
background-color: white;
`

const styles = StyleSheet.create({

  textBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 200,
  },


  middleContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
