import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React from "react";
import Stories from "../../Components/Stories";
import Post from "../../Components/Post";
import Ionic from "react-native-vector-icons/Ionicons";
import Theme from "../../Utils/Theme";
import { images } from "../../Assets/Images";
const Home = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
          margin: Theme.hp("1.5%"),
        }}
      >
        <Text
          style={{
            fontSize: Theme.txtLarge,
            color: "#000",
            textAlign: "center",
            fontFamily: "blue_vinyl_regular_ps_ot",
          }}
        >
          Instagram
        </Text>

        <View style={{}}>
          <Text
            style={{
              backgroundColor: "red",
              position: "absolute",
              right: -Theme.wp("3%"),
              top: -Theme.hp("1%"),
              borderRadius: 30,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
              padding: 2,
            }}
          >
            10
          </Text>
          <Image
            source={images.messenger}
            style={{ height: Theme.wp("6%"), width: Theme.wp("6%") }}
          />
        </View>
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
