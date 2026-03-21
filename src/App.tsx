import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Smartphone,
  Shield,
  Sparkles,
  Code2,
  Layers3,
  Zap,
  Store,
  Play,
  ChevronRight,
  Download,
  Globe,
  Star,
  FolderGit2,
} from "lucide-react";

type Skill = { category: string; items: string[] };
type ProjectLink = { label: string; href: string; icon: React.ComponentType<{ className?: string }> };
type ProjectTech = string[] | Record<string, string[]>;
type Project = {
  name: string;
  type: string;
  description: string;
  tech: ProjectTech;
  images?: string[];
  highlights?: string[];
  links: ProjectLink[];
  accent: string;
};
type ExperienceItem = { company: string; role: string; period: string; points: string[] };
type BlogPost = { title: string; excerpt: string; tag: string };
type ContactLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
};
type ContactMultiLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  values: { label: string; href: string }[];
};
type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork?: boolean;
};

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const profile = {
  name: "Atif Qamar",
  title: "Senior Mobile Engineer / Ex-Razorpay",
  tagline:
    "Building polished AI-powered iOS, Android, and Flutter products from Bangalore with clean architecture, SDK craftsmanship, and high-performance mobile experiences.",
  email: "atifqamar29@gmail.com",
  phones: ["8310615397", "8145628647"],
  linkedin: "https://www.linkedin.com/in/atif-qamar-3321aa85/",
  github: "https://github.com/geek-atif",
  medium: "https://medium.com/@atifqamar29",
  recommendations: "https://www.linkedin.com/in/atif-qamar-3321aa85/details/recommendations/?detailScreenTabIndex=0",
  resume: assetPath("/Atif_Qamar_Flutter.pdf"),
  years: "7+",
  location: "Bangalore, India",
  summary:
    "Senior Software Engineer (SDE-3) based in Bangalore, India with 7+ years of experience engineering and scaling AI-powered mobile applications across iOS, Android, and Flutter. Expertise in end-to-end app development, architecture design, performance optimization, SDK development, and crafting product-driven experiences that are scalable, reliable, and built with precision.",
};

const skills: Skill[] = [
  {
    category: "Mobile Development",
    items: ["iOS", "Android", "Flutter", "Cross-platform Apps", "SDK Development"],
  },
  {
    category: "Programming Languages",
    items: ["Swift", "Kotlin", "Java", "Dart"],
  },
  {
    category: "Frameworks",
    items: ["Flutter", "SwiftUI", "UIKit", "Jetpack Compose", "XML"],
  },
  {
    category: "Platforms & Integration",
    items: ["Firebase", "REST APIs", "SDK Development", "App Store Connect", "Play Console"],
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "MVVM", "VIPER", "BLoC", "Modular Design"],
  },
  {
    category: "Tools",
    items: ["Xcode", "Android Studio", "VS Code", "Git", "SPM"],
  },
];

const techStack = [
  { label: "Flutter" },
  { label: "iOS Native" },
  { label: "Android Native" },
  { label: "Dart" },
  { label: "Kotlin" },
  { label: "Java" },
  { label: "SwiftUI" },
  { label: "Swift" },
  // { label: "UIKit" },
  // { label: "Jetpack Compose" },
  // { label: "Firebase" },
  // { label: "REST APIs" },
  // { label: "Clean Architecture" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Medium", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const screenshotSets = {
  pukaar: [
    assetPath("/screenshots/pukaar-1.svg"),
    assetPath("/screenshots/pukaar-2.svg"),
    assetPath("/screenshots/pukaar-3.svg"),
  ],
  digipos: [
    assetPath("/screenshots/digipos-1.svg"),
    assetPath("/screenshots/digipos-2.svg"),
    assetPath("/screenshots/digipos-3.svg"),
  ],
  turbo: [
    assetPath("/screenshots/turbo-1.svg"),
    assetPath("/screenshots/turbo-2.svg"),
    assetPath("/screenshots/turbo-3.svg"),
  ],
  posService: [
    assetPath("/screenshots/pos-service-1.svg"),
    assetPath("/screenshots/pos-service-2.svg"),
    assetPath("/screenshots/pos-service-3.svg"),
  ],
  fieldpro: [
    assetPath("/screenshots/fieldpro-1.svg"),
    assetPath("/screenshots/fieldpro-2.svg"),
    assetPath("/screenshots/fieldpro-3.svg"),
  ],
  whitehax: [
    assetPath("/screenshots/whitehax-1.svg"),
    assetPath("/screenshots/whitehax-2.svg"),
    assetPath("/screenshots/whitehax-3.svg"),
  ],
};

