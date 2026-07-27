import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

/** Thin wrapper around Hugeicons free icons. Default strokeWidth 1.5. */
export function Icon({
  icon,
  size = 20,
  strokeWidth = 1.5,
  className,
  ...props
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
