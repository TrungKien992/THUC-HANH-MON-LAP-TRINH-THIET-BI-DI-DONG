import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { SelectPhoneApp } from "./src/ex1/SelectPhoneApp";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { StackTabApp } from "./src/ex4/StackTabApp";
import { DrawerApp } from "./src/ex5/DrawerApp";
import { PHONES } from "./src/data/phones";
import { colors } from "./src/theme";

export default function App() {
  const [selectedEx, setSelectedEx] = useState<number | null>(null);

  if (selectedEx === 1) return <SelectPhoneApp phone={PHONES[0]} />;
  if (selectedEx === 2) return <SelectPhoneApi />;
  if (selectedEx === 3) return <BottomTabApp />;
  if (selectedEx === 4) return <StackTabApp />;
  if (selectedEx === 5) return <DrawerApp />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LAB 06 — NAVIGATION</Text>
      {[1, 2, 3, 4, 5].map((num) => (
        <Pressable
          key={num}
          style={styles.button}
          onPress={() => setSelectedEx(num)}
        >
          <Text style={styles.buttonText}>Bài {num}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.navy,
  },
  button: {
    width: "70%",
    paddingVertical: 14,
    backgroundColor: colors.blue,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});