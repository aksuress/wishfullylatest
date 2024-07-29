import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "@/utils/sizes";
import { useRouter } from "expo-router";

const AddItem: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Add Item</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 2, backgroundColor: color.green }}></View>
        <View style={{ flex: 8, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 8.2,
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 7.6 }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: 32,
                lineHeight: 48,
              }}
            >
              Start with a link to the product or add manually
            </Text>
          </View>
          <View style={{ flex: 2.4 }}></View>
        </View>
        <View
          style={{
            marginTop: 25,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 14,
              lineHeight: 21,
            }}
          >
            Paste link to the product
          </Text>
          <TextInput
            style={{
              width: "100%",
              borderColor: "#00000040",
              borderWidth: 1,
              padding: 5,
              backgroundColor: "#FFFFFF",
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 14,
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            or
          </Text>
        </View>
        <View style={{ paddingVertical: 7 }}>
          <TouchableOpacity
            onPress={() => router.navigate("AddItem")}
            style={{
              borderColor: color.green,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 7,
              borderWidth: 1,
              backgroundColor: color.white,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                lineHeight: 22,
                fontFamily: fontFamily.DMSans_700,
                color: color.green,
              }}
            >
              Add Manually
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color.white,
          paddingHorizontal: spacing.sm,

          ...Platform.select({
            ios: {
              shadowColor: color.black,
              shadowOffset: { width: 0, height: -3 }, // Only top shadow
              shadowOpacity: 0.5,
              shadowRadius: 3,
            },
            android: {
              elevation: 25,
            },
          }),
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: color.green,
            borderRadius: 4,
            padding: spacing.md,
          }}
          onPress={() => router.navigate("Product")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
              lineHeight: 22,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
  cancel: {
    color: color.red,
    fontSize: 14,
    fontFamily: fontFamily.DMSans_700,
  },
});
