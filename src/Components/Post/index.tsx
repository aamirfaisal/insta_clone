import React, { useState, ReactNode, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Video from "react-native-video";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import postInfo from "./postData";
import PagerView from "react-native-pager-view";
import Theme from "../../Utils/Theme";
import InViewport from "./InViewPort";

const Post = () => {
  interface Props {
    children?: ReactNode;
    post?: Object;
  }
  const ref_FLPost = useRef(null);

  const Card = ({ post }: Props) => {
    const handlePlaying = (isVisible: Boolean) => {
      isVisible ? setPaused(false) : setPaused(true);
    };
    const [like, setLike] = useState(post?.isLiked);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(true);
    return (
      <InViewport onChange={handlePlaying}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={post.postPersonImage}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <View style={{ paddingLeft: 5 }}>
                <Text
                  style={{
                    fontSize: Theme.txtSmall,
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  {post.postTitle}
                </Text>
              </View>
            </View>
            <Feather name="more-vertical" style={{ fontSize: 20 }} />
          </View>
          <View
            style={{
              width: Theme.width,
              height: Theme.hp("40%"),
              alignSelf: "center",
            }}
          >
            {!post?.isVideo && (
              <View style={styles.pageIndexContainer}>
                <Text style={styles.txtPageIndex}>
                  {index} / {post?.postImages?.length}
                </Text>
              </View>
            )}
            {post?.isVideo ? (
              <Video
                source={{
                  uri: post?.videoUrl,
                }}
                paused={paused}
                style={styles.video}
                resizeMode="cover"
                poster="https://img.freepik.com/free-vector/cartoon-turtle-loading-icon-interface_172107-1203.jpg?w=900&t=st=1676897050~exp=1676897650~hmac=97d51ba4de3c7453e8dd423e8477b535d4d66dacd7ab7fcfd0e70242d92a4a80"
                posterResizeMode="cover"
              />
            ) : (
              <>
                <PagerView
                  style={{ flex: 1 }}
                  initialPage={0}
                  scrollEnabled
                  onPageSelected={(e) => setIndex(e.nativeEvent.position + 1)}
                >
                  {post?.postImages?.map((item, index) => {
                    return (
                      <View key={index} style={styles.selectedImgContainer}>
                        <Image
                          source={item}
                          style={styles.selectedImg}
                          resizeMode="cover"
                        />
                      </View>
                    );
                  })}
                </PagerView>
              </>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 12,
              paddingVertical: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => setLike(!like)}>
                <AntDesign
                  name={like ? "heart" : "hearto"}
                  style={{
                    paddingRight: 10,
                    fontSize: 20,
                    color: like ? "red" : "black",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionic
                  name="ios-chatbubble-outline"
                  style={{ fontSize: 20, paddingRight: 10, color: "black" }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="navigation"
                  style={{ fontSize: 20, color: "black" }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Ionic
                name="bookmark-outline"
                style={{ fontSize: 20, color: "black" }}
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ color: "black" }}>
              Liked by {like ? "you and" : ""}{" "}
              {like ? post.likes + 1 : post.likes} others
            </Text>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                paddingVertical: 2,
                color: "black",
                opacity: 0.7,
              }}
            >
              If enjoy the video ! Please like and Subscribe :)
            </Text>
            <Text style={{ opacity: 0.4, paddingVertical: 2, color: "black" }}>
              View all comments
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={post.postPersonImage}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    backgroundColor: "orange",
                    marginRight: 10,
                  }}
                />
                <TextInput
                  placeholder={"Add a comment"}
                  editable={false}
                  style={{ opacity: 0.5 }}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="emoji-happy"
                  style={{ fontSize: 15, color: "lightgreen", marginRight: 10 }}
                />
                <Entypo
                  name="emoji-neutral"
                  style={{ fontSize: 15, color: "pink", marginRight: 10 }}
                />
                <Entypo
                  name="emoji-sad"
                  style={{ fontSize: 15, color: "red" }}
                />
              </View>
            </View>
          </View>
        </View>
      </InViewport>
    );
  };
  return (
    <View>
      <FlatList
        ref={ref_FLPost}
        showsVerticalScrollIndicator={false}
        data={postInfo}
        snapToAlignment={"start"}
        initialScrollIndex={0}
        disableIntervalMomentum
        renderItem={({ item }) => {
          return <Card post={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingBottom: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  video: {
    width: "100%",
    height: Theme.hp("40%"),
    borderRadius: 10,
  },
  pageIndexContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.8)",
    alignItems: "center",
    width: Theme.wp("10%"),
    borderRadius: 30,
    justifyContent: "space-evenly",
    paddingVertical: Theme.hp("0.4%"),
    position: "absolute",
    top: Theme.hp("1.5%"),
    right: Theme.wp("3%"),
    zIndex: 100,
  },
  txtPageIndex: {
    color: Theme.white,
    fontSize: Theme.txtSmall,
  },
  selectedImgContainer: {
    backgroundColor: Theme.white,
    borderRadius: 10,
  },
  selectedImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
export default Post;
