import { VariantProps, cva } from "class-variance-authority";
import Container from "./Container";
import Label from "./Label";

export type ChipTypes = "success" | "pending";

export const ChipWrapper = cva(["border", "rounded-full"], {
  variants: {
    type: {
      success: ["border-green-500", "bg-green-50"],
      pending: ["border-yellow-500", "bg-yellow-50"],
    },
    size: {
      xs: "p-0",
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    },
  },
  defaultVariants: {
    type: "success",
    size: "sm",
  },
});

interface ChipProps extends VariantProps<typeof ChipWrapper> {
  label: string;
  type: ChipTypes;
}

export const Chip: React.FC<ChipProps> = (props) => {
  return (
    <Container className={ChipWrapper(props)}>
      <Label
        className={`text-xs  text-yellow-600  dark:text-yellow-400 ${
          props.type === "success" && "text-green-600"
        } `}
      >
        {props.label}
      </Label>
    </Container>
  );
};
