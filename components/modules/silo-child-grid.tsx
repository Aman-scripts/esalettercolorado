import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  PawPrint,
  Brain,
  SunMedium,
  ShieldAlert,
  Activity,
  Zap,
  Users,
  Repeat,
  Sparkles,
  Puzzle,
  HeartPulse,
  Scale,
  ScrollText,
  ShieldCheck,
  Building2,
  Home,
  AlertTriangle,
  DollarSign,
  Truck,
  GraduationCap,
  AlertOctagon,
  FileText,
  Mountain,
  Compass,
  Trees,
  Sun,
  Landmark,
  MountainSnow,
  Navigation,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface SiloChildItem {
  title: string;
  slug: string;
  href: string;
  shortDesc: string;
  badge?: string;
  meta?: string;
}

interface SiloChildGridProps {
  items: SiloChildItem[];
  title?: string;
  subtitle?: string;
  type?: "rights" | "conditions" | "locations";
  note?: React.ReactNode;
}

const conditionIcons: Record<string, LucideIcon> = {
  "eligible-animals": PawPrint,
  anxiety: Brain,
  depression: SunMedium,
  ptsd: ShieldAlert,
  "bipolar-disorder": Activity,
  "panic-disorder": Zap,
  "social-anxiety": Users,
  ocd: Repeat,
  adhd: Sparkles,
  "autism-spectrum": Puzzle,
  "eating-disorders": HeartPulse,
};

const rightsIcons: Record<string, LucideIcon> = {
  "fair-housing-act": Scale,
  "colorado-hb26-1045-explained": ScrollText,
  "esa-vs-service-animal": ShieldCheck,
  "no-pet-apartments": Building2,
  "hoa-rules": Home,
  "breed-and-size-restrictions": PawPrint,
  "landlord-denials": AlertTriangle,
  "pet-deposits-and-fees": DollarSign,
  "moving-with-an-esa": Truck,
  "college-dorm-esa": GraduationCap,
  "fake-registries-warning": AlertOctagon,
  "landlord-request-letter-template": FileText,
};

const locationIcons: Record<string, LucideIcon> = {
  denver: Building2,
  "colorado-springs": Mountain,
  boulder: Compass,
  "fort-collins": Trees,
  aurora: Navigation,
  lakewood: Home,
  pueblo: Sun,
  greeley: Landmark,
  longmont: MountainSnow,
  arvada: MapPin,
  westminster: Navigation,
  centennial: MapPin,
};

function getItemIcon(slug: string, type: "rights" | "conditions" | "locations"): LucideIcon {
  if (type === "conditions") {
    return conditionIcons[slug] || Brain;
  }
  if (type === "rights") {
    return rightsIcons[slug] || FileText;
  }
  if (type === "locations") {
    return locationIcons[slug] || MapPin;
  }
  return FileText;
}

export function SiloChildGrid({
  items,
  title = "Explore Guides & Topics",
  subtitle = "Comprehensive, state-specific resources to navigate Colorado assistance animal regulations.",
  type = "rights",
  note,
}: SiloChildGridProps) {
  return (
    <section className="section-padding bg-white border-y border-[#D5DFDB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-h2 text-[#19354A]">{title}</h2>
          {subtitle && <p className="text-body-large text-[#52616A] mt-2">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = getItemIcon(item.slug, type);

            return (
              <Link
                key={idx}
                href={item.href}
                className="card-theme group hover:border-[#347C78] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F0ED] text-[#19354A] flex items-center justify-center group-hover:bg-[#347C78] group-hover:text-white transition-all duration-200 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.badge && (
                      <span className="text-xs font-semibold text-[#19354A] bg-[#E8F0ED] px-2.5 py-1 rounded-full border border-[#D5DFDB]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#19354A] group-hover:text-[#347C78] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#52616A] mt-2.5 line-clamp-3 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D5DFDB]/60 flex items-center justify-between text-sm font-semibold text-[#347C78] group-hover:text-[#19354A]">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {note && <div className="mt-8">{note}</div>}
      </div>
    </section>
  );
}
