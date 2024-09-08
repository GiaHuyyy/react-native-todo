import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Icons from "../../assets/icons";

type LoadingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Loading">;

function LoadingScreen() {
  const navigation = useNavigation<LoadingScreenNavigationProp>();
  const rotate = useSharedValue(0);

  useEffect(() => {
    // Thực hiện hoạt ảnh quay vòng trong 5 giây
    rotate.value = withTiming(1, { duration: 3000, easing: Easing.linear });

    // Chuyển hướng sau khi hoạt ảnh hoàn tất
    const timer = setTimeout(() => {
      navigation.navigate("Todo");
    }, 3000); // Đồng bộ với thời gian hoạt ảnh quay vòng

    // Dọn dẹp bộ đếm thời gian khi component bị gỡ bỏ
    return () => clearTimeout(timer);
  }, [navigation, rotate]);

  // Tạo hoạt ảnh quay vòng
  const rotationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value * 360}deg` }],
    };
  });

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View style={[rotationStyle]}>
        <Image className="h-20 w-20" source={Icons.LoadingIcon} />
      </Animated.View>
      <Text className="mb-5 text-2xl text-[#587DFF] font-semibold">Processing...</Text>
    </View>
  );
}

export default LoadingScreen;
