import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  value: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
  onPress: () => void;
}

function Button({
  value,
  textColor = "#ffffff",
  backgroundColor = "#1882FF",
  className,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      onPress={() => onPress()}
      style={{ backgroundColor }}
      className={`h-[43px] w-full items-center justify-center rounded-full ${className}`}
    >
      <Text style={{ color: textColor }} className="text-base">
        {value}
      </Text>
    </Pressable>
  );
}

export default Button;
