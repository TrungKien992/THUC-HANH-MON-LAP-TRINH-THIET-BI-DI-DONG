import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.big}>Xin chào 👋</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.center}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>NA</Text>
      </View>
      <Text style={styles.big}>Nguyễn Văn An</Text>
      <Text style={styles.muted}>an.nguyen@example.com</Text>
    </View>
  );
}

// TODO 1: SettingsScreen có Switch
function SettingsScreen() {
  const [notify, setNotify] = useState(true);
  const [dark, setDark] = useState(false);

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Nhận thông báo</Text>
        <Switch value={notify} onValueChange={setNotify} />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Giao diện tối</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>

      <View style={styles.statusBox}>
        <Text style={styles.statusText}>
          Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {dark ? "tối" : "sáng"}
        </Text>
      </View>
    </View>
  );
}

// TODO 2: DrawerApp Navigator
export function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerActiveTintColor: colors.red,
          drawerInactiveTintColor: colors.muted,
          drawerIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home-outline";
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "Profile") iconName = "person-outline";
            else if (route.name === "Settings") iconName = "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Hồ sơ" }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Cài đặt" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  big: { fontSize: 20, fontWeight: "bold", color: colors.text },
  muted: { fontSize: 14, color: colors.muted, marginTop: 4 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  settingsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: colors.line,
  },
  settingLabel: {
    fontSize: 16,
    color: colors.text,
  },
  statusBox: {
    marginTop: 30,
    padding: 12,
    backgroundColor: colors.bg,
    borderRadius: 6,
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "500",
  },
});