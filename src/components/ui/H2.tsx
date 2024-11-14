import { cn } from "@/lib/utils";

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};
export default function H2({ children, className, ...props }: HeaderProps) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
}
