import { FlatList, StyleSheet, View } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }: any) => <Tweet tweet={item}></Tweet>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
