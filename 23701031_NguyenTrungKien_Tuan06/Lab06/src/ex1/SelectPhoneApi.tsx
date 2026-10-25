import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from "react-native";
import { fetchPhone } from "../api/phoneApi";
import { Phone } from "../types";
import { SelectPhoneApp } from "./SelectPhoneApp";
import { colors } from "../theme";

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  // TODO 1 & 2: Hàm load dữ liệu từ API
  const load = useCallback(async () => {
    setError(null);
    setPhone(null);
    try {
      const data = await fetchPhone("1");
      setPhone(data);
    } catch (e: any) {
      setError(e.message || "Đã xảy ra lỗi khi tải dữ liệu");
    }
  }, []);

  // TODO 3: useEffect kích hoạt khi mount
  useEffect(() => {
    load();
  }, [load]);

  // TODO 4: Xử lý trạng thái lỗi
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable style={styles.retryBtn} onPress={load}>
          <Text style={styles.retryText}>THỬ LẠI</Text>
        </Pressable>
      </View>
    );
  }

  // TODO 5: Xử lý trạng thái đang tải
  if (!phone) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.red} />
        <Text style={styles.loadingText}>Đang tải...</Text>
      </View>
    );
  }

  // TODO 6: Dữ liệu tải thành công, render Bài 1
  return <SelectPhoneApp phone={phone} />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 15,
    color: colors.muted,
  },
  errorText: {
    color: colors.red,
    fontSize: 15,
    marginBottom: 16,
    textAlign: "center",
  },
  retryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: colors.blue,
    borderRadius: 6,
  },
  retryText: {
    color: "#fff",
    fontWeight: "bold",
  },
});