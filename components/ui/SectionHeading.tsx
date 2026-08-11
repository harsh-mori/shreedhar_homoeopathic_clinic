import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

/**
 * Consistent section heading: small green eyebrow + title + description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("mb-3 text-sm font-semibold tracking-widest uppercase", dark ? "text-secondary-200" : "text-secondary-600")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          dark ? "text-white" : "text-black"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-white/80" : "text-grey-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
