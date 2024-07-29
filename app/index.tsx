import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color, fontFamily } from "../utils/Color";
import { fontSizes, spacing } from "../utils/sizes";

WebBrowser.maybeCompleteAuthSession();

const index: React.FC = () => {
  // const [userInfo, setUserInfo] = useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   webClientId:
  //     "520349641201-rr1tblou5suqfbvtae4deqkpj4ejp2o1.apps.googleusercontent.com",
  //   androidClientId:
  //     "520349641201-e7ktk4jetmbna727bgc4c3kut4fltg8h.apps.googleusercontent.com",
  //   iosClientId:
  //     "520349641201-fdsejvc88rebjlbjhe9v1noalj72nb6u.apps.googleusercontent.com",
  // });
  const router = useRouter();

  // useEffect(() => {
  //   signIn();
  // }, [response]);

  // async function signIn() {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if (response?.type === "success") {
  //       await getUserInfo(response.authentication.accessToken);
  //     }
  //   } else {
  //     setUserInfo(JSON.parse(user));
  //   }
  // }

  // const getUserInfo = async (token) => {
  //   if (!token) return;
  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/userinfo/v2/me",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     const user = await response.json();
  //     console.log(user);
  //     await AsyncStorage.setItem("@user", JSON.stringify(user));
  //     setUserInfo(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          }}
        >
          <View
            style={{
              flex: 3.5,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image
              source={require("../assets/images/login.png")}
              style={{
                position: "absolute",
                zIndex: 1,
              }}
            />
            <Image
              source={require("../assets/images/star-1.png")}
              style={{
                position: "absolute",
                left: "20%", // 20% from the left edge
                top: "30%", // 40% from the top edge
                zIndex: 2,
              }}
            />
            <Image
              source={require("../assets/images/star-2.png")}
              style={{
                position: "absolute",
                right: "28%", // 20% from the right edge
                top: "10%", // 20% from the top edge
                zIndex: 2,
              }}
            />
            <Image
              source={require("../assets/images/star-3.png")}
              style={{
                position: "absolute",
                left: "52%", // 50% from the left edge
                bottom: "20%", // 20% from the bottom edge
                zIndex: 2,
              }}
            />
            <Image
              source={require("../assets/images/star-4.png")}
              style={{
                position: "absolute",
                right: "10%", // 30% from the right edge
                bottom: "15%", // 30% from the bottom edge
                zIndex: 2,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 2.5,

                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image source={require("../assets/images/star-5.png")} />
            </View>
            <View
              style={{
                flex: 7.5,
              }}
            >
              <Text
                style={{
                  fontSize: 47,
                  lineHeight: 60,
                  fontFamily: fontFamily.DMSans_700,
                  color: color.white,
                }}
              >
                Wishfully
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              // borderColor: "yellow",
              // borderWidth: 2,
            }}
          >
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View
            style={{
              flex: 3.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "90%",
                backgroundColor: color.green,
                borderRadius: spacing.sm,
                borderWidth: 1,
                borderColor: color.borderBlue,
                padding: spacing.md,
                elevation: 2,
                marginBottom: 15,
              }}
              onPress={() => router.navigate("CreateAccount")}
            >
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_700,
                  fontSize: 18,
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.pureWhite,
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.navigate("Login")}
              style={{
                width: "90%",
                backgroundColor: color.white,
                borderRadius: spacing.sm,
                borderWidth: 1,
                borderColor: color.borderBlue,
                padding: spacing.md,
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_700,
                  fontSize: 18,
                  lineHeight: 22,
                  textAlign: "center",
                  color: color.blueGreen,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
