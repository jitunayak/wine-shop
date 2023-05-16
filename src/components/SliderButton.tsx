import React from "react";
import { Text } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useUserStore } from "../hooks/store";
import { vibrate } from "../utils/utils";
import Container from "./Container";

export default function SliderButton({ children }: any) {
  const BUTTON_WIDTH = 100;
  const translateX = useSharedValue(-120);
  const { setUserId } = useUserStore();

  function someWorklet() {
    vibrate();
    setUserId("test_user");
  }

  const clamp = (value: number, min: number, max: number) => {
    "worklet";
    return Math.min(Math.max(value, min), max);
  };

  const onPanGenstureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: (event) => {
        const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 3;
        translateX.value = event.translationX - 120;
        //  clamp(
        //   event.translationX,
        //   -MAX_SLIDE_OFFSET,
        //   MAX_SLIDE_OFFSET
        // );
      },

      onEnd: () => {
        translateX.value = withSpring(-120);
        if (translateX.value > 120) {
          runOnJS(someWorklet)();
        }
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, []);

  return (
    <Container className="items-start w-full border-neutral-100 bg-neutral-200 p-2 rounded  bottom-2 mt-10 dark:bg-neutral-800">
      <PanGestureHandler onGestureEvent={onPanGenstureEvent}>
        <Animated.View
          style={[rStyle, { width: BUTTON_WIDTH * 1.2 }]}
          className="items-center transition-all delay-500 justify-center bg-neutral-700 rounded p-2 ml-32"
        >
          <Text className="text-white p-2 font-medium">{children}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}
