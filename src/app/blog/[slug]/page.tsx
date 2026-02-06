import { redirect } from 'next/navigation';

interface BlogSlugPageProps {
  params: {
    slug: string;
  };
}

// Redirect /blog/[slug] to /intelligence/[slug]
export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  redirect(`/intelligence/${params.slug}`);
}
