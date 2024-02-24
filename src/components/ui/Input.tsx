import * as React from "react"

import { cn } from "@/utils/shadcnUI"

const Input = React.forwardRef(({ className, type, ...props }: React.InputHTMLAttributes<any>, ref: React.Ref<HTMLInputElement>) => {
  return (
    (<input
      ref={ref}
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
