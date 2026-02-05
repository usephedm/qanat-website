import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTA } from '@/components/home/CTA';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI-powered dispatch operations, intelligent automation, and facility management. QANAT builds the operational infrastructure modern businesses need.',
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
