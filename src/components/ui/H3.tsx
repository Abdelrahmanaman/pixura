import { cn } from "@/lib/utils";

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};
export default function H3({ children, className, ...props }: HeaderProps) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
