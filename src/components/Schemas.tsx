
const Schemas = () => {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Indo Cipanas Bonsai",
      "description": "PT Indo Cipanas Bonsai is a premier supplier of high-quality bonsai, rare plants, and landscaping greenery, specializing in export-grade ornamental plants.",
      "logo": "https://lh5.googleusercontent.com/p/AF1QipNDXnxmDLb6JcbqT70SpWFnkG2T5thvmsBrjuze=s0",
      "url": "https://icbplants.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kp Hanjawar",
        "addressLocality": "Desa Cimacan",
        "addressRegion": "Cipanas, Cianjur",
        "postalCode": "43253",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+62-838-6966-3229",
        "contactType": "customer service",
        "email": "business@icbplants.com"
      },
      "sameAs": [
        "https://instagram.com/timurbonsai"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Indo Cipanas Bonsai",
      "openingHours": "Mo-Su 09:00-18:00",
      "hasMap": "https://maps.google.com/?q=Indo+Cipanas+Bonsai",
      "paymentAccepted": ["Bank Transfer", "PayPal", "Letter of Credit (LC)"],
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Semi-Mature Bonsai",
      "description": "High-quality, 70-80% developed bonsai trees, perfect for export and further cultivation.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "priceValidUntil": "2024-12-31",
        "price": "Contact for pricing"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the minimum order requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum order varies by plant type. For bulk landscaping plants, MOQ is 100 units; for bonsai, MOQ is 10 units."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide international shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we export worldwide. We ensure compliance with international regulations."
          }
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};

export default Schemas;
