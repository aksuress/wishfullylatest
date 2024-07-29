import {
  Platform,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const CreateEvent5: React.FC = () => {
  const router = useRouter();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    } else console.log("error uploading image");
  };

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
          flex: 6.7,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
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
            Add a description of your event
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: 18,
              lineHeight: 27,
            }}
          >
            Give your guests some extra information about the event
          </Text>
          <View
            style={{
              height: "35%",
              backgroundColor: color.white,
              borderRadius: 8,
              marginVertical: 10,
              position: "relative",
              elevation: 2,
            }}
          >
            <Text
              style={{
                zIndex: 0,
                padding: 5,
                fontFamily: fontFamily.DMSans_500Italic,
                opacity: 0.5,
              }}
            >
              Description...
            </Text>
            <TextInput
              style={{
                height: 140,
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              padding: 8,
              borderColor: color.green,
              borderWidth: 1,
              borderRadius: 4,
              backgroundColor: color.pureWhite,
            }}
            onPress={pickImage}
          >
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: 18,
                lineHeight: 22,
                textAlign: "center",
                color: color.green,
              }}
            >
              Add Cover Photo
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_400,
              fontSize: 12,
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            A cover photo is optional and can be added later
          </Text>
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
          onPress={() => router.navigate("CreateEvent6")}
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

export default CreateEvent5;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
});
