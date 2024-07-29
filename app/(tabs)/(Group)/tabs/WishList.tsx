import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { color, fontFamily } from "../../../../utils/Color";

const WishList: React.FC = () => {
  const windowWidth = Dimensions.get("window").width;

  // Calculate responsive image dimension
  const imageHeight = windowWidth / 3;
  const imageWidth = windowWidth / 2;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          height: imageHeight,
          width: imageWidth,
        }}
      >
        <ImageBackground
          source={require("./../../../../assets/images/wish.png")}
          style={{ flex: 1 }}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          lineHeight: 25,
          fontFamily: fontFamily.DMSans_500,
          paddingHorizontal: 80,
          paddingVertical: 15,
          textAlign: "center",
        }}
      >
        Other people’s wishlists will appear here when they have joined the
        group
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: color.green,
          width: "100%",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            lineHeight: 27,
            fontFamily: fontFamily.DMSans_500,
            textAlign: "center",
            color: color.white,
          }}
        >
          Invite Others
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WishList;
