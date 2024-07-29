import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../../utils/Color";
import { spacing } from "../../utils/sizes";
const index: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        gap: 15,
        backgroundColor: color.lightBlue,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: spacing.sm,
        }}
      >
        <Text
          style={{
            color: color.black,
            fontFamily: fontFamily.DMSans_700,
            lineHeight: 36,
            fontSize: 24,
          }}
        >
          Coming up
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: color.black,
              fontFamily: fontFamily.DMSans_500,
              fontSize: 18,
            }}
          >
            This month
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          backgroundColor: color.lightGreen,
          borderRadius: spacing.sm,
        }}
      ></View>
      <View
        style={{
          flex: 4,
          backgroundColor: color.lightGreen,
          borderRadius: spacing.sm,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: 34,
            lineHeight: 48,
            textAlign: "center",
            color: color.black,
          }}
        >
          It’s a bit lonely here...
        </Text>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 20,
            lineHeight: 27,
            textAlign: "center",
            padding: spacing.lg,
            color: color.black,
          }}
        >
          Create a group or event and invite friends and family to get started!
        </Text>
      </View>
      <View
        style={{
          flex: 1.5,
          backgroundColor: color.lightGreen,
          borderRadius: spacing.sm,
        }}
      ></View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
