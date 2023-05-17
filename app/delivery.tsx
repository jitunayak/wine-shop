import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Container from "../src/components/Container";
import { HStack } from "../src/components/HStack";
import Label from "../src/components/Label";
import { VStack } from "../src/components/VStack";

export default function delivery() {
  const [deliveryTracker, setDeliveryTracker] = useState([
    {
      name: "Order Received",
      isCompleted: true,
      description: "Received at 12:00 AM",
    },
    {
      name: "Order Packed",
      isCompleted: true,
      description: "Packed at 12:15 PM",
    },
    {
      name: "Order Picked",
      isCompleted: true,
      description: "Picked  at 12:15 PM",
    },
    {
      name: "Delivered",
      isCompleted: false,
      description: "Delivered at 1:00 PM",
    },
  ]);

  const CallButton = (
    <TouchableOpacity className="flex flex-row items-center justify-center m-10 p-2 w-full ">
      <View className="flex flex-row items-center justify-center rounded border dark:border-neutral-500 py-3 bg-black w-full ">
        <Ionicons name="call" size={24} color="white" />
        <Text className="ml-4 font-bold text-md text-white">CALL</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Container className="items-center flex justify-center h-full w-full">
      <Container className="flex items-center gap-2 justify-center bg-green-50 w-full p-10 dark:bg-green-400">
        <Label className="text-green-600 font-medium text-xl dark:text-white">
          Express Delivery in
        </Label>
        <Label className="text-green-600 font-bold text-2xl pb-10 dark:text-white">
          45 minutes
        </Label>
      </Container>

      <FlatList
        data={deliveryTracker}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => RenderDeliverTracking(item, index)}
      />

      {CallButton}
    </Container>
  );

  function RenderDeliverTracking(
    item: { name: string; isCompleted: boolean; description: string },
    index: number
  ): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {
    return (
      <>
        <VStack>
          <HStack>
            <Container className="">
              <Ionicons
                name="md-checkmark-done-circle-outline"
                size={24}
                color={item.isCompleted ? "green" : "gray"}
              />
              {index !== deliveryTracker.length - 1 && (
                <Container
                  className={`w-1 h-12 ml-2 bg-${
                    item.isCompleted ? "green" : "slate"
                  }-600`}
                />
              )}
            </Container>
            <Container>
              <Text
                className={` mt-2 font-bold text-md text-${
                  item.isCompleted ? "green" : "neutral"
                }-700`}
              >
                {item.name}
              </Text>
              <Text className="">( {item.description} )</Text>
            </Container>
          </HStack>
        </VStack>
      </>
    );
  }
}
