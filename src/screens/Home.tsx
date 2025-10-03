import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { colors } from "../../colors";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Atenção", "Digite seu nome para continuar!");
      return;
    }
    navigation.navigate("Confirmation");
  };

  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />
      <Button title="Confirmar inscrição" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    justifyContent: "center",
    padding: 20,
  },
});
