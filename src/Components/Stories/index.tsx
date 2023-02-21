import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Animated, { Layout, ZoomInEasyUp } from "react-native-reanimated";
import Entypo from "react-native-vector-icons/Entypo";
import storyInfo from "./StoriesData";

const Stories = () => {
  return (
    <Animated.View entering={ZoomInEasyUp} layout={Layout.delay(700).easing()}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 20 }}
      >
        {storyInfo.map((data, index) => {
          return (
            <TouchableOpacity key={index}>
              <View
                style={{
                  flexDirection: "column",
                  paddingHorizontal: 8,
                  position: "relative",
                }}
              >
                {data.id == 1 ? (
                  <View
                    style={{
                      position: "absolute",
                      bottom: 15,
                      right: 10,
                      zIndex: 1,
                    }}
                  >
                    <Entypo
                      name="circle-with-plus"
                      style={{
                        fontSize: 20,
                        color: "#405de6",
                        backgroundColor: "white",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                ) : null}
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: "white",
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: "#c13584",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: "cover",
                      width: "92%",
                      height: "92%",
                      borderRadius: 100,
                      backgroundColor: "orange",
                    }}
                  />
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "black",
                    opacity: 0.9,
                  }}
                >
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};
export default Stories;
