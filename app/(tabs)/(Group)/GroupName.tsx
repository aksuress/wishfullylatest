import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";
import { color, fontFamily } from "../../../utils/Color";
import { spacing, fontSizes } from "../../../utils/sizes";

const GroupName: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={[color.green, color.navyBlue]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 1, y: 0.9 }}
          style={styles.Background}
        >
          <Ionicons name="image-outline" size={24} color={color.white} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontFamily.DMSans_700,
              color: color.white,
            }}
          >
            Add cover photo
          </Text>
        </LinearGradient>
      </View>
      <View style={{ flex: 2.5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 10,
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity onPress={() => router.navigate("(Group)")}>
            <Entypo name="chevron-left" size={24} color={color.black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              lineHeight: 48,
              fontFamily: fontFamily.DMSans_700,
              marginLeft: 15,
            }}
          >
            Group Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: 16,
              paddingVertical: 7,
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16.52,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
              }}
            >
              1 member
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: color.green,
              borderWidth: 1,
              paddingHorizontal: 36,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
                color: color.green,
              }}
            >
              Invite
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: "flex-start",
          }}
        >
          <FontAwesome5 name="user-circle" size={18} color={color.green} />
          <Text style={{ marginLeft: 5, color: " #00000099" }}>
            created by{" "}
            <Text style={{ fontFamily: fontFamily.DMSans_700 }}>You</Text>
          </Text>
        </View>
      </View>
      <View style={{ flex: 6.5 }}>
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default GroupName;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
