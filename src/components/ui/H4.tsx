import { cn } from "@/lib/utils";

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};
export default function H4({ children, className, ...props }: HeaderProps) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}
