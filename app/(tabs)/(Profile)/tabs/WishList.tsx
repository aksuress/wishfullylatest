import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../../../../utils/Color";

const WishList: React.FC = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 15,
        backgroundColor: color.lightGreen,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: color.green,
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: color.white,
          marginVertical: 25,
        }}
      >
        <View
          style={{
            flex: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AntDesign name="pluscircleo" size={24} color={color.green} />
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 18,
              lineHeight: 22,
              color: color.green,
              marginLeft: 14,
            }}
          >
            Create New Wishlist
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("(tabs)/CreateWishList")}
          style={{
            flex: 3,
            alignItems: "flex-end",
          }}
        >
          <Entypo name="chevron-right" size={24} color={color.green} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.5,
          borderColor: color.green,
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 10,
          backgroundColor: color.white,
        }}
      >
        <View
          style={{
            flex: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <FontAwesome name="user-circle" size={25} color={color.blueGreen} />
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 18,
              lineHeight: 22,
              color: color.black,
              marginLeft: 14,
            }}
          >
            Firstname’s Birthday
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: "flex-end",
          }}
        >
          <Entypo name="chevron-right" size={24} color={color.green} />
        </View>
      </View>
    </View>
  );
};

export default WishList;
