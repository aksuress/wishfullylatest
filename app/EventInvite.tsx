import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const EventInvite: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // Get the screen width
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageDimension = windowWidth / 5.5;

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
        <Text style={styles.heading}>Invite Guests</Text>

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
        <View style={{ flex: 3, backgroundColor: color.green }}></View>
        <View style={{ flex: 7, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 7.8,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
          gap: 28,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 9,
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
              Various ways to invite your guests
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.white,
            borderRadius: 8,
            elevation: 5,
            width: "80%",
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
              fontSize: 14,
            }}
          >
            Confirm guests before they join
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: 14,
              lineHeight: 22,
              textAlign: "left",
            }}
          >
            Add guests from groups you are in
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              backgroundColor: color.white,
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: color.borderBlue,
              padding: 5,
              elevation: 2,
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 5,
            }}
          >
            <TextInput
              placeholderTextColor={color.black}
              placeholder="Search..."
              style={{
                flex: 0.9,
              }}
            />
            <Feather
              name="search"
              size={24}
              color={color.black}
              style={{ flex: 0.1 }}
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <View
            style={{
              backgroundColor: color.white,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: color.borderBlue,
              padding: 10,
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: 18,
                lineHeight: 22,
                textAlign: "center",
                color: color.blueGreen,
              }}
            >
              Download QR Code
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_400,
              fontSize: 12,
              lineHeight: 22,
              textAlign: "center",
            }}
          >
            Download a QR code to use on your own invites!
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500,
              fontSize: 14,
              lineHeight: 22,
              textAlign: "left",
            }}
          >
            Share this link
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              backgroundColor: color.white,
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: color.borderBlue,
              padding: 5,
              elevation: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                flex: 0.9,
              }}
            />
            <Ionicons
              name="copy-outline"
              size={16}
              color={color.green}
              style={{ flex: 0.1 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
            }}
          >
            <ImageBackground
              source={require("./../assets/images/imessage.png")}
              style={{ flex: 1 }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                lineHeight: 13,
                fontFamily: fontFamily.Avenir_400,
              }}
            >
              imessage
            </Text>
          </View>
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
            }}
          >
            <ImageBackground
              source={require("./../assets/images/messenger.png")}
              style={{ flex: 1 }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                lineHeight: 13,
                fontFamily: fontFamily.Avenir_400,
              }}
            >
              Messenger
            </Text>
          </View>
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
            }}
          >
            <ImageBackground
              source={require("./../assets/images/whatsapp.png")}
              style={{ flex: 1 }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                lineHeight: 13,
                fontFamily: fontFamily.Avenir_400,
              }}
            >
              WhatsApp
            </Text>
          </View>
          <View
            style={{
              height: imageDimension,
              width: imageDimension,
            }}
          >
            <ImageBackground
              source={require("./../assets/images/snapchat.png")}
              style={{ flex: 1 }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 11,
                textAlign: "center",
                lineHeight: 13,
                fontFamily: fontFamily.Avenir_400,
              }}
            >
              SnapChat
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
            borderColor: color.green,
            borderRadius: 4,
            marginRight: 15,
            padding: spacing.md,
          }}
          onPress={() => router.navigate("(Event)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Create Event
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EventInvite;

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
