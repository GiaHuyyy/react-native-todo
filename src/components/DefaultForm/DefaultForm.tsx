import React, { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

interface DefaultFormProps {
  children: ReactNode;
}

function DefaultForm({ children }: DefaultFormProps) {
  return (
    <View className="w-full gap-y-4 px-[47px]">
      {React.Children.map(children, (child, index) => (
        <View key={index}>{child}</View>
      ))}

      <View className="mt-auto gap-y-[27px]">
        <Text className="text-center text-base">Already have an account ?</Text>
        <Pressable className="">
          <Text className="text-center text-[#1882FF]">Sign In from here</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DefaultForm;
