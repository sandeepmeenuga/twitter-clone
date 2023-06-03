import { Image, StyleSheet, View, Text } from "react-native";
import tweets from "../assets/data/tweets";

const Tweet = ({ tweet }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: tweet.user.image }}
        style={styles.userImage}
      ></Image>
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
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
});

export default Tweet;
