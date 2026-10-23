import React from "react";
import { ShieldCheck, Lock, Award, Clock } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Licensed CO Therapists",
      desc: "Active DORA License Verification",
    },
    {
      icon: Lock,
      title: "HIPAA Compliant",
      desc: "Bank-Grade 256-Bit Encryption",
    },
    {
      icon: Award,
      title: "100% Money-Back",
      desc: "Full Refund If Not Approved",
    },
    {
      icon: Clock,
      title: "24–48h Turnaround",
      desc: "Fast Digital Delivery via PDF",
    },
  ];

  return (
    <section className="bg-white border-y border-[#D5DFDB] py-5 sm:py-6 shadow-xs relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center justify-between">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === items.length - 1;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 sm:gap-3.5 group lg:justify-center ${
                  !isLast ? "lg:border-r lg:border-[#D5DFDB]/70 lg:pr-4 xl:pr-6" : ""
                } ${idx % 2 === 0 ? "" : "sm:pl-2 lg:pl-0"}`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8F0ED] text-[#347C78] flex items-center justify-center shrink-0 group-hover:bg-[#347C78] group-hover:text-white transition-all duration-200 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#19354A] leading-tight group-hover:text-[#347C78] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#52616A] mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
