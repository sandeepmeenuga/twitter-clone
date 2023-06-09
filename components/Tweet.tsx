import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { TweetType } from "../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Link
      href={{
        pathname: `/tweet/${tweet.id}`,
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: tweet.user.image }}
          style={styles.userImage}
        ></Image>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{"@" + tweet.user.username}</Text>
            <Text style={styles.lastActive}> · 2h</Text>
            <Entypo
              name="dots-three-vertical"
              style={styles.verticaldot}
              color={"gray"}
              size={10}
            ></Entypo>
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.image}></Image>
          )}
          <View style={styles.footer}>
            {/* Comment IconButton */}
            <IconButton
              icon="comment"
              text={tweet.numberOfComments}
            ></IconButton>
            {/* Retry IconButton */}
            <IconButton
              icon="retweet"
              text={tweet.numberOfRetweets}
            ></IconButton>
            {/* Like IconButton */}
            <IconButton icon="heart" text={tweet.numberOfLikes}></IconButton>
            {/* Views IconButton */}
            <IconButton icon="chart" text={tweet.impressions | 0}></IconButton>
            {/* Views IconButton */}
            <IconButton icon="share-apple"></IconButton>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 5,
    flex: 1,
  },
  name: {
    fontWeight: "500",
  },
  content: {
    marginTop: 5,
    lineHeight: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    marginLeft: 5,
    color: "gray",
  },
  lastActive: {
    marginLeft: 2,
    color: "gray",
  },
  verticaldot: {
    marginLeft: "auto",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default Tweet;
