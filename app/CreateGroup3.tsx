import {
  Platform,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const CreateGroup3: React.FC = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Get the screen width
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageDimension = windowWidth / 5.5; // Dividing by 4 to get 25% of the screen width

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
          flex: 7.7,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
          gap: 30,
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
              Invite others to join the group!
            </Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          ></View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.pureWhite,
          }}
        >
          <View
            style={{
              flex: 2,
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
          </View>
          <View
            style={{
              flex: 7,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: 14,
                lineHeight: 18.23,
                fontFamily: fontFamily.DMSans_500,
              }}
            >
              Confirm new group members before they join
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
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              lineHeight: 15,
              fontFamily: fontFamily.DMSans_500,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            Share this link
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: color.blueGreen,
              backgroundColor: color.pureWhite,
              borderRadius: spacing.sm,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput style={{ flex: 0.9, padding: spacing.sm }} />
            <Ionicons
              name="copy-outline"
              size={24}
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
          onPress={() => router.navigate("(Group)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              lineHeight: 22,
            }}
          >
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup3;

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
