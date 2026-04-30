import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroTeam from "@/assets/hero-team.png";
import boardroom1 from "@/assets/boardroom-1.png";
import boardroom2 from "@/assets/boardroom-2.png";
import founderPortrait from "@/assets/founder-portrait.png";

import cardConsultancy from "@assets/generated_images/card_consultancy_uae.png";
import cardBanking from "@assets/stock_images/banking_uae.jpg";
import cardUkAccountancy from "@assets/stock_images/uk_london.jpg";
import cardBookkeeping from "@assets/stock_images/bookkeeping.jpg";
import cardIndiaAccounting from "@assets/stock_images/mumbai_business.jpg";
import cardOrganicFarms from "@assets/stock_images/organic_farm.jpg";
import cardCargo from "@assets/stock_images/cargo_port.jpg";
import cardCommodities from "@assets/stock_images/commodities.jpg";
import cardVasil from "@assets/stock_images/bratislava.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const entities = [
  { num: "01", name: "Alliance Street Consultancy", tag: "Structuring & Licensing" },
  { num: "02", name: "Alliance Street Consultancy", tag: "Financial Services" },
  { num: "03", name: "Alliance Street Accounting & Bookkeeping", tag: "Tax & Compliance" },
  { num: "04", name: "Alliance Street Accountancy Ltd", tag: "UK Operations" },
  { num: "05", name: "Alliance Street Accounting Pvt Ltd", tag: "India Operations" },
  { num: "06", name: "Alliance Street Organic Farms", tag: "Agriculture" },
  { num: "07", name: "Cargo Connections", tag: "Logistics" },
  { num: "08", name: "Orryx", tag: "Commodities" },
  { num: "09", name: "Vasil & Partners", tag: "Legal Advisory" }
];

