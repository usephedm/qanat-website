import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getAllPosts } from '@/lib/blog-posts';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Blog — AI Operations Insights',
  description:
    'Insights on AI operations, dispatch automation, facility management, remote dispatcher careers, and operational infrastructure from the QANAT team.',
  keywords: [
    'AI operations blog',
    'dispatch automation insights',
    'facility management AI',
    'remote dispatcher career',
    'operations infrastructure',
    'QANAT blog',
  ],
  alternates: {
    canonical: '/blog',
  },
};

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
]);

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <SectionHeading
            label="Blog"
            title="Thoughts on operations, AI, and building things that work"
            description="We write about what we know — building operational infrastructure that scales, hiring globally, and making AI work in production."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative block"
              >
                <article className="p-8 rounded-2xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>

                  <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors duration-200 flex-1">
                    {post.title}
                  </h3>

                  <p className="text-body mt-3">{post.excerpt}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-muted group-hover:text-accent transition-colors duration-200">
                    Read article
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10m0 0L9 4m4 4L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <time className="block mt-4 text-xs text-muted/50">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </article>
              </Link>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-16 text-center">
            <p className="text-body mb-6">
              Want to learn how we build operational systems?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services"
                className="text-sm text-accent hover:text-accent-light underline-offset-4 hover:underline"
              >
                View Our Services
              </Link>
              <Link
                href="/case-studies"
                className="text-sm text-accent hover:text-accent-light underline-offset-4 hover:underline"
              >
                Read Case Studies
              </Link>
              <Link
                href="/careers"
                className="text-sm text-accent hover:text-accent-light underline-offset-4 hover:underline"
              >
                We&apos;re Hiring
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