const projects: Project[] = [
  {
    name: "Razorpay DigiPOS",
    type: "Fintech / POS app",
    description:
      "Razorpay DigiPOS is a native iOS point-of-sale app built for Apple Premium Reseller stores to bring checkout directly to iPhone and iPad. It supports card payments, UPI, payment links, dynamic QR, no-cost EMI, exchange, Apple Forward Trade-In, and AppleCare flows in one fast retail experience. I worked on architecture, performance optimization, device integrations, and reliable payment workflows for a business-critical commerce product. The result was a smoother in-store journey, stronger staff mobility, faster billing, and meaningful contribution to 10x GMV growth.",
    tech: {
      core: [
        "iOS",
        "Swift",
        "SwiftUI",
        "VIPER"
      ],
      payments: [
        "Card Payments",
        "UPI Payments",
        "Payment Links",
        "Dynamic QR Payments",
        "No-Cost EMI"
      ],
      commerce: [
        "Apple Forward Trade-In",
        "AppleCare Integration",
        "Exchange Flow",
        "In-Store Checkout",
        "POS Workflows"
      ],
      deviceIntegrations: [
        "D180 POS Device Integration",
        "External Payment Hardware",
        "Device Pairing",
        "Transaction Processing"
      ],
      engineering: [
        "Performance Optimization",
        "Scalable Architecture",
        "Enterprise Mobility",
        "Production-Grade Reliability",
        "Native iOS Development"
      ]
    },
    highlights: [
      "Built for Apple Premium Reseller stores with a mobile-first in-store checkout flow",
      "Supported card, UPI, payment links, QR, EMI, exchange, trade-in, and AppleCare journeys",
      "Improved checkout speed and staff mobility by moving payments directly to iPhone and iPad",
      "Engineered as a business-critical native iOS product with strong reliability and performance focus",
      "Contributed to a smoother payment journey that helped drive 10x GMV growth"
    ],
    images: screenshotSets.digipos,
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/razorpay-digipos/id6520383285", icon: Store },
      {
        label: "LinkedIn Feature",
        href: "https://www.linkedin.com/posts/razorpay_razorpayatgff-globalfintechfest-activity-7234492976322818052-Z1-S?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIBC1YBLz32p-XAvwQbZVq1C_M6m9VMm_Q",
        icon: ExternalLink,
      },
      {
        label: "LinkedIn Demo",
        href: "https://www.linkedin.com/posts/ndtvprofit_razorpay-coo-rahul-kothari-demonstrates-payment-activity-7234613464009236480-U5Cq?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIBC1YBLz32p-XAvwQbZVq1C_M6m9VMm_Q",
        icon: ExternalLink,
      },
    ],
    accent: "from-emerald-500/25 via-cyan-500/10 to-blue-500/20",
  },
  {
    name: "Pukaar AI",
    type: "AI-powered mobile app",
    description:
      "Pukaar AI is an AI-powered baby care and health tracking app designed to help new parents feel calmer, more informed, and more confident. The product combines cry analysis, feeding and sleep guidance, growth-stage support, milestone tracking, and practical newborn care insights in a single Flutter experience. It also connects digital parenting support with expert-backed guidance from pediatricians and specialists. I helped shape a polished, cross-platform product focused on trust, clarity, engagement, and everyday usability, with public visibility from Shark Tank India.",
    tech: {
      core: ["Flutter", "Dart", "Clean Architecture", "BLoC"],
      analytics: ["Mixpanel Analytics", "Facebook App Events", "Microsoft Clarity", "AppsFlyer Attribution"],
      engagement: ["OneSignal Push Notifications", "App Tracking Transparency"],
      payments: ["In-App Purchases", "StoreKit Integration", "Razorpay Payment Gateway"],
      features: ["Sign in with Apple", "Video Player Integration"],
      engineering: ["Performance Optimization", "Cross-Platform Development"]
    },
    highlights: [
      "AI-powered parenting app focused on early baby care, routines, and health guidance",
      "Combined cry analysis, expert-backed support, and milestone-based care insights in one product",
      "Built a reassuring mobile experience for first-time parents navigating everyday baby needs",
      "Shipped cross-platform Flutter architecture with analytics, attribution, and engagement tooling",
      "Featured on Shark Tank India as part of the product’s public launch visibility"
    ],
    images: screenshotSets.pukaar,
    links: [
      //{ label: "Case Study", href: "#", icon: ExternalLink },
      { label: "App Store", href: "https://apps.apple.com/in/app/pukaar-ai/id6755088190", icon: Store },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.prakarann.goonj&hl=en_IN", icon: Play },
    ],
    accent: "from-violet-500/25 via-fuchsia-500/10 to-sky-500/20",
  },

  {
    name: "Razorpay POS Service",
    type: "Fintech / POS app",
    description:
      "Razorpay POS Service is a native Android payments integration platform that brings Razorpay POS capabilities directly into merchant business apps. It supports cards, UPI, QR, SMS pay links, bank EMI, brand EMI, wallets, cash, and cheque across retail counters, on-floor operations, and delivery workflows. The product works with POS hardware over Bluetooth and Wi-Fi while keeping payment journeys configurable, secure, and reliable. I contributed to Android-native architecture, device integration, session management, and scalable merchant payment flows for enterprise-grade operations.",
    tech: {
      core: [
        "Android Native",
        "Kotlin",
        "Java",
        "MVVM",
        "Android SDK"
      ],
      payments: [
        "Card Payments",
        "UPI",
        "QR Code Payments",
        "SMS Pay Links",
        "Bank EMI",
        "Brand EMI",
        "Wallet Payments",
        "Cash Flows"
      ],
      integrations: [
        "Business App Integration",
        "Backend-Driven Integration",
        "POS Hardware Integration",
        "Bluetooth Connectivity",
        "Wi-Fi Connectivity"
      ],
      product: [
        "Merchant Payment Workflows",
        "Store Staff Payments",
        "Delivery Agent Collections",
        "Configurable Payment Modes",
        "Enterprise POS Solutions"
      ],
      engineering: [
        "Session Management",
        "Android 14 Support",
        "Performance Optimization",
        "App Stability",
        "Production-Grade Reliability",
        "Secure Payment Orchestration"
      ]
    },
    highlights: [
      "Embedded Razorpay POS capabilities directly into merchant business applications",
      "Supported store staff and delivery-agent collections across integrated operational workflows",
      "Handled a wide range of modes including cards, UPI, QR, pay links, EMI, wallets, cash, and cheque",
      "Built for Android-native reliability with hardware connectivity over Bluetooth and Wi-Fi",
      "Focused on scalable payment orchestration for enterprise and retail merchant environments"
    ],

    images: screenshotSets.posService,
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.ezetap.service.rzp&hl=en_IN", icon: Play },
      {
        label: "LinkedIn Feature",
        href: "https://www.linkedin.com/posts/razorpay-pos-payments_razorpay-pos-self-healing-activity-7417504470848233472-jb7b?utm_source=share&utm_medium=member_desktop&rcm=ACoAABIBC1YBLz32p-XAvwQbZVq1C_M6m9VMm_Q",
        icon: ExternalLink,
      },
    ],
    accent: "from-amber-500/25 via-orange-500/10 to-rose-500/20",
  },

  {
    name: "Razorpay Turbo",
    type: "Flutter payments SDK / plugin",
    description:
      "Razorpay Turbo is a cross-platform Flutter payments SDK that exposes Razorpay’s native checkout flows through a single Flutter plugin for Android, iOS, and web. It wraps the underlying native SDKs, supports secure order-based payment processing, and handles success, failure, and external wallet events through stable callback flows. The SDK also enables prefill, branding, theme customization, timeout control, and payment method configuration to improve merchant conversion and developer experience. My work focused on plugin architecture, platform bridging, interoperability, and production-grade integration quality.",
    tech: {
      core: [
        "Flutter Plugin Development",
        "Dart",
        "Android",
        "iOS",

      ],
      sdkArchitecture: [
        "Native SDK Wrapper",
        "Platform Channels / Bridge Layer",
        "Cross-Platform SDK Design",
        "Event-Driven Integration",
        "Developer-Focused API Design"
      ],
      payments: [
        "Razorpay Checkout",
        "Orders API Integration",
        "Payment Success / Failure Callbacks",
        "External Wallet Handling",
        "Secure Payment Processing"
      ],
      checkoutExperience: [
        "Prefill Configuration",
        "Checkout Customization",
        "Theme & Branding",
        "Payment Method Configuration",
        "Timeout Handling"
      ],
      engineering: [
        "SDK Architecture",
        "Native-Flutter Interoperability",
        "Platform Compatibility",
        "Production-Grade Reliability",
        "Integration Experience Optimization"
      ]
    },
    highlights: [
      "Built as a Flutter wrapper over Razorpay’s native Android and iOS checkout SDKs",
      "Provided a single plugin surface for Android, iOS, and web payment integration",
      "Handled payment success, failure, and external wallet events through stable callback flows",
      "Supported secure server-side order creation and order-based checkout orchestration",
      "Improved developer experience with configurable branding, prefill, methods, and timeout controls"
    ],
    images: screenshotSets.turbo,
    links: [
      { label: "pub.dev", href: "https://pub.dev/packages/razorpay_turbo", icon: ExternalLink },
      { label: "Official Docs", href: "https://razorpay.com/docs/payments/payment-gateway/flutter-integration/standard/integration-steps/", icon: ExternalLink }
    ],
    accent: "from-sky-500/25 via-blue-500/10 to-indigo-500/20"
  },
  {
    name: "AiDash IVMS FieldPro",
    type: "Enterprise field operations / native iOS app",
    description:
      "AiDash IVMS FieldPro is a native iOS field operations app built for utility crews and managers handling vegetation-risk workflows around distributed assets. It supports risk reporting, trimming, tree removal, hazardous tree management, and grow-in tracking through structured, secure, map-driven workflows. The product is designed for real field conditions with offline-first access, rich geospatial context, and dependable execution across remote environments. I worked on scalable iOS architecture, performance, offline usability, and workflow reliability, including enhancements that expanded downloadable coverage by up to 4x.",
    tech: {
      core: [
        "iOS Native",
        "Swift",
        "UIKit",
        "iPhone",
        "iPad"
      ],
      product: [
        "Vegetation Risk Management",
        "Hazard Tree Management",
        "Tree Trimming Workflows",
        "Tree Removal Operations",
        "Utility Field Operations"
      ],
      mappingAndOffline: [
        "Offline Maps",
        "Offline Data Access",
        "Map Layers",
        "Geospatial Context",
        "Field Data Capture"
      ],
      workflow: [
        "Secure Access",
        "Role-Based Workflows",
        "Distributed Crew Collaboration",
        "Work Execution Flows",
        "Decision Support Views"
      ],
      engineering: [
        "Enterprise Mobility",
        "Production-Grade Reliability",
        "Performance Optimization",
        "Scalable Workflow Architecture",
        "Field-Ready UX"
      ]
    },
    highlights: [
      "Built for utility organizations managing vegetation risks around distributed assets",
      "Supports reporting, trimming, tree removal, and hazardous tree workflows",
      "Improved offline field usability with up to 4x more downloadable map and data coverage",
      "Added richer map layers and more contextual information for faster decision-making",
      "Designed for secure collaboration across geographically distributed field crews"
    ],
    images: screenshotSets.fieldpro,
    links: [
      { label: "App Store", href: "https://apps.apple.com/in/app/aidash-ivms-fieldpro/id6475400606", icon: Store }
    ],
    accent: "from-emerald-500/25 via-lime-500/10 to-teal-500/20"
  },
  {
    name: "WhiteHaX CyberSafe",
    type: "Cybersecurity / Android native app",
    description:
      "WhiteHaX CyberSafe is a native Android cybersecurity app built to assess and improve the security posture of mobile devices. It combines device verification, OS and app configuration analysis, privacy checks, network risk detection, phishing and malware defense, Wi-Fi validation, and VPN-backed protection in one cloud-managed product. The experience is designed to translate complex cyber-readiness signals into clear guidance and action for end users. I contributed to Android-native architecture, secure data handling, cloud connectivity, diagnostics, and reliable mobile security workflows.",
    tech: {
      core: [
        "Android Native",
        "Kotlin",
        "Java",
        "Android SDK",
        "Cloud-Managed Mobile Security"
      ],
      security: [
        "Device Security Assessment",
        "OS & App Configuration Analysis",
        "Privacy Risk Detection",
        "Threat Intelligence",
        "Phishing & Malware Protection"
      ],
      network: [
        "Wi-Fi Security Validation",
        "Network Risk Analysis",
        "VPN Integration",
        "Connected Device Security",
        "Secure Connectivity"
      ],
      product: [
        "Cyber-Readiness Verification",
        "Guided Security Insights",
        "Risk Scoring",
        "Consumer Cyber Protection",
        "Multi-Device Monitoring"
      ],
      engineering: [
        "Secure Data Handling",
        "Performance Optimization",
        "Cloud Connectivity",
        "App Stability",
        "Production-Grade Reliability"
      ]
    },
    highlights: [
      "Cloud-managed Android app for mobile device cyber-readiness verification",
      "Analyzes device, OS, app settings, and network posture against multiple threat scenarios",
      "Supports on-demand Wi-Fi security checks and VPN-backed protection",
      "Uses threat intelligence to help defend against phishing, malware, and related cyber risks",
      "Designed for holistic mobile security and data privacy workflows"
    ],
    images: screenshotSets.whitehax,
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.whitehax.mobile&hl=en_IN", icon: Play }
    ],
    accent: "from-red-500/25 via-orange-500/10 to-yellow-500/20"
  }

];

