import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="page-container section-padding">
      <div className="max-w-3xl mx-auto">
        <Badge variant="outline" icon={<ShieldCheck size={14} />}>
          PROTOTYPE DEMO CONTENT
        </Badge>
        <h1 className="text-3xl font-bold mt-2 mb-4">Terms of Service</h1>
        <p className="text-sm text-dim mb-6">Last updated: October 2026</p>

        <Card className="flex flex-col gap-4 text-sm text-muted">
          <section>
            <h2 className="text-base font-bold text-main mb-2">1. Platform Overview</h2>
            <p>
              WorkLink provides an intelligent matching platform connecting customers requiring skilled real-world services with verified independent technicians and service professionals within a dynamic 10 km service radius.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-main mb-2">2. Worker Verification & Service Standards</h2>
            <p>
              Technicians listed on WorkLink undergo background verification, trade certification audits, and location validation. WorkLink acts as the discovery and matching engine to facilitate transparent service dispatch.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-main mb-2">3. Pricing & Payment Policy</h2>
            <p>
              All service estimates display working hour rates and distance-based travel expenses upfront. Final payments are processed securely upon customer verification of satisfactory job completion.
            </p>
          </section>

          <section className="p-3 bg-secondary rounded border border-color text-xs">
            <strong>Note:</strong> This document represents prototype legal terms for hackathon demonstration purposes. Official legal terms will be finalized prior to commercial deployment.
          </section>
        </Card>
      </div>
    </div>
  );
};
