import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto px-4 md:px-10 lg:px-20 ", className)}>
      {children}
    </div>
  );
}
