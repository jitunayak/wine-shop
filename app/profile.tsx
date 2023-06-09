import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React from "react";
import { FlatList, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserStore } from "../src/hooks/store";

import {
  Container,
  HStack,
  Label,
  OrderHistory,
  VStack,
} from "./../src/components";
import { IOrderItem } from "./../src/types";

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

  const orderItems: IOrderItem[] = [
    {
      id: 1,
      title: "Order #1",
      date: "2/2/2022",
      items: ["Lays", "Bro Code"],
      status: "pending",
    },
    {
      id: 2,
      title: "Order #2",
      date: "2/2/2022",
      items: ["lays", "cigar"],
      status: "success",
    },
  ];
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const { setUserId } = useUserStore();
  return (
    <Container className="bg-neutral-100 dark:bg-neutral-900 h-full">
      <Label className="p-2 ml-4 font-semibold text-base">Account</Label>
      <VStack className=" m-4 rounded-md p-2 border border-neutral-300 dark:border-neutral-600">
        {profileItems.map((item, index) => {
          const lastItemStyle =
            index === profileItems.length - 1
              ? "border-b-transparent w-full "
              : "w-full";
          return (
            <HStack
              key={item.title}
              className={`
                "w-full items-center p-2 border border-transparent border-b-neutral-200 dark:border-b-neutral-600 ${lastItemStyle}
              `}
            >
              <Label className="text-base p-1">{item.title}</Label>
              <AntDesign name="right" size={20} color="gray" />
            </HStack>
          );
        })}
      </VStack>
      <Switch
        className="ml-6"
        value={colorScheme === "dark"}
        onValueChange={toggleColorScheme}
      />
      <TouchableOpacity className="p-1 bg-red-50 border border-red-500 rounded-md m-4 dark:bg-red-200">
        <Label
          onPress={() => {
            setUserId(null);
          }}
          className="p-1 ml-4 text-center text-base text-red-600 "
        >
          Log out
        </Label>
      </TouchableOpacity>

      <Label className="p-2 ml-4 font-semibold text-base">Order History</Label>
      <FlatList
        data={orderItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <OrderHistory item={item.item} />}
      />
    </Container>
  );
}
