import {
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Star,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Zap,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
  Quote,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Dominate search rankings with technical SEO, content optimization, and link-building strategies that drive organic traffic at scale.",
    features: ["Technical Audits", "Keyword Strategy", "Link Building"],
  },
  {
    icon: Target,
    title: "PPC",
    description:
      "Maximize every dollar with precision-targeted paid campaigns across Google Ads, Bing, and programmatic networks.",
    features: ["Google Ads", "Retargeting", "Bid Optimization"],
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Build engaged communities and drive conversions through strategic content and paid social across all major platforms.",
    features: ["Content Strategy", "Paid Social", "Community Management"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Attract, engage, and convert your audience with data-driven content strategies that establish thought leadership.",
    features: ["Blog Strategy", "Video Content", "Whitepapers"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email sequences, automation, and segmentation that deliver results.",
    features: ["Automation Flows", "A/B Testing", "Segmentation"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Turn data into decisions with comprehensive tracking, custom dashboards, and actionable insights across all channels.",
    features: ["Custom Dashboards", "Attribution Modeling", "ROI Tracking"],
  },
];

const caseStudies = [
  {
    client: "TechVault SaaS",
    industry: "B2B Software",
    metric: "312%",
    label: "Increase in Organic Traffic",
    secondaryMetric: "4.2x",
    secondaryLabel: "ROI on Ad Spend",
    description:
      "Overhauled their entire digital presence with a combined SEO and PPC strategy, resulting in a 312% traffic increase and 89% more qualified leads in just 6 months.",
    services: ["SEO", "PPC", "Content"],
    icon: TrendingUp,
  },
  {
    client: "GreenLeaf Retail",
    industry: "E-Commerce",
    metric: "847K",
    label: "Monthly Impressions",
    secondaryMetric: "$2.1M",
    secondaryLabel: "Revenue Generated",
    description:
      "Built a social-first brand strategy that grew their following from 12K to 185K and turned social channels into their #1 revenue driver.",
    services: ["Social Media", "Email", "Analytics"],
    icon: Users,
  },
  {
    client: "Meridian Financial",
    industry: "Financial Services",
    metric: "156%",
    label: "Lead Generation Growth",
    secondaryMetric: "68%",
    secondaryLabel: "Lower Cost Per Lead",
    description:
      "Deployed an integrated content and email marketing engine that positioned them as industry leaders while dramatically cutting acquisition costs.",
    services: ["Content", "Email", "SEO"],
    icon: DollarSign,
  },
  {
    client: "UrbanFit Studios",
    industry: "Health & Fitness",
    metric: "2.4M",
    label: "Ad Impressions / Month",
    secondaryMetric: "93%",
    secondaryLabel: "Membership Retention",
    description:
      "Created a hyper-local digital strategy combining PPC, social media, and email automation that filled their studios to capacity across 12 locations.",
    services: ["PPC", "Social Media", "Email"],
    icon: Eye,
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "15+ years in digital marketing. Previously VP of Growth at a Fortune 500. Passionate about data-driven strategies that deliver measurable impact.",
  },
  {
    name: "Marcus Rivera",
    role: "Head of SEO",
    bio: "Former Google Search Quality team member. Managed SEO for 200+ enterprise clients. Certified in all major search platforms.",
  },
  {
    name: "Priya Patel",
    role: "Creative Director",
    bio: "Award-winning creative strategist with a portfolio spanning global brands. Leads our content and social media creative teams.",
  },
  {
    name: "James Okonkwo",
    role: "Head of Analytics",
    bio: "Data scientist turned marketing analyst. Built attribution models for agencies managing $50M+ in annual ad spend.",
  },
];

const testimonials = [
  {
    name: "David Kim",
    role: "CEO, TechVault",
    quote:
      "Apex didn't just meet our targets — they redefined what we thought was possible. Our organic pipeline grew 3x in under a year.",
    rating: 5,
  },
  {
    name: "Rachel Torres",
    role: "CMO, GreenLeaf Retail",
    quote:
      "The team at Apex thinks like owners, not vendors. Their strategic depth and execution speed are unlike anything we've experienced.",
    rating: 5,
  },
  {
    name: "Michael Adebayo",
    role: "Founder, UrbanFit Studios",
    quote:
      "From day one, Apex brought clarity to our marketing chaos. They turned our scattered efforts into a growth engine that runs like clockwork.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "$120M+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years of Experience" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-surface-dark/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Apex<span className="text-accent">.</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="#results"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Results
            </a>
            <a
              href="#team"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Team
            </a>
            <a
              href="#testimonials"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-surface-dark" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <Zap className="h-3.5 w-3.5" />
              Results-Driven Digital Marketing
            </div>
            <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              We Turn Clicks Into{" "}
              <span className="animate-gradient bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent">
                Customers
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Apex Digital Marketing builds data-driven strategies across SEO,
              PPC, social media, content, email, and analytics — engineered to
              accelerate your growth and maximize ROI.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="animate-glow inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25"
              >
                Start Your Growth
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-white transition-all hover:border-muted-dark hover:bg-white/5"
              >
                See Our Results
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 sm:mt-24 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              What We Do
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Full-Spectrum Digital Marketing
            </h2>
            <p className="text-lg text-muted">
              Six core disciplines. One integrated strategy. Every channel
              working together to drive measurable growth.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl border border-border bg-surface-card p-8 transition-all hover:border-accent/30 hover:bg-surface-card-hover"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="absolute right-6 top-8 text-muted-dark opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies / Results Section */}
      <section id="results" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-surface-darker" />
        <div className="bg-grid-pattern absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              Proven Results
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Real Results. Real Growth.
            </h2>
            <p className="text-lg text-muted">
              We don&apos;t just promise results — we deliver them. Here are
              some of the outcomes we&apos;ve driven for our clients.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <div
                  key={study.client}
                  className="group rounded-2xl border border-border bg-surface-card p-8 transition-all hover:border-accent/30"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <div className="text-sm font-medium text-accent">
                        {study.industry}
                      </div>
                      <h3 className="mt-1 text-xl font-bold">{study.client}</h3>
                    </div>
                    <div className="rounded-xl bg-accent/10 p-2.5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 p-4">
                      <div className="text-2xl font-black text-accent sm:text-3xl">
                        {study.metric}
                      </div>
                      <div className="mt-1 text-xs text-muted">
                        {study.label}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4">
                      <div className="text-2xl font-black text-white sm:text-3xl">
                        {study.secondaryMetric}
                      </div>
                      <div className="mt-1 text-xs text-muted">
                        {study.secondaryLabel}
                      </div>
                    </div>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((svc) => (
                      <span
                        key={svc}
                        className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              Our Team
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              The Minds Behind the Results
            </h2>
            <p className="text-lg text-muted">
              Senior strategists and specialists who&apos;ve driven growth for
              startups to Fortune 500 companies.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-border bg-surface-card p-6 text-center transition-all hover:border-accent/30 hover:bg-surface-card-hover"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary-dark text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <div className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="text-muted-dark transition-colors hover:text-accent"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-dark transition-colors hover:text-accent"
                    aria-label={`${member.name} on Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-surface-darker" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              Client Love
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted">
              Don&apos;t take our word for it — hear from the people who&apos;ve
              seen the results firsthand.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-border bg-surface-card p-8 transition-all hover:border-accent/30"
              >
                <Quote className="mb-4 h-8 w-8 text-accent/30" />
                <p className="mb-6 text-base leading-relaxed text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                Get In Touch
              </div>
              <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="mb-10 text-lg text-muted">
                Tell us about your goals and we&apos;ll craft a custom strategy
                to get you there. No fluff, no long-term contracts — just
                results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-2.5">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-sm text-muted">
                      123 Innovation Drive, Suite 400
                      <br />
                      Austin, TX 78701
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-2.5">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-sm text-muted">+1 (555) 019-2000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-2.5">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted">
                      hello@apexdigital.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-2.5">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-sm text-muted">
                      Mon — Fri: 9:00 AM — 6:00 PM CT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface-card p-8">
              <form action="#" method="POST" className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-lg border border-border bg-surface-dark px-4 py-3 text-sm text-white placeholder-muted-dark transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-lg border border-border bg-surface-dark px-4 py-3 text-sm text-white placeholder-muted-dark transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border bg-surface-dark px-4 py-3 text-sm text-white placeholder-muted-dark transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-border bg-surface-dark px-4 py-3 text-sm text-white placeholder-muted-dark transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-border bg-surface-dark px-4 py-3 text-sm text-white transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="seo">SEO</option>
                    <option value="ppc">PPC</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="email">Email Marketing</option>
                    <option value="analytics">Analytics</option>
                    <option value="full">Full-Service Strategy</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-border bg-surface-dark px-4 py-3 text-sm text-white placeholder-muted-dark transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell us about your goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-darker py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <a href="#" className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Apex<span className="text-accent">.</span>
                </span>
              </a>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                Data-driven digital marketing solutions that accelerate your
                business growth. Based in Austin, serving clients worldwide.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:text-accent"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:text-accent"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:text-accent"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Search Engine Optimization",
                  "Pay-Per-Click Advertising",
                  "Social Media Marketing",
                  "Content Marketing",
                  "Email Marketing",
                  "Analytics & Reporting",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#team" },
                  { label: "Case Studies", href: "#results" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Careers", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Newsletter
              </h4>
              <p className="mb-4 text-sm text-muted">
                Get the latest marketing insights and tips delivered to your
                inbox.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-border bg-surface-dark px-4 py-2.5 text-sm text-white placeholder-muted-dark transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-accent px-4 py-2.5 transition-colors hover:bg-accent-dark"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-4 w-4 text-white" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-dark">
              &copy; {new Date().getFullYear()} Apex Digital Marketing. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-dark transition-colors hover:text-muted"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-dark transition-colors hover:text-muted"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-dark transition-colors hover:text-muted"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
