// src/data/thoughtLeadership.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  imageUrl: string;
  content: string; // full article body
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'future-of-privacy-ai',
    title: 'The Future of Privacy in the Age of AI',
    excerpt:
      'Exploring the intersection of artificial intelligence and data privacy regulations, and what it means for businesses.',
    date: 'March 15, 2024',
    author: 'Nidhi Sodhani',
    tags: ['AI', 'Privacy', 'GDPR'],
    imageUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    content: `
Artificial intelligence is transforming how organizations collect, process, and analyze data. 
While this creates opportunities for efficiency and innovation, it also raises complex privacy questions.

In this article, we look at:
• How AI-driven decision making interacts with existing privacy laws like GDPR and CCPA  
• Why data minimization, transparency, and explainability matter more than ever  
• Practical steps organisations can take to future-proof their privacy programs as AI adoption grows.

Ultimately, AI and privacy are not in conflict. With the right governance, documentation, and risk management, 
businesses can innovate responsibly while maintaining customer trust.
    `.trim(),
  },
  {
    slug: 'global-data-protection-laws',
    title: 'Navigating Global Data Protection Laws',
    excerpt:
      'A comprehensive guide to understanding and implementing international data protection requirements.',
    date: 'March 10, 2024',
    author: 'Legal Team',
    tags: ['Compliance', 'Global', 'Data Protection'],
    imageUrl:
      'https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80',
    content: `
Global organisations need to comply with multiple overlapping data protection regimes. 
This article provides a high-level roadmap for building a scalable, region-aware compliance framework.

Key ideas include:
• Establishing a single source of truth for data flows and processing activities  
• Mapping regulatory obligations by geography and business unit  
• Standardising documentation and DPIA processes while allowing local variations where required.
    `.trim(),
  },
  {
    slug: 'strategic-it-procurement-2024',
    title: 'Strategic IT Procurement in 2024',
    excerpt:
      'Best practices for optimising your IT procurement process in an evolving technological landscape.',
    date: 'March 5, 2024',
    author: 'Procurement Team',
    tags: ['Procurement', 'Strategy', 'IT'],
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    content: `
IT procurement has moved from tactical purchasing to a strategic enabler of transformation. 
We discuss how legal, commercial and technical teams can collaborate to extract more value from vendor relationships.
    `.trim(),
  },
  {
    slug: 'esg-compliance-modern-necessity',
    title: 'ESG Compliance: A Modern Necessity',
    excerpt:
      "Understanding the importance of Environmental, Social, and Governance compliance in today's business world.",
    date: 'March 1, 2024',
    author: 'ESG Team',
    tags: ['ESG', 'Sustainability', 'Compliance'],
    imageUrl:
      'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
    content: `
Investors, customers and regulators increasingly expect organisations to demonstrate ESG performance. 
This article explains the link between ESG frameworks, disclosure obligations and enterprise risk.
    `.trim(),
  },
  {
    slug: 'cybersecurity-risk-management',
    title: 'Cybersecurity Risk Management',
    excerpt:
      'Essential strategies for managing and mitigating cybersecurity risks in your organisation.',
    date: 'February 25, 2024',
    author: 'Security Team',
    tags: ['Cybersecurity', 'Risk', 'Management'],
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    content: `
Cyber risk is now board-level risk. We walk through practical governance, 
contractual and technical controls to reduce the likelihood and impact of incidents.
    `.trim(),
  },
  {
    slug: 'digital-transformation-compliance',
    title: 'Digital Transformation Compliance',
    excerpt:
      'Ensuring compliance while undergoing digital transformation initiatives.',
    date: 'February 20, 2024',
    author: 'Digital Team',
    tags: ['Digital', 'Transformation', 'Compliance'],
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    content: `
Digital transformation can quickly outpace existing policies and controls. 
Here we outline how to embed legal, privacy and security requirements into transformation programmes from day one.
    `.trim(),
  },
];
