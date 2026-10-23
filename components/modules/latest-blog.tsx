import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog-data";

interface LatestBlogProps {
  categorySlug?: string;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export function LatestBlog({
  categorySlug,
  limit = 3,
  title = "Latest from the Blog",
  subtitle = "Expert guidance on Colorado assistance animal housing laws, therapist evaluations, and pet policies.",
}: LatestBlogProps) {
  let posts: BlogPost[] = blogPosts;

  if (categorySlug) {
    posts = blogPosts.filter((p) => p.categorySlug === categorySlug);
    if (posts.length === 0) posts = blogPosts;
  }

  const displayPosts = posts.slice(0, limit);

  return (
    <section className="section-padding bg-[#F7F5F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-h2 text-[#19354A]">{title}</h2>
            {subtitle && <p className="text-body-normal text-[#52616A] mt-2 max-w-xl">{subtitle}</p>}
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#347C78] hover:text-[#19354A] transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <article
              key={post.slug}
              className="card-theme flex flex-col justify-between group hover:border-[#347C78] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-[#19354A] bg-[#E8F0ED] px-2.5 py-0.5 rounded-full border border-[#D5DFDB]">
                    {post.categoryName}
                  </span>
                  <span className="text-sm text-[#52616A] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#347C78]" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#19354A] group-hover:text-[#347C78] transition-colors leading-snug line-clamp-2">
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
      </div>
    </section>
  );
}
