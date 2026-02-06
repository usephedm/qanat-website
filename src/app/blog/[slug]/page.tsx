import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getPostBySlug, getAllPosts } from '@/lib/blog-posts';
import { generateBreadcrumbSchema } from '@/lib/metadata';
import { SITE } from '@/lib/constants';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${post.slug}`,
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
          {/* Header */}
          <header className="max-w-3xl mx-auto mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mb-6"
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
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-muted">·</span>
              <span className="text-xs text-muted">{post.readTime}</span>
              <span className="text-xs text-muted">·</span>
              <time className="text-xs text-muted">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-heading-1">{post.title}</h1>
            <p className="text-body-lg mt-4 text-foreground/80">{post.excerpt}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold">
                Q
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{post.author}</p>
                <p className="text-xs text-muted">QANAT Operations Team</p>
              </div>
            </div>
          </header>

          <div className="divider" />

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg mt-12">
            {post.content.split('\n').map((line, i) => {
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

              // Handle bold text (markdown **text**)
              if (line.includes('**')) {
                const parts = line.split('**');
                return (
                  <p key={i} className="text-body mb-4 leading-relaxed">
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

              // Handle links [text](/url)
              if (line.includes('[') && line.includes('](')) {
                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                const parts = line.split(linkRegex);
                return (
                  <p key={i} className="text-body mb-4 leading-relaxed">
                    {parts.map((part, j) => {
                      if (j % 3 === 1) {
                        // Link text
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
                      if (j % 3 === 2) {
                        // Skip URL part
                        return null;
                      }
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
                <p key={i} className="text-body mb-4 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>

          <div className="divider mt-16" />

          {/* CTA Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center">
              <h3 className="text-heading-3 text-foreground mb-3">Want to work with us?</h3>
              <p className="text-body mb-6">
                QANAT builds AI-powered operational infrastructure and we&apos;re hiring remote
                dispatchers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/services" variant="secondary" size="sm">
                  Our Services
                </Button>
                <Button href="/careers" variant="secondary" size="sm">
                  View Open Roles
                </Button>
                <Button href="/contact" size="sm">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
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
              Back to all posts
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
}
