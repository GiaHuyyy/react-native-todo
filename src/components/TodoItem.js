import { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
function TodoItem({ title, check }) {
  const [checked, setChecked] = useState(check);

  return (
    <View style={styles.wrapper}>
      <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
      <Text
        style={{
          textDecorationLine: checked === false ? "overline" : "line-through",
          color: checked === false ? "black" : "#688c8a",
          flex: 1,
        }}
      >
        {title}
      </Text>
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
    alignItems: "center",

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
    paddingVertical: 12,
    width: 80,
  },
  text: {
    fontSize: 16,
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
