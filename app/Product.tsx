import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "../utils/sizes";

const Product: React.FC = () => {
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
          flex: 4,
        }}
      >
        <ImageBackground
          source={require("../assets/images/puppy.jpg")}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 25,
          }}
          resizeMode="stretch"
        >
          <Link
            href="https://www.amazon.co.uk/WEOK-Heartbeat-Stuffed-Separation-Behavioral/dp/B09FLFNH6P/ref=sr_1_14?crid=ZKLG4G0P3KML&keywords=pet+cuddly+toys+for+dogs&qid=1667317692&qu=eyJxc2MiOiI0LjIyIiwicXNhIjoiMy4zNSIsInFzcCI6IjIuODgifQ%3D%3D&sprefix=pet+cudly+%2Caps%2C75&sr=8-14"
            asChild
          >
            <TouchableOpacity
              style={{
                backgroundColor: color.white,
                paddingHorizontal: 35,
                paddingVertical: 10,
                elevation: 2,
                opacity: 0.8,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 18,
                  lineHeight: 22,
                  textAlign: "center",
                }}
              >
                View Product
              </Text>
            </TouchableOpacity>
          </Link>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 4.5,
          padding: 10,
          justifyContent: "space-evenly",
        }}
      >
        <KeyboardAvoidingView style={{ flex: 4.5 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 7, paddingVertical: 15 }}>
              <Text
                style={{
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 32,
                  lineHeight: 48,
                  textAlign: "left",
                }}
              >
                Puppy Heartbeat Stuffed Animal
              </Text>
            </View>
            <View style={{ flex: 3 }}></View>
          </View>

          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 24,
              lineHeight: 22,
              textAlign: "left",
              padding: 5,
            }}
          >
            £26.99
          </Text>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          style={{
            flex: 3.5,
            position: "relative",
            marginVertical: 5,
            marginHorizontal: 5,
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: "100%",
              borderWidth: 1,
              borderColor: "#00000040",
              borderRadius: 8,
              position: "absolute",
              zIndex: 3,
            }}
            multiline
          />
          <Text
            style={{
              fontFamily: fontFamily.DMSans_500Italic,
              lineHeight: 16.52,
              padding: 15,
            }}
          >
            Add notes about the product...
          </Text>
        </KeyboardAvoidingView>
        <View style={{ flex: 2 }}></View>
      </View>
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
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
            flex: 2,
            marginRight: 15,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              color: color.green,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
              padding: 7,
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: color.green,
            flex: 3,
            borderWidth: 1,
            borderColor: color.green,
          }}
          onPress={() => router.navigate("(Profile)")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
              paddingVertical: 7,
              paddingHorizontal: 5,
            }}
          >
            Add Item
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
