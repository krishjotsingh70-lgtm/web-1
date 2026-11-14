import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Share2,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import JsonLd from '../../../components/JsonLd';
import { BLOG_POSTS, SEO_CONFIG, SERVICES_SEO } from '../../../data/seoData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const url = `${SEO_CONFIG.baseUrl}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.targetKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: SEO_CONFIG.siteName,
      publishedTime: post.publishDate,
      authors: [SEO_CONFIG.author],
      images: [
        {
          url: '/images/krishjot_about.jpg',
          width: 1200,
          height: 630,
          alt: `${post.title} by Krishjot Singh`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: ['/images/krishjot_about.jpg'],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related articles
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Related services
  const relatedServicesData = SERVICES_SEO.filter((s) =>
    post.relatedServices.includes(s.slug)
  );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SEO_CONFIG.baseUrl}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    image: `${SEO_CONFIG.baseUrl}/images/krishjot_about.jpg`,
    author: {
      '@type': 'Person',
      name: 'Krishjot Singh',
      jobTitle: 'Professional Video Editor & Graphic Designer',
      url: SEO_CONFIG.baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ludhiana',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    publisher: {
      '@type': 'Person',
      name: 'Krishjot Singh',
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.baseUrl}/images/krishjot_about.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SEO_CONFIG.baseUrl}/blog/${post.slug}`,
    },
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
        name: 'Blog',
        item: `${SEO_CONFIG.baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SEO_CONFIG.baseUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen selection:bg-purple-600 selection:text-white">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Glow ambient background accents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
                <Link href="/blog" className="hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              </li>
              <li className="text-cyan-400 font-semibold truncate" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                {post.publishDate}
              </span>
            </div>

            {/* Clear Single H1 Tag */}
            <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.2] mb-6">
              {post.title}
            </h1>

            {/* Author Byline & Location */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/40">
                <Image
                  src="/images/krishjot_about.jpg"
                  alt="Krishjot Singh - Video Editor & Graphic Designer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-sm text-white">Krishjot Singh</p>
                <p className="text-xs text-gray-400 font-mono">
                  Video Editor & Graphic Designer • Ludhiana, Punjab
                </p>
              </div>
            </div>
          </header>

          {/* Article Lead Introduction */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-12">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light italic">
              "{post.content.intro}"
            </p>
          </div>

          {/* Table of Contents */}
          <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 mb-12">
            <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-cyan-400 mb-3">
              TABLE OF CONTENTS
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {post.content.sections.map((sec, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-purple-400 font-mono text-xs">0{idx + 1}.</span>
                  <span>{sec.heading}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Main Body Content */}
          <div className="space-y-12 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-white tracking-tight pt-4 border-t border-white/5">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-gray-200">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.proTip && (
                  <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-cyan-950/30 border border-purple-500/30 flex items-start gap-3.5">
                    <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 block mb-1">
                        EXPERT PRO TIP
                      </span>
                      <p className="text-xs sm:text-sm text-gray-200 font-normal">
                        {section.proTip}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <section className="pt-6 border-t border-white/10">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
                Summary & Next Steps
              </h2>
              <p className="text-gray-300 mb-6">
                {post.content.conclusion}
              </p>
            </section>
          </div>

          {/* Related Core Services Internal Links */}
          {relatedServicesData.length > 0 && (
            <div className="my-16 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <h3 className="font-heading text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Recommended Services for This Topic
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServicesData.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all"
                  >
                    <span className="text-2xl block mb-2">{s.icon}</span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white mb-1">
                      {s.title}
                    </h4>
                    <span className="text-[11px] text-purple-400 font-mono">
                      View details &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Box */}
          <div className="my-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-purple-500/40">
              <Image
                src="/images/krishjot_about.jpg"
                alt="Krishjot Singh Profile"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h3 className="font-heading font-bold text-lg text-white">
                Written by Krishjot Singh
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Senior Video Editor & Graphic Designer based in Ludhiana, Punjab. Delivering cinematic video edits, wedding films, viral reels, and high-CTR thumbnail designs that have generated over 50M+ views worldwide.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-bold text-cyan-400">
                <Link href="/#portfolio" className="hover:text-white transition-colors">
                  View Portfolio &rarr;
                </Link>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Hire Krishjot &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Other Blog Articles */}
          <div className="my-16">
            <h3 className="font-heading text-lg font-bold text-white mb-6">
              More Guides & Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 block mb-2">
                      {p.category}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
                      {p.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono mt-3">
                    Read &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sticky WhatsApp CTA Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-cyan-900/30 border border-purple-500/40 text-center">
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white mb-2">
              Ready to Work Together?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto mb-6 font-light">
              Get in touch directly to discuss your project requirements, view private showreels, and receive a customized quote.
            </p>
            <a
              href={`${SEO_CONFIG.contact.whatsapp}?text=Hi%20Krishjot,%20I%20read%20your%20article%20'${encodeURIComponent(post.title)}'%20and%20want%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message Krishjot on WhatsApp</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

