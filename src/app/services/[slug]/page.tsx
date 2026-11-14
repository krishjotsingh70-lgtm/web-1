import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronRight,
  Clock,
  Compass,
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';
import { SERVICES_SEO, SEO_CONFIG, BLOG_POSTS } from '../../../data/seoData';
import { PROJECTS } from '../../../data/portfolioData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES_SEO.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_SEO.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const url = `${SEO_CONFIG.baseUrl}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.targetKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      title: service.metaTitle,
      description: service.metaDescription,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: '/images/krishjot_about.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} by Krishjot Singh, Ludhiana`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['/images/krishjot_about.jpg'],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES_SEO.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Filter relevant projects for this service
  const relevantProjects = PROJECTS.filter((p) => {
    if (service.slug === 'wedding-video-editing') {
      return p.category === 'Wedding Invitations' || p.category === 'Video Editing';
    }
    if (service.slug === 'youtube-thumbnail-design') {
      return p.category === 'Thumbnails';
    }
    if (service.slug === 'graphic-design') {
      return p.category === 'Posters' || p.category === 'Branding';
    }
    if (service.slug === 'instagram-reels-editing') {
      return p.tags.some((t) => t.toLowerCase().includes('reel')) || p.category === 'Video Editing';
    }
    if (service.slug === 'motion-graphics') {
      return p.tags.some((t) => t.toLowerCase().includes('motion') || t.toLowerCase().includes('fx')) || p.category === 'Posters';
    }
    return p.category === 'Video Editing' || p.category === 'Posters';
  }).slice(0, 4);

  // Other services for internal linking
  const otherServices = SERVICES_SEO.filter((s) => s.slug !== service.slug);

  // Related blog articles
  const relatedArticles = BLOG_POSTS.filter((post) =>
    post.relatedServices.includes(service.slug)
  ).slice(0, 2);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SEO_CONFIG.baseUrl}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Person',
      name: 'Krishjot Singh',
      url: SEO_CONFIG.baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ludhiana',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Ludhiana' },
      { '@type': 'AdministrativeArea', name: 'Punjab' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'Worldwide' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SEO_CONFIG.baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${SEO_CONFIG.baseUrl}/#services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SEO_CONFIG.baseUrl}/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen selection:bg-purple-600 selection:text-white">
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Glow background accents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </li>
              <li>
                <Link href="/#services" className="hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </li>
              <li className="text-cyan-400 font-semibold truncate" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          {/* Service Header / Hero Section */}
          <header className="mb-16 text-center max-w-4xl mx-auto">
            {/* Location & Specialty Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>LUDHIANA, PUNJAB & WORLDWIDE SERVICE</span>
            </div>

            {/* Clear, Single H1 Tag */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              {service.h1}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              {service.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`${SEO_CONFIG.contact.whatsapp}?text=Hi%20Krishjot,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-full shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Inquire on WhatsApp</span>
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-full hover:border-purple-500/50 hover:text-white transition-all duration-300"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </header>

          {/* Section: Overview & Detailed Content */}
          <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                IN-DEPTH EXPERTISE
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-6">
                Why Work With <span className="text-gradient">Krishjot Singh</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-8">
                {service.detailedContent.overview}
              </p>

              <div className="space-y-3.5 mb-8">
                {service.detailedContent.whyChoose.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              {/* Tools Used */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
                  Production Suite & Industry Tools:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.detailedContent.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Key Service Features Grid */}
          <section className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                WHAT YOU RECEIVE
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                Key Deliverables & <span className="text-gradient">Capabilities</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white mb-1.5">
                      {feature}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      Engineered for maximum audience engagement, brand consistency, and platform compliance.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: 4-Step Production Process */}
          <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                TRANSPARENT WORKFLOW
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-2">
                Our 4-Step <span className="text-gradient">Production Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.detailedContent.process.map((step) => (
                <div
                  key={step.step}
                  className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-heading font-black text-3xl sm:text-4xl text-gradient block mb-4">
                      {step.step}
                    </span>
                    <h3 className="font-heading font-bold text-white text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Relevant Portfolio Samples */}
          {relevantProjects.length > 0 && (
            <section className="mb-20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                    PROVEN RESULTS
                  </span>
                  <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-1">
                    Recent Work & <span className="text-gradient">Portfolio Samples</span>
                  </h2>
                </div>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>View All 150+ Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relevantProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] w-full bg-gray-900 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category} by Krishjot Singh`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 border border-white/10 text-cyan-300">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-white text-sm truncate group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 font-light">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Frequently Asked Questions */}
          <section className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                GOT QUESTIONS?
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
                >
                  <h3 className="font-heading font-bold text-base text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Related Blog Guides & Internal Links */}
          {relatedArticles.length > 0 && (
            <section className="mb-20 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    LEARN & GROW
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                    Related Expert Articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-purple-400 hover:text-white transition-colors"
                >
                  All Articles &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all"
                  >
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
                      {article.category} • {article.readTime}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors mt-1 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 font-light">
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Section: Explore Other Services Grid */}
          <section className="mb-20">
            <h2 className="font-heading text-lg font-bold text-gray-300 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-400" /> Explore Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
                >
                  <span className="text-2xl mb-2">{other.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-xs text-white mb-1">
                      {other.title}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-mono">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Direct CTA Banner */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-cyan-900/30 border border-purple-500/40 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="font-heading text-2xl sm:text-4xl font-black text-white">
                Ready to Elevate Your Visuals?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                Whether you need a single high-impact project or an ongoing monthly editing partner in Ludhiana or globally, let’s discuss your vision today.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <a
                  href={`${SEO_CONFIG.contact.whatsapp}?text=Hi%20Krishjot,%20I%20am%20ready%20to%20start%20a%20project%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start a Conversation on WhatsApp</span>
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold text-gray-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors"
                >
                  <span>Submit Inquiry Form</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

