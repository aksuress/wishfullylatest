import { View, Text } from "react-native";
import React from "react";
import { color, fontFamily } from "../../../../utils/Color";
const Details: React.FC = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Text style={{ fontSize: 32, fontFamily: fontFamily.DMSans_700 }}>
        Details
      </Text>
    </View>
  );
};

export default Details;
