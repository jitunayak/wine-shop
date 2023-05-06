import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HStack } from "../src/components/HStack";
import Label from "../src/components/Label";
import { VStack } from "../src/components/VStack";
import { useUserStore } from "../src/hooks/store";

export default function Profile() {
  const profileItems = [
    {
      title: "Address",
      icon: "map-pin",
    },
    {
      title: "Profile",
      icon: "map-pin",
    },
    {
      title: "Support & Chat",
      icon: "map-pin",
    },
  ];

  const orderItems = [
    {
      id: 1,
      title: "Order #1",
      date: "2/2/2022",
      items: ["lays", "cigar"],
      status: "pending",
    },
    {
      id: 2,
      title: "Order #1",
      date: "2/2/2022",
      items: ["lays", "cigar"],
      status: "pending",
    },
  ];

  const { setUserId } = useUserStore();
  return (
    <View>
      <Label className="p-2 ml-4 font-semibold text-base">Account</Label>
      <VStack className=" m-4 bg-white rounded-md p-2 border border-neutral-100">
        {profileItems.map((item) => {
          return (
            <HStack
              key={item.title}
              className="w-full items-center p-2 border border-transparent border-b-neutral-200"
            >
              <Text className="text-base p-1">{item.title}</Text>
              <AntDesign name="right" size={20} color="gray" />
            </HStack>
          );
        })}
      </VStack>
      <TouchableOpacity className="p-1 bg-red-50 border border-red-500 rounded-md m-4">
        <Label
          onPress={() => {
            setUserId(null);
          }}
          className="p-1 ml-4 text-center text-base text-red-600"
        >
          Log out
        </Label>
      </TouchableOpacity>

      <Label className="p-2 ml-4 font-semibold text-base">Order History</Label>
      <FlatList
        data={orderItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <VStack className="m-1 bg-white rounded-md p-2 border border-neutral-100">
              <Text className="text-base p-1">{item.title}</Text>
              <Text className="text-base p-1">{item.date}</Text>
              <Text className="text-base p-1">{item.items}</Text>
              <Text className="text-base p-1">{item.status}</Text>
            </VStack>
          );
        }}
      />
    </View>
  );
}
