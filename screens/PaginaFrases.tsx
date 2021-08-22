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
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Calculadora de IMC</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <SafeAreaView>
        <Button
          title="Ver Frase do dia"
          onPress={() =>
            Alert.alert("Não tenha Preça! algum dia terei uma frase")
          }
        />
      </SafeAreaView>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
