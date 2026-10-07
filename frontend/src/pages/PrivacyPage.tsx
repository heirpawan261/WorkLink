import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="page-container section-padding">
      <div className="max-w-3xl mx-auto">
        <Badge variant="outline" icon={<ShieldCheck size={14} />}>
          PROTOTYPE DEMO CONTENT
        </Badge>
        <h1 className="text-3xl font-bold mt-2 mb-4">Privacy Policy</h1>
        <p className="text-sm text-dim mb-6">Last updated: October 2026</p>

        <Card className="flex flex-col gap-4 text-sm text-muted">
          <section>
            <h2 className="text-base font-bold text-main mb-2">1. Information We Collect</h2>
            <p>
              WorkLink collects location data solely within the 10 km service radius to calculate proximity match scores, calculate travel expenses, and dispatch local technicians efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-main mb-2">2. How Data is Used</h2>
            <p>
              Your contact details and service requirements are shared with your selected worker only after booking confirmation. We do not sell user data to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-main mb-2">3. Data Security & Storage</h2>
            <p>
              All user records, worker certifications, and transaction details are encrypted using industry-standard protocols.
            </p>
          </section>

          <section className="p-3 bg-secondary rounded border border-color text-xs">
            <strong>Note:</strong> This Privacy Policy is a prototype demonstration document for the WorkLink hackathon submission.
          </section>
        </Card>
      </div>
    </div>
  );
};
