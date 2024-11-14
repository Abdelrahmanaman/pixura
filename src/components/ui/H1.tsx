import { cn } from "@/lib/utils";

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};
export default function H1({ children, className, ...props }: HeaderProps) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
