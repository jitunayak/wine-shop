import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { countBy, reduce, uniqBy } from "lodash";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";
import Address from "../src/components/Address";
import { Button } from "../src/components/Button";
import { HStack } from "../src/components/HStack";
import Label from "../src/components/Label";
import { useCartStore } from "../src/hooks/store";
import { env } from "../src/utils/config";
import { theme } from "../src/utils/theme";

export default function cartScreen() {
  const { items, removeAllItems } = useCartStore();
  const router = useRouter();

  const getTotalBillAmount = () => {
    const priceInRupees = reduce(items, (acc, curr) => acc + curr.price, 0);
    return priceInRupees;
  };

  const getTotalBillAmountForPayment = () => {
    return getTotalBillAmount() * 100;
  };

  async function handlePayment() {
    {
      if (items.length === 0) {
        router.push("/");
        return;
      }
      var options: CheckoutOptions = {
        description: "Shopping from Wine Shop",
        image: "https://i.imgur.com/3g7nmJC.png",
        currency: "INR",
        key: env.ENV_RAZORPAY_API_KEY,
        amount: getTotalBillAmountForPayment(),
        order_id: "",
        name: "Wine Shop",
        prefill: {
          email: "jitunayak715@gmail.com",
          contact: "911234567890",
          name: "Jitu Nayak",
        },
        theme: { color: "#0e5a14" },
      };
      RazorpayCheckout.open(options)
        .then((data) => {
          router.push("../");
          router.push("/delivery");
          removeAllItems();
        })
        .catch((error) => {
          alert(`Error: ${error.description}`);
        });
    }
  }

  if (items.length === 0) {
    return (
      <HStack className="m-2 px-2 rounded bg-neutral-50">
        <Label className="text-lg font-medium m-2 text-center text-neutral-500 ">
          Your Cart is Empty
        </Label>
        <Ionicons name="md-trash-bin-outline" size={24} color="gray" />
      </HStack>
    );
  }
  return (
    <View
      className="flex-1 py-10 justify-between"
      style={{ backgroundColor: theme.BACKGROUND }}
    >
      <ScrollView className="m-4 rounded-md bg-white border border-neutral-200">
        {uniqBy(items, "id").map((item, index) => (
          <HStack key={index} className="p-2 border-b border-neutral-100">
            <Image
              source={{ uri: item.image }}
              className="w-12 h-12 aspect-square"
              style={{
                resizeMode: "contain",
              }}
            />
            <Label>{item.name}</Label>
            <HStack>
              <Label>₹ {item.price}</Label>
              <Label>x {countBy(items, "id")[item.id]}</Label>
            </HStack>
          </HStack>
        ))}
      </ScrollView>
      <Address />
      <Button
        className="m-2 p-2 bg-green-700 shadow-lg"
        onPress={() => handlePayment()}
      >
        <HStack className="m-2 px-2 ">
          <Label className="text-md font-medium text-white">
            {items.length} items |
          </Label>
          <Label className="text-md font-bold text-white">
            {items.length === 0 ? "Go Back" : `PAY ₹ ${getTotalBillAmount()}`}
          </Label>
        </HStack>
      </Button>
    </View>
  );
}
