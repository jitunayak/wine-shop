import { TouchableOpacity, View } from "react-native";
import Label from "./Label";

export function BuyButton({ data, ...props }: any) {
  return (
    <TouchableOpacity {...props}>
      <View className="bg-orange-700  justify-center items-center px-4 py-0 mt-2 rounded">
        <Label
          className="text-white font-medium text-base
          "
        >
          GRAB
        </Label>
      </View>
    </TouchableOpacity>
  );
}