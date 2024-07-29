import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { color, fontFamily } from "../utils/Color";
import { spacing, fontSizes } from "../utils/sizes";

const ReviewEvent: React.FC = () => {
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
          flex: 1.5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.heading}>Review Event</Text>

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
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, backgroundColor: color.green }}></View>
        <View style={{ flex: 7, backgroundColor: color.progressGreen }}></View>
      </View>
      <View
        style={{
          flex: 8,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily.DMSans_700,
              fontSize: 32,
              lineHeight: 48,
            }}
          >
            Here’s an overview of your event
          </Text>
        </View>
        <View style={{ flex: 7 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: 10,
                    lineHeight: 15,
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: 14,
                    lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: 10,
                    lineHeight: 15,
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: 14,
                    lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: 10,
                    lineHeight: 15,
                  }}
                >
                  Location
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: 14,
                    lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_500,
                    fontSize: 10,
                    lineHeight: 15,
                  }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: 14,
                    lineHeight: 16.52,
                  }}
                >
                  Event name
                </Text>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: 14,
                    lineHeight: 16.52,
                  }}
                >
                  Please select your meal preference
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color={color.black} />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: 14,
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    Lamb Shank
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color={color.black} />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: 14,
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    Sheppards Pie
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color={color.black} />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: 14,
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    Lasagne
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color={color.green}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: color.white,
                borderRadius: 5,
                elevation: 2,
                padding: 8,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.DMSans_700,
                    fontSize: 14,
                    lineHeight: 16.52,
                  }}
                >
                  What song would you like to add to the playlist?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color={color.black} />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: 14,
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    taylor swift
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color={color.black} />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: 14,
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    Eminem
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Octicons name="dot-fill" size={24} color={color.black} />
                  <Text
                    style={{
                      fontFamily: fontFamily.DMSans_500,
                      fontSize: 14,
                      lineHeight: 14,
                      marginLeft: 10,
                    }}
                  >
                    Adam Levine
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="pencil"
                size={16}
                color={color.green}
              />
            </View>
          </ScrollView>
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
          onPress={() => router.navigate("EventInvite")}
        >
          <Text
            style={{
              color: color.white,
              fontSize: 18,
              fontFamily: fontFamily.Avenir_700,
              textAlign: "center",
            }}
          >
            Create Event
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReviewEvent;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: fontFamily.DMSans_700,
  },
});
