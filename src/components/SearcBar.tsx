import React, { useState } from "react";
import { TextInput, View } from "react-native";

export default function SearcBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <View className="m-2">
      <TextInput
        value={searchText}
        autoCapitalize="none"
        autoComplete={"off"}
        clearButtonMode="always"
        clearTextOnFocus={true}
        onChangeText={(e) => setSearchText(e)}
        placeholder="search e.g. magnum"
        placeholderTextColor="gray"
        style={{ fontSize: 16 }}
        className="bg-white border border-neutral-300 rounded-full px-4 py-4"
      />
    </View>
  );
}
