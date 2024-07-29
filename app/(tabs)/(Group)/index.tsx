import {
  ImageBackground,
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
import { fontSizes, spacing } from "../../../utils/sizes";

const index: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 15,
      }}
    >
      <View
        style={{
          flex: 1.5,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text style={styles.heading}>Groups</Text>
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        <TouchableOpacity
          onPress={() => router.navigate("/GroupName")}
          style={{
            flex: 1,
            flexDirection: "row",
            borderRadius: 8,
            backgroundColor: color.pureWhite,
          }}
        >
          <View style={styles.card}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                fontFamily: fontFamily.Avenir_900,
                lineHeight: 22,
              }}
            >
              Blogs Family
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: color.paleGreen,
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: spacing.sm,
                  paddingVertical: 5,
                  fontFamily: fontFamily.Avenir_500,
                  fontSize: 11,
                }}
              >
                11 Members
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <ImageBackground
              source={require("./../../../assets/images/group.png")}
              //resizeMethod="cover"
              style={{
                flex: 1,
                borderRadius: fontSizes.sm,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={[color.pureWhite, "rgba(255, 255, 255, 0)"]} // Adjust the colors and opacity as needed
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0 }}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 6.5,
          marginTop: spacing.lg,
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.xl,
            textAlign: "center",
            fontFamily: fontFamily.DMSans_700,
            marginVertical: 15,
          }}
        >
          No groups Yet...
        </Text>
        <View
          style={{
            paddingHorizontal: spacing.xxl,
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              lineHeight: 27,
              textAlign: "center",
              fontFamily: fontFamily.DMSans_500,
            }}
          >
            You aren't a part of any groups yet, create groups and invite your
            family and friends to share your wishlist with!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/CreateGroup")}
          style={{
            backgroundColor: color.green,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontFamily.DMSans_700,
              textAlign: "center",
              paddingVertical: spacing.md,
              color: color.white,
              lineHeight: 22,
            }}
          >
            Create a Group
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  heading: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamily.DMSans_700,
    color: color.black,
    marginLeft: spacing.md,
  },
  card: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRightWidth: 5,
    borderRightColor: color.white,
    borderStyle: "dashed",
  },
});
