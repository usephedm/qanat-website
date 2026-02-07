import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getArticleBySlug, getAllArticles, getRelatedArticles } from '@/data/articles';
import { generateBreadcrumbSchema } from '@/lib/metadata';
import { SITE } from '@/lib/constants';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      creator: '@qanathq',
    },
    alternates: {
      canonical: `/intelligence/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);
  const articleUrl = `${SITE.url}/intelligence/${article.slug}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intelligence', url: '/intelligence' },
    { name: article.title, url: `/intelligence/${article.slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.title,
      worksFor: {
        '@type': 'Organization',
        name: SITE.name,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          {/* Back Link */}
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Intelligence
          </Link>

          {/* Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-muted">·</span>
              <span className="text-xs text-muted">{article.readingTime} min read</span>
              <span className="text-xs text-muted">·</span>
              <time className="text-xs text-muted">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-heading-1 mb-6">{article.title}</h1>
            <p className="text-body-lg text-foreground/80">{article.excerpt}</p>

            {/* Author Card */}
            <div className="mt-8 flex items-start gap-4 p-6 rounded-xl border border-border bg-surface/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-lg font-semibold flex-shrink-0">
                V
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{article.author.name}</p>
                <p className="text-xs text-accent mt-0.5">{article.author.title}</p>
                <p className="text-xs text-muted mt-2 leading-relaxed">{article.author.bio}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="text-xs text-muted">Share:</span>
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-surface border border-border hover:border-accent/30 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-surface border border-border hover:border-accent/30 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={articleUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-surface border border-border hover:border-accent/30 transition-colors"
                title="Copy this link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </a>
            </div>
          </header>

          <div className="divider" />

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg mt-12">
            <div className="text-body leading-relaxed space-y-4">
              {article.content.split('\n').map((line, i) => {
                // Skip placeholder content markers
                if (line.includes('[Content from earlier blog post') || line.includes('[Substantial technical') || line.includes('[Comprehensive AI tools') || line.includes('[Content targeting')) {
                  return (
                    <p key={i} className="text-muted italic text-sm border-l-2 border-accent/30 pl-4 py-2">
                      {line}
                    </p>
                  );
                }

                // Handle headings
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-heading-2 mt-12 mb-4 text-foreground">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-heading-3 mt-8 mb-3 text-foreground">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }

                // Handle bold text
                if (line.includes('**')) {
                  const parts = line.split('**');
                  return (
                    <p key={i} className="text-body mb-4">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <strong key={j} className="font-semibold text-foreground">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }

                // Handle links
                if (line.includes('[') && line.includes('](')) {
                  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                  const parts = line.split(linkRegex);
                  return (
                    <p key={i} className="text-body mb-4">
                      {parts.map((part, j) => {
                        if (j % 3 === 1) {
                          const url = parts[j + 1];
                          return (
                            <Link
                              key={j}
                              href={url}
                              className="text-accent hover:text-accent-light underline-offset-4 hover:underline"
                            >
                              {part}
                            </Link>
                          );
                        }
                        if (j % 3 === 2) return null;
                        return part;
                      })}
                    </p>
                  );
                }

                // Handle horizontal rules
                if (line.trim() === '---') {
                  return <div key={i} className="divider my-12" />;
                }

                // Handle bullet points
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="text-body mb-2 ml-4">
                      {line.replace('- ', '')}
                    </li>
                  );
                }

                // Empty lines
                if (line.trim() === '') {
                  return <br key={i} />;
                }

                // Regular paragraphs
                return (
                  <p key={i} className="text-body mb-4">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="divider mt-16" />

          {/* Newsletter CTA */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center">
              <h3 className="text-heading-3 text-foreground mb-3">Enjoyed this article?</h3>
              <p className="text-body mb-6">
                Get the latest AI operations insights, model analysis, and industry news delivered to your inbox.
              </p>
              <Button href="mailto:hello@qn8.app?subject=Newsletter Subscription" size="sm">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <>
              <div className="divider mt-16" />
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-heading-3 text-foreground mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/intelligence/${related.slug}`}
                      className="group p-4 rounded-xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-accent/30 transition-all"
                    >
                      <span className="text-xs text-accent font-medium">{related.category}</span>
                      <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors mt-2 line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-xs text-muted mt-2">{related.readingTime} min read</p>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Back to top */}
          <div className="mt-12 text-center">
            <Link
              href="/intelligence"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all articles
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
}
