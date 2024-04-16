import * as React from "react";
import { cn } from "../utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  errorMessages?: string[];
  wrapperClassName?: string;
  icon?: React.FC<{ className?: string }>;
}

const SdInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      
      errorMessage,
      errorMessages,
      className,
      wrapperClassName,
      type,
      icon: Icon,
      ...props
    },
    ref
  ) => {
    errorMessage = errorMessage || errorMessages?.join("\n");
    const errorStyles = cn(errorMessage && "c-text-rose-500");

    return (
      <label className={cn("c-flex c-flex-col c-gap-1", wrapperClassName)}>
        {label && <span>{label}</span>}
        <label
          className={cn(
            "c-flex c-h-10 c-w-full c-items-center c-overflow-hidden c-rounded-md c-bg-background c-text-sm c-file:border-0 c-file:bg-transparent c-file:text-sm c-file:font-medium c-placeholder:text-muted-foreground c-disabled:cursor-not-allowed c-disabled:opacity-50",
            "c-border c-border-primary/60 c-focus-within:border-2",
            errorMessage ? "c-border-rose-500" : "",
            className
          )}
        >
          {Icon && <Icon className={cn("c-m-2 c-text-primary", errorStyles)} />}
          {/* <span>아이콘</span> */}
          <input
            className="c-h-full c-w-full c-px-3 c-py-2 c-text-base"
            spellCheck="false"
            style={{ imeMode: "active" }}
            type={type}
            ref={ref}
            {...props}
          />
        </label>
        {errorMessage && (
          <div className={cn("c-pl-1 c-text-sm", errorStyles)}>
            {errorMessage}
          </div>
        )}
      </label>
    );
  }
);
SdInput.displayName = "SdInput";

export { SdInput };
