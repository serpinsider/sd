'use client';

import Link from 'next/link';
import { INLINE_STYLES } from '@/styles/colors';
import { TYPOGRAPHY } from '@/styles/typography';
import type { Location } from '@/lib/locations';

interface LocalContentSectionProps {
  location: Location;
  locationWithState: string;
}

export default function LocalContentSection({ location, locationWithState }: LocalContentSectionProps) {
  return (
    <section className="py-16 md:py-20" style={INLINE_STYLES.secondary}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              House Cleaning in {locationWithState}
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              {location.localDescription}
            </p>

            {location.highlights.length > 0 && (
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-[#dfbd69] mb-3">
                  {location.name} Landmarks We Serve Near
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm text-white/80"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {location.zipCodes.length > 0 && (
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-[#dfbd69] mb-3">
                  Zip Codes We Serve in {location.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-white/70"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {location.nearbyAreas.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#dfbd69] mb-4">
                  Nearby Service Areas
                </h3>
                <ul className="space-y-2">
                  {location.nearbyAreas.map((area) => (
                    <li key={area} className="text-white/75 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#dfbd69] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-[#dfbd69]/10 border border-[#dfbd69]/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#dfbd69] mb-3">
                {location.region}
              </h3>
              <p className="text-white/75 text-sm mb-4">
                Serving all of {location.region} with licensed, insured, and background-checked cleaning professionals.
              </p>
              <Link
                href="/quote"
                className="block w-full text-center bg-[#dfbd69] text-slate-900 py-3 px-6 rounded-lg font-semibold hover:bg-[#dfbd69]/90 transition-all duration-300 hover:-translate-y-[1px]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
