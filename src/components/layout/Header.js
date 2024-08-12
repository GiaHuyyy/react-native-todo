import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text  style={styles.text}>Simple Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#688c8a",
    color: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default Header;