export default function Home() {
  return (
    <div className="bg-background min-h-[100dvh] relative text-foreground font-sans pb-24 overflow-x-hidden">
      {/* Crimson Frame Left */}
      <div className="fixed top-0 left-0 bottom-0 w-2 md:w-4 crimson-frame z-50 pointer-events-none" />

      {/* Header Bar */}
      <header className="pl-6 md:pl-12 pr-6 py-6 flex flex-col md:flex-row md:justify-between md:items-center border-b border-border/50 sticky top-0 bg-background/90 backdrop-blur z-40 gap-4">
        <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium border-b border-border/50 pb-1 md:border-0 md:pb-0 inline-block">
          Headquartered in Dubai, UAE &nbsp;|&nbsp; Operating Globally
        </div>
        <nav className="flex gap-6 text-sm font-medium uppercase tracking-wide">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
          <a href="#entities" className="hover:text-primary transition-colors">Entities</a>
        </nav>
      </header>

      {/* Section 1 - HERO / GROUP PROFILE */}
      <section id="about" className="relative pt-20 pb-24 pl-6 md:pl-16 pr-6 md:pr-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-6 font-display uppercase drop-shadow-sm">
              GROUP<br />PROFILE
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-medium mb-16 max-w-3xl">
              Everything Your Business Needs. <span className="italic font-serif">Under One Roof.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:col-span-5 flex flex-col h-full"
            >
              <div className="bg-card rounded-[24px] p-8 md:p-10 shadow-aura h-full flex flex-col">
                <h3 className="font-display text-xl mb-4">THE GROUP PHILOSOPHY</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-8 flex-grow">
                  Alliance Street Group operates as an integrated international advisory ecosystem, UAE-headquartered, globally deployed. Where conventional firms refer clients outward at every inflection point, the Group resolves complexity internally: from initial corporate structuring and banking access through to M&A execution, cross-border tax compliance, and operational logistics.
                </p>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl md:text-4xl font-display mb-1 text-foreground">9</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Specialist Entities</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-display mb-1 text-foreground">4</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Jurisdictions</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-display mb-1 text-foreground">1000+</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Structures Built</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-display mb-1 text-foreground">17+</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Years' Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:col-span-7 rounded-[24px] overflow-hidden shadow-aura relative min-h-[400px] lg:min-h-full"
            >
                <img 
                  src={heroTeam} 
                  alt="Alliance Street Group Team" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - THE ENTITY ECOSYSTEM */}
      <section id="ecosystem" className="relative py-24 pl-6 md:pl-16 pr-6 md:pr-12 bg-white/50">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-7xl mb-16 font-display uppercase drop-shadow-sm"
          >
            THE ENTITY<br/>ECOSYSTEM
          </motion.h2>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {entities.map((ent, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-card rounded-[24px] p-8 shadow-aura hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-5xl font-display text-muted-foreground/30 mb-6">{ent.num}</div>
                <h3 className="font-bold text-lg leading-tight mb-2 pr-4">{ent.name}</h3>
                <p className="text-sm text-muted-foreground">{ent.tag}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3 - INDIVIDUAL ENTITIES */}
      <section id="entities" className="py-24 flex flex-col gap-32">
        
        {/* ENTITY 01 */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block">
              ENTITY 01, DUBAI, UAE &nbsp;|&nbsp; CORPORATE STRUCTURING
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-aura">
                <img src={boardroom1} alt="Corporate Meeting" className="w-full h-full object-cover" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[24px] p-8 shadow-aura">
                <p className="italic text-sm leading-relaxed mb-6">"Strategic foundations dictate long-term operational viability. We build structures designed to scale, pivot, and endure."</p>
                <div className="text-xs uppercase tracking-widest text-white/50">Core Philosophy</div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 drop-shadow-sm">ALLIANCE STREET<br/>CONSULTANCY</h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">Corporate Structuring & Licensing</h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                The foundational entity of the Group. We design and execute complex corporate structures across Mainland, Free Zone, and Offshore jurisdictions in the UAE. Our approach goes beyond simple company formation; we engineer bespoke corporate vehicles optimized for tax efficiency, asset protection, and operational flexibility.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full">
                  <h4 className="font-display text-sm mb-6 uppercase tracking-wider">Core Services</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Free Zone & Mainland Setup</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Holding Company Structures</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Foundation & Trust Formation</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Golden Visa Processing</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-display mb-1">500+</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Structures Built</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display mb-1">0%</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Personal Income Tax</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display mb-1">9%</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Federal Corporate Tax</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ENTITY 02 */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block">
              ENTITY 02, DUBAI, UAE &nbsp;|&nbsp; BANKING ACCESS
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6 lg:order-last">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-aura">
                <img src={boardroom2} alt="Executive Addressing Team" className="w-full h-full object-cover" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[24px] p-8 shadow-aura">
                <p className="italic text-sm leading-relaxed mb-6">"Capital mobility is the lifeblood of international business. We bypass the friction of modern compliance through pre-vetted institutional relationships."</p>
                <div className="text-xs uppercase tracking-widest text-white/50">Value Proposition</div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 drop-shadow-sm">ALLIANCE STREET<br/>FINANCIAL SERVICES</h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">Corporate Banking & Capital Access</h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                Securing reliable corporate banking in the UAE requires meticulous compliance architecture. We maintain direct channels with tier-1 institutions (Emirates NBD, Wio, Mashreq) and global digital banks, ensuring our clients achieve operational liquidity without the typical friction and delays of the modern KYC environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full">
                  <h4 className="font-display text-sm mb-6 uppercase tracking-wider">Core Services</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Tier-1 Corporate Bank Accounts</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Multi-Currency Digital Banking</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> KYC/AML Compliance Preparation</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Trade Finance Facilities</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-display mb-1">100%</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Approval Rate (Pre-vetted)</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display mb-1">48-72</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Hours Average Timeline</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1">Tier-1 Network</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Institutional Relationships</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ENTITY 03 */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block">
              ENTITY 03, DUBAI, UAE &nbsp;|&nbsp; REGULATORY COMPLIANCE
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-aura">
                <img src={boardroom1} alt="Tax and Compliance Team" className="w-full h-full object-cover object-bottom" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[24px] p-8 shadow-aura">
                <p className="italic text-sm leading-relaxed mb-6">"In the new era of UAE taxation, compliance is no longer a localized function—it requires a forensic, international approach."</p>
                <div className="text-xs uppercase tracking-widest text-white/50">Operational Standard</div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 drop-shadow-sm">ALLIANCE STREET<br/>ACCOUNTING & BOOKKEEPING</h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">Corporate Tax & Regulatory Compliance</h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                As the UAE transitions into a regulated tax environment, we provide forensic accounting and rigorous compliance frameworks. We ensure that our clients’ ledgers seamlessly integrate with their global tax strategy, managing the complexities of VAT, Corporate Tax, and ESR (Economic Substance Regulations) with absolute precision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full">
                  <h4 className="font-display text-sm mb-6 uppercase tracking-wider">Core Services</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Corporate Tax Registration & Filing</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> VAT Compliance & Returns</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> ESR & UBO Declarations</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Cloud-Based Real-Time Ledgers</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-display mb-1">100%</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">FTA-Compliant Protocols</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1">Real-Time</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Integrated Cloud Ledgers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ENTITY 04 / 05 - Condensed for pacing, matching the prompt's instruction that they each get a section */}
        {/* ENTITY 04 */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block">
              ENTITY 04, LONDON, UK &nbsp;|&nbsp; EUROPEAN HUB
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6 lg:order-last">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-aura">
                <img src={boardroom2} alt="London Operations" className="w-full h-full object-cover object-top" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[24px] p-8 shadow-aura">
                <p className="italic text-sm leading-relaxed mb-6">"Bridging the regulatory gap between the Gulf and Europe."</p>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 drop-shadow-sm">ALLIANCE STREET<br/>ACCOUNTANCY LTD</h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">UK Market Operations</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                Our London-based entity serves as the strategic bridge for European clients expanding into the UAE, and UAE entities accessing the UK market. We provide localized UK tax advisory, HMRC compliance, and seamless cross-border structuring.
              </p>
              <div className="bg-card rounded-[24px] p-8 shadow-aura mt-auto">
                <h4 className="font-display text-sm mb-6 uppercase tracking-wider">Core Services</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> UK Company Formation & Structuring</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> HMRC Tax Compliance & Returns</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Cross-Border Profit Repatriation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ENTITY 05 */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block">
              ENTITY 05, MUMBAI, INDIA &nbsp;|&nbsp; OPERATIONAL EFFICIENCY
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-aura">
                <img src={boardroom1} alt="India Operations" className="w-full h-full object-cover object-right" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[24px] p-8 shadow-aura">
                <p className="italic text-sm leading-relaxed mb-6">"Scale requires leverage. We provide institutional-grade back-office support without the overhead overhead."</p>
                <div className="text-xs uppercase tracking-widest text-white/50">Efficiency Metric</div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 drop-shadow-sm">ALLIANCE STREET<br/>ACCOUNTING PVT LTD</h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">Outsourced Enterprise Support</h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                Operating from India, this entity powers the Group’s back-office capabilities and provides white-labeled BPO services to our global clients. By centralizing high-volume accounting, data entry, and administrative functions, we deliver UK/UAE-standard execution at transformative cost efficiencies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full">
                  <h4 className="font-display text-sm mb-6 uppercase tracking-wider">Core Services</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Enterprise Bookkeeping</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> White-Label Accounting</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Payroll & Admin Processing</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-display mb-1">40-60%</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1">UK/UAE-Standard</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Execution Quality</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1">White-Label</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">BPO Capabilities</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ENTITIES 06, 07, 08 - Multi-column block */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Entity 06 */}
              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block mb-4">
                    ENTITY 06 &nbsp;|&nbsp; AGRICULTURE
                  </div>
                  <h2 className="text-3xl font-display uppercase mb-2">ORGANIC FARMS</h2>
                  <h3 className="text-sm text-muted-foreground">Sustainable Agriculture (India)</h3>
                </div>
                <div className="bg-secondary h-32 rounded-[24px] shadow-aura flex items-center justify-center p-6 text-center text-white/40 font-display uppercase text-sm border border-white/5">
                  [Logo Placeholder]
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  A tangible asset division of the Group, investing directly in sustainable, high-yield agricultural operations in India. We apply our corporate structuring rigor to physical agribusiness, ensuring compliance, ethical sourcing, and optimized export logistics.
                </p>
                <div className="bg-card rounded-[24px] p-6 shadow-aura">
                  <h4 className="font-display text-xs mb-4 uppercase tracking-wider">Core Focus</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> Sustainable Cultivation</li>
                    <li className="flex items-start gap-3"><div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> Agri-Asset Management</li>
                  </ul>
                </div>
              </motion.div>

              {/* Entity 07 */}
              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block mb-4">
                    ENTITY 07 &nbsp;|&nbsp; LOGISTICS
                  </div>
                  <h2 className="text-3xl font-display uppercase mb-2">CARGO CONNECTIONS</h2>
                  <h3 className="text-sm text-muted-foreground">Global Freight (UAE)</h3>
                </div>
                <div className="bg-secondary h-32 rounded-[24px] shadow-aura flex items-center justify-center p-6 text-center text-white/40 font-display uppercase text-sm border border-white/5">
                  [Logo Placeholder]
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  The Group's proprietary freight forwarding and logistics arm. Cargo Connections eliminates supply chain bottlenecks for our clients trading physical goods globally, integrating seamlessly with our trade finance and corporate tax advisory units.
                </p>
                <div className="bg-card rounded-[24px] p-6 shadow-aura">
                  <h4 className="font-display text-xs mb-4 uppercase tracking-wider">Core Focus</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> Air & Sea Freight Forwarding</li>
                    <li className="flex items-start gap-3"><div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> Customs Clearance</li>
                  </ul>
                </div>
              </motion.div>

              {/* Entity 08 */}
              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block mb-4">
                    ENTITY 08 &nbsp;|&nbsp; COMMODITIES
                  </div>
                  <h2 className="text-3xl font-display uppercase mb-2">ORRYX</h2>
                  <h3 className="text-sm text-muted-foreground">Global Trading (UAE)</h3>
                </div>
                <div className="bg-secondary h-32 rounded-[24px] shadow-aura flex items-center justify-center p-6 text-center text-white/40 font-display uppercase text-sm border border-white/5">
                  [Logo Placeholder]
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  A dedicated commodities trading house operating from the UAE. Orryx leverages the Group's banking network and logistics capabilities to execute physical trades across energy, metals, and agricultural sectors worldwide.
                </p>
                <div className="bg-card rounded-[24px] p-6 shadow-aura">
                  <h4 className="font-display text-xs mb-4 uppercase tracking-wider">Core Focus</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> Energy & Metals Trading</li>
                    <li className="flex items-start gap-3"><div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" /> Trade Execution</li>
                  </ul>
                </div>
              </motion.div>

           </motion.div>
        </div>

        {/* ENTITY 09 - VASIL & PARTNERS */}
        <div className="pl-6 md:pl-16 pr-6 md:pr-12 max-w-[1400px] mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <div className="text-xs uppercase tracking-widest font-medium border-b border-border/50 pb-2 inline-block">
              ENTITY 09, BRATISLAVA, SLOVAKIA &nbsp;|&nbsp; LEGAL ADVISORY
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-aura">
                <img src={founderPortrait} alt="JUDr. Martin Vasil" className="w-full h-full object-cover object-top" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-[24px] p-8 shadow-aura">
                <h4 className="font-bold text-lg mb-2">JUDr. Martin Vasil, LL.M.</h4>
                <div className="text-xs uppercase tracking-widest text-primary mb-4">Founding Partner &middot; Corporate & M&A Law</div>
                <p className="text-sm leading-relaxed text-white/80">
                  Dual-qualified legal expert bridging the UAE and European jurisdictions. Specializes in complex cross-border M&A, high-stakes international arbitration, and robust corporate restructuring for UHNW families and multi-nationals.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 drop-shadow-sm">VASIL &<br/>PARTNERS</h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">Premium Legal Counsel</h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-12">
                A Tier-1 law firm headquartered in Slovakia, providing the Group’s clients with elite European legal defense and structuring. Vasil & Partners executes high-value M&A transactions, international arbitration, and complex legal restructuring, acting as the ultimate protective shield for our clients' assets and operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full">
                  <h4 className="font-display text-sm mb-6 uppercase tracking-wider">Core Services</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Cross-Border M&A Execution</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> ICC International Arbitration</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Asset Protection Trusts</li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Commercial Litigation</li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-[24px] p-8 shadow-aura h-full flex flex-col justify-between">
                  <div>
                    <div className="text-2xl md:text-3xl font-display mb-1">€50M+</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Agriculture Acquisition</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-display mb-1">€24M</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Mineral Water Deal</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-display mb-1">€40M+</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold mb-6">Corporate Restructuring</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-1">ICC Paris</div>
                    <div className="text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">Arbitration Representation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* FINAL SECTION - BUILDING LONG-TERM RELATIONSHIPS */}
      <section id="contact" className="relative pt-32 pb-16 pl-6 md:pl-16 pr-6 md:pr-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-7xl font-display uppercase mb-4 drop-shadow-sm">BUILDING LONG-TERM<br/>RELATIONSHIPS</h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-medium italic font-serif mb-8">
              Where structure meets strategy, across every border.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              The Group operates by appointment. Each engagement begins with a confidential, obligation-free strategy consultation, during which we assess the client's current structure, identify inefficiencies, and outline a cohesive multi-entity advisory approach.
            </p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            
            {[
              { loc: "UAE Headquarters", name: "Alliance Street Consultancy", url: "www.alliancestreet.ae", img: cardConsultancy },
              { loc: "UAE Headquarters", name: "Alliance Street Consultancy - Financial Services", url: "www.alliancestreet.ae/banking", img: cardBanking },
              { loc: "UK Office", name: "Alliance Street Accountancy Ltd", url: "www.alliancestreet.ae", img: cardUkAccountancy },
              { loc: "UAE Headquarters", name: "Alliance Street Accounting And Bookkeeping", url: "www.alliancestreet.ae/bookkeeping-accounting", img: cardBookkeeping },
              { loc: "India Office", name: "Alliance Street Accounting Private Limited", url: "www.alliancestreetaccounting.com", img: cardIndiaAccounting },
              { loc: "India Office", name: "Alliance Street Organic Farms", url: "www.alliancestreetfarms.com", img: cardOrganicFarms },
              { loc: "UAE Headquarters", name: "Cargo Connections Logistics", url: "www.cargoconnections.ae", img: cardCargo },
              { loc: "UAE Headquarters", name: "Orryx Commodities", url: "www.orryxcommodities.com", img: cardCommodities },
              { loc: "Slovakia Headquarters", name: "Vasil & Partners", url: "www.Vasillegal.com", img: cardVasil }
            ].map((link, i) => (
              <motion.a 
                key={i} href={`http://${link.url}`} target="_blank" rel="noreferrer"
                variants={fadeUp}
                className="bg-card rounded-[20px] shadow-aura border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col group overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={link.img} alt={link.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] uppercase text-muted-foreground tracking-widest font-medium mb-3">{link.loc}</div>
                  <div className="font-bold text-sm mb-4 pr-4">{link.name}</div>
                  <div className="text-xs text-primary mt-auto group-hover:underline break-all">{link.url}</div>
                </div>
              </motion.a>
            ))}

          </motion.div>
          
          <div className="mt-32 pt-8 border-t border-border flex justify-between items-center text-xs text-muted-foreground uppercase tracking-wider font-medium">
             <div>&copy; {new Date().getFullYear()} ALLIANCE STREET GROUP</div>
             <div>+971 42 62 7928</div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <a href="tel:+97142627928" className="flex items-center gap-4 bg-secondary text-white px-5 py-3 md:px-6 md:py-4 rounded-[20px] shadow-2xl hover:scale-105 transition-transform">
           <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70">Contact Us</span>
              <span className="font-display text-base md:text-lg whitespace-nowrap">+971 42 62 7928</span>
           </div>
           <ArrowRight size={18} className="shrink-0" />
        </a>
      </div>
    </div>
  );
}
