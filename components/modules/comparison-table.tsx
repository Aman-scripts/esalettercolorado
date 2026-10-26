import React from "react";
import { Check, X, AlertCircle } from "lucide-react";

export interface ComparisonRow {
  feature: string;
  esa: string | boolean;
  serviceAnimal: string | boolean;
  pet?: string | boolean;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  rows?: ComparisonRow[];
}

export function ComparisonTable({
  title = "ESA vs. Service Animal vs. Pet: Legal Comparison",
  subtitle = "Understand how Colorado and federal laws distinguish between assistance animals and household pets.",
  rows,
}: ComparisonTableProps) {
  const defaultRows: ComparisonRow[] = [
    {
      feature: "Protected Under Fair Housing Act (Housing Rights)",
      esa: true,
      serviceAnimal: true,
      pet: false,
    },
    {
      feature: "Exempt from Pet Rent & Security Deposits",
      esa: true,
      serviceAnimal: true,
      pet: false,
    },
    {
      feature: "Exempt from Building Breed & Weight Limits",
      esa: true,
      serviceAnimal: true,
      pet: false,
    },
    {
      feature: "Public Access Rights (Restaurants, Grocery Stores, Planes)",
      esa: false,
      serviceAnimal: true,
      pet: false,
    },
    {
      feature: "Specialized Task Training Required",
      esa: false,
      serviceAnimal: true,
      pet: false,
    },
    {
      feature: "Requires Licensed Healthcare Provider Letter",
      esa: true,
      serviceAnimal: false,
      pet: false,
    },
    {
      feature: "Species Permitted in Colorado Housing",
      esa: "Dogs, cats & small domestic animals",
      serviceAnimal: "Dogs (and miniature horses)",
      pet: "Landlord discretion",
    },
    {
      feature: "Governing Law / Regulation",
      esa: "FHA & Colorado HB26-1045",
      serviceAnimal: "ADA (Titles II & III)",
      pet: "Standard lease agreement",
    },
  ];

  const tableRows = rows || defaultRows;

  const renderValue = (val: string | boolean | undefined) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E8F0ED] text-[#27654F]">
          <Check className="w-4 h-4" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FDF0EE] text-[#A33E35]">
          <X className="w-4 h-4" />
        </span>
      );
    }
    return <span className="text-xs sm:text-sm font-medium text-[#24333B]">{val}</span>;
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#D5DFDB] bg-white shadow-xs">
      {title && (
        <div className="bg-[#19354A] p-6 text-white">
          <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-base mt-1.5 text-[#D5DFDB]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Desktop Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#E8F0ED] border-b border-[#D5DFDB] text-xs font-bold text-[#19354A] uppercase tracking-wider">
              <th className="py-4 px-6 w-2/5">Feature / Legal Right</th>
              <th className="py-4 px-6 text-center bg-[#EAF0F3]">
                Emotional Support Animal (ESA)
              </th>
              <th className="py-4 px-6 text-center">Service Animal</th>
              <th className="py-4 px-6 text-center">Standard Pet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D5DFDB] text-sm">
            {tableRows.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F7F5F0]/50"}
              >
                <td className="py-4 px-6 font-semibold text-[#19354A]">
                  {row.feature}
                </td>
                <td className="py-4 px-6 text-center bg-[#EAF0F3]/40">
                  {renderValue(row.esa)}
                </td>
                <td className="py-4 px-6 text-center">
                  {renderValue(row.serviceAnimal)}
                </td>
                <td className="py-4 px-6 text-center">
                  {renderValue(row.pet)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-[#F7F5F0] border-t border-[#D5DFDB] text-xs text-[#52616A] flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-[#347C78] shrink-0" />
        <span>
          Note: Emotional support animals possess comprehensive housing rights in Colorado, but do not have public access rights to stores, restaurants, or airlines.
        </span>
      </div>
    </div>
  );
}
