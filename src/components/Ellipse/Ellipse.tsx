import React from "react";
import { View, Image, Pressable, DimensionValue } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "../../../assets/icons";
import Images from "../../../assets/images";

interface EllipseProps {
  height?: number;
  marginTop?: string;
  className?: string;
  onPress?: () => void | undefined;
}

function Ellipse({ height = 488, className, marginTop = "-60%", onPress }: EllipseProps) {
  return (
    <View
      style={{ height: height, marginTop: marginTop as DimensionValue }}
      className={`flex w-[488px] justify-center ${className}`}
    >
      <LinearGradient
        colors={["#FFF", "#67ADFF"]}
        className="relative flex-1 items-center rounded-b-full text-center"
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Pressable
          onPress={() => onPress && onPress()}
          className="absolute bottom-36 left-16 p-2 px-3"
        >
          <Image source={Icon.ArrowBackIcon} />
        </Pressable>
        <Image source={Images.logo} className="absolute bottom-20 h-[42px] w-[156px]" />
      </LinearGradient>
    </View>
  );
}

export default Ellipse;
