import { View, Text, StyleSheet } from "react-native";

interface HeaderProps {
  themeColor: string;
}
function Header({ themeColor }: HeaderProps) {
  return (
    <View style={[styles.header, { backgroundColor: themeColor }]}>
      <Text className="font-bold text-[red] text-[23px]">Simple Todo App</Text>
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
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default Header;
