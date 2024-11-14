import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  asChild?: boolean;
};
export default function CustomButton({
  children,
  className,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : Button;

  return (
    <Comp
      className={cn(
        "rounded-md w-44  text-lg  group relative overflow-hidden ",
        className,
      )}
      {...props}
    >
      <>
        <span className="group-hover:-translate-y-8 duration-500  transition-all ">
          {children}
        </span>

        {!asChild && (
          <ChevronRight className="size-10 absolute text-white translate-y-8 group-hover:-translate-y-0 transition-all duration-500" />
        )}
      </>
    </Comp>
  );
}
