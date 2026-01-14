import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, onSearch, ...props }, ref) => {
    const currentLength = value ? String(value).length : 0;
    const maxLength = props.maxLength;

    return (
      <div className={cn("relative w-full max-w-lg", className)}>
        <input
          ref={ref}
          value={value}
          {...props}
          className={cn(
            "w-full px-5 py-3 pr-28 rounded-full border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            className
          )}
        />

        <div className="absolute inset-y-0 right-1.5 flex items-center gap-2">
          {maxLength && (
            <span className="text-[10px] font-bold text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded-md border border-white/5 mr-1">
              {currentLength}/{maxLength}
            </span>
          )}
          
          <button
            onClick={onSearch}
            disabled={!value || String(value).trim() === ""}
            className="h-9 px-4 rounded-full bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold-dark))] text-black font-bold text-xs flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/20 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
            type="button"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Buscar</span>
          </button>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
