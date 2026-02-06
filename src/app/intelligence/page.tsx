import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getAllArticles, getFeaturedArticle, ARTICLE_CATEGORIES } from '@/data/articles';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Intelligence — AI News, Analysis & Operations Insights',
  description:
    'In-depth AI model analysis, operations insights, and industry news. Written by Yousof Al-Ali, founder of QANAT. The #1 source for AI operations intelligence.',
  keywords: [
    'AI news',
    'AI analysis',
    'AI operations',
    'Claude Opus 4',
    'GPT-5',
    'AI dispatch',
    'facility management AI',
    'AI agents',
    'operations intelligence',
  ],
  alternates: {
    canonical: '/intelligence',
  },
};

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Intelligence', url: '/intelligence' },
]);

export default function IntelligencePage() {
  const featuredArticle = getFeaturedArticle();
  const allArticles = getAllArticles().filter((a) => !a.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />

      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Intelligence
            </span>
            <h1 className="text-heading-1">
              AI operations insights from the
              <span className="accent-gradient"> frontlines</span>
            </h1>
            <p className="text-body-lg mt-6">
              Deep-dive analysis, real-world testing, and unfiltered takes on AI models, tools, and operational systems.
              Written by operators who build this stuff in production.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/intelligence"
              className="px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              All Articles
            </Link>
            {ARTICLE_CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/intelligence/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="px-4 py-2 rounded-full text-xs font-medium bg-surface border border-border hover:border-accent/30 transition-colors text-foreground/80 hover:text-accent"
              >
                {category}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="pb-12 md:pb-16">
          <Container>
            <Link href={`/intelligence/${featuredArticle.slug}`} className="group block">
              <div className="relative p-8 md:p-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent/40 transition-all duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-accent/20 text-accent mb-4">
                  Featured
                </span>
                <h2 className="text-heading-2 text-foreground group-hover:text-accent transition-colors max-w-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="text-body-lg mt-4 max-w-3xl">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 mt-6 flex-wrap">
                  <span className="text-xs text-accent font-medium">{featuredArticle.category}</span>
                  <span className="text-xs text-muted">·</span>
                  <span className="text-xs text-muted">{featuredArticle.readingTime} min read</span>
                  <span className="text-xs text-muted">·</span>
                  <time className="text-xs text-muted">
                    {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <div className="mt-6">
                  <Button variant="secondary" size="sm">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                      <path
                        d="M3 8h10m0 0L9 4m4 4L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <div className="divider" />

      {/* All Articles Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/intelligence/${article.slug}`}
                className="group block h-full"
              >
                <article className="p-6 rounded-xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted">{article.readingTime} min read</span>
                  </div>

                  <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors mb-3 flex-1">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted line-clamp-3 mb-4">{article.excerpt}</p>

                  <time className="text-xs text-muted/50 block">
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-2xl border border-border bg-surface/30">
            <h2 className="text-heading-3 text-foreground">Stay ahead of the curve</h2>
            <p className="text-body mt-3">
              Get the latest AI operations insights, model analysis, and industry news delivered to your inbox.
            </p>
            <div className="mt-6">
              <Button
                href="mailto:hello@qn8.app?subject=Newsletter Subscription"
                size="sm"
              >
                Subscribe to Newsletter
              </Button>
            </div>
            <p className="text-xs text-muted mt-4">
              Or follow us on{' '}
              <a
                href="https://x.com/qanathq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light underline-offset-4 hover:underline"
              >
                X/Twitter
              </a>{' '}
              for real-time updates.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
