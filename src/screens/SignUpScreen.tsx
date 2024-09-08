import React, { useCallback } from "react";
import { Text, View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";

import DefaultForm from "../components/DefaultForm";
import InputForm from "../components/InputForm";
import Icon from "../../assets/icons";
import Ellipse from "../components/Ellipse";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import QuestionForm from "../components/QuestionForm";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;

function SignUpScreen() {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const position = useSharedValue(300); // Giá trị ban đầu của vị trí Y (bên dưới màn hình)

  // Hàm khôi phục và khởi động hoạt ảnh
  const startAnimation = useCallback(() => {
    position.value = withTiming(0, { duration: 2000, easing: Easing.out(Easing.exp) });
  }, [position]);

  // Chạy hoạt ảnh khi trang được lấy nét
  useFocusEffect(
    useCallback(() => {
      position.value = 300; // Đặt lại giá trị ban đầu
      startAnimation();
    }, [startAnimation, position]),
  );

  // Tạo kiểu hoạt ảnh dựa vào vị trí hiện tại
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: position.value }],
    };
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 10}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="h-full items-center">
          {/* Ellipse */}
          <Animated.View style={[animatedStyle]}>
            <Ellipse onPress={() => navigation.goBack()} />
          </Animated.View>

          <Text className="my-[37px] text-xl text-[#8AC0FF]">Create Account</Text>

          {/* DefaultForm */}
          <DefaultForm>
            <InputForm placeholder="Username" iconName={Icon.UserNameIcon} />
            <InputForm placeholder="Email" iconName={Icon.EmailIcon} />
            <InputForm placeholder="Password" iconName={Icon.Secure} showPassword />
            <InputForm placeholder="Repeat Password" iconName={Icon.Secure} showPassword />
            <View className="mx-5 flex-row">
              <CheckBox />
              <Text className="text-sm text-[#858585]">
                I agree to the <Text className="text-[#1882FF]">Terms & conditions</Text>
              </Text>
            </View>
            <Button
              className="mt-[20px]"
              onPress={() => navigation.navigate("Loading")}
              value="Sign Up"
            />
          </DefaultForm>
          <QuestionForm
            className="mb-11 mt-auto"
            question="Already have an account?"
            value="Sign In from here"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;
