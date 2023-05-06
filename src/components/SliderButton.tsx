import React from "react";
import { Text, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function SliderButton({ children }: any) {
  const BUTTON_WIDTH = 100;
  const translateX = useSharedValue(-120);

  const clamp = (value: number, min: number, max: number) => {
    "worklet";
    return Math.min(Math.max(value, min), max);
  };

  const onPanGenstureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: (event) => {
        const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 3;
        translateX.value = clamp(
          event.translationX,
          -MAX_SLIDE_OFFSET,
          MAX_SLIDE_OFFSET
        );
      },
      onEnd: () => {
        translateX.value = withSpring(-120);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, []);

  return (
    <View className="items-start w-full border-neutral-100 bg-neutral-200 p-1 rounded  bottom-2 mt-10">
      <PanGestureHandler onGestureEvent={onPanGenstureEvent}>
        <Animated.View
          style={[rStyle, { width: BUTTON_WIDTH * 1.2 }]}
          className="items-center transition-all delay-500 justify-center bg-neutral-700 rounded p-2 ml-32"
        >
          <Text className="text-white p-2 font-medium">{children}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
