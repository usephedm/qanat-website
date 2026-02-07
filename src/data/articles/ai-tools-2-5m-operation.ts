import type { Article } from './types';

export const article: Article = {
  slug: 'ai-tools-2-5m-operation',
  title: 'The AI Tools I Use to Run a $2.5M Operation with 3 People',
  metaTitle: 'AI Tools for Running $2.5M Operation — Real Stack | QANAT',
  metaDescription: 'The exact AI tools, workflows, and systems I use to run a $2.5M facility management operation with just 3 people. No fluff, just the stack.',
  excerpt: 'Most "AI productivity" posts are garbage. Here\'s my actual AI stack for running a $2.5M operation with 3 people — tools, costs, and workflows.',
  content: `Everyone talks about AI productivity.

Most of it is cosplay. "I use ChatGPT for emails!" Cool. That saves you 10 minutes per day.

Here's what real AI leverage looks like: **Running a $2.5M operation with 3 full-time people.**

This is my actual AI stack. Not aspirational. Not theoretical. What I actually use every day.

## The Operation

Before we get into tools, here's what we're running:

**Company:** Facility management dispatch
**Revenue:** $2.5M ARR
**Team:** 3 full-time (me + 2 senior operators)
**Job volume:** 400+ work orders per day
**Technicians managed:** 50+ across 8 states
**Clients:** 30+ property management companies

**Traditional model for this scale:** 15-20 people minimum

**Our model:** 3 people + AI infrastructure

Let's break down the stack.

## Category 1: Core Operations AI

### Tool: Claude Opus 4 (Anthropic API)

**What it does:** Primary decision-making engine for dispatch operations

**How we use it:**
- Routes 85% of incoming work orders to techs
- Handles escalation decisions
- Drafts client communications
- Maintains operational context across 8-hour shifts

**Workflow:**
1. Work order comes in (email, SMS, web form, API)
2. Gets normalized into standard format
3. Claude analyzes and suggests tech assignment
4. If confidence >85% → auto-assign
5. If confidence <85% → flag for human review

**Cost:** ~$850/month for ~12,000 API calls
**ROI:** Replaces 5-6 junior dispatchers (~$25K/month saved)

**Why Claude over GPT:**
- Better long-context reasoning (critical for shift-long awareness)
- Less hallucination on edge cases
- More reliable structured output

**Alternative:** GPT-5 for speed-critical tasks (simple confirmations)

### Tool: Custom Dispatch System (Next.js + PostgreSQL + Redis)

**What it does:** The brain that orchestrates everything

**Tech stack:**
- Frontend: Next.js 14 (App Router)
- Backend: Next.js API routes + tRPC
- Database: PostgreSQL (Supabase)
- Cache: Redis (Upstash)
- Hosting: Vercel

**Key features:**
- Real-time job tracking
- AI decision review interface
- Tech availability management
- Client portal
- Performance analytics

**Cost:** ~$400/month (Vercel Pro + Supabase + Upstash + misc)
**Development cost:** ~$80K (one-time, built over 8 weeks)

**Why custom:** Off-the-shelf dispatch software doesn't integrate well with AI. We needed control.

## Category 2: Communication Automation

### Tool: Twilio (SMS + Voice)

**What it does:** Automated tech communication

**How we use it:**
- Send job assignments to techs via SMS
- Tech replies "ACCEPT" or "DECLINE"
- Automated status update reminders
- Emergency escalation calls (using Twilio Voice + AI voice agent)

**Example flow:**
- [AI assigns job to tech]
- → Twilio sends SMS: "New job: HVAC repair at 123 Main St. ETA 2PM. Reply ACCEPT or DECLINE"
- → Tech replies: "ACCEPT"
- → System logs acceptance, updates CRM, notifies property manager
- → 30 min before job: reminder SMS sent automatically
- → After job: "Reply DONE when complete"
- → Tech replies: "DONE"
- → System triggers invoice generation

**Cost:** ~$300/month (~6,000 SMS + occasional voice calls)
**Time saved:** ~15 hours/week vs. manual coordination

### Tool: Resend (Transactional Email)

**What it does:** All automated email communication

**How we use it:**
- Property manager notifications
- Daily summary reports
- Invoice delivery
- Escalation alerts

**Why Resend over SendGrid:** Better developer experience, great React email templates, solid deliverability

**Cost:** ~$20/month
**Volume:** ~8,000 emails/month

### Tool: ElevenLabs (Voice AI)

**What it does:** Generate voice messages for phone calls

**How we use it:**
- Emergency escalation calls (AI voice explains situation to on-call tech)
- Voicemail follow-ups
- Voice status updates for clients who prefer calls over email

**Example:**
When no tech accepts an emergency job within 15 minutes:
→ System calls top 3 available techs
→ AI voice: "Emergency HVAC job at [property]. Client willing to pay 1.5x rate. Press 1 to accept."
→ First tech to press 1 gets the job

**Cost:** ~$80/month
**Success rate:** 60% acceptance on emergency escalations (vs. 20% via SMS)

## Category 3: Data & Analytics

### Tool: Metabase (Self-Hosted)

**What it does:** Business intelligence and reporting

**Dashboards we run:**
- Daily ops summary (jobs completed, SLA compliance, revenue)
- Tech performance leaderboard
- Client satisfaction trends
- Bottleneck analysis

**Why Metabase:** Free (self-hosted), connects to PostgreSQL, powerful but simple

**Cost:** $0 (we self-host on a $12/month VPS)
**Time saved:** ~5 hours/week vs. manual Excel reports

### Tool: Posthog (Product Analytics)

**What it does:** Track how our AI decisions perform

**What we measure:**
- AI decision accuracy over time
- Human override patterns
- Feature usage by operators
- Error rates and edge cases

**Why Posthog:** Open source, great for product analytics, generous free tier

**Cost:** $0 (under free tier limits)

## Category 4: Process Automation

### Tool: n8n (Self-Hosted Workflow Automation)

**What it does:** Glue between systems

**Key workflows:**
1. **Invoice generation:** Job marked complete → extract details from CRM → generate PDF invoice → send via email → log in accounting system
2. **Weekly reports:** Every Monday 8AM → pull last week's data → generate summary → email to clients
3. **Tech onboarding:** New tech added → create accounts in all systems → send welcome packet → schedule orientation
4. **Failed payment recovery:** Invoice unpaid >30 days → automated follow-up sequence (email, SMS, phone)

**Why n8n over Zapier:** Self-hosted = no limits, way cheaper, more powerful

**Cost:** ~$12/month (VPS hosting)
**Workflows automated:** 25+ workflows
**Time saved:** ~20 hours/week

### Tool: GitHub Actions (CI/CD)

**What it does:** Automate deployments and testing

**How we use it:**
- Auto-deploy to production on main branch push
- Run tests on every PR
- Weekly dependency updates
- Automated database backups

**Cost:** $0 (free tier for private repos)

## Category 5: Knowledge & Documentation

### Tool: Notion (Documentation)

**What it does:** Central knowledge base

**What we document:**
- Operations playbooks
- Escalation procedures
- Client-specific requirements
- Vendor contact info
- Training materials

**Why Notion:** Easy to use, great search, embed capabilities

**Cost:** $10/month (Plus plan)

### Tool: Claude (via API for Documentation)

**What it does:** Auto-generate documentation from code and conversations

**How we use it:**
Every time we solve a complex operational issue:
→ Log the conversation/decision
→ Feed to Claude: "Generate a playbook entry for this scenario"
→ Review and add to Notion

**Example:** Tech cancels 2 hours before emergency job with no backup available
→ Document the escalation process
→ Now codified: "Offer 2x rate to nearby techs, if no acceptance within 15 min, escalate to regional manager"

**Cost:** Included in general Claude API usage

## Category 6: Customer-Facing AI

### Tool: Intercom + Custom AI Bot

**What it does:** Handle client questions

**How we use it:**
- Property managers ask questions via chat
- AI bot answers routine questions (job status, tech ETA, billing info)
- Complex questions escalate to human

**Resolution rate:** ~70% of questions handled by AI
**Average response time:** <30 seconds (vs. 2-4 hours previously)

**Cost:** ~$150/month (Intercom + GPT-4 API for bot)

## Category 7: Financial Operations

### Tool: Stripe (Payments + Billing)

**What it does:** Payment processing and subscription management

**How we integrate it:**
- Auto-invoice generation after job completion
- Subscription billing for monthly clients
- Automated payment retries
- Dunning management

**Cost:** 2.9% + $0.30 per transaction
**Why Stripe:** Best developer experience, reliable, handles edge cases well

### Tool: QuickBooks Online + API Integration

**What it does:** Accounting and bookkeeping

**How we automate it:**
- Every invoice generated → synced to QuickBooks
- Every payment received → recorded automatically
- Monthly reconciliation mostly automated

**Cost:** ~$70/month (QuickBooks + integration maintenance)
**Time saved:** ~8 hours/week vs. manual bookkeeping

## Category 8: Team Collaboration

### Tool: Slack

**What it does:** Team communication + alert hub

**How we use it:**
- Channel per major client
- AI system posts alerts (urgent jobs, SLA risks, errors)
- Integrations with all our systems

**Key integrations:**
- GitHub (deployment notifications)
- Sentry (error alerts)
- Metabase (daily metrics)
- Custom webhooks from dispatch system

**Cost:** $0 (free plan, 3 people)

### Tool: Linear (Project Management)

**What it does:** Track improvements and bugs

**How we use it:**
- Operators report bugs/issues
- I prioritize and fix
- Track operational improvements

**Why Linear over Jira:** Faster, cleaner, built for speed

**Cost:** $0 (free for small teams)

## The Full Stack Cost Breakdown

| Category | Tools | Monthly Cost |
|----------|-------|--------------|
| Core AI | Claude API, GPT-5 API | ~$900 |
| Custom Systems | Vercel, Supabase, Redis | ~$400 |
| Communication | Twilio, Resend, ElevenLabs | ~$400 |
| Automation | n8n VPS, GitHub Actions | ~$12 |
| Analytics | Metabase VPS, Posthog | ~$12 |
| Documentation | Notion | ~$10 |
| Customer Support | Intercom + AI | ~$150 |
| Financial | QuickBooks | ~$70 |
| Team | Slack, Linear | ~$0 |
| **Total** | | **~$1,954/month** |

**For context:**
- Payroll (3 people): ~$22K/month
- Traditional ops team (15 people): ~$75K/month
- **Savings: ~$53K/month**

The AI stack pays for itself 27x over.

## What We Don't Use (And Why)

**❌ Generic AI Agent Platforms**
Why: Too rigid, can't customize for our complex workflows

**❌ Pre-built Dispatch Software**
Why: Doesn't integrate well with AI, too many constraints

**❌ Zapier**
Why: Too expensive at scale, n8n does everything for $12/month

**❌ ChatGPT Plus**
Why: API access is cheaper and more powerful for our use cases

**❌ Monday.com / ClickUp**
Why: Overkill for 3 people, Linear is faster

## The Workflow: A Day in the Life

**6:00 AM (Automated):**
- System checks overnight jobs
- AI generates morning summary
- Posted to Slack

**8:00 AM - 5:00 PM:**
- Work orders flow in continuously
- AI routes 85% automatically
- I review flagged decisions (~30 min/day)
- Operators handle exceptions and client calls (~3-4 hours/day)
- AI handles all routine communication

**5:00 PM (Automated):**
- AI generates end-of-day summary
- Incomplete jobs flagged for follow-up
- Performance metrics calculated

**Weekly (Automated):**
- Client reports generated and sent
- Tech performance reviews compiled
- System health check

**My time allocation:**
- Strategic work: 60%
- Exception handling: 20%
- System improvements: 15%
- Client relationships: 5%

## Lessons Learned

### 1. Don't Buy Generic, Build Custom

Off-the-shelf AI tools are demos. Real operations need custom systems.

We spent $80K building our dispatch system. Best investment we made.

### 2. AI Needs Human Oversight

We review ~15% of AI decisions. That oversight is critical.

Full autonomy sounds great but breaks in production.

### 3. Automate Communication First

Communication (calls, texts, emails) is the biggest time sink.

Automating this 90% gives you back 20-30 hours/week.

### 4. Log Everything

Every decision, every error, every override.

You'll need this data to improve the AI and prove ROI.

### 5. Stack Costs Add Up

$2K/month in tools sounds like a lot.

But it's replacing $50K+/month in labor.

Don't penny-pinch on tools that 10x your leverage.

## How to Build Your Own AI Operations Stack

**Phase 1: Start with Communication**
- Automate routine messages (Twilio + Resend)
- Build templates for common scenarios
- Expected savings: 10-15 hours/week

**Phase 2: Add Decision AI**
- Pick your highest-volume decision
- Build AI prompts with Claude/GPT
- Start with human-in-loop approval
- Expected savings: 20-30 hours/week

**Phase 3: Connect Systems**
- Use n8n or similar to automate workflows
- Eliminate manual data entry
- Expected savings: 5-10 hours/week

**Phase 4: Build Analytics**
- Set up Metabase or similar
- Track what matters
- Use data to improve AI

**Phase 5: Scale**
- Fine-tune AI on your data
- Expand automation to more workflows
- Keep human oversight for high-stakes decisions

**Timeline:** 3-6 months from zero to production-ready

Or [hire us](/services) and we'll build it in 8-12 weeks.

---

**QANAT builds AI-powered operations infrastructure for companies that want to scale without linear hiring. We've deployed the stack described here for 12+ companies. [Learn more](/services) or [contact us](/contact) to build yours.**`,
  author: {
    name: 'Yousof Al-Ali',
    title: 'Founder & CEO, QANAT',
    bio: 'Building AI-powered operations infrastructure. Scaled one company from 0 to $2.5M ARR in 18 months using AI dispatch systems.',
  },
  publishedAt: '2026-01-29',
  readingTime: 11,
  category: 'AI Tools',
  tags: ['AI Tools', 'Operations', 'Tech Stack', 'Productivity'],
  featured: false,
};
