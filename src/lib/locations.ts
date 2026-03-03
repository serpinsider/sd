// Location data for San Diego Maids
export interface Location {
  name: string;
  slug: string;
  state: string;
  region: string;
  description: string;
  localDescription: string;
  highlights: string[];
  nearbyAreas: string[];
  zipCodes: string[];
}

export const locations: Location[] = [
  {
    name: "San Diego",
    slug: "san-diego",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in San Diego, CA. San Diego Maids serves all San Diego neighborhoods.",
    localDescription: "San Diego is California's second-largest city, spanning from the beaches of Pacific Beach and Ocean Beach to the urban core of downtown and the family neighborhoods of Scripps Ranch and Poway. The year-round sunshine is a draw, but it also means dust accumulation is relentless. San Diego Maids teams are deployed across the city's many distinct communities.",
    highlights: ["Balboa Park", "Gaslamp Quarter", "La Jolla Cove", "Coronado Island"],
    nearbyAreas: ["La Jolla", "Pacific Beach", "Mission Beach", "Hillcrest", "North Park"],
    zipCodes: ["92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109", "92110", "92111", "92113", "92114", "92115", "92116", "92117", "92119", "92120", "92121", "92122", "92123", "92124", "92126", "92127", "92128", "92129", "92130", "92131"]
  },
  {
    name: "La Jolla",
    slug: "la-jolla",
    state: "CA",
    region: "San Diego County",
    description: "Premium house cleaning services in La Jolla, CA. San Diego Maids provides luxury cleaning for La Jolla homes.",
    localDescription: "La Jolla -- 'the jewel' -- is San Diego's most prestigious community. Perched on cliffs above the Pacific, it's home to UCSD, the Salk Institute, and some of the most expensive real estate in San Diego. From the village's boutique charm to the oceanfront estates of La Jolla Shores, homes here demand premium care. San Diego Maids La Jolla teams specialize in high-end coastal properties.",
    highlights: ["La Jolla Cove", "UCSD", "Torrey Pines", "La Jolla Village"],
    nearbyAreas: ["Pacific Beach", "University City", "Del Mar", "Solana Beach"],
    zipCodes: ["92037", "92038"]
  },
  {
    name: "Pacific Beach",
    slug: "pacific-beach",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Pacific Beach, CA. San Diego Maids keeps PB homes spotless.",
    localDescription: "Pacific Beach is San Diego's quintessential beach community, known for its boardwalk, vibrant nightlife, and mix of young professionals and families. The constant sand and salt air from living steps from the ocean mean homes here need regular, thorough cleaning. San Diego Maids teams understand PB's unique coastal lifestyle and keep homes fresh despite the elements.",
    highlights: ["Crystal Pier", "Pacific Beach Boardwalk", "Tourmaline Surf Park", "Mission Bay"],
    nearbyAreas: ["La Jolla", "Mission Beach", "Mission Bay", "Clairemont"],
    zipCodes: ["92109"]
  },
  {
    name: "Mission Beach",
    slug: "mission-beach",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Mission Beach, CA.",
    localDescription: "Mission Beach is a narrow strip of land between Mission Bay and the Pacific Ocean, packed with beachfront cottages, condos, and vacation rentals. The constant sand tracking and salt air make regular cleaning essential. San Diego Maids serves both full-time residents and vacation rental owners who need fast, reliable turnover cleaning.",
    highlights: ["Belmont Park", "Mission Beach Boardwalk", "Mission Bay", "South Mission Beach"],
    nearbyAreas: ["Pacific Beach", "Ocean Beach", "Mission Bay", "Point Loma"],
    zipCodes: ["92109"]
  },
  {
    name: "Ocean Beach",
    slug: "ocean-beach",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Ocean Beach, CA.",
    localDescription: "Ocean Beach is San Diego's most eclectic beach neighborhood, known for its bohemian vibe, dog beach, and tight-knit community. The laid-back OB lifestyle comes with constant sand, salt air, and moisture from the nearby ocean. San Diego Maids teams help OB residents maintain clean, comfortable homes while they enjoy the coastal life.",
    highlights: ["Ocean Beach Pier", "Dog Beach", "Sunset Cliffs", "Newport Avenue"],
    nearbyAreas: ["Point Loma", "Mission Beach", "Pacific Beach", "Mission Hills"],
    zipCodes: ["92107"]
  },
  {
    name: "Point Loma",
    slug: "point-loma",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Point Loma, CA.",
    localDescription: "Point Loma is a hilly peninsula offering stunning views of San Diego Bay, the Pacific Ocean, and the downtown skyline. From the historic Cabrillo National Monument to the charming Liberty Station, this neighborhood features a mix of mid-century homes and modern builds. San Diego Maids teams are experienced with the varied layouts and premium finishes found in Point Loma properties.",
    highlights: ["Cabrillo National Monument", "Liberty Station", "Sunset Cliffs", "Shelter Island"],
    nearbyAreas: ["Ocean Beach", "Mission Hills", "Downtown San Diego", "Coronado"],
    zipCodes: ["92106", "92107"]
  },
  {
    name: "Coronado",
    slug: "coronado",
    state: "CA",
    region: "San Diego County",
    description: "Premium house cleaning services in Coronado, CA. San Diego Maids serves Coronado Island homes.",
    localDescription: "Coronado is an affluent resort city connected to San Diego by the iconic Coronado Bridge. Known for the historic Hotel del Coronado and its pristine beaches, this island community features upscale homes and condos that demand meticulous care. San Diego Maids provides the premium cleaning service that Coronado homeowners expect.",
    highlights: ["Hotel del Coronado", "Coronado Beach", "Coronado Ferry Landing", "Silver Strand"],
    nearbyAreas: ["Downtown San Diego", "Point Loma", "Imperial Beach", "National City"],
    zipCodes: ["92118"]
  },
  {
    name: "Del Mar",
    slug: "del-mar",
    state: "CA",
    region: "San Diego County",
    description: "Premium house cleaning services in Del Mar, CA. San Diego Maids delivers luxury cleaning in Del Mar.",
    localDescription: "Del Mar is a tiny, affluent city famous for its racetrack and stunning beaches. With a population under 5,000 but some of the highest home values in San Diego County, this is a community that demands exceptional service. San Diego Maids cleaners are experienced with the luxury finishes, ocean-view homes, and high expectations that come with this exclusive market.",
    highlights: ["Del Mar Racetrack", "Del Mar Beach", "Torrey Pines State Reserve", "Del Mar Village"],
    nearbyAreas: ["Solana Beach", "Encinitas", "La Jolla", "Carmel Valley"],
    zipCodes: ["92014"]
  },
  {
    name: "Encinitas",
    slug: "encinitas",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Encinitas, CA. San Diego Maids serves all Encinitas communities.",
    localDescription: "Encinitas is a laid-back surf town with a bohemian spirit and strong community identity. The city encompasses distinct communities -- Leucadia, Cardiff-by-the-Sea, Olivenhain, and old Encinitas -- each with their own character. From beachside cottages to the ranches of Olivenhain, San Diego Maids teams clean homes that reflect the diverse, relaxed Encinitas lifestyle.",
    highlights: ["Moonlight Beach", "Swami's Beach", "San Diego Botanic Garden", "Leucadia"],
    nearbyAreas: ["Carlsbad", "Solana Beach", "Del Mar", "Rancho Santa Fe"],
    zipCodes: ["92007", "92023", "92024"]
  },
  {
    name: "Carlsbad",
    slug: "carlsbad",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Carlsbad, CA. San Diego Maids cleans homes throughout Carlsbad.",
    localDescription: "Carlsbad is a prosperous coastal city known for LEGOLAND, the Flower Fields, and a village-by-the-sea downtown. The city's master-planned communities, beach neighborhoods, and golf course estates represent a range of cleaning needs. San Diego Maids Carlsbad teams serve families, retirees, and vacation rental owners throughout this desirable North County city.",
    highlights: ["LEGOLAND California", "Carlsbad Village", "The Flower Fields", "Carlsbad State Beach"],
    nearbyAreas: ["Oceanside", "Encinitas", "Vista", "San Marcos"],
    zipCodes: ["92008", "92009", "92010", "92011"]
  },
  {
    name: "Oceanside",
    slug: "oceanside",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Oceanside, CA. San Diego Maids serves all Oceanside neighborhoods.",
    localDescription: "Oceanside is a large, diverse coastal city at the northern edge of San Diego County, adjacent to Camp Pendleton. The city has been revitalizing rapidly, with a growing downtown scene and rising home values near the coast. Military families, surfers, and longtime residents create a unique community. San Diego Maids cleaners serve Oceanside's mix of beachfront, suburban, and rural properties.",
    highlights: ["Oceanside Pier", "Mission San Luis Rey", "Harbor Beach", "Oceanside Museum of Art"],
    nearbyAreas: ["Carlsbad", "Vista", "Camp Pendleton", "San Marcos"],
    zipCodes: ["92054", "92056", "92057", "92058"]
  },
  {
    name: "Solana Beach",
    slug: "solana-beach",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Solana Beach, CA.",
    localDescription: "Solana Beach is a small, upscale coastal city nestled between Del Mar and Encinitas. Known for the Cedros Design District and Fletcher Cove, this community offers a blend of beach living and boutique charm. San Diego Maids provides thorough, reliable cleaning for Solana Beach's mix of beachfront homes and hillside properties.",
    highlights: ["Cedros Design District", "Fletcher Cove", "Solana Beach Train Station", "Tide Beach Park"],
    nearbyAreas: ["Del Mar", "Encinitas", "Rancho Santa Fe", "Cardiff-by-the-Sea"],
    zipCodes: ["92075"]
  },
  {
    name: "Rancho Santa Fe",
    slug: "rancho-santa-fe",
    state: "CA",
    region: "San Diego County",
    description: "Premium house cleaning services in Rancho Santa Fe, CA. San Diego Maids provides luxury estate cleaning.",
    localDescription: "Rancho Santa Fe is one of the wealthiest communities in the United States, known for its sprawling estates, equestrian properties, and eucalyptus-lined streets. The large homes with custom finishes, wine cellars, and expansive grounds require experienced, detail-oriented cleaning teams. San Diego Maids delivers the premium service Rancho Santa Fe homeowners expect.",
    highlights: ["The Inn at Rancho Santa Fe", "Rancho Santa Fe Golf Club", "Village of Rancho Santa Fe", "Fairbanks Ranch"],
    nearbyAreas: ["Del Mar", "Solana Beach", "Encinitas", "Escondido"],
    zipCodes: ["92067"]
  },
  {
    name: "Carmel Valley",
    slug: "carmel-valley",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Carmel Valley, CA.",
    localDescription: "Carmel Valley is one of San Diego's most desirable master-planned communities, known for excellent schools, upscale shopping at Del Mar Highlands, and proximity to Torrey Pines. The newer construction and well-maintained homes in this family-oriented neighborhood benefit from regular professional cleaning. San Diego Maids teams keep Carmel Valley homes looking their best.",
    highlights: ["Del Mar Highlands Town Center", "Torrey Pines State Reserve", "One Paseo", "Carmel Valley Recreation Center"],
    nearbyAreas: ["Del Mar", "La Jolla", "Rancho Santa Fe", "Scripps Ranch"],
    zipCodes: ["92130"]
  },
  {
    name: "Scripps Ranch",
    slug: "scripps-ranch",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Scripps Ranch, CA.",
    localDescription: "Scripps Ranch is a quiet, tree-lined community in the northern part of San Diego known for its eucalyptus groves, lake, and top-rated schools. The established family homes and newer developments here range from comfortable to spacious, and the inland location means dust is a constant concern. San Diego Maids provides reliable cleaning for Scripps Ranch families.",
    highlights: ["Lake Miramar", "Scripps Ranch Community Park", "Hoyt Park", "Spring Canyon"],
    nearbyAreas: ["Poway", "Mira Mesa", "Rancho Bernardo", "Carmel Valley"],
    zipCodes: ["92131"]
  },
  {
    name: "Poway",
    slug: "poway",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Poway, CA. San Diego Maids serves all Poway neighborhoods.",
    localDescription: "Poway, 'The City in the Country,' offers a semi-rural feel just 20 minutes from downtown San Diego. Known for its excellent schools and family-friendly atmosphere, Poway features spacious homes on larger lots surrounded by rolling hills. The dry inland climate brings significant dust, making regular professional cleaning essential. San Diego Maids teams keep Poway homes spotless.",
    highlights: ["Lake Poway", "Old Poway Park", "Blue Sky Ecological Reserve", "Poway Community Park"],
    nearbyAreas: ["Rancho Bernardo", "Scripps Ranch", "Escondido", "Ramona"],
    zipCodes: ["92064"]
  },
  {
    name: "Rancho Bernardo",
    slug: "rancho-bernardo",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Rancho Bernardo, CA.",
    localDescription: "Rancho Bernardo is a master-planned community in northern San Diego known for its golf courses, wineries, and mix of family homes and retirement communities. The warm, dry climate and proximity to the inland hills mean dust is an ongoing challenge. San Diego Maids provides thorough, reliable cleaning for Rancho Bernardo's diverse housing stock.",
    highlights: ["Rancho Bernardo Inn", "Bernardo Winery", "Lake Hodges", "Rancho Bernardo Community Park"],
    nearbyAreas: ["Poway", "Escondido", "Scripps Ranch", "San Marcos"],
    zipCodes: ["92127", "92128"]
  },
  {
    name: "Escondido",
    slug: "escondido",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Escondido, CA. San Diego Maids cleans homes throughout Escondido.",
    localDescription: "Escondido sits in a valley surrounded by avocado groves and rolling hills in inland North County. The city offers more affordable housing than coastal San Diego while maintaining a strong community feel. The warm, dry inland climate means dust and allergens are significant concerns. San Diego Maids teams provide reliable cleaning to Escondido families who want a fresh, healthy home.",
    highlights: ["San Diego Zoo Safari Park", "Kit Carson Park", "Downtown Grand Avenue", "Daley Ranch"],
    nearbyAreas: ["San Marcos", "Valley Center", "Rancho Bernardo", "Poway"],
    zipCodes: ["92025", "92026", "92027", "92029"]
  },
  {
    name: "San Marcos",
    slug: "san-marcos",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in San Marcos, CA.",
    localDescription: "San Marcos is a growing North County city home to Cal State San Marcos and the popular Restaurant Row. The city's mix of newer developments, established neighborhoods, and student housing creates diverse cleaning needs. San Diego Maids serves San Marcos families, professionals, and property managers with reliable, thorough cleaning service.",
    highlights: ["Cal State San Marcos", "Restaurant Row", "Discovery Hills", "Lake San Marcos"],
    nearbyAreas: ["Escondido", "Vista", "Carlsbad", "Oceanside"],
    zipCodes: ["92069", "92078", "92096"]
  },
  {
    name: "Vista",
    slug: "vista",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Vista, CA.",
    localDescription: "Vista is a North County city known for its thriving craft brewery scene and mix of suburban and semi-rural neighborhoods. The warm inland climate and hillside properties mean dust management is key. San Diego Maids provides affordable, reliable cleaning for Vista's growing community of families and professionals.",
    highlights: ["Moonlight Amphitheatre", "Brengle Terrace Park", "Vista Village", "Guajome County Park"],
    nearbyAreas: ["Oceanside", "San Marcos", "Carlsbad", "Escondido"],
    zipCodes: ["92081", "92083", "92084"]
  },
  {
    name: "Chula Vista",
    slug: "chula-vista",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Chula Vista, CA. San Diego Maids serves all Chula Vista neighborhoods.",
    localDescription: "Chula Vista is San Diego County's second-largest city, stretching from the bayfront to the eastern foothills. The city has seen massive growth in its Eastlake and Otay Ranch communities, with modern family homes and master-planned neighborhoods. San Diego Maids teams serve the full range of Chula Vista -- from established western neighborhoods to the newer developments in the east.",
    highlights: ["Chula Vista Bayfront", "Otay Ranch Town Center", "Living Coast Discovery Center", "Eastlake"],
    nearbyAreas: ["National City", "San Diego", "Bonita", "Otay Mesa"],
    zipCodes: ["91910", "91911", "91913", "91914", "91915"]
  },
  {
    name: "National City",
    slug: "national-city",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in National City, CA.",
    localDescription: "National City is a diverse, working-class community between downtown San Diego and Chula Vista. The city offers affordable housing and a strong sense of community pride. San Diego Maids provides reliable, affordable cleaning services to National City residents who want a clean, comfortable home without the premium price tag.",
    highlights: ["Westfield Plaza Bonita", "Sweetwater Regional Park", "National City Mile of Cars", "Marina District"],
    nearbyAreas: ["Chula Vista", "San Diego", "Imperial Beach", "Bonita"],
    zipCodes: ["91950"]
  },
  {
    name: "El Cajon",
    slug: "el-cajon",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in El Cajon, CA. San Diego Maids cleans homes in El Cajon and East County.",
    localDescription: "El Cajon -- 'the box' in Spanish -- sits in a valley east of San Diego surrounded by mountains. The city is one of San Diego's most diverse communities. Hot summers in the valley mean dust and heat are constant, making regular cleaning essential for comfort. San Diego Maids teams serve El Cajon's diverse neighborhoods reliably.",
    highlights: ["Prescott Promenade", "Water Conservation Garden", "Sycuan Casino", "Viejas Outlets"],
    nearbyAreas: ["La Mesa", "Santee", "Lakeside", "Spring Valley"],
    zipCodes: ["92019", "92020", "92021"]
  },
  {
    name: "La Mesa",
    slug: "la-mesa",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in La Mesa, CA.",
    localDescription: "La Mesa, the 'Jewel of the Hills,' is a charming East County city known for its walkable downtown village, antique shops, and tree-lined streets. The mix of mid-century homes and newer condos creates diverse cleaning needs. San Diego Maids provides attentive cleaning service to La Mesa homeowners who take pride in their community.",
    highlights: ["La Mesa Village", "Mount Helix", "Lake Murray", "Harry Griffen Park"],
    nearbyAreas: ["El Cajon", "San Diego", "Santee", "Spring Valley"],
    zipCodes: ["91941", "91942"]
  },
  {
    name: "Santee",
    slug: "santee",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Santee, CA.",
    localDescription: "Santee is a family-friendly East County city along the San Diego River, known for its recreational trails and affordable housing. The warm inland climate and proximity to the foothills mean dust is a constant concern. San Diego Maids provides dependable cleaning for Santee families looking to maintain a comfortable home.",
    highlights: ["Santee Lakes", "Mission Trails Regional Park", "Town Center Community Park", "West Hills Community"],
    nearbyAreas: ["El Cajon", "La Mesa", "Lakeside", "San Diego"],
    zipCodes: ["92071"]
  },
  {
    name: "Lakeside",
    slug: "lakeside",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Lakeside, CA.",
    localDescription: "Lakeside is a semi-rural community in East County known for its equestrian culture and proximity to El Capitan Reservoir. Larger properties and ranch-style homes are common here, requiring thorough cleaning to manage the dust and pollen from the surrounding hills. San Diego Maids teams handle Lakeside's spacious homes with care.",
    highlights: ["Lindo Lake", "El Capitan Reservoir", "Barona Resort & Casino", "Lakeside Rodeo Grounds"],
    nearbyAreas: ["Santee", "El Cajon", "Ramona", "Alpine"],
    zipCodes: ["92040"]
  },
  {
    name: "Hillcrest",
    slug: "hillcrest",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Hillcrest, San Diego.",
    localDescription: "Hillcrest is San Diego's vibrant, walkable urban neighborhood known for its diverse community, thriving restaurant scene, and proximity to Balboa Park. The mix of historic Craftsman homes, mid-century apartments, and modern condos requires cleaning teams who can adapt to varied layouts and finishes. San Diego Maids keeps Hillcrest homes spotless.",
    highlights: ["Balboa Park", "Hillcrest Farmers Market", "University Avenue", "Pride Flag"],
    nearbyAreas: ["North Park", "Mission Hills", "University Heights", "Bankers Hill"],
    zipCodes: ["92103"]
  },
  {
    name: "North Park",
    slug: "north-park",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in North Park, San Diego.",
    localDescription: "North Park is one of San Diego's trendiest neighborhoods, packed with craft breweries, independent shops, and a thriving arts scene. The neighborhood's Craftsman bungalows, Spanish-style homes, and modern infill demand cleaning teams who appreciate character and detail. San Diego Maids serves North Park's creative community with flexible, reliable cleaning.",
    highlights: ["North Park Observatory", "30th Street Corridor", "Morley Field", "North Park Farmers Market"],
    nearbyAreas: ["Hillcrest", "University Heights", "South Park", "City Heights"],
    zipCodes: ["92104"]
  },
  {
    name: "Mission Hills",
    slug: "mission-hills",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Mission Hills, San Diego.",
    localDescription: "Mission Hills is one of San Diego's most established and sought-after neighborhoods, perched on a hillside overlooking Mission Valley and San Diego Bay. The tree-lined streets feature beautiful Craftsman, Spanish Revival, and mid-century homes. San Diego Maids provides careful, detail-oriented cleaning for these historic and architecturally significant properties.",
    highlights: ["Pioneer Park", "Fort Stockton Line", "Presidio Park", "Mission Hills Nursery"],
    nearbyAreas: ["Hillcrest", "Old Town", "Point Loma", "Bankers Hill"],
    zipCodes: ["92103"]
  },
  {
    name: "Downtown San Diego",
    slug: "downtown-san-diego",
    state: "CA",
    region: "San Diego County",
    description: "Professional house cleaning services in Downtown San Diego.",
    localDescription: "Downtown San Diego is a thriving urban center featuring high-rise condos, historic lofts, and luxury apartments across neighborhoods like the Gaslamp Quarter, East Village, Little Italy, and the Marina District. The compact living spaces and modern finishes of downtown units require efficient, thorough cleaning. San Diego Maids serves downtown residents and property managers with reliable service.",
    highlights: ["Gaslamp Quarter", "Little Italy", "Petco Park", "Seaport Village"],
    nearbyAreas: ["Hillcrest", "Bankers Hill", "Point Loma", "Coronado"],
    zipCodes: ["92101"]
  },
];

// Get location with state
export function getLocationWithState(locationName: string, locationSlug?: string): string {
  let location: Location | undefined;
  
  if (locationSlug) {
    location = locations.find(loc => loc.slug === locationSlug);
  } else {
    location = locations.find(loc => loc.name === locationName);
  }
  
  if (location) {
    return `${location.name}, ${location.state}`;
  }
  
  // Default fallback
  return `${locationName}, CA`;
}

// Get just the state for a location
export function getLocationState(locationSlug: string): string {
  const location = locations.find(loc => loc.slug === locationSlug);
  return location?.state || "CA";
}

// Get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(loc => loc.slug === slug);
}

// Get popular locations for featured display
export const popularLocations = [
  "san-diego", "la-jolla", "pacific-beach", "coronado", "del-mar",
  "carlsbad", "encinitas", "chula-vista"
];

// Get location path helper
export function getLocationPath(slug: string, service?: string): string {
  const basePath = `/locations/${slug}`;
  return service ? `${basePath}/${service}` : basePath;
}

// Get locations by region
export function getLocationsByRegion(region: string): Location[] {
  return locations.filter(loc => loc.region === region);
}

// Get all unique regions
export function getRegions(): string[] {
  return [...new Set(locations.map(loc => loc.region))];
}
