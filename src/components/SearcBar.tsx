import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { TextInput, View } from "react-native";

export default function SearcBar() {
  const [searchText, setSearchText] = useState("");
  const { colorScheme } = useColorScheme();
  return (
    <View className="m-2">
      <TextInput
        value={searchText}
        autoCapitalize="none"
        autoComplete={"off"}
        clearButtonMode="always"
        clearTextOnFocus={true}
        onChangeText={(e) => setSearchText(e)}
        placeholderTextColor={colorScheme === "dark" ? "white" : "gray"}
        placeholder="search e.g. magnum"
        style={{ fontSize: 16 }}
        className="bg-white dark:bg-neutral-900 dark:text-neutral-50 border border-neutral-300 rounded-md px-4 py-3  dark:border-neutral-600"
      />
    </View>
  );
}
