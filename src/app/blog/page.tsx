import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import { BLOG_POSTS, SEO_CONFIG, SERVICES_SEO } from '../../data/seoData';

export const metadata: Metadata = {
  title: 'Video Editing & Graphic Design Blog | Industry Insights by Krishjot Singh',
  description:
    'Explore expert guides, video editing tutorials, thumbnail design strategies, and visual branding insights by Krishjot Singh, Professional Video Editor in Ludhiana, Punjab.',
  keywords: [
    'Video Editing Blog India',
    'Best Video Editing Services in India',
    'Professional Wedding Video Editing',
    'Instagram Reels Editing Tips',
    'YouTube Thumbnail Design Tips',
    'Graphic Designer in Ludhiana',
    'Video Editor in Ludhiana',
  ],
  alternates: {
    canonical: `${SEO_CONFIG.baseUrl}/blog`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SEO_CONFIG.baseUrl}/blog`,
    title: 'Video Editing & Graphic Design Blog | Krishjot Singh',
    description:
      'Expert guides, video editing tutorials, thumbnail design tips, and visual branding strategies by Krishjot Singh.',
    images: [
      {
        url: '/images/krishjot_about.jpg',
        width: 1200,
        height: 630,
        alt: 'Krishjot Singh - Video Editing and Graphic Design Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Editing & Graphic Design Blog | Krishjot Singh',
    description:
      'Expert guides, video editing tutorials, thumbnail design tips, and visual branding strategies.',
    images: ['/images/krishjot_about.jpg'],
  },
};

export default function BlogIndexPage() {
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
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Video Editing & Design Blog',
    description:
      'Expert articles, video editing strategies, and design tips by Krishjot Singh.',
    url: `${SEO_CONFIG.baseUrl}/blog`,
    author: {
      '@type': 'Person',
      name: 'Krishjot Singh',
    },
  };

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen selection:bg-purple-600 selection:text-white">
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

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
              <li className="text-cyan-400 font-semibold" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>

          {/* Section Header */}
          <header className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              INDUSTRY GUIDES & STRATEGIES
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
              Insights on <span className="text-gradient">Video Editing</span> & Design
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed font-light">
              Actionable tutorials, retention psychology, thumbnail design tips, and visual branding insights by Krishjot Singh — Professional Video Editor and Graphic Designer based in Ludhiana, Punjab.
            </p>
          </header>

          {/* Articles 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-4 pb-3 border-b border-white/5">
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h2 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-400 leading-relaxed font-light mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Link & Author Info */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishDate}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:text-white transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Service Links Grid */}
          <section className="mb-16 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <h2 className="font-heading text-lg font-bold text-white mb-4">
              Need Professional Help with Your Next Project?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light mb-6">
              I provide full-service video editing, wedding films, reels editing, and graphic design for creators and businesses worldwide.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SERVICES_SEO.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 text-center transition-all"
                >
                  <span className="text-xl block mb-1">{s.icon}</span>
                  <span className="text-[11px] font-semibold text-gray-300 hover:text-white block">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Direct CTA */}
          <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-cyan-900/30 border border-purple-500/40 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mb-3">
              Have a Custom Video or Design Inquiry?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-6 font-light">
              Let’s chat on WhatsApp to discuss your creative vision, timelines, and custom pricing packages.
            </p>
            <a
              href={`${SEO_CONFIG.contact.whatsapp}?text=Hi%20Krishjot,%20I%20read%20your%20blog%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-full transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

