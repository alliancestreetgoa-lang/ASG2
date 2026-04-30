import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import heroDubai from "@/assets/hero-dubai.png";
import abstractArch from "@/assets/abstract-arch.png";
import marbleLobby from "@/assets/marble-lobby.png";
import conferenceRoom from "@/assets/conference-room.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const entities = [
  {
    id: "01",
    name: "Alliance Street Consultancy",
    location: "Dubai, UAE",
    desc: "Company Formation & International Tax Strategy. Free zone & mainland structuring. Tax-efficient holding frameworks. UAE residency.",
    stats: "0% Personal Income Tax | 9% Federal Corporate Tax | 500+ Structures",
    url: "www.alliancestreet.ae"
  },
  {
    id: "02",
    name: "Consultancy - Financial Services",
    location: "Dubai, UAE",
    desc: "Business Finance, Digital Asset Banking & FX Solutions. Banking access leveraging network built from JP Morgan and senior institutional experience.",
    stats: "Account facilitation in hours | 100% approval rate on facilitated applications",
    url: "www.alliancestreet.ae/banking"
  },
  {
    id: "03",
    name: "Accounting & Bookkeeping",
    location: "Dubai, UAE",
    desc: "UAE VAT, Corporate Tax & Statutory Audit. FTA Registered. 100% FTA-compliant filings across all managed entities.",
    stats: "100% FTA Compliance",
    url: "www.alliancestreet.ae/bookkeeping-accounting"
  },
  {
    id: "04",
    name: "Accountancy Ltd",
    location: "United Kingdom",
    desc: "UK Tax, Accounting & Cross-Border Compliance. HMRC Compliant. Bridges UK/UAE interface with full institutional knowledge of client's UAE structure.",
    stats: "HMRC Compliant",
    url: "www.alliancestreetaccounting.com"
  },
  {
    id: "05",
    name: "Accounting Private Limited",
    location: "India",
    desc: "Back-Office Outsourcing & Operational Efficiency for UK Firms. White-label, UK-standard trained.",
    stats: "40-60% typical back-office cost reduction vs UK",
    url: null
  },
  {
    id: "06",
    name: "Organic Farms",
    location: "India (Goa)",
    desc: "Sustainable Agriculture & Farming. Premium-quality desi chicken, farm-fresh desi eggs, rabbit meat. Ethical, eco-conscious.",
    stats: "Distinctive alternative asset",
    url: "www.alliancestreetfarms.com"
  },
  {
    id: "07",
    name: "Cargo Connections Logistics",
    location: "Dubai, UAE",
    desc: "International Freight & Specialist Logistics. Specialist in regulated cargo most freight operators can't handle.",
    stats: "Dangerous Goods Certified: ADR, IATA DGR, IMDG",
    url: "www.cargoconnections.ae"
  },
  {
    id: "08",
    name: "Vasil & Partners",
    location: "Slovakia",
    desc: "M&A & Cross-Border Legal Counsel. Led by JUDr. Martin Vasil, LL.M. EU/UAE-spanning M&A, corporate structuring.",
    stats: "Track record: €50M+ acquisitions, ICC Paris arbitration",
    url: "www.Vasillegal.com"
  },
  {
    id: "09",
    name: "Orryx Commodities",
    location: "Dubai, UAE",
    desc: "Global Trading in Metals & Beauty. Metals & metal ores ethically sourced for industrial application. Beauty & perfumery from Europe and Asia.",
    stats: "Global Sourcing",
    url: "www.orryxcommodities.com"
  }
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroDubai} 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-primary-foreground">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-secondary" />
              <span className="text-secondary uppercase tracking-[0.2em] text-sm font-medium">Alliance Street Group</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-white drop-shadow-lg">
              Everything Your Business Needs.<br/>
              <span className="text-secondary italic">Under One Roof.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light text-primary-foreground/80 mb-12 max-w-2xl leading-relaxed drop-shadow">
              Where structure meets strategy, across every border. A globally deployed integrated international advisory ecosystem resolving complexity internally.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="bg-secondary text-primary px-8 py-4 font-medium tracking-wide uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                Schedule Consultation <ArrowRight size={16} />
              </a>
              <a href="#entities" className="border border-primary-foreground/30 px-8 py-4 font-medium tracking-wide uppercase text-sm hover:bg-primary-foreground/10 transition-colors duration-300 flex items-center justify-center">
                Explore Entities
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-primary-foreground/10 border-y border-primary-foreground/10 py-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center px-4"
            >
              <div className="text-5xl md:text-6xl font-serif text-secondary mb-4">9</div>
              <div className="text-sm uppercase tracking-widest text-primary-foreground/70">Specialist Entities</div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center px-4"
            >
              <div className="text-5xl md:text-6xl font-serif text-secondary mb-4">4</div>
              <div className="text-sm uppercase tracking-widest text-primary-foreground/70">Jurisdictions</div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center px-4"
            >
              <div className="text-5xl md:text-6xl font-serif text-secondary mb-4">1000+</div>
              <div className="text-sm uppercase tracking-widest text-primary-foreground/70">Structures Built</div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center px-4"
            >
              <div className="text-5xl md:text-6xl font-serif text-secondary mb-4">17+</div>
              <div className="text-sm uppercase tracking-widest text-primary-foreground/70">Years' Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Recognition */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">The Gravitas of Institutional Experience</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We operate as an integrated international advisory ecosystem. Where conventional firms refer clients outward at every inflection point, the Group resolves complexity internally.
              </p>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                From initial corporate structuring and banking access through to M&A execution, cross-border tax compliance, and operational logistics. Led by principals with deep institutional backgrounds, including JP Morgan.
              </p>
              
              <div className="bg-accent/30 p-8 border-l-4 border-secondary">
                <h3 className="uppercase tracking-widest text-sm font-medium mb-4 text-primary">Recognition & Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <ChevronRight className="text-secondary shrink-0 mt-1" size={16} />
                    <span>Nominated Best Business Consulting Firm in Asia (Asia Business Outlook)</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <ChevronRight className="text-secondary shrink-0 mt-1" size={16} />
                    <span>Featured in Forbes, Daily Mail, Business Insider, Gulf News, Khaleej Times</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative h-[600px] w-full"
            >
              <img src={marbleLobby} alt="Premium Corporate Environment" className="w-full h-full object-cover shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 backdrop-blur-xl border border-secondary/20 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-card relative overflow-hidden border-y border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <img src={abstractArch} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="mx-auto w-16 h-16 bg-secondary/20 flex items-center justify-center mb-8 rotate-45">
              <div className="w-8 h-8 border border-secondary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">"Each engagement begins with a confidential, obligation-free strategy consultation."</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We operate strictly by appointment. During consultation, we assess the client's current structure, identify inefficiencies, and outline a cohesive multi-entity advisory approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entities Section */}
      <section id="entities" className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="mb-20 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our 9 Specialist Entities</h2>
            <p className="text-lg text-muted-foreground">Deep domain expertise across corporate structuring, banking, legal, and operational logistics. Integrated seamlessly.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entities.map((entity, index) => (
              <motion.div 
                key={entity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-card border border-border hover:border-secondary transition-colors duration-500 p-8 flex flex-col h-full"
              >
                <div className="text-secondary font-serif text-3xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">{entity.id}</div>
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">{entity.name}</h3>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6 pb-6 border-b border-border">{entity.location}</div>
                
                <p className="text-sm text-foreground/80 mb-8 flex-grow leading-relaxed">
                  {entity.desc}
                </p>
                
                <div className="mt-auto pt-6 bg-accent/20 -mx-8 px-8 -mb-8 pb-8">
                  <p className="text-xs font-medium text-primary mb-4">{entity.stats}</p>
                  {entity.url && (
                    <a href={`http://${entity.url}`} className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors">
                      Visit Website <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={conferenceRoom} alt="Boardroom" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Resolve Complexity.</h2>
            <p className="text-xl text-primary-foreground/80 mb-12 font-light">
              Connect with our principals to discuss your structural, financial, or operational requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center sm:text-right border-b sm:border-b-0 sm:border-r border-primary-foreground/20 pb-6 sm:pb-0 sm:pr-8">
                <div className="text-sm uppercase tracking-widest text-secondary mb-2">Call Us</div>
                <div className="text-2xl font-serif text-white">+971 42 62 7928</div>
              </div>
              <div className="text-center sm:text-left pt-6 sm:pt-0 sm:pl-8">
                <div className="text-sm uppercase tracking-widest text-secondary mb-2">Global Headquarters</div>
                <div className="text-lg text-white">Dubai, UAE</div>
              </div>
            </div>
            
            <button className="bg-secondary text-primary px-10 py-5 font-medium tracking-wide uppercase text-sm hover:bg-white transition-colors duration-300 inline-flex items-center gap-3">
              Request Strategy Consultation <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
