export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  standardPrice: string;
  foundingPrice: string;
  deliveryTimeline: string;
  revisions: string;
  description: string;
  inclusions: string[];
  exclusions?: string[];
  badge?: string;
}

export interface CarePlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
}

export interface ConceptProject {
  id: string;
  category: 'School' | 'Service Business' | 'Online Store';
  title: string;
  clientLabel: string; // strictly "URAH concept project"
  context: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  keyArchitecture: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProjectBriefInput {
  businessType: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  additionalNotes?: string;
}
