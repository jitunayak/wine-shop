import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import Label from "./Label";

interface Props extends ViewProps {
  title: string;
  onPress?: TouchableOpacityProps["onPress"];
}
export const Button: React.FC<Props> = ({ title, className, ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        {...props}
        className={`bg-neutral-800 justify-center items-center px-4 rounded ${className}`}
      >
        <Label className="text-white text-base">{title}</Label>
      </View>
    </TouchableOpacity>
  );
};
