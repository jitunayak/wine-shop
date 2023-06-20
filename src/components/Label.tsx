import React from "react";
import { Text, TextProps } from "react-native";

export const Label: React.FC<TextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text {...props} className={`p-1 dark:text-slate-100 ${className} `}>
      {children}
    </Text>
  );
};
