import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { TabProps } from "./types";
import { useFavorites } from "./FavoritesContext";
import { PHONES } from "../data/phones";
import { colors, formatPrice } from "../theme";

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  // TODO 8: Lấy danh sách ID đã lưu và lọc sản phẩm
  const { ids } = useFavorites();
  const favPhones = PHONES.filter((p) => ids.includes(p.id));

  if (favPhones.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={{ color: colors.muted }}>Chưa có sản phẩm nào được lưu.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favPhones}
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
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
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