import { cn } from "@/lib/utils";

type PProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};
export default function P({ children, className, ...props }: PProps) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    >
      {children}
    </p>
  );
}
