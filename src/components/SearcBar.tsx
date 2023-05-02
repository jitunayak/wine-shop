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
        onChangeText={(e) => setSearchText(e)}
        placeholder="search e.g. magnum"
        style={{ fontSize: 16, padding: 10 }}
        className="bg-white border border-neutral-200 rounded"
      />
    </View>
  );
}
