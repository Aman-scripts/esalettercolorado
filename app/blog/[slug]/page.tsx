import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-data";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InlineCta } from "@/components/modules/inline-cta";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { buildMetadata, findPageSeo } from "@/lib/seo";
import { Calendar, Clock, ArrowRight, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const seo = findPageSeo(`/blog/${post.slug}/`);
  if (seo) {
    const metadata = buildMetadata(seo);
    return {
      ...metadata,
      openGraph: {
        ...metadata.openGraph,
        type: "article",
        publishedTime: post.publishDate,
        modifiedTime: post.updatedDate,
        authors: [post.authorName],
      },
    };
  }

  // Posts not listed in the SEO sheet keep their own metadata
  return {
    title: post.metaTitle.replace(/\s*\[\d+\s*chars\]/i, ""),
    description: post.metaDescription.replace(/\s*\[\d+\s*chars\]/i, ""),
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.metaTitle.replace(/\s*\[\d+\s*chars\]/i, ""),
      description: post.metaDescription.replace(/\s*\[\d+\s*chars\]/i, ""),
      url: `${siteConfig.url}/blog/${post.slug}/`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.authorName],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const seo = findPageSeo(`/blog/${post.slug}/`);
  const h1 = seo?.h1 ?? post.title;

  // Related posts: strictly same category only (Spec rule)
  const relatedPosts = blogPosts
    .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
    .slice(0, 2);

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: h1,
      description: seo?.description ?? post.metaDescription.replace(/\s*\[\d+\s*chars\]/i, ""),
      datePublished: post.publishDate,
      dateModified: post.updatedDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/blog/${post.slug}/`,
      },
      author: {
        "@type": "Person",
        name: post.authorName,
        jobTitle: post.authorCredentials,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog/" },
            { label: post.categoryName, href: `/blog/category/${post.categorySlug}/` },
            { label: post.title },
          ]}
        />

        <article className="section-padding pt-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Header info */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  href={`/blog/category/${post.categorySlug}/`}
                  className="trust-chip hover:bg-pale transition"
                >
                  {post.categoryName}
                </Link>
                <span className="flex items-center gap-1.5 text-xs text-[#52616A] font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#347C78]" /> Published {post.publishDate}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#52616A] font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#347C78]" /> {post.readTime}
                </span>
              </div>

              <h1 className="h1 mb-6">{h1}</h1>

              {/* Author & Reviewer meta pill */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white border border-[#D5DFDB] shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#347C78] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {post.authorName.split(" ").slice(-1)[0]?.[0] || "C"}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#19354A] flex items-center gap-1.5">
                      <span>{post.authorName}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
                    </div>
                    <p className="text-xs text-[#52616A] font-medium">{post.authorCredentials}</p>
                  </div>
                </div>
                <div className="text-xs text-[#52616A]">
                  Updated: <span className="font-semibold text-[#19354A]">{post.updatedDate}</span>
                </div>
              </div>
            </div>

            {/* Contextual Hero Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#EAF0F3] to-white border border-[#D5DFDB] mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#347C78]/15 flex items-center justify-center text-[#347C78] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#19354A]">Colorado State &amp; Federal Legal Guidance</h4>
                  <p className="text-xs text-[#52616A] mt-0.5 font-medium leading-relaxed">
                    Grounded in Fair Housing Act (FHA), Colorado HB26-1045 &amp; C.R.S. 24-34-502.
                  </p>
                </div>
              </div>
              <Link
                href={post.siloLink}
                className="text-xs font-bold text-[#A65331] hover:text-[#19354A] hover:underline flex items-center gap-1 whitespace-nowrap"
              >
                Explore {post.siloTitle} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Table of contents */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D5DFDB] mb-12 shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-[#19354A]">
                <BookOpen className="w-5 h-5 text-[#347C78]" />
                <h2 className="text-lg font-serif font-bold text-[#19354A]">Table of Contents</h2>
              </div>
              <nav aria-label="Table of Contents">
                <ul className="space-y-2 text-sm">
                  {post.sections.map((section, idx) => (
                    <li key={idx}>
                      <a
                        href={`#section-${idx}`}
                        className="text-[#24333B] font-medium hover:text-[#A65331] hover:translate-x-0.5 transition-all flex items-center gap-2.5 py-0.5"
                      >
                        <span className="text-xs font-mono font-semibold text-[#347C78] bg-[#E8F0ED] px-1.5 py-0.5 rounded">0{idx + 1}.</span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#authoritative-hub-guide"
                      className="text-[#24333B] font-medium hover:text-[#A65331] hover:translate-x-0.5 transition-all flex items-center gap-2.5 py-0.5"
                    >
                      <span className="text-xs font-mono font-semibold text-[#347C78] bg-[#E8F0ED] px-1.5 py-0.5 rounded">0{post.sections.length + 1}.</span>
                      <span>Authoritative Guide &amp; Legal Silo</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Body content */}
            <div className="space-y-10">
              {post.sections.map((section, idx) => (
                <section key={idx} id={`section-${idx}`} className="scroll-mt-24">
                  <h2 className="h2 mb-4">{section.heading}</h2>
                  <div className="body-normal text-[#24333B] leading-relaxed space-y-4">
                    <p>{section.content}</p>
                  </div>

                  {/* Mid-content CTA after section 1 */}
                  {idx === 0 && (
                    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#E8F0ED]/60 border border-[#D5DFDB] shadow-xs">
                      <p className="font-bold text-base text-[#19354A] mb-1.5">Need a legally sound ESA letter in Colorado?</p>
                      <p className="text-sm text-[#52616A] mb-4 leading-relaxed font-normal">
                        Connect with a licensed Colorado telehealth provider who verifies your eligibility under state guidelines.
                      </p>
                      <Link href="/how-it-works/#get-started" className="btn-primary py-2 px-5 inline-flex items-center gap-1.5">
                        <span>Start Your Assessment</span>
                        <span>→</span>
                      </Link>
                    </div>
                  )}
                </section>
              ))}

              {/* Contextual Link to Silo Page [REQUIRED by Spec Section 8 & 9] */}
              <section id="authoritative-hub-guide" className="p-8 rounded-2xl bg-white border-2 border-teal/20 my-10">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">Related Silo Resource</span>
                <h3 className="h3 mt-1 mb-3">Explore the complete guide: {post.siloTitle}</h3>
                <p className="body-normal text-[#52616A] mb-6 leading-relaxed">
                  For comprehensive statutory references, official tenant protection forms, and licensed clinician verification, visit our full guide.
                </p>
                <Link href={post.siloLink} className="btn-secondary">
                  Read {post.siloTitle} →
                </Link>
              </section>
            </div>

            {/* Inline CTA before closing */}
            <div className="my-12">
              <InlineCta
                title="Protect Your Rights as a Colorado Renter"
                description="Landlords cannot charge pet rent, pet deposits, or enforce breed restrictions against legitimate assistance animals."
              />
            </div>

            {/* Related posts in same category */}
            {relatedPosts.length > 0 && (
              <div className="my-14 pt-10 border-t border-line">
                <h3 className="h3 mb-6">Related Articles in {post.categoryName}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedPosts.map((rel) => (
                    <div key={rel.slug} className="card-theme flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-semibold text-teal">{rel.readTime}</span>
                        <h4 className="h4 mt-2 mb-3">
                          <Link href={`/blog/${rel.slug}/`} className="hover:text-amber transition">
                            {rel.title}
                          </Link>
                        </h4>
                        <p className="body-small text-[#52616A] line-clamp-2 leading-relaxed">
                          {rel.sections[0]?.content.slice(0, 120)}...
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#D5DFDB]">
                        <Link
                          href={`/blog/${rel.slug}/`}
                          className="text-xs font-bold text-[#A65331] hover:text-[#19354A] hover:underline flex items-center gap-1"
                        >
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clinical & Legal Reviewer Box (M11) */}
            <ReviewerBox
              reviewerName={post.authorName}
              credentials={post.authorCredentials}
              reviewedDate={post.updatedDate}
              verificationUrl={post.authorVerificationUrl}
            />

            {/* Closing CTA to /how-it-works/#get-started [REQUIRED by Spec Section 8 & 9] */}
            <div className="p-8 rounded-2xl bg-navy text-white text-center mt-10">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal mb-3 text-white">
                Get Your Colorado ESA Letter Today
              </h2>
              <p className="text-line text-sm max-w-xl mx-auto mb-6">
                Quick, secure intake with 100% money-back guarantee if you are not approved by a licensed Colorado professional.
              </p>
              <Link href="/how-it-works/#get-started" className="btn-primary">
                Get Your ESA Letter
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
