import React from "react";
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { RootProps } from "./types";
import { PHONES, PHONE_COLORS } from "../data/phones";
import { useFavorites } from "./FavoritesContext";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  // TODO 4: Lấy param id
  const { id } = route.params;
  const { has, toggle } = useFavorites();
  const phone = PHONES.find((p) => p.id === id);

  // TODO 5: Kiểm tra nếu không tìm thấy
  if (!phone) {
    return (
      <View style={styles.center}>
        <Text style={{ color: colors.muted }}>Không tìm thấy sản phẩm #{id}</Text>
      </View>
    );
  }

  const isFav = has(phone.id);

  // TODO 6 & 7: Giao diện chi tiết + nút lưu yêu thích
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={PHONE_COLORS[phone.defaultColor].image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{phone.name}</Text>
        <View style={styles.row}>
          <Stars value={phone.rating} />
          <Text style={styles.supplier}>Cung cấp bởi: {phone.supplier}</Text>
        </View>
        <Text style={styles.price}>{formatPrice(phone.price)}</Text>
      </View>

      <Pressable
        style={[styles.favBtn, isFav && styles.favBtnActive]}
        onPress={() => toggle(phone.id)}
      >
        <Text style={[styles.favBtnText, isFav && styles.favBtnTextActive]}>
          {isFav ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", padding: 16 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: "100%", height: 260 },
  info: { gap: 8, marginVertical: 16 },
  title: { fontSize: 16, fontWeight: "bold", color: colors.text },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  supplier: { fontSize: 13, color: colors.muted },
  price: { fontSize: 20, fontWeight: "bold", color: colors.red },
  favBtn: {
    marginTop: 16,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  favBtnActive: { backgroundColor: colors.red },
  favBtnText: { color: colors.red, fontWeight: "bold", fontSize: 15 },
  favBtnTextActive: { color: "#fff" },
});