"use client";

import React, { useState } from "react";
import { ShieldCheck, Info, CheckCircle2, FileText, Download } from "lucide-react";

export function SampleLetterViewer() {
  const [activePin, setActivePin] = useState<number>(1);

  const pins = [
    {
      id: 1,
      title: "Official Clinician Letterhead",
      top: "10%",
      left: "8%",
      desc: "Must display the provider's practice name, Colorado office address, contact telephone, and email for landlord authentication.",
    },
    {
      id: 2,
      title: "State Licensing Information",
      top: "18%",
      left: "80%",
      desc: "Colorado DORA license number (e.g. PSY, LCSW, LPC), license type, and state of issue (Colorado). Mandatory under HB26-1045.",
    },
    {
      id: 3,
      title: "Client & Animal Identification",
      top: "40%",
      left: "8%",
      desc: "Clearly identifies the patient name, city/state of residence, and animal details (name, species, breed).",
    },
    {
      id: 4,
      title: "Disability-Related Need Statement",
      top: "58%",
      left: "15%",
      desc: "Confirms the handler has an impairment under the Fair Housing Act and that the ESA mitigates functional symptoms.",
    },
    {
      id: 5,
      title: "Clinician Signature & Date",
      top: "84%",
      left: "75%",
      desc: "Original electronic signature, date of issue, and professional credentials ensuring the letter is dated within 12 months.",
    },
  ];

  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Interactive Letter Preview (Left 7 Cols) */}
      <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#D5DFDB] shadow-md p-6 sm:p-8 relative">
        <div className="border border-dashed border-[#D5DFDB] p-6 sm:p-8 rounded-xl bg-[#FAFAFA] font-sans text-sm text-[#24333B] relative space-y-6">
          {/* Letterhead Header */}
          <div className="border-b border-[#D5DFDB] pb-4 flex justify-between items-start">
            <div>
              <p className="font-serif font-bold text-base sm:text-lg text-[#19354A]">
                COLORADO CLINICAL PSYCHOLOGY &amp; TELEHEALTH
              </p>
              <p className="text-sm text-[#52616A]">1600 Broadway, Suite 1600 • Denver, CO 80202</p>
              <p className="text-sm text-[#52616A]">Phone: (720) 445-5620 • clinic@coloradopsych.org</p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-[#E8F0ED] text-[#27654F] font-bold text-sm px-2.5 py-1 rounded border border-[#D5DFDB]">
                OFFICIAL HOUSING DOCUMENT
              </span>
            </div>
          </div>

          {/* Letter Date & Addressee */}
          <div className="space-y-1 text-sm">
            <p><strong>Date:</strong> October 22, 2026</p>
            <p><strong>To:</strong> Housing Provider / Property Management Office</p>
            <p><strong>Re:</strong> Reasonable Accommodation for Assistance Animal under FHA &amp; Colorado Law</p>
          </div>

          {/* Letter Body */}
          <div className="space-y-3 leading-relaxed text-sm">
            <p>Dear Housing Provider,</p>
            <p>
              I am a licensed mental health professional in the State of Colorado. I am writing on behalf of my client,
              <strong> Jane Doe</strong>, who is under my clinical care.
            </p>
            <p>
              Under the federal Fair Housing Act (42 U.S.C. §§ 3601–3619) and Colorado Revised Statutes § 24-34-502,
              Jane Doe meets the criteria for having a mental health impairment that substantially limits one or more
              major life activities.
            </p>
            <p>
              I have evaluated Jane Doe and determined that having an Emotional Support Animal (ESA), specifically her dog
              <strong> &ldquo;Rocky&rdquo;</strong> (Golden Retriever mix), is necessary to alleviate symptoms of her condition
              and affords her an equal opportunity to use and enjoy her dwelling.
            </p>
            <p>
              In accordance with HUD guidance (FHEO-2020-01) and Colorado HB26-1045, I recommend this reasonable accommodation
              and request that all pet prohibitions, pet deposits, and monthly pet fees be waived.
            </p>
          </div>

          {/* Signoff */}
          <div className="pt-4 border-t border-[#D5DFDB] flex justify-between items-end">
            <div>
              <p className="italic font-serif text-sm text-[#19354A] font-bold">Dr. Elena Vance, Psy.D., LP</p>
              <p className="text-sm text-[#52616A]">Licensed Clinical Psychologist</p>
              <p className="text-sm text-[#52616A]">Colorado License #PSY.0004812</p>
              <p className="text-sm text-[#27654F] font-semibold mt-1">Verified via Colorado DORA</p>
            </div>
            <div className="w-16 h-16 rounded-full border border-dashed border-[#347C78] flex items-center justify-center text-xs text-[#347C78] text-center font-bold">
              OFFICIAL<br />CLINICAL<br />SEAL
            </div>
          </div>

          {/* Callout Indicator Badges */}
          <div className="absolute top-4 left-4">
            <button
              onClick={() => setActivePin(1)}
              className={`w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center shadow-md transition-transform ${
                activePin === 1 ? "bg-[#A65331] text-white scale-110 ring-4 ring-[#A65331]/30" : "bg-[#19354A] text-white"
              }`}
            >
              1
            </button>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setActivePin(2)}
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shadow-md transition-transform ${
                activePin === 2 ? "bg-[#A65331] text-white scale-110 ring-4 ring-[#A65331]/30" : "bg-[#19354A] text-white"
              }`}
            >
              2
            </button>
          </div>
          <div className="absolute top-36 left-4">
            <button
              onClick={() => setActivePin(3)}
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shadow-md transition-transform ${
                activePin === 3 ? "bg-[#A65331] text-white scale-110 ring-4 ring-[#A65331]/30" : "bg-[#19354A] text-white"
              }`}
            >
              3
            </button>
          </div>
          <div className="absolute top-56 left-4">
            <button
              onClick={() => setActivePin(4)}
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shadow-md transition-transform ${
                activePin === 4 ? "bg-[#A65331] text-white scale-110 ring-4 ring-[#A65331]/30" : "bg-[#19354A] text-white"
              }`}
            >
              4
            </button>
          </div>
          <div className="absolute bottom-6 right-24">
            <button
              onClick={() => setActivePin(5)}
              className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shadow-md transition-transform ${
                activePin === 5 ? "bg-[#A65331] text-white scale-110 ring-4 ring-[#A65331]/30" : "bg-[#19354A] text-white"
              }`}
            >
              5
            </button>
          </div>
        </div>
      </div>

      {/* Right Explanation Column (5 Cols) */}
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-[#19354A] text-white p-6 rounded-2xl">
          <span className="text-sm font-bold text-[#347C78] uppercase tracking-wider">
            Interactive Element Breakdown
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-normal mt-1">
            What Colorado Landlords Look For
          </h3>
          <p className="text-base text-[#D5DFDB] mt-2">
            Click any numbered pin to inspect the five mandatory legal components required for full housing compliance.
          </p>
        </div>

        <div className="space-y-2.5">
          {pins.map((pin) => {
            const isActive = activePin === pin.id;
            return (
              <div
                key={pin.id}
                onClick={() => setActivePin(pin.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isActive
                    ? "bg-white border-[#347C78] shadow-md ring-1 ring-[#347C78]"
                    : "bg-[#F7F5F0] border-[#D5DFDB] hover:bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-6 h-6 rounded-full text-sm font-bold flex items-center justify-center shrink-0 ${
                      isActive ? "bg-[#347C78] text-white" : "bg-[#19354A] text-white"
                    }`}
                  >
                    {pin.id}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#19354A]">
                      {pin.title}
                    </h4>
                    <p className="text-base text-[#52616A] mt-1 leading-relaxed">
                      {pin.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
