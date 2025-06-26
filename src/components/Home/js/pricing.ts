export interface IncludeItem {
  text: string;
  icon?: string;
  check: boolean;
}

export interface PricingPlan {
  title: string;
  price: number;
  active?: boolean;
  includes: IncludeItem[];
}

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    price: 9.99,
    includes: [
      { text: '2 GB of space', check: true },
      { text: '14 days of backups', check: true },
      { text: 'Social integrations', check: true },
      { text: 'Client billing', check: true },
      { text: 'Remote access', check: false },
      { text: 'Custom domain', check: false },
      { text: '24 hours support', check: false },
      { text: 'Admin tools', check: false },
      { text: 'Collaboration tools', check: false },
      { text: 'User management', check: false }
    ]
  },
  {
    title: 'Professional',
    price: 19.99,
    active: true,
    includes: [
      { text: '2 GB of space', check: true },
      { text: '14 days of backups', check: true },
      { text: 'Social integrations', check: true },
      { text: 'Client billing', check: true },
      { text: 'Remote access', check: true },
      { text: 'Custom domain', check: true },
      { text: '24 hours support', check: true },
      { text: 'Admin tools', check: false },
      { text: 'Collaboration tools', check: false },
      { text: 'User management', check: false }
    ]
  },
  {
    title: 'Team',
    price: 49.99,
    includes: [
      { text: '2 GB of space', check: true },
      { text: '14 days of backups', check: true },
      { text: 'Social integrations', check: true },
      { text: 'Client billing', check: true },
      { text: 'Remote access', check: true },
      { text: 'Custom domain', check: true },
      { text: '24 hours support', check: true },
      { text: 'Admin tools', check: true },
      { text: 'Collaboration tools', check: true },
      { text: 'User management', check: true }
    ]
  }
];
