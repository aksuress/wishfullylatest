import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const CreateGroup2: React.FC = () => {
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
        <View style={{ flex: 7, backgroundColor: color.green }}></View>
        <View style={{ flex: 3, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 7.5,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 20,
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
              Share your wishlists with ‘Groups Name’
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
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: color.green,
            paddingVertical: spacing.md,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flex: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <FontAwesome
              name="user-circle-o"
              size={24}
              color={color.white}
              style={{
                backgroundColor: color.navyBlue,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: fontFamily.DMSans_700,
                lineHeight: 22,
              }}
            >
              Firstname’s Birthday
            </Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <AntDesign name="minuscircleo" size={24} color={color.white} />
          </View>
        </View>
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
                fontSize: 12,
                fontFamily: fontFamily.DMSans_500Italic,
                lineHeight: 18,
              }}
            >
              Create more wishlists in ‘My Profile’ and add the wishlist to the
              group later.
            </Text>
          </View>
          <View
            style={{
              flex: 2,
            }}
          ></View>
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
              fontFamily: fontFamily.DMSans_700,
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
          onPress={() => router.navigate("CreateGroup3")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
            }}
          >
            Create Group
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup2;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
});
