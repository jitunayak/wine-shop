import React from "react";
import { FlatList, Text, TouchableHighlight } from "react-native";
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
    <>
      <FlatList
        className="bg-green-700"
        data={list}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => setCurrentSelectedCategory(item)}
            className={`p-4   ${
              currentSelectedCategory === item && "bg-white"
            }`}
          >
            {currentSelectedCategory === item ? (
              <Text className="text-base  text-black ">{item}</Text>
            ) : (
              <Text className="text-base font-medium  text-neutral-50 ">
                {item}
              </Text>
            )}
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
