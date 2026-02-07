import { redirect } from 'next/navigation';

interface BlogSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Redirect /blog/[slug] to /intelligence/[slug]
export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  redirect(`/intelligence/${slug}`);
}
