import { ReactNode } from "react";
import {
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "error" | "success" | "tip";

interface CalloutProps {
  type?: CalloutType;
  children: ReactNode;
  title?: string;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    className:
      "border-blue-200 bg-blue-50 text-blue-900",
    iconClassName: "text-blue-600",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-yellow-200 bg-yellow-50 text-yellow-900",
    iconClassName: "text-yellow-600",
  },
  error: {
    icon: XCircle,
    className:
      "border-red-200 bg-red-50 text-red-900",
    iconClassName: "text-red-600",
  },
  success: {
    icon: CheckCircle,
    className:
      "border-green-200 bg-green-50 text-green-900",
    iconClassName: "text-green-600",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-purple-200 bg-purple-50 text-purple-900",
    iconClassName: "text-purple-600",
  },
};

export function Callout({
  type = "info",
  children,
  title,
  className,
}: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        config.className,
        className,
      )}
    >
      <Icon
        className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.iconClassName)}
      />
      <div className="flex-1 min-w-0">
        {title && <div className="font-semibold mb-2">{title}</div>}
        <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}

// Export individual callout types for convenience
export const InfoCallout = ({
  children,
  title,
  className,
}: Omit<CalloutProps, "type">) => (
  <Callout type="info" title={title} className={className}>
    {children}
  </Callout>
);

export const WarningCallout = ({
  children,
  title,
  className,
}: Omit<CalloutProps, "type">) => (
  <Callout type="warning" title={title} className={className}>
    {children}
  </Callout>
);

export const ErrorCallout = ({
  children,
  title,
  className,
}: Omit<CalloutProps, "type">) => (
  <Callout type="error" title={title} className={className}>
    {children}
  </Callout>
);

export const SuccessCallout = ({
  children,
  title,
  className,
}: Omit<CalloutProps, "type">) => (
  <Callout type="success" title={title} className={className}>
    {children}
  </Callout>
);

export const TipCallout = ({
  children,
  title,
  className,
}: Omit<CalloutProps, "type">) => (
  <Callout type="tip" title={title} className={className}>
    {children}
  </Callout>
);
