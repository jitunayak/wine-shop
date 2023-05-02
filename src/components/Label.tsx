import React from "react";
import { Text, TextProps } from "react-native";

export default function Label({ children, className, ...props }: TextProps) {
  return (
    <Text {...props} className={`p-1 dark:text-slate-100  ${className}`}>
      {children}
    </Text>
  );
}
