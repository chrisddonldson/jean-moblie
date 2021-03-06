import axios from "axios";
import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { BackgroundEnvironment } from "../components/BackgroundEnvironment";

import EditScreenInfo from "../components/EditScreenInfo";
import FoodForm from "../components/food/FoodForm";
import { StyledTextInput } from "../components/StyledTextInput";
import { sampleDrill1 } from "../components/tabata/SampleDrills";
import { TabataDisplay } from "../components/tabata/tabataDisplay";
import { Text, View } from "../components/Themed";
import { HomePullupDay } from "../sample_data/Workouts/ChinUps";



export default function Food({navigation}) {
  const [value, onChangeText] = React.useState('Useless Placeholder');



  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb="Food">
    <View style={styles.container}>
      <Text>
        This is the food container
      </Text>

 <FoodForm />
    </View>
    </BackgroundEnvironment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
