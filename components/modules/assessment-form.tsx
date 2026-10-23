"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, UserCheck, AlertCircle } from "lucide-react";

export function AssessmentForm() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State (kept local, no PHI in URL)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "Denver",
    isColoradoResident: "yes",
    housingType: "apartment",
    hasLandlordPushback: "no",
    animalType: "dog",
    animalName: "",
    conditions: [] as string[],
    additionalNotes: "",
    consentHipaa: false,
  });

  const conditionOptions = [
    "Anxiety / Chronic Worry",
    "Depression / Low Mood",
    "PTSD / Trauma",
    "Panic Attacks / Agoraphobia",
    "ADHD / Focus Challenges",
    "Social Anxiety",
    "Sleep Disturbances / Insomnia",
    "Stress & Burnout",
  ];

  const handleConditionToggle = (cond: string) => {
    setFormData((prev) => {
      const exists = prev.conditions.includes(cond);
      return {
        ...prev,
        conditions: exists
          ? prev.conditions.filter((c) => c !== cond)
          : [...prev.conditions, cond],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate secure encrypted transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div id="get-started" className="scroll-mt-24 card-theme bg-white border-2 border-[#27654F] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-lg animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-[#E8F0ED] text-[#27654F] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold text-[#27654F] uppercase tracking-wider bg-[#E8F0ED] px-3 py-1 rounded-full">
          Intake Received &amp; Encrypted
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#19354A] mt-4">
          Your Telehealth Evaluation Is Scheduled
        </h3>
        <p className="text-body-large text-[#52616A] mt-3">
          Thank you, <strong>{formData.firstName || "Client"}</strong>. Your intake questionnaire has been securely forwarded to our Colorado-licensed clinical team.
        </p>

        <div className="my-6 p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-left text-xs sm:text-sm space-y-2 text-[#24333B]">
          <p className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
            <span>Assigned to: <strong>Colorado Licensed Psychologist / LCSW</strong></span>
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
            <span>Expected turnaround: <strong>24–48 Business Hours</strong></span>
          </p>
          <p className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
            <span>Confirmation sent to: <strong>{formData.email || "your email"}</strong></span>
          </p>
        </div>

        <p className="text-xs text-[#52616A]">
          If our clinicians determine an ESA is not clinically appropriate, our 100% money-back guarantee will immediately apply.
        </p>
      </div>
    );
  }

  return (
    <div id="get-started" className="scroll-mt-24 max-w-3xl mx-auto my-12">
      <div className="card-theme bg-white border-2 border-[#347C78] shadow-lg overflow-hidden p-6 sm:p-10">
        {/* Header Strip */}
        <div className="border-b border-[#D5DFDB] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#347C78] uppercase tracking-wider bg-[#E8F0ED] px-2.5 py-1 rounded-full mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Confidential Colorado Telehealth Intake
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#19354A]">
              Colorado ESA Pre-Screening Assessment
            </h3>
            <p className="text-xs sm:text-sm text-[#52616A] mt-1">
              Takes ~3 minutes. Completely confidential under HIPAA guidelines.
            </p>
          </div>
          <div className="text-right flex items-center gap-2 sm:block text-xs font-semibold text-[#52616A]">
            <Lock className="w-4 h-4 text-[#347C78] inline sm:hidden" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* Multi-step indicator */}
        <div className="flex items-center justify-between mb-8 text-xs font-bold">
          <div className={`flex items-center gap-2 ${step >= 1 ? "text-[#347C78]" : "text-[#52616A]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? "bg-[#347C78] text-white" : "bg-[#D5DFDB]"}`}>1</span>
            <span>Eligibility</span>
          </div>
          <div className="h-0.5 flex-1 bg-[#D5DFDB] mx-2" />
          <div className={`flex items-center gap-2 ${step >= 2 ? "text-[#347C78]" : "text-[#52616A]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-[#347C78] text-white" : "bg-[#D5DFDB]"}`}>2</span>
            <span>Animal Info</span>
          </div>
          <div className="h-0.5 flex-1 bg-[#D5DFDB] mx-2" />
          <div className={`flex items-center gap-2 ${step >= 3 ? "text-[#347C78]" : "text-[#52616A]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? "bg-[#347C78] text-white" : "bg-[#D5DFDB]"}`}>3</span>
            <span>Contact</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <label className="block text-sm font-bold text-[#19354A] mb-2">
                  Are you a Colorado resident or moving to Colorado?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {["yes", "moving"].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setFormData({ ...formData, isColoradoResident: val })}
                      className={`p-3.5 rounded-lg border text-sm font-semibold transition-all ${
                        formData.isColoradoResident === val
                          ? "bg-[#E8F0ED] border-[#347C78] text-[#19354A] ring-1 ring-[#347C78]"
                          : "bg-white border-[#D5DFDB] text-[#52616A] hover:bg-[#F7F5F0]"
                      }`}
                    >
                      {val === "yes" ? "Yes, Current Resident" : "Relocating to Colorado"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#19354A] mb-2">
                  What challenges or symptoms does your companion animal help ease?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {conditionOptions.map((cond) => {
                    const isSelected = formData.conditions.includes(cond);
                    return (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => handleConditionToggle(cond)}
                        className={`p-3 rounded-lg border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-[#E8F0ED] border-[#347C78] text-[#19354A] font-semibold"
                            : "bg-white border-[#D5DFDB] text-[#24333B] hover:bg-[#F7F5F0]"
                        }`}
                      >
                        <span>{cond}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#347C78]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary gap-2"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <label className="block text-sm font-bold text-[#19354A] mb-2">
                  What species is your assistance animal?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Dog", val: "dog" },
                    { label: "Cat", val: "cat" },
                    { label: "Other", val: "other" },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setFormData({ ...formData, animalType: item.val })}
                      className={`p-3.5 rounded-lg border text-sm font-semibold transition-all ${
                        formData.animalType === item.val
                          ? "bg-[#E8F0ED] border-[#347C78] text-[#19354A] ring-1 ring-[#347C78]"
                          : "bg-white border-[#D5DFDB] text-[#52616A] hover:bg-[#F7F5F0]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#19354A] mb-1">
                  Animal&apos;s Name &amp; Approximate Breed / Weight
                </label>
                <input
                  type="text"
                  placeholder="e.g. Luna - Golden Retriever / 55 lbs"
                  value={formData.animalName}
                  onChange={(e) => setFormData({ ...formData, animalName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#19354A] mb-1">
                  Housing Situation
                </label>
                <select
                  value={formData.housingType}
                  onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0]"
                >
                  <option value="apartment">Multi-Family Apartment / Rental Community</option>
                  <option value="condo-hoa">Condo / Townhome with HOA</option>
                  <option value="single-family">Single-Family Rental House</option>
                  <option value="campus-dorm">College Dorm / Student Housing</option>
                </select>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-primary gap-2"
                >
                  <span>Continue to Step 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#19354A] mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#19354A] mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#19354A] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#19354A] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(303) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0]"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#E8F0ED] border border-[#D5DFDB] space-y-2">
                <label className="flex items-start gap-2.5 text-xs text-[#24333B] cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consentHipaa}
                    onChange={(e) => setFormData({ ...formData, consentHipaa: e.target.checked })}
                    className="mt-0.5 rounded border-[#D5DFDB] text-[#347C78] focus:ring-[#347C78]"
                  />
                  <span>
                    I understand this intake is reviewed by an independent Colorado-licensed mental health professional. I consent to confidential telehealth coordination in accordance with HIPAA standards and Colorado law.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-8"
                >
                  {isSubmitting ? "Securing Telehealth Intake..." : "Submit Confidential Intake ($149)"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
