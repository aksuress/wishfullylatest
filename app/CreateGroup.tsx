import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "../utils/sizes";

const CreateGroup: React.FC = () => {
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
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Create Group</Text>

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
        <View style={{ flex: 5, backgroundColor: color.green }}></View>
        <View style={{ flex: 5, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
          gap: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
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
              What do you want your group to be called?
            </Text>
          </View>
          <View
            style={{
              flex: 3,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 7,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: fontFamily.DMSans_500,
                lineHeight: 27,
              }}
            >
              We recommend creating different groups for friends, family, work
              colleagues etc
            </Text>
          </View>
          <View
            style={{
              flex: 3,
            }}
          ></View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: color.white,
            borderRadius: spacing.sm,
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
            Group name...
          </Text>
          <TextInput
            keyboardAppearance="dark"
            style={{
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
          onPress={() => router.navigate("/CreateGroup2")}
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
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
});
