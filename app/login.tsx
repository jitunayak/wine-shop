import { Ionicons } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { Alert, Linking, TouchableOpacity, View } from "react-native";
import Label from "../src/components/Label";
import { useUserStore } from "../src/hooks/store";

const Login = () => {
  const { setUserId } = useUserStore();

  const handlePress = useCallback(async () => {
    const url =
      "https://zenstore.authlink.me?redirectUri=zenstoreotpless://otpless";
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

  return (
    <>
      <Label className="text-neutral-700  text-3xl absolute top-10">
        App Name
      </Label>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{ backgroundColor: "#00D54B" }}
          className="justify-center flex-row items-center px-4 py-2 mt-2 rounded"
        >
          <Ionicons name="logo-whatsapp" size={24} color="white" />
          <Label className="text-white font-medium text-base  ">
            WhatsApp Login
          </Label>
        </View>
      </TouchableOpacity>
      <Label onPress={handleSkip} className="p-2 text-base underline">
        skip
      </Label>
    </>
  );
};

export default Login;
