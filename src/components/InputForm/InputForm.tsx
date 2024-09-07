import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Icons from "../../../assets/icons";

interface InputProps extends TextInputProps {
  // Tất cả thuộc tính của TextInput
  iconName: ImageSourcePropType;
  showPassword?: boolean;
  placeholder: string;
}

function InputForm({ iconName, showPassword, placeholder, ...props }: InputProps) {
  const [value, setValue] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View className="relative h-[45px] flex-row items-center rounded-full border-[1px] border-gray-300 pl-3">
      <View className="flex h-[34px] w-[34px] items-center justify-center">
        <Image source={iconName} className="object-contain" />
      </View>
      {value === "" && (
        <Text className="absolute left-[66px] top-2 -translate-x-1/2 -translate-y-1/2 text-xl text-[#00000063]">
          {placeholder}
        </Text>
      )}
      <TextInput
        {...props}
        value={value}
        onChangeText={setValue}
        secureTextEntry={showPassword && !isPasswordVisible}
        className="h-full flex-1 pl-5 text-xl"
      />
      <Pressable onPress={() => setPasswordVisible(!isPasswordVisible)} className="p-5">
        {value !== "" && showPassword && <Image source={Icons.ShowPasswordIcon} />}
      </Pressable>
    </View>
  );
}

export default InputForm;
