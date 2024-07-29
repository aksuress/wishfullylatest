import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { color, fontFamily } from "../../../../utils/Color";

const Feed: React.FC = () => {
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageHeight = windowWidth / 3;
  const imageWidth = windowWidth / 1.8;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          height: imageHeight,
          width: imageWidth,
        }}
      >
        <ImageBackground
          source={require("./../../../../assets/images/feed.png")}
          style={{ flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          lineHeight: 25,
          fontFamily: fontFamily.DMSans_500,
          paddingHorizontal: 50,
          textAlign: "center",
        }}
      >
        Send messages and share those important updates with others in the group
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: color.white,
          padding: 5,
        }}
      >
        <TextInput
          placeholder="Type..."
          style={{ flex: 6 }}
          placeholderTextColor={color.black}
        />
        <View
          style={{
            flex: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Ionicons name="mic-outline" size={16} color={color.black} />
          <Ionicons name="images-outline" size={16} color={color.black} />
          <AntDesign name="link" size={16} color={color.black} />
        </View>
      </View>
    </View>
  );
};

export default Feed;
