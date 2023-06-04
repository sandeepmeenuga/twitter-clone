import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={styles.footerIconGrp}>
      {/* ICON */}
      <EvilIcons name={icon} size={22} color={"gray"}></EvilIcons>
      {/* Number */}
      <Text style={styles.footerCountText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerIconGrp: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerCountText: {
    fontSize: 12,
    color: "gray",
  },
});

export default IconButton;
