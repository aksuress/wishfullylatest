import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const CreateEvent6: React.FC = () => {
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
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-around",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 32,
              lineHeight: 44,
            }}
          >
            Need additional info from your guests?
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: 18,
              lineHeight: 27,
            }}
          >
            Add questions for guests to answer when RSVP’ing to the event.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 0.5,
              borderColor: color.green,
              borderRadius: 5,
              padding: 8,
              backgroundColor: color.white,
              marginVertical: 15,
            }}
          >
            <View
              style={{
                flex: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <AntDesign name="pluscircleo" size={24} color={color.green} />
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_700,
                  fontSize: 18,
                  lineHeight: 22,
                  color: color.green,
                  marginLeft: 14,
                }}
              >
                Text Answer
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: "flex-end",
              }}
            >
              <Entypo name="chevron-right" size={24} color={color.green} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 0.5,
              borderColor: color.green,
              borderRadius: 5,
              padding: 8,
              backgroundColor: color.white,
            }}
          >
            <View
              style={{
                flex: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AntDesign name="pluscircleo" size={24} color={color.green} />
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_700,
                  fontSize: 18,
                  lineHeight: 22,
                  color: color.green,
                }}
              >
                List of Options
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: "flex-end",
              }}
            >
              <Entypo name="chevron-right" size={24} color={color.green} />
            </View>
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
          onPress={() => router.navigate("Preference1")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateEvent6;

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
