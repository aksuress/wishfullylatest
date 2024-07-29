import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "../utils/sizes";
import { Entypo } from "@expo/vector-icons";

import { useRouter, Link } from "expo-router";
const Login: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.lightBlue,
      }}
    >
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={{
          flex: 3,
          paddingHorizontal: "5%",
        }}
        resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={() => router.navigate("CreateAccount")}
            style={{
              backgroundColor: "#00000040",
              padding: 5,
            }}
          >
            <Entypo name="chevron-left" size={24} color={color.white} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 47,
              lineHeight: 69.56,
              fontFamily: fontFamily.DMSans_700,
              marginLeft: 25,
              color: color.white,
            }}
          >
            Wishfully
          </Text>
        </View>

        <View
          style={{
            flex: 2.5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 6,
          justifyContent: "flex-start",
          paddingHorizontal: "5%",
        }}
      >
        <KeyboardAvoidingView style={{ flex: 5 }}>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 36,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "left",
            }}
          >
            Login
          </Text>

          <View
            style={{
              backgroundColor: color.pureWhite,
              borderRadius: spacing.sm,
              marginVertical: spacing.sm,
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
              Email...
            </Text>
            <TextInput
              placeholderTextColor={"#00000073"}
              keyboardAppearance="dark"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: color.pureWhite,
              borderRadius: spacing.sm,
              marginVertical: spacing.sm,
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
              Password...
            </Text>
            <TextInput
              placeholderTextColor={"#00000073"}
              keyboardAppearance="dark"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            ></TextInput>
          </View>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              color: color.navyBlue,
              marginVertical: 10,
            }}
          >
            Forgotten Password?
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 22,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              color: color.black,
            }}
          >
            or
          </Text>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 5,
            width: "100%",
            alignSelf: "center",
            marginVertical: 30,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: color.green,
              padding: 15,
              backgroundColor: color.white,
            }}
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
              Sign in with Facebook
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: color.green,
              padding: 15,
              backgroundColor: color.white,
            }}
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
              Sign in with Google
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            Need an account?
          </Text>
          <TouchableOpacity onPress={() => router.navigate("Email")}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 27,
                fontFamily: fontFamily.DMSans_700,
                textAlign: "center",
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
                color: color.navyBlue,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wave: {
    position: "absolute",
    bottom: 0,
  },
});
