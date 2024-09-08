import React, { ReactNode } from "react";
import { View } from "react-native";

interface DefaultFormProps {
  className?: string;
  children: ReactNode;
}

function DefaultForm({ className, children }: DefaultFormProps) {
  return (
    <View className={`w-full gap-y-4 px-[47px] ${className}`}>
      {React.Children.map(children, (child, index) => (
        <View key={index}>{child}</View>
      ))}
    </View>
  );
}

export default DefaultForm;
