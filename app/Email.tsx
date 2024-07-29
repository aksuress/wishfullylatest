import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const Email: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={[color.blueGreen, color.navyBlue]}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 1.0, y: 0.95 }}
        style={styles.gradient}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
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
        <View
          style={{
            flex: 6.5,
            justifyContent: "flex-start",
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              lineHeight: 36,
              fontFamily: fontFamily.DMSans_700,
              color: "white",
              textAlign: "left",
            }}
          >
            Create account
          </Text>
          <View
            style={{
              backgroundColor: color.white,
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
              backgroundColor: color.white,
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
              keyboardAppearance="dark"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: 1,
              }}
            ></TextInput>
          </View>
          <View
            style={{ width: "100%", alignSelf: "center", marginVertical: 30 }}
          >
            <TouchableOpacity
              onPress={() => router.navigate("FinishAccount1")}
              style={{
                width: "100%",
                backgroundColor: color.green,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: color.borderBlue,
                padding: 15,
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 18,
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.white,
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
            <View
              style={{
                paddingHorizontal: 25,
                marginVertical: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_400,
                  fontSize: 12,
                  lineHeight: 15.62,
                  textAlign: "center",
                  color: color.white,
                }}
              >
                By tapping Continue, you agree to our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    fontFamily: fontFamily.DMSans_700,
                  }}
                >
                  Terms
                </Text>{" "}
                and acknowledge that you have read our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontFamily: fontFamily.DMSans_700,
                    textDecorationStyle: "solid",
                  }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_400,
                fontSize: 14,
                lineHeight: 21,
                textAlign: "center",
                color: color.white,
                marginVertical: 5,
              }}
            >
              Have an account?
            </Text>
            <Text
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                fontWeight: "700",
                lineHeight: 21,
                textAlign: "center",
                color: "#FFFFFF",
                marginVertical: 5,
                textDecorationLine: "underline",
              }}
            >
              Log in
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Email;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
