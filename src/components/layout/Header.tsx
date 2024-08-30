import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface HeaderProps {
  themeColor: string;
}
function Header({ themeColor }: HeaderProps) {
  return (
    <View style={[styles.header, { backgroundColor: themeColor }]}>
      <Text style={styles.text}>Simple Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#688c8a",
    color: "#fff",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default Header;
