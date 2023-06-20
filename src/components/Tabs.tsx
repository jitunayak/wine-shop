import React from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export const Tabs: React.FC<{
    list: string[];
    currentSelectedCategory: any;
    setCurrentSelectedCategory: any;
}> = ({
    list,
    currentSelectedCategory,
    setCurrentSelectedCategory,
}) => {
        return (
            <FlatList
                className="flex"
                data={list}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setCurrentSelectedCategory(item)}
                        className={`bg-neutral-100 p-2 m-2 border rounded-full border-transparent dark:bg-neutral-600 ${currentSelectedCategory === item &&
                            "bg-green-700 border-neutral-100 dark:border-neutral-400"
                            }`}
                    >
                        <Text
                            className={`text-base font-medium font  ${currentSelectedCategory === item
                                ? "text-neutral-100 "
                                : "text-neutral-400 dark:text-neutral-300"
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