const experience: ExperienceItem[] =
  [
    {
      company: "AiDash",
      role: "Senior Software Engineer (SDE-3)",
      period: "Aug 2025 — Present",
      points: [
        "Leading AI-powered mobile product development for intelligent infrastructure and field operations use cases across enterprise workflows.",
        "Driving architecture-first engineering across iOS and cross-platform systems with strong emphasis on scalability, modularity, and long-term maintainability.",
        "Building offline-capable, map-driven, and workflow-centric mobile experiences that help field teams execute reliably in real-world operational environments.",
        "Improving app performance, code quality, and release confidence through stronger engineering practices, production hardening, and system-level optimization."
      ],
    },
    {
      company: "Razorpay",
      role: "Lead Software Engineer",
      period: "Dec 2020 — Aug 2025",
      points: [
        "Built and scaled high-impact mobile payments products across iOS, Android, and Flutter, covering POS, checkout, SDK, and merchant-facing payment experiences.",
        "Led the development of DigiPOS and related in-store payment journeys supporting Card, UPI, Payment Links, dynamic QR, EMI, and device-assisted checkout workflows.",
        "Engineered payment systems and mobile experiences focused on transaction reliability, conversion, performance, and production-grade scalability in high-volume fintech environments.",
        "Worked extensively across native apps and SDK layers, enabling secure integrations, seamless checkout journeys, and reusable platform capabilities for merchants and partners."
      ],
    },
    {
      company: "Aujas Cybersecurity",
      role: "Software Engineer",
      period: "May 2018 — Dec 2020",
      points: [
        "Developed Android-native solutions for enterprise and security-focused products with emphasis on reliability, secure implementation, and production readiness.",
        "Built a strong foundation in mobile architecture, app performance, debugging, and disciplined delivery while working on cybersecurity-oriented client requirements.",
        "Contributed to security-conscious mobile workflows involving device posture, privacy-aware engineering, and user-facing protection experiences."
      ],
    }

  ];

