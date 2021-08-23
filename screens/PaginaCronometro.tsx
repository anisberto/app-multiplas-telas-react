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
import functionalities from "../controller/functionalities";
import Functionalities from "../controller/functionalities";

export default function TabTreeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Cronometro</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <SafeAreaView>
        <View>
          <Text style={styles.titleCronometro}>{printerTimer()}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ paddingRight: "20%" }}>
            <Button
              title="START"
              onPress={() => Alert.alert(Functionalities.randomPhrase())}
            />
          </View>
          <View style={{ paddingLeft: "40%" }}>
            <Button
              title="STOP"
              onPress={() => Alert.alert(Functionalities.randomPhrase())}
            />
          </View>
        </View>
      </SafeAreaView>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/PaginaCronometro.tsx" />
    </View>
  );
}
function printerTimer() {
  return <Text>00:00:00</Text>;
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
  titleCronometro: {
    fontSize: 50,
    paddingBottom: 40,
    paddingLeft: 70,
    fontWeight: "bold",
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  inputButton: {
    flexDirection: "row",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
