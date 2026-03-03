'use client';

import Link from 'next/link';

interface Area {
  name: string;
  slug?: string;
}

interface AreasWeServeProps {
  state: 'CA';
  title?: string;
  description?: string;
}

const areasByState = {
  CA: {
    title: 'Areas We Serve in San Diego',
    description: 'Cleaning services throughout San Diego County.',
    sections: [
      {
        title: 'Coastal',
        areas: [
          { name: 'La Jolla' },
          { name: 'Pacific Beach' },
          { name: 'Mission Beach' },
          { name: 'Ocean Beach' },
          { name: 'Point Loma' },
          { name: 'Coronado' },
          { name: 'Del Mar' },
          { name: 'Solana Beach' },
        ]
      },
      {
        title: 'North County',
        areas: [
          { name: 'Encinitas' },
          { name: 'Carlsbad' },
          { name: 'Oceanside' },
          { name: 'Escondido' },
          { name: 'San Marcos' },
          { name: 'Vista' },
          { name: 'Rancho Santa Fe' },
          { name: 'Rancho Bernardo' },
        ]
      },
      {
        title: 'Central & East',
        areas: [
          { name: 'San Diego' },
          { name: 'Hillcrest' },
          { name: 'North Park' },
          { name: 'Carmel Valley' },
          { name: 'Chula Vista' },
          { name: 'El Cajon' },
          { name: 'La Mesa' },
          { name: 'Poway' },
        ]
      }
    ]
  }
};

import { TYPOGRAPHY } from '@/styles/typography';
import { INLINE_STYLES } from '@/styles/colors';

export default function AreasWeServe({ state, title, description }: AreasWeServeProps) {
  const stateData = areasByState[state];
  const displayTitle = title || stateData.title;
  const displayDescription = description || stateData.description;

  return (
    <section className="py-20" style={INLINE_STYLES.primary}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={TYPOGRAPHY.sectionTitle}>
            {displayTitle}
          </h2>
          <p className={`${TYPOGRAPHY.description} max-w-3xl mx-auto`}>
            {displayDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateData.sections.map((section, idx) => (
            <div key={idx} className="bg-[rgba(22,48,75,0.95)] backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8">
              <h3 className="text-xl font-serif font-bold text-[#dfbd69] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.areas.map((area, areaIdx) => (
                  <li key={areaIdx} className="flex items-center text-white/80">
                    <svg className="w-4 h-4 text-[#dfbd69] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {area.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
