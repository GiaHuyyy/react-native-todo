import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View className="mr-3 flex-row items-center">
      <Pressable
        onPress={() => setIsChecked(!isChecked)}
        className={`h-[18px] w-[18px] items-center justify-center rounded-[4px] border-[1px] ${
          isChecked ? "border-[#1882FF] bg-[#1882FF]" : "border-gray-300 bg-white"
        }`}
      >
        {isChecked && <Text className="bg-transparent text-[12px] text-white">✓</Text>}
      </Pressable>
    </View>
  );
}

export default CheckBox;
