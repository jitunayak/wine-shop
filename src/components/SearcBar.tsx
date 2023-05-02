import React, { useState } from "react";
import { TextInput, View } from "react-native";

export default function SearcBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <View className="m-2">
      <TextInput
        value={searchText}
        onChangeText={(e) => setSearchText(e.toUpperCase())}
        placeholder="search e.g. magnum"
        className="bg-white border border-neutral-200 mb-2 p-4 rounded text-lg"
      />
    </View>
  );
}
