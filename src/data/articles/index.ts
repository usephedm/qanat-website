import { article as claudeOpus4ChangesEverything } from './claude-opus-4-changes-everything';
import { article as deathOfManualDispatch } from './death-of-manual-dispatch';
import { article as gpt5VsClaudeVsGeminiRealBenchmark } from './gpt5-vs-claude-vs-gemini-real-benchmark';
import { article as everyAiCompanyWrongAboutAgents } from './every-ai-company-wrong-about-agents';
import { article as facilityManagementAiProblem } from './facility-management-ai-problem';
import { article as replacedOperationsTeamWithAi } from './replaced-operations-team-with-ai';
import { article as openSourceAi2026Models } from './open-source-ai-2026-models';
import { article as buildAiDispatchSystem } from './build-ai-dispatch-system';
import { article as aiTools25mOperation } from './ai-tools-2-5m-operation';
import { article as remoteDispatcherJobs2026 } from './remote-dispatcher-jobs-2026';

export const articles = [
  claudeOpus4ChangesEverything,
  deathOfManualDispatch,
  gpt5VsClaudeVsGeminiRealBenchmark,
  everyAiCompanyWrongAboutAgents,
  facilityManagementAiProblem,
  replacedOperationsTeamWithAi,
  openSourceAi2026Models,
  buildAiDispatchSystem,
  aiTools25mOperation,
  remoteDispatcherJobs2026,
];

// Helper functions for the blog
export const getFeaturedArticle = () => {
  return articles.find(article => article.featured);
};

export const getArticleBySlug = (slug: string) => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string) => {
  return articles.filter(article => article.category === category);
};

export const getArticlesByTag = (tag: string) => {
  return articles.filter(article => article.tags.includes(tag));
};

export const getRecentArticles = (limit: number = 5) => {
  return articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

// Export types
export type Article = typeof articles[0];
export type ArticleCategory = Article['category'];
