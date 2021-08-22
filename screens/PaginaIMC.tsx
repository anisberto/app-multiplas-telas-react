import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Calculadora de IMC</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Peso"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <Button
        title="Calcular meu IMC"
        onPress={() => Alert.alert("Não tenha Preça! Irei calcular algum dia")}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
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
  Button:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
