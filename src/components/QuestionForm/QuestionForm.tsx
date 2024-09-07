import React from "react";
import { View, Text, Pressable } from "react-native";

interface QuestionFormProps {
  value: string;
  question: string;
  className?: string;
  onPress: () => void;
}
function QuestionForm({ value, question, className, onPress }: QuestionFormProps) {
  return (
    <View className={`gap-y-[27px] pt-[20px] ${className}`}>
      <Text className="text-center text-base">{question}</Text>
      <Pressable onPress={() => onPress()}>
        <Text className="text-center text-[#1882FF]">{value}</Text>
      </Pressable>
    </View>
  );
}

export default QuestionForm;
