import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { getArticlesByCategory, ARTICLE_CATEGORIES } from '@/data/articles';
import type { ArticleCategory } from '@/data/articles/types';
import { generateBreadcrumbSchema } from '@/lib/metadata';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

function slugToCategory(slug: string): ArticleCategory | null {
  const categoryMap: Record<string, ArticleCategory> = {
    'ai-models': 'AI Models',
    'ai-tools': 'AI Tools',
    'ai-news': 'AI News',
    'operations-and-ai': 'Operations & AI',
    'analysis': 'Analysis',
  };
  return categoryMap[slug] || null;
}

function categoryToSlug(category: ArticleCategory): string {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
}

export async function generateStaticParams() {
  return ARTICLE_CATEGORIES.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category} — AI Operations Intelligence`,
    description: `In-depth articles about ${category.toLowerCase()}. Analysis, insights, and real-world testing from the QANAT team.`,
    alternates: {
      canonical: `/intelligence/category/${categorySlug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category);

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intelligence', url: '/intelligence' },
    { name: category, url: `/intelligence/category/${categorySlug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
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

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Category
            </span>
            <h1 className="text-heading-1">{category}</h1>
            <p className="text-body-lg mt-6">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'} about {category.toLowerCase()}.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mt-8 flex flex-wrap gap-3">
            {ARTICLE_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/intelligence/category/${categoryToSlug(cat)}`}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  cat === category
                    ? 'bg-accent/10 text-accent border-accent/20'
                    : 'bg-surface border-border hover:border-accent/30 text-foreground/80 hover:text-accent'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <div className="divider" />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
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

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-muted">No articles in this category yet. Check back soon!</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
