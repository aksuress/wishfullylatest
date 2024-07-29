import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "@/utils/Color";

const CreateWishList: React.FC = () => {
  const router = useRouter();
  // Get the screen width
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageDimension = windowWidth / 5.5; // Dividing by 4 to get 25% of the screen width

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View style={{ flex: 2 }}>
        <LinearGradient
          colors={[color.green, color.navyBlue]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 1, y: 0.9 }}
          style={styles.Background}
        >
          <Ionicons name="image-outline" size={24} color={color.white} />
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontFamily.DMSans_700,
              color: color.white,
            }}
          >
            Add cover photo
          </Text>
        </LinearGradient>
      </View>
      <View style={{ flex: 2.5, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity onPress={() => router.navigate("(Profile)")}>
              <Entypo name="chevron-left" size={24} color={color.black} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 32,
                lineHeight: 48,
                fontFamily: fontFamily.DMSans_700,
                marginLeft: 15,
              }}
            >
              Leroy’s Birthday
            </Text>
          </View>
          <Entypo
            name="dots-three-vertical"
            size={18}
            color={color.green}
            style={{
              borderWidth: 1,
              borderColor: color.green,
              borderRadius: 15,
              padding: 4,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingHorizontal: 5,
            paddingVertical: 15,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: 16,
              paddingVertical: 7,
              marginHorizontal: 10,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 16,
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              25/11/2024
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#DCF4ED",
              paddingHorizontal: 10,
              paddingVertical: 7,
              marginHorizontal: 10,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16,
                fontFamily: fontFamily.DMSans_500,
                textAlign: "center",
              }}
            >
              Group Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              backgroundColor: "#DCF4ED",
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 16,
                fontFamily: "sans-serif",
                textAlign: "center",
              }}
            >
              Group Name
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 7, paddingHorizontal: 15 }}>
          <TouchableOpacity
            onPress={() => router.navigate("AddItem")}
            style={{
              backgroundColor: color.green,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 7,
            }}
          >
            <Text
              style={{
                fontSize: 18,

                lineHeight: 22,
                fontFamily: fontFamily.DMSans_700,
                color: color.white,
              }}
            >
              Add Item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 6.5, elevation: 2 }}>
        <View
          style={{
            flex: 7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,

              lineHeight: 36,
              fontFamily: fontFamily.DMSans_700,
            }}
          >
            No items in your wishlist
          </Text>
        </View>
        <View
          style={{
            flex: 3,
          }}
        >
          <Text
            style={{
              fontSize: 11,

              lineHeight: 13,
              fontFamily: fontFamily.DMSans_700,
              marginVertical: 10,
              marginLeft: 25,
            }}
          >
            Find products on
          </Text>
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
                source={require("./../../../assets/images/imessage.png")}
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
                source={require("./../../../assets/images/messenger.png")}
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
                source={require("./../../../assets/images/whatsapp.png")}
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
                source={require("./../../../assets/images/snapchat.png")}
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
      </View>
    </SafeAreaView>
  );
};

export default CreateWishList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
