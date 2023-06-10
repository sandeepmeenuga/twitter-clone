import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }: any) => <Tweet tweet={item}></Tweet>}
      ></FlatList>
      <Link href={"/new-tweet"} style={styles.floatingButton}>
        <Entypo name="plus" size={30} color={"white"}></Entypo>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    width: 50,
    height: 50,
    borderRadius: 50,
    textAlign: "center",
    verticalAlign: "middle",
    position: "absolute",
    right: 15,
    bottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
});