const achievements = [
  "Built production-grade fintech, SDK, AI, and enterprise mobile applications.",
  "Delivered cross-platform and native mobile solutions under aggressive timelines.",
  "Contributed to high-scale payment experiences with measurable business impact.",
  "Improved app performance, architecture quality, and engineering maintainability.",
  "Recognized for MVP-level execution and end-to-end ownership.",
];

const blogs: BlogPost[] = [
  {
    title: "Architecting Scalable Flutter Apps with Clean Architecture",
    excerpt:
      "A practical approach to structuring feature modules, state management, and API layers for long-term maintainability.",
    tag: "Flutter",
  },
  {
    title: "iOS Performance Optimization: Rendering, Memory, and Startup Time",
    excerpt:
      "Patterns and techniques to keep mobile experiences smooth, fast, and production ready.",
    tag: "iOS",
  },
  {
    title: "Designing SDKs That Mobile Teams Actually Love",
    excerpt:
      "Lessons from building reusable SDK layers with great developer experience, predictable APIs, and strong documentation.",
    tag: "SDK",
  },
];

const recommendations = [
  {
    title: "LinkedIn Recommendations",
    description:
      "Professional recommendations from colleagues and collaborators are available on LinkedIn and highlight delivery ownership, mobile engineering depth, and product execution.",
    href: profile.recommendations,
    cta: "View Recommendations",
  },
];

