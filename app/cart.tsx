import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";
import Container from "../src/components/Container";
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

  const handlePayment = async () => {
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
          contact: "91777777777",
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
  };

  return (
    <View className="flex-1 py-10 justify-between">
      {items.length === 0 && (
        <Container className="flex-row items-center justify-center">
          <Label className="text-lg font-medium m-2 text-center ">
            Your Cart is Empty
          </Label>
          <Ionicons name="md-trash-bin-outline" size={24} color="black" />
        </Container>
      )}
      <ScrollView className="">
        {[...new Set(items.map((item) => item.id))].map((id) => (
          <Container
            key={id}
            className="justify-between flex-row m-1 p-4 rounded items-center"
          >
            <Label className="font-medium text-base">
              {items.find((item) => item.id === id)?.name}
            </Label>
            <Container className="flex-row items-center">
              <Label> ₹ {items.find((item) => item.id === id)?.price}</Label>
              <Label>x {items.filter((item) => item.id === id).length}</Label>
            </Container>
          </Container>
        ))}
      </ScrollView>
      // payment button
      <TouchableOpacity onPress={() => handlePayment()}>
        <View className="bg-green-700 m-2 py-3 w-fit justify-center items-center  rounded">
          <Label
            className="text-white font-medium text-md
          "
          >
            {items.length === 0
              ? "Go Back"
              : `PAY ₹ ${getTotalBillAmount() / 100}`}
          </Label>
        </View>
      </TouchableOpacity>
    </View>
  );
}
