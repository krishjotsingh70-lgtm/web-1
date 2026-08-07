export interface Project {
  id: string;
  title: string;
  category: 'Video Editing' | 'Posters' | 'Branding' | 'Logo Design' | 'Thumbnails' | 'Motion Graphics' | 'Wedding Invitations';
  image: string;
  videoUrl?: string;
  description: string;
  client?: string;
  duration?: string;
  tools: string[];
  tags: string[];
  stats?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Video' | 'Design' | 'Motion' | 'Tool';
  icon: string; // lucide icon name or emoji
  level: number; // percentage
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Process & Revisions' | 'Pricing & Timing';
}

export const PERSONAL_INFO = {
  name: 'Krishjot Singh',
  role: 'Video Editor & Graphic Designer',
  tagline: 'Crafting visuals that tell stories.',
  subtitle: 'Creating cinematic edits, bold branding, and visually stunning content that drives engagement and elevates brands worldwide.',
  phone: '8847476526',
  email: 'krishjotsingh2@gmail.com',
  website: 'https://www.krishjotsingh.online',
  location: 'Punjab, India',
  stats: [
    { value: '150+', label: 'Projects Completed' },
    { value: '50M+', label: 'Video Views Generated' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
    behance: 'https://behance.net',
    whatsapp: 'https://wa.me/918847476526',
  }
};

export const SERVICES: Service[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    icon: '🎬',
    description: 'Cinematic cutting, dynamic pacing, seamless audio mixing, and color grading for YouTube, promos, and documentaries.',
    features: ['4K Video Editing', 'Color Grading', 'Sound Design & Mixing', 'Multi-camera Editing'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: '🎨',
    description: 'Eye-catching poster art, banners, marketing materials, and digital graphics tailored for maximum visual impact.',
    features: ['High-res Posters', 'Social Graphics', 'Print & Digital Layouts', 'Vector Illustrations'],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'social-media',
    title: 'Social Media Posts',
    icon: '📱',
    description: 'Engaging, modern grid posts, carousels, and story designs built to stop scrolling and boost audience retention.',
    features: ['Instagram Carousels', 'Story Templates', 'Ad Creatives', 'Grid Strategy'],
    gradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'reels-editing',
    title: 'Reels Editing',
    icon: '🎥',
    description: 'High-retention short-form content for Instagram Reels, TikTok, and YouTube Shorts with captions & sound hooks.',
    features: ['Animated Captions', 'Sound Effects', 'Fast-Paced Cuts', 'Trending Formats'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 'thumbnail-design',
    title: 'Thumbnail Design',
    icon: '🖼',
    description: 'High CTR YouTube thumbnails engineered with psychological triggers, vibrant contrast, and bold focal elements.',
    features: ['High CTR Layouts', 'Subject Cutouts & Glows', 'Bold Typography', 'A/B Test Ready'],
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    icon: '🏷',
    description: 'Complete brand guidelines, color systems, typography pairings, and brand collateral for modern startups and creators.',
    features: ['Brand Style Guide', 'Color Systems', 'Typography Rules', 'Asset Kits'],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'ad-videos',
    title: 'Advertisement Videos',
    icon: '📢',
    description: 'High-converting commercial promos and product video ads engineered to convert viewers into paying clients.',
    features: ['Hook Optimization', 'Product Callouts', 'Commercial Audio', 'CTAs & Outros'],
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    icon: '✨',
    description: '2D & 3D logo animations, lower thirds, title sequences, and kinetic typography that breathe life into static assets.',
    features: ['Animated Logos', 'Kinetic Typography', 'Title Sequences', 'HUD & VFX Overlays'],
    gradient: 'from-cyan-500/20 via-purple-500/10 to-transparent',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', category: 'Tool', icon: 'Film', level: 95, description: 'Mastery in multi-cam cutting, audio sync, and fast workflow.' },
  { name: 'Adobe After Effects', category: 'Tool', icon: 'Sparkles', level: 90, description: 'Complex motion graphics, keyframing, and VFX synthesis.' },
  { name: 'Photoshop', category: 'Tool', icon: 'Image', level: 95, description: 'Advanced photo manipulation, thumbnails, and raster graphics.' },
  { name: 'Illustrator', category: 'Tool', icon: 'PenTool', level: 88, description: 'Vector logos, branding assets, and scalable typography.' },
  { name: 'Canva', category: 'Tool', icon: 'Layers', level: 90, description: 'Rapid template creation and quick client turnaround.' },
  { name: 'Corel Draw', category: 'Tool', icon: 'PenTool', level: 86, description: 'Vector graphic design, print layout formatting, and branding precision.' },
  { name: 'Motion Graphics', category: 'Motion', icon: 'Zap', level: 92, description: 'Dynamic 2D/3D animated elements and kinetic text.' },
  { name: 'Logo Design', category: 'Design', icon: 'Shield', level: 90, description: 'Memorable, minimalist, and versatile brand marks.' },
  { name: 'Branding', category: 'Design', icon: 'Compass', level: 88, description: 'Cohesive visual identity systems and brand manuals.' },
  { name: 'Social Media Design', category: 'Design', icon: 'Share2', level: 94, description: 'High-converting graphics optimized for algorithm performance.' },
];

export const MY_WORK_ITEMS: Project[] = [
  {
    id: 'my-work-wedding-1',
    title: 'Lokesh & Priya - Royal Swing Card',
    category: 'Wedding Invitations',
    image: '/images/wedding_invitation_1.jpg',
    description: 'Elegantly illustrated royal swing wedding save-the-date invitation card featuring floral embellishments and custom couple artwork.',
    client: 'Lokesh & Priya',
    duration: 'Custom Design',
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Wedding Invitation', 'Save The Date', 'Illustration', 'Print Design'],
    stats: 'Save The Date 2025',
    featured: true,
  },
  {
    id: 'my-work-wedding-2',
    title: 'Kajal & Arjun - Vintage Floral Arch',
    category: 'Wedding Invitations',
    image: '/images/wedding_invitation_2.jpg',
    description: 'Romantic vintage floral arch wedding invitation card with warm peach pastel tones and classical serif typography.',
    client: 'Kajal & Arjun',
    duration: 'Custom Design',
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Wedding Invitation', 'Floral Arch', 'Save The Date', 'Pastel'],
    stats: 'Wedding Card 2022',
    featured: true,
  },
  {
    id: 'my-work-wedding-3',
    title: 'Lokesh & Priya - Mandap Floral Arch',
    category: 'Wedding Invitations',
    image: '/images/wedding_invitation_3.jpg',
    description: 'Traditional Indian wedding save-the-date card featuring handcrafted mandap floral arch illustration and golden frame accents.',
    client: 'Lokesh & Priya',
    duration: 'Custom Design',
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Wedding Card', 'Mandap Illustration', 'Traditional', 'Gold Accent'],
    stats: 'Save The Date 2025',
    featured: true,
  },
  {
    id: 'my-work-wedding-4',
    title: 'Manish Weds Akriti - Royal Couple Portrait',
    category: 'Wedding Invitations',
    image: '/images/wedding_invitation_4.jpg',
    description: 'Premium royal ethnic wedding invitation card featuring custom digital couple portrait under marble arch motif with tropical botanicals.',
    client: 'Manish & Akriti',
    duration: 'Custom Design',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Wedding Card', 'Digital Portrait', 'Royal Theme', 'Ethnic Illustration'],
    stats: 'Save The Date 2024',
    featured: true,
  },
  {
    id: 'my-work-poster-6',
    title: 'KFC Delicious Double Burger Art',
    category: 'Posters',
    image: '/images/poster_kfc_burger.jpg',
    description: 'High-impact fast food commercial poster featuring dynamic double cheeseburger vector illustration with bold pop typography and KFC red contrast.',
    client: 'Commercial Brand Concept / KFC',
    duration: 'Poster Concept',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Food Poster', 'Commercial Art', 'Pop Art', 'Fast Food'],
    stats: 'Commercial Poster',
    featured: true,
  },
  {
    id: 'my-work-poster-7',
    title: 'Nike Club Anorak - Sport Your Style',
    category: 'Posters',
    image: '/images/poster_nike_club_anorak.jpg',
    description: 'Minimalist fashion & apparel product poster for Nike Club Anorak hoodie featuring modern grid typography, grain texture overlay, and high-fashion aesthetic.',
    client: 'Nike Brand Concept',
    duration: 'Apparel Poster',
    tools: ['Photoshop', 'Lightroom'],
    tags: ['Apparel Poster', 'Sportswear', 'Fashion Layout', 'Nike'],
    stats: 'Streetwear Art',
    featured: true,
  },
  {
    id: 'my-work-poster-8',
    title: 'Nike Luka 2 PF Basketball Shoes',
    category: 'Posters',
    image: '/images/poster_nike_luka2_shoes.jpg',
    description: 'High-energy sportswear product poster for Luka 2 PF shoes with energetic red flame aura background, collage cutouts, and bold athletic branding.',
    client: 'Nike Basketball Concept',
    duration: 'Sneaker Promo',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Sneaker Poster', 'Nike Basketball', 'Collage', 'High Energy'],
    stats: 'Sports Artwork',
    featured: true,
  },
  {
    id: 'my-work-poster-9',
    title: 'Porsche 911 GT3 RS Automotive Art',
    category: 'Posters',
    image: '/images/poster_porsche_gt3_rs.jpg',
    description: 'Sleek high-performance automotive promo poster for Porsche 911 GT3 RS with clean multi-angle panel cutouts, racing red wheel accents, and technical specs font.',
    client: 'Automotive Concept',
    duration: 'Automotive Art',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Automotive Poster', 'Porsche', 'Car Art', 'Track Performance'],
    stats: 'GT3 RS Promo',
    featured: true,
  },
  {
    id: 'my-work-1',
    title: 'My Path to Success - Rahul (CSE)',
    category: 'Posters',
    image: '/images/work_path_to_success.jpg',
    description: 'Custom admission campaign banner designed for Gulzar Group of Institutions, featuring student success story, vibrant blue color palette, and high-impact typography.',
    client: 'Gulzar Group of Institutions (GGI)',
    duration: 'Design & Print',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Poster', 'Campaign', 'Student Success', 'Branding'],
    stats: 'Official GGI Poster',
    featured: true,
  },
  {
    id: 'my-work-2',
    title: 'Our Global Family - 28+ Countries',
    category: 'Posters',
    image: '/images/work_global_family.jpg',
    description: 'International student collage poster celebrating diversity at GGI across 28+ countries & 25+ states with clean geometric badge cutouts.',
    client: 'Gulzar Group of Institutions (GGI)',
    duration: 'Design',
    tools: ['Photoshop', 'Corel Draw'],
    tags: ['Poster', 'Global Outreach', 'Collage', 'Vector Art'],
    stats: '28+ Countries',
    featured: true,
  },
  {
    id: 'my-work-3',
    title: 'Paramedical Admissions Showcase',
    category: 'Posters',
    image: '/images/work_paramedical_journey.jpg',
    description: 'High-contrast promotional admission poster designed for Paramedical courses with glowing speed trails, medical iconography, and crisp layout.',
    client: 'Gulzar Group of Institutions (GGI)',
    duration: 'Design & Print',
    tools: ['Photoshop', 'Lightroom'],
    tags: ['Poster', 'Healthcare', 'Admissions', 'Lighting FX'],
    stats: 'Admissions 2026',
    featured: true,
  },
  {
    id: 'my-work-4',
    title: 'Hostel Fiesta Event Banner',
    category: 'Posters',
    image: '/images/work_hostel_fiesta.jpg',
    description: 'Vibrant concert event banner designed for GGI Hostel Fiesta, featuring high energy stage lighting, dancer cutouts, and festive glow highlights.',
    client: 'GGI Events & Cultural Club',
    duration: 'Event Graphics',
    tools: ['Photoshop', 'After Effects'],
    tags: ['Event Poster', 'Stage Lighting', 'Concert', 'Vibrant'],
    stats: 'Campus Fest',
    featured: true,
  },
  {
    id: 'my-work-5',
    title: 'GIPS Paramedical Medical Career',
    category: 'Posters',
    image: '/images/work_gips_medical_career.jpg',
    description: 'Official GIPS medical admissions banner showcasing BSc Anesthesia, Radiology, Cardiac Care & Medical Lab programs with stethoscope vector overlays.',
    client: 'Gulzar Institute of Medical Sciences (GIPS)',
    duration: 'Print & Digital',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Medical Poster', 'Infographic', 'College Promo'],
    stats: 'GIPS Official',
    featured: true,
  },
];

export const PROJECTS: Project[] = [
  ...MY_WORK_ITEMS,
  {
    id: 'proj-1',
    title: 'Cyberpunk Tech Reel 2026',
    category: 'Video Editing',
    image: '/images/portfolio_video_editing.png',
    description: 'A fast-paced, high-octane video editing reel featuring intense sound design, glitch transitions, dynamic speed ramping, and neon color grading.',
    client: 'Apex Creative Studio',
    duration: '1 min 30 sec',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    tags: ['Reel', 'Color Grading', 'Sound Design', 'Glitch FX'],
    stats: '2.5M+ Views',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Neon Odyssey Event Poster',
    category: 'Posters',
    image: '/images/portfolio_poster.png',
    description: 'High-contrast futuristic music event poster designed with customized typography, glossy metallic elements, and atmospheric ambient lighting.',
    client: 'Sonic Pulse Music',
    duration: 'Design',
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Poster', 'Print Design', 'Typography', '3D Render'],
    stats: 'Featured Poster',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Vortex Gaming Brand Identity',
    category: 'Branding',
    image: '/images/portfolio_poster.png',
    description: 'Comprehensive brand identity overhaul for an esports team, including brand handbook, jersey concepts, stream overlays, and social assets.',
    client: 'Vortex Esports',
    duration: '3 Weeks',
    tools: ['Illustrator', 'Corel Draw', 'Photoshop'],
    tags: ['Branding', 'Identity System', 'Guidelines'],
    stats: 'Complete Rebrand',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Aetheria Minimalist Logo',
    category: 'Logo Design',
    image: '/images/portfolio_poster.png',
    description: 'Sleek geometric monogram logo with golden ratio proportions designed for a luxury tech brand.',
    client: 'Aetheria Labs',
    duration: '1 Week',
    tools: ['Illustrator'],
    tags: ['Logo Design', 'Vector', 'Monogram'],
    stats: 'Award Finalist',
  },
  {
    id: 'proj-5',
    title: 'High CTR YouTube Thumbnails Pack',
    category: 'Thumbnails',
    image: '/images/portfolio_video_editing.png',
    description: 'Collection of 10 YouTube thumbnails crafted with facial expression isolation, high contrast glow highlights, and bold attention-grabbing headlines.',
    client: 'TechX & Finance Pro',
    duration: '2 Days',
    tools: ['Photoshop', 'Lightroom'],
    tags: ['Thumbnails', 'YouTube', 'CTR Boost'],
    stats: '18.4% CTR',
    featured: true,
  },
  {
    id: 'proj-6',
    title: 'Futuristic HUD Motion Intro',
    category: 'Motion Graphics',
    image: '/images/portfolio_video_editing.png',
    description: 'Complex 3D camera tracker intro video with futuristic HUD UI elements, kinetic particle emitters, and custom SFX audio.',
    client: 'Nexus Digital',
    duration: '15 Seconds',
    tools: ['After Effects', 'Cinema 4D'],
    tags: ['Motion Graphics', 'HUD', 'VFX', 'Intro'],
    stats: 'Custom Audio',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2024 - PRESENT',
    role: 'Senior Freelance Video Editor & Graphic Designer',
    company: 'Self-Employed / Global Clients',
    description: 'Leading creative visual production for top YouTube creators, tech startups, and digital agencies worldwide.',
    highlights: ['Produced videos generating 50M+ total views', 'Designed over 150+ high CTR thumbnails and brand posters', 'Built full visual identity systems for international clients'],
  },
  {
    year: '2023 - 2024',
    role: 'Lead Motion Designer',
    company: 'Creative Media Agency',
    description: 'Managed motion graphics team crafting high-converting social media reels, commercial promo videos, and brand animations.',
    highlights: ['Increased client social engagement by 140%', 'Standardized fast-turnaround video editing pipelines', 'Designed award-nominated event banners'],
  },
  {
    year: '2022 - 2023',
    role: 'Visual Content Creator & Designer',
    company: 'Digital Brand Studio',
    description: 'Focused on thumbnail optimization, social media carousel design, and YouTube channel aesthetic overhauls.',
    highlights: ['Boosted channel CTRs from 6% to over 15%', 'Crafted 80+ custom vectors and typography art pieces'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alex Vance',
    role: 'Founder & YouTube Creator',
    company: 'Tech Unboxed (1.2M Subs)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Krishjot is an absolute magician with video editing and thumbnails! He doubled our click-through rate in just 2 weeks. His sense of pacing and visual flair is unmatched.',
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'Pulse Digital Agency',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Working with Krishjot transformed our brand identity. His poster art and motion graphics delivered the high-end Awwwards vibe we desperately needed.',
  },
  {
    id: 'test-3',
    name: 'Rohan Sharma',
    role: 'Content Creator & Coach',
    company: 'Growth Academy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Super quick turnarounds, top-notch communication, and unreal creativity. Krishjot understands storytelling better than most editors in the industry.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What video editing and graphic design services do you offer?',
    answer: 'I offer end-to-end creative visual services including cinematic YouTube video editing, Instagram Reels / TikTok edits, motion graphics, custom high-CTR thumbnails, brand identity packages, poster design, and digital marketing graphics.',
    category: 'Services',
  },
  {
    id: 'faq-2',
    question: 'What software and tools do you use for editing and design?',
    answer: 'I work with industry-standard professional software: Adobe Premiere Pro & DaVinci Resolve for video editing and color grading, Adobe After Effects for motion graphics & VFX, Adobe Photoshop & Illustrator for graphic design, and Figma for UI assets.',
    category: 'General',
  },
  {
    id: 'faq-3',
    question: 'What is your typical project turnaround time?',
    answer: 'Turnaround time depends on the project scope. YouTube Thumbnails & Social Posts take 24–48 hours. Reels & Short Videos take 1–3 business days. Full-length cinematic YouTube edits or comprehensive branding take 3–7 business days. Rush orders can be accommodated upon request.',
    category: 'Pricing & Timing',
  },
  {
    id: 'faq-4',
    question: 'How does the revision process work?',
    answer: 'Client satisfaction is my highest priority. I provide 2–3 rounds of detailed revisions included with every project to fine-tune pacing, color, text overlays, and audio mix until you are 100% satisfied with the final result.',
    category: 'Process & Revisions',
  },
  {
    id: 'faq-5',
    question: 'How do I submit raw footage and project assets?',
    answer: 'You can easily share raw video files, audio tracks, and brand guidelines via Google Drive, Dropbox, WeTransfer, or Frame.io. I provide secure folders for every client project.',
    category: 'Process & Revisions',
  },
  {
    id: 'faq-6',
    question: 'Can you handle long-term ongoing video editing for my channel or agency?',
    answer: 'Yes! I offer dedicated monthly retainer packages for creators, channels, and agencies looking for consistent weekly video edits, thumbnail designs, and content strategy.',
    category: 'General',
  },
];
