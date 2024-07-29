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
import { Link, useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const FinishAccount1: React.FC = () => {
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
          flex: 1.4,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Finish Account</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontSize: 14,
              fontFamily: fontFamily.DMSans_700,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 5, backgroundColor: color.green }}></View>
        <View style={{ flex: 5, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 7.1,
          gap: 25,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 8 }}>
            <Text
              style={{
                fontSize: 32,
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 48,
              }}
            >
              Welcome!
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 48,
              }}
            >
              Let’s finish creating your account
            </Text>
          </View>
          <View style={{ flex: 2 }}></View>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: color.white,
            borderColor: color.borderBlue,
            borderWidth: 1,
            borderRadius: 8,
            marginVertical: 8,
            position: "relative",
            elevation: 2,
            padding: 5,
          }}
        >
          <Text
            style={{
              zIndex: 0,
              padding: 10,
              opacity: 0.5,
              fontSize: 16,
              fontFamily: fontFamily.DMSans_500Italic,
            }}
          >
            Firstname...
          </Text>
          <TextInput
            keyboardAppearance="dark"
            style={{
              width: "100%",
              position: "absolute",
              zIndex: 1,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: color.white,
            borderColor: color.borderBlue,
            borderWidth: 1,
            borderRadius: 8,
            marginVertical: 8,
            position: "relative",
            elevation: 2,
            padding: 5,
          }}
        >
          <Text
            style={{
              zIndex: 0,
              padding: 10,
              opacity: 0.5,
              fontSize: 16,
              fontFamily: fontFamily.DMSans_500Italic,
            }}
          >
            Surname...
          </Text>
          <TextInput
            keyboardAppearance="dark"
            style={{
              width: "100%",
              position: "absolute",
              zIndex: 1,
            }}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: color.white,
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
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 4,
            flex: 2,
            marginHorizontal: 15,
            padding: spacing.md,
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              color: color.green,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: color.green,
            flex: 3,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: color.green,
            marginRight: 15,
            padding: spacing.md,
          }}
          onPress={() => router.navigate("FinishAccount2")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FinishAccount1;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
});
