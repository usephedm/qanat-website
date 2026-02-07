import type { Article } from './types';

export const article: Article = {
  slug: 'build-ai-dispatch-system',
  title: 'How to Build an AI Dispatch System from Scratch: Technical Blueprint',
  metaTitle: 'Build an AI Dispatch System — Complete Technical Guide | QANAT',
  metaDescription: 'Complete technical blueprint for building an AI-powered dispatch system. Architecture, models, integrations, and deployment strategies from production experience.',
  excerpt: 'Complete technical guide to building an AI dispatch system that actually works in production. No fluff, just architecture and code.',
  content: `Most "how to build AI" guides are useless for production systems.

This isn't that.

This is a technical blueprint for building an AI dispatch system from scratch — based on 18 months of production deployment managing 500+ jobs/day.

If you're technical and want to build this yourself, here's everything you need.

## System Architecture Overview

**High-level architecture:**

**Clients** (Property managers, customers)
↓
**API Gateway** (Next.js/Express)
- Authentication
- Rate limiting
- Request validation
↓
**Business Logic Layer**
- Job intake & normalization
- Decision routing (AI vs. human)
- Integration orchestration
↓
**Three Core Systems:**

1. **AI Engine**
   - Claude Opus 4
   - GPT-5 fallback
   - Context store
   - Decision logic

2. **Human Oversight**
   - Review dashboard
   - Override interface
   - Feedback system

3. **Integrations**
   - CRM
   - SMS (Twilio)
   - Email
   - Calendar
   - Payment systems

## Component 1: Data Normalization Layer

**Problem:** Work orders come in 20+ different formats from various sources.

**Solution:** Normalize everything into a standard schema before AI sees it.

**Tech stack:**
- Language: TypeScript/Node.js
- Validation: Zod or Yup
- Storage: PostgreSQL

**Core schema:**

\`\`\`typescript
interface WorkOrder {
  id: string;
  type: 'hvac' | 'plumbing' | 'electrical' | 'general' | 'emergency';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  property: {
    id: string;
    name: string;
    address: string;
    timezone: string;
    access_notes?: string;
  };
  requested_by: {
    name: string;
    role: 'property_manager' | 'tenant' | 'owner';
    contact: { email?: string; phone?: string; };
  };
  description: string;
  preferred_date?: Date;
  required_skills: string[];
  estimated_duration?: number;
  budget_approval?: number;
  attachments?: { url: string; type: string; }[];
  metadata: Record<string, any>;
  created_at: Date;
  source: string;
}
\`\`\`

**Normalization pipeline:**

\`\`\`typescript
async function normalizeWorkOrder(rawData: any, source: string): Promise<WorkOrder> {
  // Step 1: Parse based on source
  const parser = getParserForSource(source);
  const parsed = await parser.parse(rawData);
  
  // Step 2: Classify job type (AI-assisted)
  const classification = await classifyJobType(parsed.description);
  
  // Step 3: Extract priority (rules + AI)
  const priority = determinePriority({
    keywords: parsed.description,
    explicit: parsed.priority,
    client_tier: parsed.property.tier,
    time_requested: parsed.created_at,
  });
  
  // Step 4: Validate and enrich
  return validateAndEnrich({
    ...parsed,
    type: classification,
    priority,
  });
}
\`\`\`

**Critical detail:** Don't send raw data to AI. Normalize first. AI makes better decisions on clean data.

## Component 2: AI Decision Engine

**Core responsibility:** Take normalized work order, decide how to handle it.

**Tech stack:**
- Primary model: Claude Opus 4 (Anthropic API)
- Fallback: GPT-5 (OpenAI API)
- Inference: HTTP API calls
- Context storage: Redis (for session state)

**Decision flow:**

\`\`\`typescript
async function routeWorkOrder(order: WorkOrder): Promise<RoutingDecision> {
  // Step 1: Gather context
  const context = await buildContext({
    order,
    available_techs: await getAvailableTechs(order.property.timezone),
    recent_history: await getRecentJobsForProperty(order.property.id),
    tech_performance: await getTechPerformanceData(),
  });
  
  // Step 2: Build prompt
  const prompt = buildDispatchPrompt(context);
  
  // Step 3: Call AI with retry logic
  const decision = await callAIWithRetry({
    model: 'claude-opus-4',
    prompt,
    temperature: 0.2, // Low temperature for consistent decisions
    max_tokens: 2000,
  });
  
  // Step 4: Validate AI decision
  const validated = validateDecision(decision, context);
  
  // Step 5: Determine confidence
  const confidence = assessConfidence(validated, context);
  
  return {
    ...validated,
    confidence,
    requires_review: confidence < 0.85 || order.priority === 'emergency',
  };
}
\`\`\`

**Prompt engineering (simplified):**

\`\`\`typescript
function buildDispatchPrompt(context: DispatchContext): string {
  return \`
You are a facility management dispatch coordinator. Your job: assign work orders to the best available technician.

## Work Order
Type: \${context.order.type}
Priority: \${context.order.priority}
Location: \${context.order.property.address}
Description: \${context.order.description}
Required skills: \${context.order.required_skills.join(', ')}
Preferred date: \${context.order.preferred_date || 'ASAP'}

## Available Technicians
\${context.available_techs.map(tech => \`
- \${tech.name} (ID: \${tech.id})
  - Skills: \${tech.skills.join(', ')}
  - Location: \${tech.current_location} (distance: \${tech.distance_miles} mi)
  - Availability: \${tech.next_available}
  - Performance: \${tech.rating}/5 (\${tech.completed_jobs} jobs)
  - Current load: \${tech.active_jobs} jobs today
  - Notes: \${tech.notes || 'None'}
\`).join('\\n')}

## Business Rules
- Emergency jobs: assign closest available tech immediately
- Prefer techs with relevant experience for this property
- Don't overload techs: max 4 jobs per day
- Travel time should be < 45 minutes when possible
- Consider tech preferences and property access requirements

## Recent Context
\${formatRecentHistory(context.recent_history)}

## Your Task
1. Select the best technician for this job
2. Provide reasoning for your choice
3. Suggest alternative if primary tech unavailable
4. Flag any concerns or risks

Respond in JSON:
{
  "primary_tech_id": "string",
  "reasoning": "string",
  "alternative_tech_id": "string | null",
  "estimated_arrival": "ISO timestamp",
  "concerns": ["string"] | null,
  "confidence": 0.0-1.0
}
\`;
}
\`\`\`

**Critical details:**

1. **Low temperature (0.2-0.3)** for operational decisions — you want consistency, not creativity
2. **Structured output** (JSON) for reliable parsing
3. **Rich context** including performance history, not just availability
4. **Confidence scores** built into prompt so AI self-assesses

## Component 3: Human Oversight Interface

**Problem:** You can't deploy AI and walk away. You need oversight.

**Solution:** Dashboard where human operators review high-stakes or low-confidence decisions.

**Tech stack:**
- Frontend: Next.js + React
- Real-time: WebSockets (Socket.io or Pusher)
- State: React Query for server state

**Key views:**

### 1. Review Queue

\`\`\`typescript
interface ReviewQueueItem {
  order: WorkOrder;
  ai_decision: RoutingDecision;
  confidence: number;
  flagged_reason: string;
  time_in_queue: number;
  priority: 'low' | 'medium' | 'high' | 'emergency';
}

// Component
function ReviewQueue() {
  const { data: queue } = useQuery('review-queue', fetchReviewQueue, {
    refetchInterval: 5000, // Poll every 5s
  });
  
  return (
    <div>
      {queue?.map(item => (
        <ReviewCard
          key={item.order.id}
          item={item}
          onApprove={handleApprove}
          onOverride={handleOverride}
          onEscalate={handleEscalate}
        />
      ))}
    </div>
  );
}
\`\`\`

### 2. Real-Time Decision Stream

Shows all AI decisions in real-time, color-coded by confidence:
- **Green:** High confidence (>0.9), approved automatically
- **Yellow:** Medium confidence (0.7-0.9), requires review
- **Red:** Low confidence (<0.7) or emergency, requires immediate review

### 3. Override Interface

\`\`\`typescript
function OverrideDecision({ order, aiDecision }: Props) {
  const [overrideReason, setOverrideReason] = useState('');
  
  async function handleOverride(newTechId: string) {
    await submitOverride({
      order_id: order.id,
      ai_decision: aiDecision.primary_tech_id,
      human_decision: newTechId,
      reason: overrideReason,
      // This feedback trains the system
    });
  }
  
  return (
    <Modal>
      <h3>Override AI Decision</h3>
      <p>AI suggested: {aiDecision.primary_tech_id}</p>
      <TechSelector onChange={setNewTech} />
      <TextArea 
        placeholder="Why are you overriding?"
        value={overrideReason}
        onChange={e => setOverrideReason(e.target.value)}
      />
      <Button onClick={handleOverride}>Submit Override</Button>
    </Modal>
  );
}
\`\`\`

**Critical:** Log every override with reason. This is how you improve the AI.

## Component 4: Integrations Layer

**Problem:** AI needs to interact with 5-10 external systems.

**Solution:** Build adapters for each integration, unified interface.

**Key integrations:**

### 1. CRM (e.g., Salesforce, HubSpot)

\`\`\`typescript
interface CRMAdapter {
  createJob(order: WorkOrder): Promise<string>; // returns CRM ID
  updateJobStatus(id: string, status: JobStatus): Promise<void>;
  getTechProfile(techId: string): Promise<TechProfile>;
  logActivity(jobId: string, activity: Activity): Promise<void>;
}

class SalesforceAdapter implements CRMAdapter {
  async createJob(order: WorkOrder) {
    const sf = await this.getConnection();
    const result = await sf.sobject('WorkOrder__c').create({
      Name: \`\${order.type} - \${order.property.name}\`,
      Description__c: order.description,
      Priority__c: order.priority,
      // ... map all fields
    });
    return result.id;
  }
  
  // ... implement other methods
}
\`\`\`

### 2. Communication (SMS, Email)

\`\`\`typescript
class CommunicationService {
  async notifyTech(techId: string, job: WorkOrder) {
    const tech = await getTechProfile(techId);
    const message = formatTechNotification(job);
    
    // Try preferred channel first
    if (tech.preferred_channel === 'sms') {
      await this.sms.send(tech.phone, message);
    } else {
      await this.email.send(tech.email, message);
    }
    
    // Log for tracking
    await logCommunication({
      recipient: techId,
      channel: tech.preferred_channel,
      message,
      job_id: job.id,
    });
  }
}
\`\`\`

### 3. Calendar/Scheduling

\`\`\`typescript
async function addToTechCalendar(techId: string, job: WorkOrder, estimatedArrival: Date) {
  const calendar = await getTechCalendar(techId);
  
  await calendar.createEvent({
    title: \`\${job.type} - \${job.property.name}\`,
    start: estimatedArrival,
    end: addMinutes(estimatedArrival, job.estimated_duration || 60),
    location: job.property.address,
    description: job.description,
    reminders: [
      { method: 'sms', minutes: 30 },
    ],
  });
}
\`\`\`

## Component 5: Monitoring & Observability

**You need to know:**
- Is the AI making good decisions?
- Where is it failing?
- What patterns are emerging?

**Tech stack:**
- Metrics: Prometheus + Grafana
- Logging: Loki or ELK stack
- Alerts: PagerDuty or similar

**Key metrics to track:**

\`\`\`typescript
// Decision quality
metrics.ai_decision_accuracy.observe(isCorrect ? 1 : 0);
metrics.ai_confidence.histogram(decision.confidence);
metrics.human_override_rate.inc();

// Performance
metrics.decision_latency.observe(elapsedMs);
metrics.api_calls_total.inc({ model: 'claude-opus-4', success: true });

// Business impact
metrics.jobs_routed_total.inc({ priority: order.priority });
metrics.response_time_minutes.observe(responseTime);
metrics.sla_compliance.observe(meetsSLA ? 1 : 0);
\`\`\`

**Alerting rules:**

- AI decision accuracy drops below 90%
- Human override rate exceeds 15%
- API latency exceeds 5 seconds
- Any job sits in review queue > 15 minutes

## Deployment Architecture

**Production setup (AWS example):**

**Layer 1: CDN & Load Balancing**
- CloudFront (CDN) → global distribution
- ALB (Application Load Balancer) → traffic routing

**Layer 2: Application Tier**
- ECS Fargate (API Server) — Next.js application
- ECS Fargate (Workers) — Background job queue processing

**Layer 3: Data Storage**
- RDS PostgreSQL — Work orders, decisions, all persistent data
- ElastiCache Redis — Session state, caching, real-time data

**Cost estimate (500 jobs/day):**
- Compute (ECS Fargate): ~$300/month
- Database (RDS): ~$200/month
- Cache (Redis): ~$50/month
- AI APIs (Claude/GPT): ~$500-900/month
- Monitoring: ~$50/month
- **Total: ~$1,100-1,500/month**

## Critical Production Lessons

### 1. Start with Human-in-Loop

Don't go fully autonomous on day 1.

**Phase 1:** AI suggests, human approves everything
**Phase 2:** AI auto-approves high-confidence, human reviews rest
**Phase 3:** AI autonomous with exception handling

### 2. Log Everything

Every decision, every override, every API call.

You'll need this data to:
- Debug production issues
- Improve AI prompts
- Train custom models
- Prove ROI to stakeholders

### 3. Build Rollback Mechanisms

AI will make mistakes. You need to be able to:
- Cancel bad assignments
- Reassign jobs
- Notify affected parties
- Track impact

### 4. Version Your Prompts

\`\`\`typescript
const PROMPTS = {
  v1: '...', // original
  v2: '...', // improved reasoning
  v3: '...', // added edge case handling
  current: 'v3',
};

async function callAI(prompt_version: string = PROMPTS.current) {
  const prompt = PROMPTS[prompt_version];
  // ...
}
\`\`\`

A/B test prompt changes in production before full rollout.

### 5. Plan for Model Changes

APIs change. Models get deprecated. Pricing changes.

Build abstraction layers:

\`\`\`typescript
interface AIProvider {
  complete(prompt: string, options: CompletionOptions): Promise<AIResponse>;
}

class ClaudeProvider implements AIProvider { /* ... */ }
class OpenAIProvider implements AIProvider { /* ... */ }

// Easy to swap
const aiProvider: AIProvider = new ClaudeProvider();
\`\`\`

## Next Steps

If you're building this:

1. **Start small** — one workflow, 10-20 jobs/day
2. **Build the oversight interface first** — you need visibility
3. **Log everything** — you'll need the data
4. **Test with real humans** — pilot with actual operators
5. **Iterate on prompts** — expect to rewrite 5-10 times

Or [hire us to build it](/services). We've done this 12 times.

---

**QANAT builds custom AI dispatch systems for facility management and field operations. We handle architecture, implementation, and deployment so you can focus on your business. [Learn more](/services) or [contact us](/contact) to discuss your project.**`,
  author: {
    name: 'Yousof Al-Ali',
    title: 'Founder & CEO, QANAT',
    bio: 'Building AI-powered operations infrastructure. Scaled one company from 0 to $2.5M ARR in 18 months using AI dispatch systems.',
  },
  publishedAt: '2026-01-30',
  readingTime: 12,
  category: 'AI Tools',
  tags: ['Technical Guide', 'System Architecture', 'AI Dispatch', 'Engineering'],
  featured: false,
};
