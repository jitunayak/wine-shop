import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";
import { Button } from "../src/components/Button";
import { HStack } from "../src/components/HStack";
import Label from "../src/components/Label";
import { useCartStore } from "../src/hooks/store";
import { env } from "../src/utils/config";

export default function cartScreen() {
  const { items, removeAllItems } = useCartStore();
  const router = useRouter();

  const getTotalBillAmount = () => {
    const priceInRupees = items.reduce((acc, curr) => acc + curr.price, 0);
    return priceInRupees;
  };

  const getTotalBillAmountForPayment = () => {
    const priceInRupees = items.reduce((acc, curr) => acc + curr.price, 0);
    return priceInRupees * 100;
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
          //   alert(`Success: ${data.razorpay_payment_id}`);
          router.push("/delivery");
          removeAllItems();
        })
        .catch((error) => {
          alert(`Error: ${error.description}`);
        });
    }
  }

  return (
    <View className="flex-1 py-10 justify-between">
      {items.length === 0 && (
        <HStack className="m-2 px-2 rounded bg-neutral-50">
          <Label className="text-lg font-medium m-2 text-center text-neutral-500 ">
            Your Cart is Empty
          </Label>
          <Ionicons name="md-trash-bin-outline" size={24} color="gray" />
        </HStack>
      )}
      <ScrollView className="">
        {[...new Set(items.map((item) => item.id))].map((id) => (
          <HStack key={id} className="m-1 p-4 rounded bg-neutral-50">
            <Label className="font-medium text-base">
              {items.find((item) => item.id === id)?.name}
            </Label>
            <HStack>
              <Label> ₹ {items.find((item) => item.id === id)?.price}</Label>
              <Label>x {items.filter((item) => item.id === id).length}</Label>
            </HStack>
          </HStack>
        ))}
      </ScrollView>
      <Button
        title={items.length === 0 ? "Go Back" : `PAY ₹ ${getTotalBillAmount()}`}
        className="m-2 p-2 bg-green-700"
        onPress={() => handlePayment()}
      />
    </View>
  );
}
