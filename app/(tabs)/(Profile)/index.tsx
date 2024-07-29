import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TopTab from "./tabs/Topbar";
import { color, fontFamily } from "../../../utils/Color";
import { spacing } from "../../../utils/sizes";

const circleSize = 80;

const index: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.main}>
      <View
        style={{
          flex: 2,
          paddingHorizontal: 15,
          paddingTop: 25,
          backgroundColor: color.lightGreen,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: 24,
            lineHeight: 36,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingVertical: spacing.sm,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2.5,
              borderColor: color.blueGreen,
              padding: 20,
              borderRadius: circleSize / 2,
              position: "relative",
              zIndex: 1,
              marginRight: 15,
              height: circleSize,
              width: circleSize,
              backgroundColor: color.white,
            }}
          >
            <FontAwesome name="user" size={25} color={color.blueGreen} />
            <AntDesign
              name="pluscircle"
              size={20}
              color={color.blueGreen}
              style={{
                position: "absolute",
                right: -0.5,
                top: 0,
                zIndex: 5,
              }}
            />
          </View>
          <View style={{ flex: 7 }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: 18,
                lineHeight: 22,
              }}
            >
              Firstname Surname
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_500,
                fontSize: 14,
              }}
            >
              DD/MM/YYYY
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <TopTab />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
