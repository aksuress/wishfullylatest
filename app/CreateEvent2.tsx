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

const CreateEvent2: React.FC = () => {
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
        <Text style={styles.heading}>Create Event</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontFamily: fontFamily.DMSans_700,
              fontSize: 14,
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
        <View style={{ flex: 2, backgroundColor: color.green }}></View>
        <View style={{ flex: 8, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 8.2,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flex: 1.5,
            alignSelf: "flex-start",
            justifyContent: "center",
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
            When is the event?
          </Text>
        </View>
        <View
          style={{
            flex: 7.5,
            width: "100%",
            justifyContent: "center",
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
              elevation: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "90%",
            padding: 10,
            borderRadius: 10,
            backgroundColor: color.pureWhite,
            marginVertical: 12,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: 15,
              backgroundColor: color.lightBlue,
              paddingHorizontal: 10,
            }}
          >
            <Switch
              trackColor={{ false: "#C4EBD6", true: "#C4EBD6" }}
              thumbColor={isEnabled ? "#14AE5C" : "#14AE5C"}
              ios_backgroundColor={color.lightBlue}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
            <Text
              styles={{
                lineHeight: 20.83,
                fontSize: 16,
                fontFamily: fontFamily.DMSans_500,
              }}
            >
              Time
            </Text>
          </View>
          <View style={{ backgroundColor: color.lightBlue, borderRadius: 15 }}>
            <Text
              style={{
                lineHeight: 28,
                fontSize: 22,
                fontFamily: fontFamily.DMSans_400,
                padding: 6,
              }}
            >
              07.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: color.lightBlue,
              padding: 6,
            }}
          >
            <Text
              style={{
                lineHeight: 20,
                fontSize: 13,
                fontFamily: fontFamily.DMSans_500,
                padding: 5,
              }}
            >
              AM
            </Text>
            <Text
              style={{
                lineHeight: 20,
                fontSize: 13,
                fontFamily: fontFamily.DMSans_500,
                padding: 6,
                backgroundColor: color.white,
                elevation: 5,
              }}
            >
              PM
            </Text>
          </View>
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
          onPress={() => router.navigate("CreateEvent3")}
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

export default CreateEvent2;

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
