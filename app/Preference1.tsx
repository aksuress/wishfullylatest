import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "../utils/sizes";

const Preference1: React.FC = () => {
  const router = useRouter();
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
          flex: 8,
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 10,
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 8,
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
              Give guests options to choose from
            </Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          ></View>
        </View>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 18,
            lineHeight: 22,
          }}
        >
          Ask your guests what they would prefer from a list of options, such as
          meal preferences.
        </Text>
        <View
          style={{
            width: "100%",
            backgroundColor: color.white,
            borderRadius: 8,
            position: "relative",
            elevation: 2,
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Text
            style={{
              zIndex: 0,
              padding: 5,
              fontFamily: fontFamily.DMSans_500Italic,
              opacity: 0.5,
              fontSize: 16,
              paddingLeft: 15,
            }}
          >
            Questions...
          </Text>
          <TextInput
            style={{
              flex: 1,
              position: "absolute",
              zIndex: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: color.white,
            borderRadius: 8,
            elevation: 5,
            width: "60%",
          }}
        >
          <Switch
            trackColor={{ false: "#C4EBD6", true: "#C4EBD6" }}
            thumbColor={isEnabled ? "#14AE5C" : "#14AE5C"}
            ios_backgroundColor="#F7FBFD"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: 16,
            }}
          >
            Answer required
          </Text>
        </View>

        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 18,
            lineHeight: 27,
            textAlign: "left",
            width: "100%",
          }}
        >
          Options
        </Text>
        <View
          style={{
            width: "100%",
            backgroundColor: color.white,
            borderRadius: 8,
            position: "relative",
            elevation: 2,
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Text
            style={{
              zIndex: 0,
              padding: 5,
              fontFamily: fontFamily.DMSans_500Italic,
              opacity: 0.5,
              fontSize: 16,
              paddingLeft: 15,
            }}
          >
            Option 1...
          </Text>
          <TextInput
            style={{
              flex: 1,
              width: "100%",
              position: "absolute",
              zIndex: 1,
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
          onPress={() => router.navigate("Preference2")}
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

export default Preference1;

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
