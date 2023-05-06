import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Label from "./Label";
import { VStack } from "./VStack";

export default function Address() {
  const mockAddress = [
    {
      id: 1,
      name: "Jitu Nayak",
      address: "Pune",
      landmark: "G Shankar Circle",
      pincode: 411057,
      phone: "+91-99999999",
      state: "Maharashtra",
      lastModified: new Date(),
    },
    {
      id: 2,
      name: "Jitu Nayak",
      address: "Banglore",
      landmark: "Whitefiled Circle",
      pincode: 411057,
      phone: "+91-99999233",
      state: "Karnataka",
      lastModified: new Date("2022-06-01"),
    },
    {
      id: 3,
      name: "Shikha Behura",
      address: "Banglore",
      landmark: "Whitefiled Circle",
      pincode: 411057,
      phone: "+91-99999233",
      state: "Karnataka",
      lastModified: new Date("2022-08-01"),
    },
  ].sort((a, b) => a.lastModified.getTime() - b.lastModified.getTime());

  const [selectedAddress, setSelectedAddress] = useState(mockAddress[0]);

  return (
    <VStack className="items-start p-2">
      <Label className="font-medium text-lg ml-2">Choose Delivery Point </Label>
      <FlatList
        className="flex"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={mockAddress}
        ListEmptyComponent={() => <Label>No Address Found</Label>}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedAddress(item);
            }}
            className={`
            ${
              selectedAddress.id === item.id
                ? "border-green-600 bg-green-50 shadow-lg shadow-green-50"
                : "border-neutral-200 bg-white"
            } m-2 p-3 rounded  border-2 `}
          >
            <Label>{item.name}</Label>
            <Label className="text-neutral-600">{item.address}</Label>
            <Label className="text-neutral-500">{item.landmark}</Label>
            <Label className="text-neutral-400">{item.pincode}</Label>
            <Label className="text-neutral-400">{item.phone}</Label>
          </TouchableOpacity>
        )}
      />
    </VStack>
  );
}
