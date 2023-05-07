import React from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Tabs({
  list,
  currentSelectedCategory,
  setCurrentSelectedCategory,
}: {
  list: string[];
  currentSelectedCategory: any;
  setCurrentSelectedCategory: any;
}) {
  return (
    <FlatList
      className="flex"
      data={list}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setCurrentSelectedCategory(item)}
          className={`bg-neutral-100 p-2 m-2 border rounded-full border-transparent ${
            currentSelectedCategory === item &&
            "bg-green-700 border-neutral-100"
          }`}
        >
          <Text
            className={`text-base font-medium font text-neutral-600  ${
              currentSelectedCategory === item
                ? "text-neutral-100"
                : "text-neutral-400"
            }`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
