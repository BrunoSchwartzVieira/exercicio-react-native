import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "../components/Card";
import { colors } from "../../colors";

export default function Confirmation() {
  return (
    <View style={styles.container}>
      <Card title="542" subtitle="Inscrições confirmadas" />
      <Card title="875" subtitle="Pessoas online agora" />
      <Card title="39" subtitle="Palestrantes confirmados" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    padding: 20,
    justifyContent: "center",
  },
});
