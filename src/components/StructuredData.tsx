import { CONTACT_INFO } from '@/lib/contact';

interface StructuredDataProps {
  type: 'local-business' | 'service' | 'location' | 'organization' | 'website' | 'faq';
  data?: {
    location?: string;
    service?: string;
    cities?: string[];
  };
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'local-business':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "San Diego Maids",
          "image": "https://sandiegomaids.com/ogs-image.jpg",
          "description": "House cleaning services in San Diego County -- La Jolla, Carlsbad, Encinitas, Chula Vista & more. Reliable, thorough, and trusted cleaning for your home.",
          "url": "https://sandiegomaids.com",
          "telephone": CONTACT_INFO.phone.raw,
          "email": CONTACT_INFO.email.raw,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": CONTACT_INFO.address.state,
            "addressLocality": CONTACT_INFO.address.city,
            "postalCode": CONTACT_INFO.address.zip,
            "streetAddress": CONTACT_INFO.address.street
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7157,
            "longitude": -117.1611
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "San Diego County" },
            { "@type": "City", "name": "San Diego" },
            { "@type": "City", "name": "La Jolla" },
            { "@type": "City", "name": "Carlsbad" },
            { "@type": "City", "name": "Encinitas" },
            { "@type": "City", "name": "Del Mar" },
            { "@type": "City", "name": "Coronado" },
            { "@type": "City", "name": "Chula Vista" },
            { "@type": "City", "name": "Oceanside" },
            { "@type": "City", "name": "Escondido" },
            { "@type": "City", "name": "El Cajon" },
            { "@type": "City", "name": "Poway" },
            { "@type": "AdministrativeArea", "name": "Pacific Beach" },
            { "@type": "AdministrativeArea", "name": "Ocean Beach" },
            { "@type": "AdministrativeArea", "name": "Point Loma" },
            { "@type": "AdministrativeArea", "name": "Hillcrest" },
            { "@type": "AdministrativeArea", "name": "North Park" },
            { "@type": "AdministrativeArea", "name": "Mission Hills" },
            { "@type": "AdministrativeArea", "name": "Rancho Santa Fe" },
            { "@type": "AdministrativeArea", "name": "Carmel Valley" },
            { "@type": "AdministrativeArea", "name": "Scripps Ranch" },
            { "@type": "AdministrativeArea", "name": "Rancho Bernardo" },
            { "@type": "AdministrativeArea", "name": "Downtown San Diego" }
          ],
          "serviceType": ["House Cleaning", "Maid Service", "Residential Cleaning"],
          "priceRange": "$80-$400",
          "openingHours": ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-18:00"],
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
          "currenciesAccepted": "USD",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/sandiegomaids",
            "https://www.instagram.com/sandiegomaids",
            "https://www.linkedin.com/company/sandiegomaids",
            "https://twitter.com/sandiegomaids"
          ]
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "San Diego Maids",
          "url": "https://sandiegomaids.com",
          "logo": "https://sandiegomaids.com/ogs-image.jpg",
          "description": "House cleaning services in San Diego County -- La Jolla, Carlsbad, Encinitas, Chula Vista & surrounding areas.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone.raw,
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/sandiegomaids",
            "https://www.instagram.com/sandiegomaids",
            "https://www.linkedin.com/company/sandiegomaids",
            "https://twitter.com/sandiegomaids"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "San Diego Maids",
          "alternateName": ["San Diego Maids Cleaning", "sandiegomaids.com"],
          "url": "https://sandiegomaids.com",
          "description": "Professional house cleaning services in San Diego County -- La Jolla, Pacific Beach, Carlsbad, Encinitas, Chula Vista, and all San Diego neighborhoods."
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's included in your cleans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every clean includes sweeping, mopping, vacuuming, cleaning surfaces in bedrooms, bathrooms, common areas, and kitchen. We ensure thorough cleaning of all specified areas."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between a standard clean and a deep clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our deep cleans include everything in a standard clean plus wiping down doors, door frames, windowsills, window frames, and baseboards for a more thorough cleaning experience."
              }
            },
            {
              "@type": "Question",
              "name": "What's a move out clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Move in/out cleans are our most thorough service. We include everything from the deep clean plus cleaning inside cabinets, closets, and wiping down all shelves to ensure the space is ready for new occupants."
              }
            },
            {
              "@type": "Question",
              "name": "Do you bring your own supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use pet-safe and non-toxic products. We bring our own mops and vacuum (upon request)."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer recurring service discounts?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Save 10% with weekly service, 5% with bi-weekly service, or $10 off monthly cleanings."
              }
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `House Cleaning Services${data?.location ? ` in ${data.location}` : ''}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "San Diego Maids",
            "url": "https://sandiegomaids.com"
          },
          "serviceType": "House Cleaning",
          "description": `House cleaning and maid services${data?.location ? ` in ${data.location}` : ''}. Regular cleaning, deep cleaning, move-out cleaning, and specialty services.`,
          "areaServed": data?.location ? {
            "@type": "City",
            "name": data.location
          } : undefined,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "House Cleaning Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Cleaning", "description": "Regular maintenance cleaning for your home" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning", "description": "Thorough cleaning of hard-to-reach areas, baseboards, and more" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Move-Out Cleaning", "description": "Complete cleaning to get your deposit back" } },
            ]
          }
        };

      case 'location':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `House Cleaning Services in ${data?.location}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "San Diego Maids",
            "url": "https://sandiegomaids.com"
          },
          "serviceType": "House Cleaning",
          "areaServed": {
            "@type": "City",
            "name": data?.location
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Cleaning Services in ${data?.location}`,
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Cleaning", "description": "Regular maintenance cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning", "description": "Thorough, detailed cleaning service" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Move-Out Cleaning", "description": "Complete cleaning for moving in or out" } },
            ]
          }
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}