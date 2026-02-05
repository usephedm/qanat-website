import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI operations, dispatch management, facility intelligence, and cross-border service delivery from the QANAT team.',
};

const PLACEHOLDER_POSTS = [
  {
    slug: 'why-operations-eat-strategy',
    title: 'Why Operations Eat Strategy for Breakfast',
    excerpt:
      'Every company has a strategy. Most fail at execution. The gap between ambition and results is almost always an infrastructure problem.',
    date: '2026-02-15',
    readTime: '6 min',
    category: 'Operations',
  },
  {
    slug: 'ai-agents-dispatch',
    title: 'AI Agents in Dispatch: Beyond the Hype',
    excerpt:
      'What AI-powered dispatch actually looks like in production — not the demo, not the pitch deck, but the real thing.',
    date: '2026-02-10',
    readTime: '8 min',
    category: 'AI Operations',
  },
  {
    slug: 'cross-border-operations',
    title: 'Building Cross-Border Operations That Scale',
    excerpt:
      'The hidden complexities of running operations across timezones, cultures, and regulatory environments — and how to solve them.',
    date: '2026-02-05',
    readTime: '7 min',
    category: 'Strategy',
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container>
        <SectionHeading
          label="Blog"
          title="Thoughts on operations, AI, and building things that work"
          description="We write about what we know — building operational infrastructure that scales."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group relative p-8 rounded-2xl border border-border bg-surface/30 hover:bg-surface-elevated hover:border-border-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-muted">·</span>
                <span className="text-xs text-muted">{post.readTime}</span>
              </div>

              <h3 className="text-heading-3 text-foreground group-hover:text-accent transition-colors duration-200">
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
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-16 text-center">
          <p className="text-body">
            Full blog coming soon. Subscribe to get notified.
          </p>
        </div>
      </Container>
    </section>
  );
}
