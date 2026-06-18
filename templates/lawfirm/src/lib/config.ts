import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Salgado Law Office",
    tagline: "Your Legal Advocate. We Fight.",
    phone: "(209) 300-7825",
    phoneHref: "tel:+12093007825",
    email: "info@salgadolawoffice.com",
    address: "720 13th St Ste A, Modesto, CA 95354, USA",
    city: "Modesto",
    serviceAreas: ["Modesto", "Ceres", "Turlock", "Oakdale", "Riverbank"],
    license: "CA Bar #123456",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ember",
    niche: "lawfirm",
  },

  services: [
    { icon: "shield-check", title: "Personal Injury", desc: "We represent victims of accidents, ensuring you receive fair compensation for your injuries and losses.", urgent: false },
    { icon: "heart", title: "Family Law", desc: "Compassionate legal guidance for divorce, child custody, support, and other sensitive family matters.", urgent: false },
    { icon: "briefcase", title: "Criminal Defense", desc: "Aggressive defense for those accused of crimes, protecting your rights and fighting for your freedom.", urgent: false },
    { icon: "dollar-sign", title: "Business Law", desc: "Comprehensive legal services for businesses, from formation and contracts to litigation and compliance.", urgent: false },
    { icon: "home", title: "Estate Planning", desc: "Secure your legacy with wills, trusts, and probate services, ensuring your wishes are honored.", urgent: false },
    { icon: "truck", title: "Immigration Law", desc: "Assisting individuals and families with visas, green cards, citizenship, and deportation defense.", urgent: false }
  ],

  testimonials: [
    { name: "Maria S.", location: "Modesto, CA", stars: 5, text: "After my car accident, Salgado Law Office handled everything. They were incredibly professional and kept me informed every step of the way. I received a settlement that truly helped me recover, and I couldn't be more grateful for their dedication and hard work. Highly recommend!" },
    { name: "David L.", location: "Ceres, CA", stars: 5, text: "Going through a divorce was one of the hardest times of my life. The team at Salgado Law Office provided not just legal expertise but also much-needed emotional support. They fought for my rights regarding child custody and achieved a fair outcome. Thank you for your unwavering support." },
    { name: "Jessica P.", location: "Turlock, CA", stars: 5, text: "I was facing serious charges and felt overwhelmed. Salgado Law Office took my case and immediately put my mind at ease. Their criminal defense team was sharp, strategic, and truly cared about my future. They achieved a far better result than I ever expected. Trustworthy and effective!" }
  ],

  trustBadges: [
    "California Bar Licensed", "Experienced Legal Team", "Client-Focused Representation", "Proven Track Record", "Free Consultation"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 100, label: "Years Combined Experience", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Serving Modesto", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Experienced Attorneys", desc: "Our team brings years of legal expertise to every case, ensuring top-tier representation." },
    { icon: "shield-check", title: "Client-Focused Approach", desc: "We prioritize your needs, offering personalized strategies and clear communication." },
    { icon: "dollar-sign", title: "Transparent Fees", desc: "Clear, upfront fee structures with no hidden costs, so you know what to expect." },
    { icon: "phone", title: "Accessible & Responsive", desc: "We are always available to answer your questions and provide timely updates on your case." },
    { icon: "thumbs-up", title: "Strong Advocacy", desc: "Aggressive and effective representation to protect your rights and achieve the best possible outcome." },
    { icon: "home", title: "Local Expertise", desc: "Deep understanding of local laws and court systems in Modesto and surrounding areas." }
  ],

  formServiceOptions: ["Personal Injury", "Family Law", "Criminal Defense", "Business Law", "Estate Planning", "Immigration Law"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!