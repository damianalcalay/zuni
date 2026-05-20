import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "rounded-full bg-black px-5 text-white focus-visible:outline-black",
  secondary:
    "rounded-full bg-white/70 px-5 text-black focus-visible:outline-black",
  ghost: "text-black underline underline-offset-4 focus-visible:outline-black",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center px-0 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
