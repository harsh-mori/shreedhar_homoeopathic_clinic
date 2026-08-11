import { cn } from "@/lib/utils";
import { theme } from "@/constants/theme";

type ContainerProps = {
  as?: React.ElementType;
  size?: keyof typeof theme.containerWidth;
  className?: string;
  children: React.ReactNode;
};

/**
 * Centres content on a fixed maximum width defined by the design tokens.
 */
export function Container({ as: Tag = "div", size = "default", className, children }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", className)}
      style={{ maxWidth: theme.containerWidth[size] }}
    >
      {children}
    </Tag>
  );
}
