// Centralized contact information for San Diego Maids
export const CONTACT_INFO = {
  phone: {
    display: '(858) 544-6420',
    href: 'tel:+18585446420',
    raw: '+18585446420'
  },
  email: {
    display: 'hello@sandiegomaids.com',
    href: 'mailto:hello@sandiegomaids.com',
    raw: 'hello@sandiegomaids.com'
  },
  address: {
    street: '123 Broadway',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    full: '123 Broadway, San Diego, CA 92101'
  },
  social: {
    facebook: 'https://www.facebook.com/sandiegomaids',
    instagram: 'https://www.instagram.com/sandiegomaids',
    yelp: 'https://www.yelp.com/biz/san-diego-maids-san-diego'
  },
  hours: {
    weekday: '8:00 AM - 8:00 PM',
    weekend: '9:00 AM - 6:00 PM'
  }
} as const;
