import React from "react";
import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  children: React.ReactNode;
}
export const HStack: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <View
      className={`flex flex-row items-center justify-between dark:bg-neutral-800 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
};
