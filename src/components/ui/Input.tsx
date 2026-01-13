import * as React from "react";

import { Search } from "lucide-react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, ...props }, ref) => {
    const currentLength = value ? String(value).length : 0;
    const maxLength = props.maxLength;

    return (
      <div className={cn("relative w-full max-w-lg", className)}>
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-muted-foreground" />
        </div>

        <input
          ref={ref}
          value={value}
          {...props}
          className={cn(
            "w-full px-4 py-3 pl-11 pr-16 rounded-full border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
            className
          )}
        />

        {maxLength && (
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <span className="text-xs font-medium text-muted-foreground bg-neutral-800/50 px-2 py-1 rounded-md border border-white/5">
              {currentLength}/{maxLength}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
