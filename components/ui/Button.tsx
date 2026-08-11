import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

const variants: Record<Variant, string> = {
  // Green — main call to action
  primary: "bg-secondary-600 text-white hover:bg-secondary-700",
  // Cream — used on dark surfaces
  secondary: "bg-primary text-black hover:bg-primaryLight",
  outline: "border border-secondary-600 text-secondary-700 hover:bg-secondary-50",
  ghost: "text-secondary-700 hover:bg-secondary-50",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function classes({ variant = "primary", size = "md", className }: CommonProps) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={classes({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant, size, className, children, href, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={classes({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}
