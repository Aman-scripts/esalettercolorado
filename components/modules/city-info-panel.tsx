import React from "react";
import { Building2, Users, DollarSign, Home, ShieldCheck, ExternalLink, FileText } from "lucide-react";
import { CityInfo } from "@/data/locations-data";

interface CityInfoPanelProps {
  city: CityInfo;
}

export function CityInfoPanel({ city }: CityInfoPanelProps) {
  return (
    <div className="my-8 rounded-2xl border border-[#D5DFDB] bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#D5DFDB] gap-3">
        <div>
          <span className="text-sm font-bold text-[#347C78] uppercase tracking-wider bg-[#E8F0ED] px-2.5 py-0.5 rounded-full border border-[#D5DFDB]">
            Local Rental Statistics
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#19354A] mt-2">
            {city.name}, Colorado Housing Profile
          </h3>
        </div>
        <div className="text-sm text-[#52616A] sm:text-right">
          <p className="font-semibold text-[#19354A]">{city.county}</p>
          <p>Colorado Fair Housing Enforced</p>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-[#D5DFDB]">
        <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]/60">
          <span className="text-sm text-[#52616A] block flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-[#347C78]" /> Average Rent
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#19354A] mt-1 block">
            {city.rentalStats.avgRent}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]/60">
          <span className="text-sm text-[#52616A] block flex items-center gap-1">
            <Users className="w-4 h-4 text-[#347C78]" /> Renter Households
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#19354A] mt-1 block">
            {city.rentalStats.renterPct}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]/60">
          <span className="text-sm text-[#52616A] block flex items-center gap-1">
            <Home className="w-4 h-4 text-[#347C78]" /> Avg Pet Deposit
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#A65331] mt-1 block">
            {city.rentalStats.petDepositAvg}
          </span>
          <span className="text-sm text-[#27654F] font-semibold mt-0.5 block">
            Waived with ESA letter
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]/60">
          <span className="text-sm text-[#52616A] block flex items-center gap-1">
            <Building2 className="w-4 h-4 text-[#347C78]" /> Monthly Pet Rent
          </span>
          <span className="text-xl sm:text-2xl font-serif font-bold text-[#A65331] mt-1 block">
            {city.rentalStats.monthlyPetRentAvg}
          </span>
          <span className="text-sm text-[#27654F] font-semibold mt-0.5 block">
            $0 with ESA letter
          </span>
        </div>
      </div>

      {/* Local Ordinances & Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div>
          <h4 className="text-sm font-bold text-[#19354A] mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#347C78]" /> Local Municipal Animal Rules
          </h4>
          <p className="text-base text-[#52616A] leading-relaxed">
            {city.localOrdinances}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#19354A] mb-2 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#347C78]" /> Local Housing Resources
          </h4>
          <ul className="text-base space-y-2">
            {city.localResources.map((res, idx) => (
              <li key={idx} className="flex items-start justify-between gap-2">
                <div>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#347C78] hover:underline flex items-center gap-1"
                  >
                    <span>{res.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                  <p className="text-[#52616A] text-sm">{res.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
