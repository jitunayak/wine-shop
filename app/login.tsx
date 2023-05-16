import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React, { useCallback, useEffect } from "react";
import { Alert, Linking, TouchableOpacity, View } from "react-native";
import Label from "../src/components/Label";
import SliderButton from "../src/components/SliderButton";
import { useUserStore } from "../src/hooks/store";
import { env } from "../src/utils/config";

const Login = () => {
  const { setUserId } = useUserStore();
  const { colorScheme } = useColorScheme();

  const handlePress = useCallback(async () => {
    const url = env.ENV_OTP_LESS_URL;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  const handleSkip = () => {
    setUserId("dev_test");
  };

  useEffect(() => {
    setUserId(null);
  }, []);

  return (
    <View className="flex-1 justify-center items-center w-full m-2">
      <Label className="text-neutral-700  text-3xl absolute top-20 font-extrabold dark:text-neutral-300">
        Royal Glass
      </Label>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{
            backgroundColor: colorScheme === "dark" ? "#00ac3c" : "#00D54B",
          }}
          className="justify-center flex-row items-center px-4 py-2 mt-2 rounded"
        >
          <Ionicons name="logo-whatsapp" size={24} color="white" />
          <Label className="text-white font-medium text-base ">
            WhatsApp Login
          </Label>
        </View>
      </TouchableOpacity>
      {/* <Label onPress={handleSkip} className="p-2 text-base underline">
        skip
      </Label> */}
      <SliderButton>slide to skip</SliderButton>
    </View>
  );
};

export default Login;
