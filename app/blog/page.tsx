import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { InlineCta } from "@/components/modules/inline-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategories, blogPosts } from "@/data/blog-data";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/blog/");

export const metadata: Metadata = buildMetadata(seo);

export default function BlogHubPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <>
      <Breadcrumbs items={[{ label: "ESA Colorado Blog" }]} />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Plain-language legal guides, mental health qualification advice, landlord-tenant communication tips, and state regulatory updates for Colorado renters."
        ctaText="Get Evaluated in Colorado ($149)"
      />

      <div className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation Pills */}
          <div className="mb-12 pb-6 border-b border-[#D5DFDB]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#52616A] mb-3">
              Explore by Category:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {blogCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/category/${cat.slug}/`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F7F5F0] text-[#19354A] border border-[#D5DFDB] hover:bg-[#347C78] hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div className="mb-14 card-theme bg-gradient-to-br from-[#F7F5F0] to-[#E8F0ED] border-2 border-[#347C78] p-8 sm:p-10 shadow-sm">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-white bg-[#347C78] px-3 py-1 rounded-full uppercase tracking-wider">
                    Featured Guide
                  </span>
                  <span className="text-xs text-[#52616A] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#347C78]" /> {featuredPost.publishDate}
                  </span>
                </div>

                <h2 className="text-h2 text-[#19354A] mb-3">
                  <Link href={`/blog/${featuredPost.slug}/`} className="hover:text-[#347C78] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-body-large text-[#52616A] mb-6">
                  {featuredPost.metaDescription}
                </p>

                <Link
                  href={`/blog/${featuredPost.slug}/`}
                  className="btn-primary gap-2"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Recent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="card-theme flex flex-col justify-between group hover:border-[#347C78] hover:shadow-md transition-all duration-200 bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#19354A] bg-[#E8F0ED] px-2.5 py-0.5 rounded-full border border-[#D5DFDB]">
                      {post.categoryName}
                    </span>
                    <span className="text-sm text-[#52616A] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#347C78]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#19354A] group-hover:text-[#347C78] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#52616A] mt-2.5 line-clamp-3 leading-relaxed">
                    {post.metaDescription}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D5DFDB]/60 flex items-center justify-between text-sm text-[#52616A]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#347C78]" />
                    {post.publishDate}
                  </span>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="font-bold text-[#347C78] hover:text-[#19354A] flex items-center gap-1"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <InlineCta
              headline="Need an ESA Letter for Your Colorado Rental?"
              subhead="Evaluated by active Colorado-licensed clinicians. Fast 24–48 hour turnaround with 100% money-back guarantee."
            />
          </div>
        </div>
      </div>
    </>
  );
}
