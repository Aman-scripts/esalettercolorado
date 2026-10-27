import React from "react";
import Link from "next/link";
import { ClipboardList, Stethoscope, MailCheck, ArrowRight } from "lucide-react";

interface ProcessStepsProps {
  showCta?: boolean;
  expanded?: boolean;
}

export function ProcessSteps({ showCta = true, expanded = false }: ProcessStepsProps) {
  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "Start a 5-Minute Assessment",
      shortDesc: "Share your symptoms and home challenges. A licensed professional reviews and decides on your eligibility. No records or referrals needed.",
      longDesc: "Share your symptoms and home challenges. A licensed professional reviews and decides on your eligibility. No records or referrals needed.",
    },
    {
      num: "02",
      icon: Stethoscope,
      title: "Clinical Evaluation",
      shortDesc: "A licensed mental health professional reviews your assessment and evaluates whether an ESA recommendation is appropriate.",
      longDesc: "A licensed mental health professional reviews your assessment and evaluates whether an ESA recommendation is appropriate.",
    },
    {
      num: "03",
      icon: MailCheck,
      title: "After Your Evaluation: Next Steps",
      shortDesc: "If approved, your ESA documentation will be prepared according to applicable requirements. Timing may vary based on your individual evaluation.",
      longDesc: "If approved, your ESA documentation will be prepared according to applicable requirements. Timing may vary based on your individual evaluation.",
    },
  ];

  return (
    <section className="section-padding bg-[#F7F5F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-h2 text-[#19354A]">
            How to Obtain Your ESA Letter in Colorado
          </h2>
          <p className="text-body-large text-[#52616A] mt-3">
            Connect with a licensed mental health professional for an ESA evaluation. If eligible, receive documentation following your evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-theme relative flex flex-col justify-between group hover:border-[#347C78] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#2A6763] group-hover:text-[#19354A] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#E8F0ED] text-[#19354A] flex items-center justify-center group-hover:bg-[#19354A] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#19354A] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-base text-[#52616A] leading-relaxed">
                    {expanded ? step.longDesc : step.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D5DFDB]/60 flex items-center text-xs font-semibold text-[#2A6763]">
                  <span>Step {step.num} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {showCta && (
          <div className="text-center mt-12">
            <Link href="/how-it-works/#get-started" className="btn-primary gap-2">
              <span>Start Your Evaluation Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-[#52616A] mt-2">
              Encrypted &amp; HIPAA Compliant • Full Refund If Not Approved
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
