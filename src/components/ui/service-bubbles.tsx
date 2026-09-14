const serviceBubbles: Record<string, string[]> = {
  "digital-strategy": ["Digital Audit", "Audience Research", "Competitor Analysis", "Customer Journey", "Channel Strategy", "Digital Roadmap"],
  "branding-campaign": ["Brand Strategy", "Naming", "Visual Identity", "Art Direction", "Brand Guidelines", "Packaging"],
  "social-media": ["Social Media", "Content Strategy", "Content Calendar", "Copywriting", "Community Management", "Social Listening"],
  "creative-content": ["Campaign Creative", "Photography", "Video Production", "Motion Design", "AI Content Production"],
  "web-digital-experience": ["Web Design", "UI/UX", "Web Development", "Shopify Development", "E-Commerce", "Landing Pages", "Custom Digital Experiences"],
  "performance-marketing": ["Meta Ads", "Google Ads", "TikTok Ads", "SEO", "E-mail Marketing", "CRO", "Analytics & Tracking"],
  "branding-merchandise": ["Merchandise Strategy", "Product Curation", "Custom Apparel", "Branded Products", "Unboxing Experience", "Production Management"],
};

export function ServiceBubbles({ serviceId }: { serviceId: string }) {
  const labels = serviceBubbles[serviceId];
  if (!labels) return null;

  return (
    <span className="mt-5 flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="inline-flex max-w-full items-center rounded-full border border-line bg-bg/70 px-3.5 py-2 text-xs font-medium leading-snug tracking-[0.01em] text-fg-secondary transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-fg sm:px-4 sm:text-sm"
        >
          {label}
        </span>
      ))}
    </span>
  );
}
