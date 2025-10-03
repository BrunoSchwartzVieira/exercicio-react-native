import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../../colors";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function Input({ value, onChangeText, placeholder }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.gray[400]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.gray[800],
    color: "#fff",
    marginBottom: 12,
  },
});
