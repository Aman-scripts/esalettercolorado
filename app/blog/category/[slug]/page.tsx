import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogCategories, blogPosts } from "@/data/blog-data";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InlineCta } from "@/components/modules/inline-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { getPageSeo, pageMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) return {};

  return pageMetadata(`/blog/category/${category.slug}/`);
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const seo = getPageSeo(`/blog/category/${category.slug}/`);
  const posts = blogPosts.filter((p) => p.categorySlug === category.slug);

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: seo.h1,
      description: seo.description,
      url: seo.canonical,
      isPartOf: {
        "@type": "WebSite",
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
            { label: category.name },
          ]}
        />

        <main className="section-padding pt-6 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Top link to matching silo pillar [REQUIRED by Spec Section 8 & 9] */}
            <div className="mb-6">
              <Link
                href={category.pillarLink}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline bg-softBlue px-4 py-2 rounded-full border border-line"
              >
                <span>←</span>
                <span>
                  Comprehensive Pillar Guide: <strong>{category.pillarTitle}</strong>
                </span>
              </Link>
            </div>

            {/* Header section */}
            <div className="max-w-3xl mb-12">
              <span className="trust-chip mb-3">Blog Category</span>
              <h1 className="h1 mb-4">{seo.h1}</h1>
              <p className="body-large text-muted">{category.intro}</p>
            </div>

            {/* Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="card-theme flex flex-col justify-between hover:shadow-lg transition group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#52616A] mb-3">
                        <span className="font-semibold text-[#347C78] bg-[#E8F0ED] px-2 py-0.5 rounded border border-[#D5DFDB]">{category.name}</span>
                        <span className="font-medium text-[#52616A]">{post.readTime}</span>
                      </div>
                      <h2 className="h4 group-hover:text-[#A65331] transition mb-3">
                        <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                      </h2>
                      <p className="body-small text-[#52616A] line-clamp-3 mb-4 leading-relaxed">
                        {post.sections[0]?.content.slice(0, 160)}...
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#D5DFDB] flex items-center justify-between text-xs text-[#52616A]">
                      <span className="font-semibold text-[#52616A]">{post.publishDate}</span>
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="font-bold text-[#A65331] hover:text-[#19354A] hover:underline flex items-center gap-1"
                      >
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="card-theme text-center py-12 mb-16">
                <p className="body-large text-muted mb-4">New articles for this category are being prepared by our clinical team.</p>
                <Link href={category.pillarLink} className="btn-secondary">
                  Read the {category.name} Pillar Guide
                </Link>
              </div>
            )}

            {/* Silo Pillar Contextual Banner */}
            <div className="p-8 rounded-2xl bg-white border border-line flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-bold tracking-wider text-teal uppercase">Authoritative Resource</span>
                <h3 className="h3 mt-1 mb-2">Need in-depth legal and clinical documentation?</h3>
                <p className="body-normal text-muted max-w-2xl">
                  Explore our authoritative silo pillar covering statutory protections under Colorado HB26-1045, C.R.S. 24-34-502, and the federal Fair Housing Act.
                </p>
              </div>
              <Link href={category.pillarLink} className="btn-secondary whitespace-nowrap">
                View Full Silo Pillar
              </Link>
            </div>

            {/* CTA Band */}
            <InlineCta
              title="Need an ESA Letter for Colorado Housing?"
              description="Complete our 5-minute pre-screening to connect with a licensed Colorado mental health provider for your compliant ESA letter."
            />
          </div>
        </main>
      </div>
    </>
  );
}