const contactItems: (ContactLink | ContactMultiLink)[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Smartphone,
    label: "Mobile",
    values: profile.phones.map((phone) => ({ label: phone, href: `tel:${phone}` })),
  },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/atif-qamar-3321aa85", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/geek-atif", href: profile.github },
  { icon: Globe, label: "Medium", value: "medium.com/@atifqamar29", href: profile.medium },
  { icon: ExternalLink, label: "Recommendations", value: "linkedin.com recommendations", href: profile.recommendations },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const staggerIn = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScrollStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={staggerIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function getExternalLinkProps(href: string): React.AnchorHTMLAttributes<HTMLAnchorElement> {
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function SkillCard({ category, items }: Skill) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-zinc-200/70 bg-white/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {category}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-200 bg-zinc-50/90 px-3 py-1.5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ScreenshotCarousel({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);
  const safeImages = images.length ? images : [assetPath("/screenshots/placeholder.svg")];

  useEffect(() => {
    if (!safeImages.length) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [safeImages.length]);

  return (
    <div className="grid gap-4 sm:grid-cols-[0.7fr_0.3fr]">
      <div className="relative h-56 overflow-hidden rounded-[24px] border border-zinc-200/70 bg-zinc-50/90 dark:border-white/10 dark:bg-[#0c1018]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_28%)]" />
        <motion.img
          key={safeImages[index % safeImages.length]}
          src={safeImages[index % safeImages.length]}
          alt={`${name} screenshot ${(index % safeImages.length) + 1}`}
          initial={{ opacity: 0.3, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="relative h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {safeImages.map((_, dotIndex) => (
            <button
              key={dotIndex}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition-all ${dotIndex === index % safeImages.length ? "w-8 bg-white" : "w-2.5 bg-white/45"
                }`}
            />
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center rounded-[24px] border border-zinc-200/70 bg-zinc-50/90 p-4 dark:border-white/10 dark:bg-[#0c1018]">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-44 w-24 rounded-[30px] border border-zinc-300/70 bg-zinc-950 p-2 shadow-2xl dark:border-white/10"
        >
          <div className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-zinc-700" />
          <div className="h-full w-full overflow-hidden rounded-[22px] bg-zinc-100 dark:bg-zinc-900">
            <img
              src={safeImages[index % safeImages.length]}
              alt={`${name} iphone preview`}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TechOrbit() {
  return (
    <div className="relative mx-auto h-[340px] w-[340px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {techStack.map((item, index) => {
          const angle = (index / techStack.length) * Math.PI * 2;
          const x = 120 * Math.cos(angle);
          const y = 120 * Math.sin(angle);
          return (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.08 }}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
            >
              <div className="flex min-h-16 min-w-[112px] max-w-[148px] items-center justify-center rounded-[22px] border border-zinc-200/70 bg-white/80 px-3 text-center text-xs font-semibold leading-4 text-zinc-900 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-white">
                {item.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28px] border border-zinc-200/70 bg-white/80 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
        <div>
          <div className="text-lg font-semibold text-zinc-950 dark:text-white">Tech</div>
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Stack
          </div>
        </div>
      </div>
    </div>
  );
}

function GitHubShowcase() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = profile.github
    .replace("https://github.com/", "")
    .replace("http://github.com/", "")
    .replace(/\/$/, "");

  useEffect(() => {
    let ignore = false;

    async function loadRepos() {
      if (!username || username.includes("yourusername") || profile.github === "#") {
        setRepos([
          {
            id: 1,
            name: "flutter-clean-architecture",
            description: "Scalable Flutter starter with clean layers, DI, and API integration.",
            html_url: "#",
            stargazers_count: 24,
            language: "Dart",
          },
          {
            id: 2,
            name: "ios-modular-sdk-kit",
            description: "Reusable SDK patterns for iOS apps with clean boundaries and integrations.",
            html_url: "#",
            stargazers_count: 18,
            language: "Swift",
          },
          {
            id: 3,
            name: "android-payment-samples",
            description: "Android samples covering secure payment flows and modern architecture.",
            html_url: "#",
            stargazers_count: 15,
            language: "Kotlin",
          },
        ]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const data: unknown = await response.json();

        if (!ignore && Array.isArray(data)) {
          setRepos(
            (data as Repo[])
              .filter((repo) => !repo.fork)
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 3)
          );
        }
      } catch {
        if (!ignore) setRepos([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadRepos();
    return () => {
      ignore = true;
    };
  }, [username]);

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {loading
        ? Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="rounded-[28px] border border-zinc-200/70 bg-white/60 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="animate-pulse space-y-3">
              <div className="h-5 w-32 rounded bg-zinc-200 dark:bg-white/10" />
              <div className="h-4 w-full rounded bg-zinc-200 dark:bg-white/10" />
              <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-white/10" />
            </div>
          </div>
        ))
        : repos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-[28px] border border-zinc-200/70 bg-white/60 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-zinc-200/70 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
                <FolderGit2 className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <a
                href={repo.html_url}
                {...getExternalLinkProps(repo.html_url)}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
              >
                View Repo
              </a>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">
              {repo.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {repo.description ||
                "Open-source project showcasing engineering quality and reusable patterns."}
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="inline-flex items-center gap-1">
                <Star className="h-4 w-4" /> {repo.stargazers_count ?? 0}
              </div>
              <div>{repo.language || "Code"}</div>
            </div>
          </motion.div>
        ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const techGroups = Array.isArray(project.tech)
    ? [{ label: "Tech", items: project.tech }]
    : Object.entries(project.tech).map(([label, items]) => ({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      items,
    }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[32px] border border-zinc-200/70 bg-white/60 p-6 shadow-[0_12px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {project.type}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
              {project.name}
            </h3>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/60 p-3 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <Smartphone className="h-5 w-5 text-zinc-800 dark:text-white" />
          </div>
        </div>

        {project.images?.length ? <ScreenshotCarousel images={project.images} name={project.name} /> : null}

        <p className="mt-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        {project.highlights?.length ? (
          <div className="mt-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Highlights
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-zinc-200/80 bg-white/70 px-4 py-3 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-5 grid gap-4">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={`${group.label}-${item}`}
                    className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                {...getExternalLinkProps(link.href)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  return (
    <motion.div variants={fadeUp} className="relative pl-10">
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-zinc-950 dark:bg-white" />
      {!isLast && (
        <div className="absolute left-[7px] top-7 h-[calc(100%+24px)] w-px bg-zinc-300 dark:bg-white/15" />
      )}
      <div className="rounded-3xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{item.role}</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.company}</p>
          </div>
          <div className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            {item.period}
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {item.points.map((point) => (
            <div key={point} className="flex gap-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="rounded-[28px] border border-zinc-200/70 bg-white/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
    >
      <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
        {post.tag}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white">
        Read article <ArrowRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.toggle("dark", theme === "dark");
    body.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    body.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 480);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const stats = useMemo(
    () => [
      { label: "Years Experience", value: profile.years },
      { label: "Platforms", value: "iOS\nAndroid\nFlutter" },
      { label: "Focus", value: "AI Apps , SDKs , Fintech" },
    ],
    []
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-950 transition-colors dark:bg-[#08090c] dark:text-white">
      <div className="fixed inset-x-0 top-0 z-0 h-[620px] bg-[radial-gradient(circle_at_top,rgba(120,119,255,0.18),transparent_35%),radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_84%_12%,rgba(168,85,247,0.14),transparent_24%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(113,113,122,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,122,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_48%,transparent_82%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />

      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/60 backdrop-blur-2xl dark:border-white/10 dark:bg-[#08090c]/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href="#top" className="max-w-[240px] text-sm font-semibold leading-tight tracking-[0.2em] text-zinc-900 dark:text-white sm:max-w-none">
            Atif Qamar / Senior Mobile Engineer
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-zinc-950 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* <a href={profile.resume} {...getExternalLinkProps(profile.resume)} className="hidden rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white md:inline-flex">Resume</a> */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-3 text-zinc-900 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white md:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-3 text-zinc-900 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div className="border-t border-zinc-200/70 px-6 py-4 dark:border-white/10 md:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-zinc-200/80 bg-white/90 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-start gap-16 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div initial="hidden" animate="visible" transition={{ duration: 0.7, staggerChildren: 0.12 }} className="order-2 max-w-3xl lg:order-1">
              <motion.div variants={fadeUp} className="mb-5 inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                Senior Mobile Engineer • Bangalore • iOS • Android • Flutter • AI
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
                Precision in code. Taste in product.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg">
                {profile.tagline}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950">View Projects <ArrowRight className="h-4 w-4" /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white">Contact Me</a>
                {/* <a href={profile.resume} {...getExternalLinkProps(profile.resume)} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white">Download Resume <Download className="h-4 w-4" /></a> */}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-zinc-200/70 bg-white/60 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
                    <div className="text-2xl font-semibold text-zinc-950 dark:text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 relative lg:order-2">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-6 -left-8 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[40px] border border-zinc-200/70 bg-white/55 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
                <div className="relative flex flex-col items-center text-center">
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }} className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 via-sky-500/20 to-emerald-500/20 blur-2xl" />
                    <div className="relative h-70 w-70 overflow-hidden rounded-full border border-white/50 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 md:h-72 md:w-72">
                      <img src={assetPath("/profile.jpg")} alt="Atif Qamar profile" className="h-full w-full rounded-full object-cover" />
                    </div>
                  </motion.div>
                  <h2 className="mt-8 text-3xl font-semibold text-zinc-950 dark:text-white">{profile.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{profile.title}</p>
                  <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">{profile.location}</p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">{profile.summary}</p>
                  <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
                    <div className="rounded-[28px] border border-zinc-200/70 bg-white/70 p-4 text-left backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-center gap-3"><Layers3 className="h-5 w-5 text-zinc-500" /><p className="text-sm font-medium text-zinc-900 dark:text-white">Architecture-first engineering</p></div>
                      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">Clean Architecture, MVVM, VIPER, modular SDKs, and maintainable product systems.</p>
                    </div>
                    <div className="rounded-[28px] border border-zinc-200/70 bg-white/70 p-4 text-left backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-center gap-3"><Shield className="h-5 w-5 text-zinc-500" /><p className="text-sm font-medium text-zinc-900 dark:text-white">Security and reliability</p></div>
                      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">Experience across fintech, enterprise apps, AI features, and performance-sensitive mobile workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <ScrollReveal>
              <SectionHeading eyebrow="About Me" title="Senior mobile engineer with a systems mindset." description="I build AI-enabled applications and SDKs that balance product quality, engineering rigor, and business outcomes. My work from Bangalore spans native iOS, Android, and Flutter with a strong focus on maintainable architecture, developer experience, and high-performance execution." />
            </ScrollReveal>
            <ScrollStagger className="grid gap-6 md:grid-cols-2">
              {[
                { icon: Code2, title: "Core expertise", text: "iOS, Android, Flutter, mobile SDKs, architecture design, fintech workflows, AI integration, and scalable app delivery." },
                { icon: Zap, title: "Performance focus", text: "App startup, rendering smoothness, memory usage, async flows, and robust production optimization practices." },
                { icon: Sparkles, title: "Product mindset", text: "Builds that feel premium, ship reliably, and align engineering choices with UX and business impact." },
                { icon: Shield, title: "Reliable systems", text: "Production-ready implementations with strong structure, reusable components, and future-friendly codebases." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-[28px] border border-zinc-200/70 bg-white/60 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
                  <item.icon className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
                  <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.text}</p>
                </motion.div>
              ))}
            </ScrollStagger>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Skills" title="A broad mobile stack with deep specialization where it matters most." description="A mix of native and cross-platform technologies, system design knowledge, and delivery tooling to build polished products from idea to release." />
          </ScrollReveal>
          <ScrollStagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{skills.map((skill) => <SkillCard key={skill.category} {...skill} />)}</ScrollStagger>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ScrollReveal>
              <SectionHeading eyebrow="Animated Tech Stack" title="Floating icons and motion-driven developer branding." description="A modern orbit-style stack section covering Flutter, iOS Native, Android Native, AI app delivery, clean architecture, and mobile engineering foundations." />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <TechOrbit />
            </ScrollReveal>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Featured Projects" title="Built for Production" description="A showcase of AI-powered, fintech, SDK, and enterprise mobile work across Flutter, iOS, and Android." />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 xl:grid-cols-2">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Experience Timeline" title="A journey across enterprise, security, and high-scale mobile products." description="From early engineering to leading mobile initiatives in Bangalore across fintech and AI-enabled systems, with strong ownership and execution throughout." />
          </ScrollReveal>
          <ScrollStagger className="mt-12 space-y-8">{experience.map((item, index) => <TimelineItem key={item.company} item={item} isLast={index === experience.length - 1} />)}</ScrollStagger>
        </section>

        <section id="github" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="GitHub Auto Fetch" title="Featured repositories powered by the GitHub API." description="Repositories are fetched from github.com/geek-atif to highlight reusable mobile engineering patterns, SDK work, and app architecture." />
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mt-12"><GitHubShowcase /></ScrollReveal>
        </section>

        <section id="recommendations" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Recommendations" title="Professional feedback and endorsements on LinkedIn." description="Open the LinkedIn recommendations page to review written recommendations from collaborators, teammates, and stakeholders." />
          </ScrollReveal>
          <ScrollStagger className="mt-12 grid gap-6 lg:grid-cols-1">
            {recommendations.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="rounded-[32px] border border-zinc-200/70 bg-white/60 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  </div>
                  <a href={item.href} {...getExternalLinkProps(item.href)} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white">
                    {item.cta}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </ScrollStagger>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal>
              <SectionHeading eyebrow="Achievements" title="Execution, product impact, and engineering quality across the stack." description="A track record of shipping production apps, enabling SDK adoption, and improving mobile experiences through architecture and performance." />
            </ScrollReveal>
            <ScrollStagger className="grid gap-4">
              {achievements.map((achievement, index) => (
                <motion.div key={achievement} variants={fadeUp} className="flex gap-4 rounded-[24px] border border-zinc-200/70 bg-white/60 p-5 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">{index + 1}</div>
                  <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">{achievement}</p>
                </motion.div>
              ))}
            </ScrollStagger>
          </div>
        </section>

        <section id="blog" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Medium" title="Writing about mobile engineering, architecture, AI, and performance." description="Technical writing, engineering breakdowns, architecture notes, and lessons from real products published on Medium." />
          </ScrollReveal>
          <ScrollStagger className="mt-12 grid gap-6 lg:grid-cols-3">{blogs.map((post) => <BlogCard key={post.title} post={post} />)}</ScrollStagger>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[36px] border border-zinc-200/70 bg-gradient-to-br from-zinc-950 to-zinc-800 p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.16)] dark:border-white/10 md:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">Contact</div>
                  <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">Let’s build the next great mobile product.</h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">Available from Bangalore for product engineering, senior mobile roles, architecture consulting, SDK work, AI app development, and high-quality delivery across iOS, Android, and Flutter.</p>
                </div>
                <div className="grid gap-4">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                      <div className="flex items-center gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10"><item.icon className="h-5 w-5" /></div>
                        <div>
                          <p className="text-sm text-zinc-400">{item.label}</p>
                          {"values" in item ? (
                            <div className="mt-1 flex flex-wrap gap-3">
                              {item.values.map((value) => (
                                <a
                                  key={value.href}
                                  href={value.href}
                                  {...getExternalLinkProps(value.href)}
                                  className="text-sm font-medium text-white transition hover:text-zinc-300"
                                >
                                  {value.label}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              {...getExternalLinkProps(item.href)}
                              className="text-sm font-medium text-white transition hover:text-zinc-300"
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      </div>
                      {"href" in item && <ExternalLink className="h-4 w-4 text-zinc-400" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-zinc-200/70 px-6 py-8 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {profile.name}. Crafted for modern mobile engineering.</p>
          <div className="flex items-center gap-5">
            <a href={profile.github} {...getExternalLinkProps(profile.github)} className="hover:text-zinc-900 dark:hover:text-white">GitHub</a>
            <a href={profile.linkedin} {...getExternalLinkProps(profile.linkedin)} className="hover:text-zinc-900 dark:hover:text-white">LinkedIn</a>
            <a href={profile.medium} {...getExternalLinkProps(profile.medium)} className="hover:text-zinc-900 dark:hover:text-white">Medium</a>
          </div>
        </div>
      </footer>

      {showScrollTop ? (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/90 px-4 py-3 text-sm font-medium text-zinc-900 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/10 dark:bg-[#11131a]/85 dark:text-white"
        >
          <ArrowUp className="h-4 w-4" />
          Top
        </button>
      ) : null}
    </div>
  );
}
