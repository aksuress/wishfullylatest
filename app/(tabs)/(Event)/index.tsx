import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { color, fontFamily } from "../../../utils/Color";
import { spacing, fontSizes } from "../../../utils/sizes";

const index: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.paleGreen,
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.heading}>Events</Text>
        <Text
          style={{
            fontSize: fontSizes.md,
            lineHeight: 24,
            color: color.black,
            fontFamily: fontFamily.DMSans_700,
          }}
        >
          This month
        </Text>
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        <TouchableOpacity
          onPress={() => router.navigate("/EventName")}
          style={{
            flex: 1.2,
            flexDirection: "row",
            borderRadius: 5,
            backgroundColor: color.pureWhite,
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                fontFamily: fontFamily.Avenir_800,
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Baby Shower
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ position: "relative", flexDirection: "row" }}>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/group.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 10,
                    marginLeft: -5,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/baby.jpeg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_800,
                  fontSize: 12,
                  lineHeight: 18,
                  marginHorizontal: 4,
                }}
              >
                Jane Smith
              </Text>
              <Text>and</Text>
              <Text
                style={{
                  fontFamily: fontFamily.Avenir_800,
                  fontSize: 12,
                  lineHeight: 18,
                  marginHorizontal: 2,
                }}
              >
                John Smith
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: color.lightGreen,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.Avenir_500,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    fontSize: 11,
                    lineHeight: 12.98,
                  }}
                >
                  19/11/2024
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: color.lightGreen,
                  borderRadius: 4,
                  marginLeft: spacing.sm,
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    fontSize: 11,
                    lineHeight: 12.98,
                  }}
                >
                  22 invited
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("../../../assets/images/baby.jpeg")}
              resizeMethod="cover"
              style={{
                flex: 1,
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={[color.pureWhite, "rgba(255, 255, 255, 0)"]} // Adjust the colors and opacity as needed
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text
                  style={{
                    backgroundColor: "#0386BA40",
                    padding: spacing.sm,
                    fontSize: 11,
                    fontFamily: fontFamily.Avenir_800,
                    lineHeight: 12.98,
                  }}
                >
                  Event
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 6,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.xl,
            fontFamily: fontFamily.DMSans_700,
            textAlign: "center",
          }}
        >
          No events yet...
        </Text>
        <View
          style={{
            paddingHorizontal: 48,
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontFamily.DMSans_500,
              textAlign: "center",
            }}
          >
            Create an event to share with your guests, keep them up to date and
            share your wishlist!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/CreateEvent")}
          style={{
            backgroundColor: color.green,
            borderRadius: 5,
            paddingVertical: spacing.md,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontFamily.DMSans_700,
              lineHeight: 22,
              textAlign: "center",
              color: color.white,
            }}
          >
            Create an Event
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: fontFamily.DMSans_700,
    lineHeight: 36,
    color: color.black,
  },
  card: {
    flex: 7,
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRightWidth: 5,
    borderRightColor: "white",
    borderStyle: "dashed",
  },
});
