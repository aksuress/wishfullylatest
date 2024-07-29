import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, {
  DateTimePickerEvent,
  Event,
} from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing } from "../utils/sizes";

// Define types for state and functions
type Mode = "date" | "time";

const Preference3: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<Mode>("date");
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: Mode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.lightBlue }}>
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Create Event</Text>

        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={{
              color: color.red,
              fontFamily: fontFamily.DMSans_700,
              fontSize: 14,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.2, flexDirection: "row" }}>
        <View style={{ flex: 5, backgroundColor: color.green }}></View>
        <View style={{ flex: 5, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 8,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flex: 5, justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 32,
              lineHeight: 48,
            }}
          >
            Do you need responses by a certain date?
          </Text>
        </View>
        <View style={{ flex: 5, justifyContent: "flex-start" }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: color.green,
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: color.white,
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 16,
                  lineHeight: 22,
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: color.green,
                padding: 15,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: color.white,
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 16,
                  lineHeight: 22,
                }}
              >
                1 day before
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: color.green,
                padding: 15,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: color.white,
                  fontFamily: fontFamily.DMSans_700,
                  fontSize: 16,
                  lineHeight: 22,
                }}
              >
                1 week before
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 15 }}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: 12,
                lineHeight: 22,
                textAlign: "center",
              }}
            >
              or
            </Text>
          </View>
          <TouchableOpacity onPress={showDatepicker}>
            <Text
              style={{
                fontFamily: fontFamily.DMSans_700,
                fontSize: 16,
                color: "#0386BA",
                textAlign: "center",
              }}
            >
              Select Date
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: color.white,
          ...Platform.select({
            ios: {
              shadowColor: color.black,
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.5,
              shadowRadius: 3,
            },
            android: { elevation: 25 },
          }),
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 4,
            flex: 2,
            marginHorizontal: 15,
            padding: spacing.md,
          }}
          onPress={() => router.back()}
        >
          <Text
            style={{
              color: color.green,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: color.green,
            flex: 3,
            borderWidth: 1,
            borderColor: color.green,
            borderRadius: 4,
            marginRight: 15,
            padding: spacing.md,
          }}
          onPress={() => router.navigate("ReviewEvent")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Preference3;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
});
