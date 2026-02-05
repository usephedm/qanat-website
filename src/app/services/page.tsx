import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI-powered dispatch automation, intelligent operations, and team scaling. QANAT builds the operational infrastructure that took one client from zero to $2.5M ARR.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {SERVICES.map((service, i) => (
        <div key={service.id}>
          <div className="divider" />
          <ServiceDetail service={service} index={i} />
        </div>
      ))}
      <div className="divider" />
      <CTA />
    </>
  );
}
