import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../colors";

type Props = {
  title: string;
  subtitle: string;
};

export function Card({ title, subtitle }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.gray[800],
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 14,
    marginTop: 4,
  },
});
