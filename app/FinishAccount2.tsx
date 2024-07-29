import {
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "../utils/sizes";

const FinishAccount2: React.FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
        <View style={{ flex: 9, backgroundColor: color.green }}></View>
        <View style={{ flex: 1, backgroundColor: "#00C18733" }}></View>
      </View>
      <View
        style={{
          flex: 8.3,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            alignItems: "flex-end",
            // borderWidth: 2,
            // borderColor: "black",
          }}
        >
          <View
            style={{
              flex: 7,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 48,
                textAlign: "left",
              }}
            >
              What’s your date of birth?
            </Text>
          </View>
          <View
            style={{
              flex: 4,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 8,
            width: "100%",
            justifyContent: "center",
            // borderWidth: 2,
            // borderColor: "black",
          }}
        >
          <Calendar
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
            style={{
              width: "100%",
              transform: [{ scale: 1 }],
              backgroundColor: color.lightBlue,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#FFFFFF",
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
            borderColor: color.green,
            borderRadius: 4,
            marginRight: 15,
            padding: spacing.md,
          }}
          onPress={() => router.navigate("(tabs)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Let's Go!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FinishAccount2;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },

  switch: {
    transform: [{ scale: 0.6 }],
    backgroundColor: "#F7FBFD",
  },
});
