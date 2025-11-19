import { 
  Code, 
  Layout, 
  Zap, 
  Smartphone, 
  Globe, 
  Cpu, 
  Palette, 
  Rocket, 
  CheckCircle, 
  Monitor,
  Settings
} from "lucide-react";
import { ContactInfo, NavItem, Project, Service, Skill } from "./types";

export const CONTACT_INFO: ContactInfo = {
  email: "gauravsarangbusiness@gmail.com",
  phone: "+91 8806431328",
  instagram: "https://instagram.com/gaurav__sarang",
  linkedin: "https://www.linkedin.com/in/gaurav-sarang-7070b42b8",
  github: "https://github.com/gauravsarang1",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "HTML5", icon: Layout },
  { name: "CSS3", icon: Palette },
  { name: "TailwindCSS", icon: Zap },
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "React", icon:  Monitor },
  { name: "Next.js", icon: Globe },
  { name: "Framer Motion", icon: Rocket },
  { name: "Redux Toolkit", icon: Cpu },
  { name: "Responsive UI", icon: Smartphone },
];

export const SERVICES: Service[] = [
  {
    title: "Landing Page Development",
    description: "Fast, modern, conversion-focused landing pages tailored for US small businesses and startups to boost leads.",
    icon: Layout
  },
  {
    title: "Website Redesign",
    description: "Transform outdated sites into modern, clean experiences with improved UI, speed, and user trust.",
    icon: Palette
  },
  {
    title: "Business Website Dev",
    description: "Professional informational and service-based websites that build credibility for your brand.",
    icon: Globe
  },
  {
    title: "Maintenance & Optimization",
    description: "Speed optimization, bug fixes, and regular updates to keep your digital presence running smoothly.",
    icon: Settings
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Agency Landing Page",
    category: "Landing Page",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "Fitness Coaching Site",
    category: "Health & Wellness",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "SaaS Dashboard Intro",
    category: "Tech Startup",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    title: "Real Estate Showcase",
    category: "Property",
    image: "https://picsum.photos/800/600?random=4"
  }
];

export const BENEFITS = [
  "Lightning Fast Load Times",
  "Mobile-First Responsive Design",
  "SEO Friendly Structure",
  "High-Converting Layouts"
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, BrightStart Marketing",
    content: "Gaurav completely transformed our landing page. Our conversion rate went up by 40% within the first month. Fast communication and excellent design skills.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mike Davidson",
    role: "Founder, FitLife Coaching",
    content: "I needed a website done in under a week for a launch, and Gaurav delivered. The animations are smooth and the site loads instantly on mobile.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Carter",
    role: "Director, Urban Realty",
    content: "Finally, a developer who understands business goals. He didn't just build a site; he built a sales tool for my real estate agency. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const FAQS = [
  {
    question: "How long does it take to build a landing page?",
    answer: "Typically, a standard landing page takes 3-5 days from design to launch. More complex websites with multiple pages usually take 2-3 weeks."
  },
  {
    question: "Do you provide the design, or do I need to have one?",
    answer: "I can do both! If you have a Figma file, I can build it pixel-perfect. If not, I can design a modern, high-converting layout for you based on your brand."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Absolutely. I follow a 'Mobile-First' approach. Your site will look and perform perfectly on iPhones, Androids, tablets, and desktops."
  },
  {
    question: "Do you offer support after the website is done?",
    answer: "Yes! I offer a 2-week support period after launch to fix any bugs. I also offer monthly maintenance packages if you need ongoing updates."
  },
  {
    question: "What do you need from me to get started?",
    answer: "I'll need your logo, brand colors, text content (copy), and images. If you don't have images, I can use high-quality stock photos."
  }
];