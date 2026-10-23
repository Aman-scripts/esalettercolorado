import React from "react";
import { AlertCircle, AlertTriangle, CheckCircle, HelpCircle, Scale } from "lucide-react";

interface CalloutBoxProps {
  type?: "quick-answer" | "legal-warning" | "scam-alert" | "takeaway" | "info";
  title?: string;
  children: React.ReactNode;
  cite?: string;
}

export function CalloutBox({
  type = "info",
  title,
  children,
  cite,
}: CalloutBoxProps) {
  const configs = {
    "quick-answer": {
      defaultTitle: "Quick Answer",
      icon: HelpCircle,
      borderColor: "border-[#347C78]",
      bgColor: "bg-[#E8F0ED]",
      textColor: "text-[#19354A]",
      badgeText: "Direct Answer",
    },
    "legal-warning": {
      defaultTitle: "Colorado Legal Notice",
      icon: Scale,
      borderColor: "border-[#A65331]",
      bgColor: "bg-[#FDF4F0]",
      textColor: "text-[#19354A]",
      badgeText: "Statute Citation",
    },
    "scam-alert": {
      defaultTitle: "Consumer Scam Warning",
      icon: AlertTriangle,
      borderColor: "border-[#A33E35]",
      bgColor: "bg-[#FDF0EE]",
      textColor: "text-[#19354A]",
      badgeText: "Registry Alert",
    },
    takeaway: {
      defaultTitle: "Key Takeaway",
      icon: CheckCircle,
      borderColor: "border-[#27654F]",
      bgColor: "bg-[#F0F7F4]",
      textColor: "text-[#19354A]",
      badgeText: "Summary",
    },
    info: {
      defaultTitle: "Important Note",
      icon: AlertCircle,
      borderColor: "border-[#347C78]",
      bgColor: "bg-[#EAF0F3]",
      textColor: "text-[#19354A]",
      badgeText: "Notice",
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <aside
      className={`my-6 rounded-xl border-l-4 ${config.borderColor} ${config.bgColor} p-5 sm:p-6 shadow-2xs`}
      aria-label={title || config.defaultTitle}
    >
      <div className="flex items-start gap-3.5">
        <div className="w-8 h-8 rounded-md bg-white/80 flex items-center justify-center shrink-0 mt-0.5 text-[#19354A] shadow-xs">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#347C78]">
              {config.badgeText}
            </span>
            <span className="text-xs text-[#52616A]">•</span>
            <h4 className="text-sm font-bold text-[#19354A] m-0">
              {title || config.defaultTitle}
            </h4>
          </div>
          <div className="text-sm sm:text-base text-[#24333B] leading-relaxed">
            {children}
          </div>
          {cite && (
            <div className="mt-3 pt-2 border-t border-black/10 text-xs font-medium text-[#52616A]">
              Statutory Basis: <span className="font-semibold text-[#19354A]">{cite}</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
