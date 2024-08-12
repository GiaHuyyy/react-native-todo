import { Text, View, Pressable, StyleSheet } from "react-native";
function TodoItem({title}) {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <View style={[styles.wrapper, styles.groupButton]}>
        <Pressable style={[styles.button, styles.buttonEdit]}>
          <Text style={styles.text}>Edit</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonDelete]}>
          <Text style={styles.text}>X</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingLeft: 20,
    marginTop: 1,
    borderWidth: 1,
    borderColor: "#688c8a",
  },
  groupButton: {
    borderWidth: 0,
    marginTop: 0,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: 80,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonDelete: {
    backgroundColor: "red",
  },
  buttonEdit: {
    backgroundColor: "#00bcd4",
  },
});
export default TodoItem;
