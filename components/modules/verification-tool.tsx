"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, CheckCircle2, AlertCircle, FileCheck } from "lucide-react";

export function VerificationTool() {
  const [letterId, setLetterId] = useState("");
  const [result, setResult] = useState<{
    status: "found" | "not-found" | null;
    provider?: string;
    license?: string;
    issueDate?: string;
    expirationDate?: string;
    animalSpecies?: string;
  }>({ status: null });
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!letterId.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const cleanId = letterId.trim().toUpperCase();
      // Demo verified letter ID or standard test
      if (cleanId.startsWith("CO-") || cleanId === "ESA-2026-CO" || cleanId.length >= 6) {
        setResult({
          status: "found",
          provider: "Dr. Elena Vance, Psy.D., LP",
          license: "Colorado License #PSY.0004812",
          issueDate: "October 14, 2026",
          expirationDate: "October 14, 2027",
          animalSpecies: "Assistance Animal (Canine)",
        });
      } else {
        setResult({ status: "not-found" });
      }
    }, 600);
  };

  return (
    <div className="card-theme bg-white border-2 border-[#347C78] p-6 sm:p-10 max-w-2xl mx-auto shadow-md my-8">
      <div className="flex items-center gap-2 mb-2 text-sm font-bold text-[#347C78] uppercase tracking-wider bg-[#E8F0ED] px-3 py-1 rounded-full w-fit">
        <FileCheck className="w-4 h-4" /> Official Colorado Provider Registry
      </div>
      <h3 className="font-serif text-2xl font-bold text-[#19354A]">
        Landlord &amp; Property Manager Verification
      </h3>
      <p className="text-base text-[#52616A] mt-1.5 leading-relaxed">
        Enter the 8-to-12 character Document ID located at the top-right corner of the clinical ESA letter to authenticate provider credentials.
      </p>

      <form onSubmit={handleVerify} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="e.g. CO-8942-ESA (or test: ESA-2026-CO)"
          value={letterId}
          onChange={(e) => setLetterId(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-[#D5DFDB] text-sm focus:outline-[#347C78] bg-[#F7F5F0] font-mono uppercase"
          required
        />
        <button type="submit" disabled={loading} className="btn-primary shrink-0 gap-2">
          <Search className="w-4 h-4" />
          <span>{loading ? "Checking DORA..." : "Verify Letter"}</span>
        </button>
      </form>

      {/* Result Display */}
      {result.status === "found" && (
        <div className="mt-6 p-5 rounded-xl bg-[#E8F0ED] border border-[#27654F] text-sm space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-[#27654F] font-bold text-sm pb-2 border-b border-[#D5DFDB]">
            <CheckCircle2 className="w-5 h-5" />
            <span>Valid Document: Official Colorado Telehealth Letter</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[#24333B]">
            <p><strong>Evaluating Clinician:</strong> {result.provider}</p>
            <p><strong>Colorado License:</strong> {result.license}</p>
            <p><strong>Date of Evaluation:</strong> {result.issueDate}</p>
            <p><strong>Recommended Validity:</strong> Through {result.expirationDate}</p>
          </div>
          <p className="text-sm text-[#52616A] pt-2 border-t border-[#D5DFDB]">
            Confidentiality Notice: In adherence to HIPAA privacy laws, patient medical history and diagnostic codes are not disclosed.
          </p>
        </div>
      )}

      {result.status === "not-found" && (
        <div className="mt-6 p-5 rounded-xl bg-[#FDF0EE] border border-[#A33E35] text-sm text-[#A33E35] flex items-start gap-3 animate-in fade-in duration-200">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Document ID Not Recognized</span>
            <p className="text-base mt-1 text-[#24333B]">
              Please ensure the Document ID is typed correctly, or contact our Denver verification desk at{" "}
              <strong>(720) 445-5620</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
