import { Link, useNavigation } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const user = {
  id: "123456789",
  name: "Jeff B",
  username: "bezos",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
};

const NewTweet = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const onTweetPress = () => {
    setText("");
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href={"../"} style={{ fontSize: 20 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.image}></Image>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's happening?"
            style={styles.textInput}
            numberOfLines={5}
            multiline
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    marginLeft: 6,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    aspectRatio: 1,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
export default NewTweet;
