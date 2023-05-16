import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React from "react";
import { FlatList, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Container from "../src/components/Container";
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
      <VStack className=" m-4 rounded-md p-2 border border-neutral-100 dark:border-neutral-600">
        {profileItems.map((item) => {
          return (
            <HStack
              key={item.title}
              className="w-full items-center p-2 border border-transparent border-b-neutral-200 dark:border-b-neutral-600"
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
        renderItem={({ item }) => {
          return (
            <VStack className="mx-2 my-1 rounded-md p-4 border  border-neutral-200 items-start dark:border-neutral-600">
              <HStack className="w-full items-center p-1 border border-transparent border-b-neutral-200">
                <Label className="text-base p-1">{item.title}</Label>
                <Label className="text-base p-1">{item.date}</Label>

                <Label
                  className={`text-base p-1 text-yellow-600 dark:text-yellow-400 ${
                    item.status === "success" && "text-green-600"
                  } `}
                >
                  {item.status.toUpperCase()}
                </Label>
              </HStack>
              <Label className="text-base p-1 mt-2 text-clip">
                {item.items.join(", ")}
              </Label>
            </VStack>
          );
        }}
      />
    </Container>
  );
}
