export type ArticleCategory =
  | 'AI Models'
  | 'AI Tools'
  | 'AI News'
  | 'Operations & AI'
  | 'Analysis';

export interface Article {
  slug: string;
  title: string;
  metaTitle: string; // 60 chars for SEO
  metaDescription: string; // 155 chars for SEO
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // minutes
  category: ArticleCategory;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
}

export interface RelatedArticle {
  slug: string;
  title: string;
  category: ArticleCategory;
  readingTime: number;
}
