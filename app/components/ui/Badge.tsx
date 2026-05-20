import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-black ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
