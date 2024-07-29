import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../../../../utils/Color";
import { spacing } from "../../../../utils/sizes";

const MyAccount: React.FC = () => {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        padding: 10,
        backgroundColor: color.lightGreen,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 12,
            lineHeight: 15,
          }}
        >
          Email Address
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderColor: color.borderBlue,
            borderWidth: 1.5,
            borderRadius: spacing.sm,
            padding: 10,
            backgroundColor: color.white,
          }}
          placeholder="Email"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 12,
            lineHeight: 15,
          }}
        >
          Firstname
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderColor: color.borderBlue,
            borderWidth: 1.5,
            borderRadius: spacing.sm,
            padding: 10,
            backgroundColor: color.white,
          }}
          placeholder="Firstname"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 12,
            lineHeight: 15,
          }}
        >
          Surname
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderColor: color.borderBlue,
            borderWidth: 1.5,
            borderRadius: spacing.sm,
            padding: 10,
            backgroundColor: color.white,
          }}
          placeholder="Surname"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: fontFamily.DMSans_500,
            fontSize: 12,
            lineHeight: 15,
          }}
        >
          Date of Birth
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={{
              width: "30%",
              borderColor: color.borderBlue,
              borderWidth: 1.5,
              borderRadius: 8,
              padding: 10,
              backgroundColor: color.white,
            }}
            placeholder="Date"
            textContentType="birthdate"
            inputMode="numeric"
          />
          <TextInput
            style={{
              width: "40%",
              borderColor: color.borderBlue,
              borderWidth: 1.5,
              borderRadius: 8,
              padding: 10,
              backgroundColor: color.white,
            }}
            placeholder="Month"
            textContentType="birthdateMonth"
            inputMode="text"
          />
          <TextInput
            style={{
              width: "20%",
              borderColor: color.borderBlue,
              borderWidth: 1.5,
              borderRadius: 8,
              padding: 10,
              backgroundColor: color.white,
            }}
            placeholder="Year"
            textContentType="birthdateYear"
            inputMode="numeric"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity
          style={{
            width: "45%",
            borderColor: color.blueGreen,
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: color.white,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 18,
              lineHeight: 22,
              textAlign: "center",
              color: "#00A876",
            }}
          >
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("Login")}
          style={{
            width: "45%",
            borderColor: "#DF0000",
            backgroundColor: color.paleRed,
            borderWidth: 1.5,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: spacing.sm,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 18,
              lineHeight: 22,
              textAlign: "center",
              color: color.red,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.DMSans_700,
            fontSize: 14,
            lineHeight: 21,
            textAlign: "center",
            color: color.red,
            textDecorationLine: "underline",
            textDecorationColor: color.red,
            textDecorationStyle: "solid",
          }}
        >
          Delete Account
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default MyAccount;
