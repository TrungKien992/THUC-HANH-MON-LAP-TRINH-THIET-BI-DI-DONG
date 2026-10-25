import React from "react";
import { FlatList, Pressable, Text, StyleSheet } from "react-native";
import { TabProps } from "./types";
import { PHONES } from "../data/phones";
import { colors, formatPrice } from "../theme";

export function ProductsTab({ navigation }: TabProps<"Products">) {
  // TODO 3: FlatList sản phẩm
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item }) => (
        <Pressable
          style={styles.card}
          onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
        >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{formatPrice(item.price)}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
  },
  name: { fontSize: 14, fontWeight: "500", color: colors.text },
  price: { fontSize: 14, color: colors.red, fontWeight: "700", marginTop: 4 },
});