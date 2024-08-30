import { Pressable, StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeTheme } from "../../store/themeSlice";

interface FooterProps {
  themeColor: string;
}
function Footer({ themeColor }: FooterProps) {
  const dispatch = useDispatch();

  const handlechangeTheme = (color: string) => {
    dispatch(changeTheme(color));
  };

  return (
    <View style={[styles.footer, { backgroundColor: themeColor }]}>
      <Text style={styles.text}>Choose theme</Text>
      <Pressable style={[styles.circle, styles.sky]} onPress={() => handlechangeTheme("#7bdee3")}>
        <Text></Text>
      </Pressable>
      <Pressable style={[styles.circle, styles.blue]} onPress={() => handlechangeTheme("#3b5998")}>
        <Text></Text>
      </Pressable>
      <Pressable style={[styles.circle, styles.green]} onPress={() => handlechangeTheme("#688c8a")}>
        <Text></Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#688c8a",
    color: "#fff",
    padding: 20,
    paddingBottom: 30,
  },
  text: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderBottomColor: "#889291",
    borderRightColor: "#889291",
  },
  sky: {
    backgroundColor: "#7bdee3",
  },
  blue: {
    backgroundColor: "#3b5998",
  },
  green: {
    backgroundColor: "#688c8a",
  },
});

export default Footer;
