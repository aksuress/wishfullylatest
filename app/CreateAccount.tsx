import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useRouter, Link } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { fontSizes, spacing } from "../utils/sizes";

const CreateAccount: React.FC = () => {
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
            onPress={() => router.navigate("/")}
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
            flex: 1.5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View
          style={{
            flex: 6,
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                lineHeight: 36,
                fontFamily: fontFamily.DMSans_700,
                color: color.white,
                textAlign: "left",
              }}
            >
              Create account
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => router.navigate("Email")}
              style={{
                width: "100%",
                backgroundColor: color.white,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: color.borderBlue,
                paddingHorizontal: 10,
                paddingVertical: 15,
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
                Continue with Email
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "100%",
                backgroundColor: color.white,
                borderRadius: spacing.sm,
                borderWidth: 1,
                borderColor: color.blueGreen,
                paddingHorizontal: 10,
                paddingVertical: 15,
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
                Continue with Facebook
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: color.white,
                borderRadius: spacing.sm,
                borderWidth: 1,
                borderColor: color.borderBlue,
                paddingHorizontal: 10,
                paddingVertical: 15,
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
                Continue with Google
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 25,
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
                    fontFamily: fontFamily.DMSans_700,
                    textDecorationStyle: "solid",
                  }}
                >
                  Terms
                </Text>{" "}
                and acknowledge that you have read our{" "}
                <Text
                  style={{
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    fontFamily: fontFamily.DMSans_700,
                  }}
                >
                  Privacy Policy.
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              width: "100%",
              justifyContent: "center",
            }}
          >
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
            <Link href={require("./")} asChild>
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 18,
                  lineHeight: 21,
                  textAlign: "center",
                  color: color.white,
                  marginVertical: 5,
                  textDecorationLine: "underline",
                  textDecorationStyle: "solid",
                }}
              >
                Log in
              </Text>
            </Link>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
