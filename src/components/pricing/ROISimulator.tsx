'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/animations/MagneticButton';

export function ROISimulator() {
  const [dispatchers, setDispatchers] = useState(10);
  const [avgJobValue, setAvgJobValue] = useState(250);
  const [jobsPerDay, setJobsPerDay] = useState(20);
  const [currentEfficiency, setCurrentEfficiency] = useState(65);

  const roi = useMemo(() => {
    const currentMonthlyRevenue = avgJobValue * jobsPerDay * 22 * (currentEfficiency / 100);
    const optimizedEfficiency = Math.min(currentEfficiency + 25, 98);
    const optimizedMonthlyRevenue = avgJobValue * jobsPerDay * 22 * (optimizedEfficiency / 100);
    const monthlyGain = optimizedMonthlyRevenue - currentMonthlyRevenue;
    const annualGain = monthlyGain * 12;
    const estimatedCost = dispatchers <= 10 ? 5000 : dispatchers <= 50 ? 15000 : 25000;
    const annualCost = estimatedCost * 12;
    const netROI = annualGain - annualCost;
    const roiMultiple = annualCost > 0 ? annualGain / annualCost : 0;
    const timeSaved = dispatchers * 2.5; // hours per week

    return {
      currentMonthlyRevenue,
      optimizedMonthlyRevenue,
      monthlyGain,
      annualGain,
      estimatedCost,
      annualCost,
      netROI,
      roiMultiple,
      optimizedEfficiency,
      timeSaved,
    };
  }, [dispatchers, avgJobValue, jobsPerDay, currentEfficiency]);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(20,184,166,0.03),transparent)]" />

      <Container className="relative">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              ROI Simulator
            </span>
            <h2 className="text-heading-2">
              Calculate your operational ROI
            </h2>
            <p className="text-body-lg mt-4">
              Plug in your numbers. See what QANAT infrastructure could mean for
              your bottom line.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl border border-border bg-surface/30 space-y-8">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                Your Operation
              </h3>

              {/* Dispatchers */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-muted">Number of Dispatchers</label>
                  <span className="text-sm font-mono text-accent">{dispatchers}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={dispatchers}
                  onChange={(e) => setDispatchers(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-elevated rounded-full appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted/50 mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Avg Job Value */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-muted">Average Job Value</label>
                  <span className="text-sm font-mono text-accent">${avgJobValue}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-elevated rounded-full appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted/50 mt-1">
                  <span>$50</span>
                  <span>$2,000</span>
                </div>
              </div>

              {/* Jobs Per Day */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-muted">Jobs Per Day</label>
                  <span className="text-sm font-mono text-accent">{jobsPerDay}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={jobsPerDay}
                  onChange={(e) => setJobsPerDay(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-elevated rounded-full appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted/50 mt-1">
                  <span>5</span>
                  <span>200</span>
                </div>
              </div>

              {/* Current Efficiency */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-muted">Current Dispatch Efficiency</label>
                  <span className="text-sm font-mono text-accent">{currentEfficiency}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="90"
                  step="5"
                  value={currentEfficiency}
                  onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-elevated rounded-full appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted/50 mt-1">
                  <span>30%</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {/* Main ROI number */}
              <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Projected Annual ROI
                </span>
                <motion.div
                  key={roi.netROI}
                  initial={{ scale: 0.95, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-4xl md:text-5xl font-semibold text-accent mt-3"
                >
                  {roi.netROI > 0 ? '+' : ''}${Math.round(roi.netROI).toLocaleString()}
                </motion.div>
                <p className="text-sm text-muted mt-2">
                  {roi.roiMultiple.toFixed(1)}x return on investment
                </p>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-border bg-surface/30">
                  <span className="text-xs text-muted block">Current Monthly Revenue</span>
                  <span className="text-lg font-semibold text-foreground mt-1 block">
                    ${Math.round(roi.currentMonthlyRevenue).toLocaleString()}
                  </span>
                  <span className="text-xs text-muted">{currentEfficiency}% efficiency</span>
                </div>
                <div className="p-5 rounded-xl border border-accent/20 bg-accent/5">
                  <span className="text-xs text-accent block">Optimized Monthly Revenue</span>
                  <span className="text-lg font-semibold text-foreground mt-1 block">
                    ${Math.round(roi.optimizedMonthlyRevenue).toLocaleString()}
                  </span>
                  <span className="text-xs text-accent">{roi.optimizedEfficiency}% efficiency</span>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface/30">
                  <span className="text-xs text-muted block">Monthly Revenue Gain</span>
                  <span className="text-lg font-semibold text-accent mt-1 block">
                    +${Math.round(roi.monthlyGain).toLocaleString()}
                  </span>
                </div>
                <div className="p-5 rounded-xl border border-border bg-surface/30">
                  <span className="text-xs text-muted block">Estimated QANAT Cost</span>
                  <span className="text-lg font-semibold text-foreground mt-1 block">
                    ${roi.estimatedCost.toLocaleString()}/mo
                  </span>
                </div>
              </div>

              {/* Additional metrics */}
              <div className="p-5 rounded-xl border border-border bg-surface/30">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-muted block">Time Saved Weekly</span>
                    <span className="text-lg font-semibold text-foreground mt-1 block">
                      {roi.timeSaved.toFixed(0)} hours
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted block">Efficiency Improvement</span>
                    <span className="text-lg font-semibold text-accent mt-1 block">
                      +{roi.optimizedEfficiency - currentEfficiency}%
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <MagneticButton className="w-full">
                <Button href="/demo" className="w-full justify-center" size="lg">
                  Get Your Custom ROI Analysis
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </MagneticButton>

              <p className="text-xs text-center text-muted/50">
                *Estimates based on industry benchmarks. Actual results may vary.
                Request a demo for a detailed analysis of your specific operation.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
