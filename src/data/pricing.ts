// src/data/pricing.ts

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface PricingRegion {
  name: string;
  plans: PricingPlan[];
}

export const regions: PricingRegion[] = [
  {
    name: 'United States & Europe',
    plans: [
      {
        title: 'Essential',
        description: 'For growing organizations',
        price: '$3,999/month',
        features: [
          'Basic compliance audit',
          'Standard contract templates',
          'Quarterly risk assessment',
          'Email support',
        ],
      },
      {
        title: 'Professional',
        description: 'For medium enterprises',
        price: '$7,999/month',
        features: [
          'Comprehensive compliance audit',
          'Custom contract drafting',
          'Monthly risk assessment',
          'Priority support',
          'Stakeholder workshops',
        ],
        highlight: true,
      },
      {
        title: 'Enterprise',
        description: 'For large organizations',
        price: 'Custom',
        features: [
          'Full-scale compliance program',
          'Dedicated legal team',
          'Weekly risk assessment',
          '24/7 support',
          'On-site consulting',
        ],
      },
    ],
  },
  {
    name: 'India & APAC',
    plans: [
      {
        title: 'Starter',
        description: 'For startups',
        price: '₹89,999/month',
        features: [
          'Basic compliance check',
          'Standard templates',
          'Quarterly review',
          'Email support',
        ],
      },
      {
        title: 'Growth',
        description: 'For growing companies',
        price: '₹1,99,999/month',
        features: [
          'Full compliance audit',
          'Custom documentation',
          'Monthly review',
          'Priority support',
          'Training sessions',
        ],
        highlight: true,
      },
      {
        title: 'Enterprise',
        description: 'For large enterprises',
        price: 'Custom',
        features: [
          'Comprehensive program',
          'Dedicated team',
          'Weekly reviews',
          '24/7 support',
          'On-site consulting',
        ],
      },
    ],
  },
];
