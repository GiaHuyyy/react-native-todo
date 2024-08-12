import {
  Text,
  Button,
  TextInput,
  View,
  Pressable,
  StyleSheet,
} from "react-native";

function TodoAction() {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Add todo..."
        placeholderTextColor="#fff"
        style={[styles.input]}
      />
      <Pressable style={[styles.button, styles.buttonAdd]}>
        <Text style={styles.text}>Add</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.buttonClear]}>
        <Text style={styles.text}>Clear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: 1,
  },
  input: {
    paddingLeft: 20,
    backgroundColor: "#9bb4b1",
    color: "#fff",
    height: "100%",
    flex: 1,
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
  buttonAdd: {
    backgroundColor: "#688c8a",
  },
  buttonClear: {
    backgroundColor: "#ff9800",
  },
});
export default TodoAction;
