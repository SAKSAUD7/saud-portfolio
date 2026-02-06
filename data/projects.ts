
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "Mobile" | "Backend";
  links: {
    live?: string;
    github?: string;
  };
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    other?: string[];
  };
  roles: string[];
  images: {
    main: string;
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: "ninja-park",
    title: "Booking & Management System",
    shortDescription: "Built systems for session and party bookings, digital waivers, admin dashboards, analytics, and CMS-driven content.",
    category: "Full Stack",
    links: {
      live: "https://ninjapark-frontend.azurewebsites.net/",
    },
    tags: ["React", "Django", "PostgreSQL", "Azure", "Razorpay"],
    fullDescription: `Ninja Inflatable Park is a comprehensive, production-grade booking and management platform designed for a large indoor amusement center. This full-stack application serves as the operational backbone of the business, unifying public-facing services with internal administration tools.

The platform solves complex operational challenges by digitizing the entire customer journey—from session booking and waiver signing to check-in and payments. It replaces manual paperwork with a streamlined digital workflow, significantly reducing queue times and administrative overhead.

Key architectural features include:
• **Session Booking Engine:** Intelligent logic handling capacity management, time-slot allocation, and automated pricing based on guest counts and peak hours.
• **Digital Waiver System:** A legally compliant waiver module allowing guests to sign digitally, with support for group waivers, age validation, and kiosk mode for on-site tablets.
• **Admin Operations Portal:** A powerful dashboard providing real-time visibility into bookings, revenue metrics, and facility capacity. Staff can manage check-ins, verify waivers, and handle refunds instantly.
• **Content Management System (CMS):** A custom-built CMS allowing non-technical managers to update pricing plans, safety guidelines, and marketing banners without developer intervention.

The system is built on a robust tech stack featuring a React frontend for a dynamic user experience and a Django/PostgreSQL backend for secure, reliable data processing. Integration with Razorpay ensures seamless transactions, while Azure cloud hosting provides scalability for high traffic during peak seasons schedules.`,
    features: [
      "Advanced Session & Party Booking Engine with Capacity Management",
      "Legally Compliant Digital Waiver System with Kiosk Mode",
      "Real-time Admin Dashboard for Operations & Revenue Tracking",
      "Custom CMS for Dynamic Content & Pricing Management",
      "Role-Based Access Control (Admin, Manager, Staff, Customer)",
      "Secure Payment Processing via Razorpay",
      "Automated Email Notifications & Marketing Module"
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "JavaScript"],
      backend: ["Node.js", "Django", "RESTful APIs"],
      database: ["PostgreSQL"],
      other: ["Azure App Services", "Razorpay", "JWT Auth"]
    },
    roles: ["Full Stack Developer", "Database Architect", "Deployment Engineer"],
    images: {
      main: "/images/gallery/Screenshot 2026-02-05 193653.png",
      gallery: [
        "/images/gallery/Screenshot 2026-02-05 193736.png",
        "/images/gallery/Screenshot 2026-02-05 193753.png",
        "/images/gallery/Screenshot 2026-02-05 193818.png",
        "/images/gallery/Screenshot 2026-02-05 193903.png",
        "/images/gallery/Screenshot 2026-02-05 193915.png",
        "/images/gallery/Screenshot 2026-02-05 194015.png",
        "/images/gallery/Screenshot 2026-02-05 194035.png",
        "/images/gallery/Screenshot 2026-02-06 031734.png",
        "/images/gallery/Screenshot 2026-02-06 031744.png",
        "/images/gallery/Screenshot 2026-02-06 031819.png",
        "/images/gallery/Screenshot 2026-02-06 031838.png"
      ]
    }
  },
  {
    id: "the-metakey",
    title: "The Metakey Platform",
    shortDescription: "Built backend systems for NFT marketplace integrations, blockchain data pipelines, and game-related API services.",
    category: "Backend",
    links: {
      live: "https://www.themetakey.com/",
    },
    tags: ["Node.js", "Python", "Blockchain", "SQL", "NFT"],
    fullDescription: `The Metakey is a pioneering digital asset and interactive platform company operating at the intersection of NFTs, blockchain gaming, and the metadata ecosystem. This project involved deep backend engineering to support high-fidelity digital assets and cross-platform functional integrations.

My role focused on architecting and maintaining the high-performance backend infrastructure that powers live platforms. This involved ensuring data integrity between on-chain blockchain interactions and internal databases, a critical requirement for accurate asset ownership and transaction history.

**Core Technical Achievements:**
• **Blockchain Data Pipeline:** Engineered services to ingest, normalize, and validate massive datasets of NFT transactions from OpenSea and other sources, handling edge cases like re-orgs and metadata updates.
• **Marketplace Integration:** Built robust APIs to synchronize floor prices, ownership data, and collection statistics in near real-time, enabling users to make informed decisions.
• **Game-Ready API Services:** Developed low-latency endpoints consumed by interactive environments (Roblox, Unity), allowing players to utilize their digital assets within game worlds.
• **Scalable Architecture:** Optimized SQL schemas and queries to handle millions of asset records with sub-second retrieval times, ensuring a smooth user experience even under heavy load.

This work directly contributed to the reliability of The Metakey's ecosystem, bridging the gap between static blockchain data and dynamic, interactive user experiences.`,
    features: [
      "Real-time NFT Marketplace Integrations (OpenSea API)",
      "High-Volume Blockchain Data Ingestion & Normalization",
      "Low-Latency Game APIs for Roblox & Unity Integrations",
      "Complex SQL Data Modeling for Digital Assets",
      "Automated Web Scraping & Data Extraction Pipelines",
      "Enterprise-Grade RESTful API Security & Validation"
    ],
    techStack: {
      backend: ["Node.js", "Python", "REST APIs"],
      database: ["SQL", "PostgreSQL"],
      other: ["Docker", "AWS", "Bitquery", "OpenSea API"]
    },
    roles: ["Backend Developer", "API Engineer"],
    images: {
      main: "/images/gallery/Screenshot 2026-02-06 031418.png",
      gallery: [
        "/images/gallery/Screenshot 2026-02-06 031506.png",
        "/images/gallery/Screenshot 2026-02-06 031520.png",
        "/images/gallery/Screenshot 2026-02-06 031602.png"
      ]
    }
  },
  {
    id: "bsm-platform",
    title: "Business Management System",
    shortDescription: "BSM Platform is a full-scale customer experience and service management system designed to help organizations handle customer support operations, system monitoring, service quality tracking, and SLA performance from a single unified interface. Centralizes scattered support tools into one clean, scalable application with role-based ticket lifecycle management.",
    category: "Full Stack",
    links: {},
    tags: ["Next.js", "Django", "Enterprise", "SLA", "Support"],
    fullDescription: `The Business Service Management (BSM) Platform is an enterprise-grade customer experience system designed to unify support operations, service monitoring, and performance tracking. It serves as a central nerve center for support teams, replacing disjointed tools with a cohesive, API-driven workflow.

**Solving Business Problems:**
Organizations often struggle with visibility into support tickets and real-time service health. BSM addresses this by integrating ticket lifecycle management directly with SLA (Service Level Agreement) performance tracking. This ensures that no customer request slips through the cracks and that support teams are held accountable to response time targets.

**Technical Implementation:**
• **Customer Portal:** A dedicated Next.js frontend where clients can submit tickets, view real-time status updates, and rate their service experience.
• **Admin Command Center:** A comprehensive dashboard for support agents to manage incidents, view prioritized ticket queues, and analyze performance metrics.
• **SLA Engine:** A background logic layer that automatically calculates compliance rates, flagging tickets that are at risk of breaching service agreements.
• **System Health Monitoring:** Integrated status pages that display real-time operational health of various services, building trust with transparency.

The platform architecture emphasizes scalability and data integrity, using a Django REST Framework backend to enforce strict role-based access control and business logic validation.`,
    features: [
      "Unified Customer Support Portal & Admin Command Center",
      "Automated SLA Performance Tracking & Compliance Reporting",
      "Full Ticket Lifecycle Management (Open, In Progress, Resolved)",
      "Real-time Service Health & Status Monitoring System",
      "Integrated Customer Satisfaction (CSAT) Rating Module",
      "Role-Based Access Control (Customer, Support Agent, Admin)",
      "Incident Management & Root Cause Logging"
    ],
    techStack: {
      frontend: ["React", "Next.js"],
      backend: ["Node.js", "Django", "REST Framework"],
      database: ["PostgreSQL"],
      other: ["AWS", "Vercel", "Postman"]
    },
    roles: ["Full Stack Developer", "System Architect"],
    images: {
      main: "/images/gallery/Screenshot 2026-02-05 200645.png",
      gallery: [
        "/images/gallery/Screenshot 2026-02-05 200710.png",
        "/images/gallery/Screenshot 2026-02-05 200731.png",
        "/images/gallery/Screenshot 2026-02-05 200752.png",
        "/images/gallery/Screenshot 2026-02-05 200807.png",
        "/images/gallery/Screenshot 2026-02-05 200816.png",
        "/images/gallery/Screenshot 2026-02-05 200854.png",
        "/images/gallery/Screenshot 2026-02-05 200913.png",
        "/images/gallery/Screenshot 2026-02-05 200921.png",
        "/images/gallery/Screenshot 2026-02-05 200941.png",
        "/images/gallery/Screenshot 2026-02-05 201006.png",
        "/images/gallery/Screenshot 2026-02-05 201041.png",
        "/images/gallery/Screenshot 2026-02-05 201051.png",
        "/images/gallery/Screenshot 2026-02-05 201144.png",
        "/images/gallery/Screenshot 2026-02-05 201156.png",
        "/images/gallery/Screenshot 2026-02-05 201218.png",
        "/images/gallery/Screenshot 2026-02-05 201435.png"
      ]
    }
  },
  {
    id: "mbs-logistics",
    title: "Logistics & Billing Platform",
    shortDescription: "Implemented billing workflows with tax calculation, invoice generation, and reporting.",
    category: "Full Stack",
    links: {
      live: "https://mbslogisticsind.github.io/logistics/MySQL/home%20and%20login/Home.html"
    },
    tags: ["HTML/CSS", "MySQL", "Billing", "Logistics", "GST"],
    fullDescription: `MBS Logistics is a specialized web-based solution developed to modernize the operations of a transport and logistics contractor. The project focuses on digitizing the traditional paper-heavy workflows of billing, vehicle management, and financial reporting into a streamlined, error-free digital system.

**Operational Transformation:**
Prior to this system, operations relied on manual bill writing and fragmented record-keeping. MBS Logistics introduces a structured data environment where every Lorry Receipt (LR) and invoice is digitally generated, stored, and tracked. This eliminates calculation errors in freight and GST, ensuring financial accuracy.

**Key Functional Modules:**
• **Smart Billing Engine:** An intuitive form-based interface that auto-calculates taxes (GST), freight charges, and grand totals, generating professional invoices instantly.
• **Fleet Management:** A digital registry for vehicle records, tracking insurance expiry, ownership details, and maintenance schedules.
• **Financial Intelligence:** Automated generation of daily and monthly revenue reports, giving business owners instant insight into cash flow and profitability.
• **Customer Database:** A reusable repository of client details to speed up repeat billing and maintain accurate contact history.

The system is designed with a "backend-ready" data structure, using MySQL schemas that allow for easy migration to a full cloud-based SaaS architecture in the future.`,
    features: [
      "Automated Invoice Generation with Accurate GST Calculation",
      "Digital Fleet & Vehicle Record Management System",
      "Centralized Customer Database for Rapid Billing",
      "Financial Analytics: Daily & Monthly Revenue Reports",
      "Readiness for E-Way Bill System Integration",
      "Integrated Workflow Utilities (Calculator, Notepad)",
      "Digitized Lorry Receipt (LR) Management"
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      database: ["MySQL (Designed Schema)"],
      other: ["GitHub Pages", "Component Architecture"]
    },
    roles: ["Full Stack Developer", "UI/UX Designer"],
    images: {
      main: "/images/gallery/mbs.jpeg",
      gallery: [
        "/images/gallery/WhatsApp Image 2026-02-05 at 8.51.41 PM.jpeg"
      ]
    }
  },
  {
    id: "physio-care",
    title: "Healthcare Service Application",
    shortDescription: "A mobile-first healthcare platform designed to deliver professional physiotherapy services directly to patients' homes.",
    category: "Mobile",
    links: {},
    tags: ["React Native", "Expo", "Supabase", "TypeScript", "Healthcare"],
    fullDescription: `PhysioCare is a transformative mobile-first healthcare platform that redefines how physiotherapy services are delivered. By connecting patients with certified physiotherapists for home visits, it bridges the gap between clinical care and patient convenience. The application is built to handle the sensitive and complex workflows of medical appointment scheduling and record-keeping.

**Patient-Centric Architecture:**
The app provides patients with a clean, accessible interface to browse specialists, book home sessions, and track their recovery progress. It abstracts the complexity of coordination, allowing users to focus on their health.

**Professional Tools for Doctors:**
For practitioners, PhysioCare serves as a mobile office. Doctors can view their daily schedule, navigate to patient locations, log session notes, and generate professional medical reports directly from their device.

**Technical Excellence:**
Built with **React Native and Expo**, the app delivers a native-grade experience on both iOS and Android. The backend, powered by **Supabase (PostgreSQL)**, ensures HIPAA-compliant data security, real-time synchronization of appointment status, and robust role-based access control. The system is future-proofed with an architecture ready to support AI-driven diagnostic chat assistance.`,
    features: [
      "Secure Role-Based Ecosystem (Patient, Doctor, Admin)",
      " seamless Home Appointment Booking & Scheduling",
      "Digital Medical Reports & Treatment History Tracking",
      "Doctor's Dashboard for Session & Patient Management",
      "Real-time Notification & Reminder System",
      "Admin Panel for System-Wide Analytics & Oversight",
      "Scalable Architecture Ready for AI Integration"
    ],
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript"],
      backend: ["Supabase", "PostgreSQL"],
      other: ["TanStack Query", "React Native Paper", "Expo Router"]
    },
    roles: ["Mobile Developer", "System Architect"],
    images: {
      main: "/images/gallery/physiocare-main.png",
      gallery: [
        "/images/gallery/Screenshot 2026-02-05 201435.png"
      ]
    }
  },
  {
    id: "blink-wash",
    title: "On-Demand Service Application",
    shortDescription: "Cross-platform mobile application for on-demand car wash and vehicle service booking.",
    category: "Mobile",
    links: {},
    tags: ["Flutter", "Supabase", "Mobile", "PostgreSQL"],
    fullDescription: `On-Demand Service Application (formerly Blink-Wash) is a sophisticated cross-platform mobile solution designed to streamline the vehicle service industry. It functions as an Uber-like marketplace for car wash and detailing services, connecting vehicle owners with high-quality local service providers.

**Seamless User Experience:**
The application solves the friction of traditional booking by allowing users to create profiles for multiple vehicles, select specific service packages, and schedule appointments with just a few taps. The intuitive UI ensures that even complex bookings are handled effortlessly.

**Robust Infrastructure:**
At its core, the app utilizes **Flutter** to maintain a single, high-fidelity codebase that deploys natively to both iOS and Android. The backend services are managed by **Supabase**, providing enterprise-grade authentication, real-time database subscriptions for booking status updates, and secure user data storage.

**Scalable Data Design:**
The system's data model is architected for growth, supporting complex relationships between users, multiple vehicles, provider listings, and service history. This structure is ready to scale for payment gateway integration and GPS-based provider tracking.`,
    features: [
      "Cross-Platform Native Experience (iOS & Android via Flutter)",
      "Secure User Authentication & Profile Management",
      "Multi-Vehicle Registry & Management System",
      "Service Provider Marketplace with Detailed Listings",
      "Real-Time Booking Status Tracking & Updates",
      "Scalable Backend Architecture on Supabase",
      "Optimized for Future Payment & GPS Integration"
    ],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Supabase", "PostgreSQL"],
      other: ["Android", "iOS", "JSON Serialization"]
    },
    roles: ["Mobile Developer", "Full Stack Developer"],
    images: {
      main: "/images/gallery/on-demand-service.png",
      gallery: []
    }
  },
  {
    id: "flexi-pdf",
    title: "Document Automation Tool",
    shortDescription: "Built backend utilities for automated PDF generation and file processing.",
    category: "Full Stack",
    links: {
      live: "https://flexipdf-9frt.onrender.com/"
    },
    tags: ["PDF Tools", "Web App", "Utility", "File Processing"],
    fullDescription: `FlexiPDF is a powerful, all-in-one web-based utility platform that brings desktop-grade PDF manipulation tools directly to the browser. Designed for professionals and students, it eliminates the need for expensive software by offering a comprehensive suite of tools for converting, editing, and securing documents.

**Feature-Rich Ecosystem:**
The platform is not just a converter; it's a complete workspace. Users can perform complex operations such as merging multiple files, splitting documents, rotating specific pages, and even editing text/annotations directly within the PDF. Security features like password protection, unlocking, and redaction ensure that sensitive documents are handled safely.

**Hybrid Processing Architecture:**
FlexiPDF leverages a smart hybrid architecture. Lightweight operations are handled client-side for instant feedback, while heavy-duty processing (like complex format conversions) is offloaded to a Node.js server pipeline. This ensures optimal performance without bogging down the user's device.

**Security First:**
Recognizing the sensitivity of uploaded documents, the system is built with a "zero-retention" policy. Files are processed in robust temporary storage and are strictly deleted immediately after the user downloads their result, ensuring absolute data privacy.`,
    features: [
      "Universal PDF Conversion Suite (Word, Excel, JPG, HTML)",
      "Advanced Document Organization (Merge, Split, Rotate, Reorder)",
      "Full-Featured Browser Editor with Annotation Capabilities",
      "Enterprise-Grade Security (Password Protect, Unlock, Redact)",
      "Smart Compression & Optimization Engine",
      "Hybrid Client-Side / Server-Side Processing Pipeline",
      "Zero-Retention Privacy Policy for User Data"
    ],
    techStack: {
      frontend: ["React", "Component Architecture"],
      backend: ["Node.js", "Server-side PDF Processing"],
      other: ["File Handling Pipelines", "Render", "Security Protocols"]
    },
    roles: ["Full Stack Developer"],
    images: {
      main: "/images/gallery/Screenshot 2026-02-05 213011.png",
      gallery: [
        "/images/gallery/Screenshot 2026-02-05 212959.png",
        "/images/gallery/Screenshot 2026-02-05 213034.png",
        "/images/gallery/Screenshot 2026-02-05 213046.png",
        "/images/gallery/Screenshot 2026-02-05 213058.png",
        "/images/gallery/Screenshot 2026-02-05 213137.png",
        "/images/gallery/Screenshot 2026-02-05 213034 - Copy.png",
        "/images/gallery/Screenshot 2026-02-05 213046 - Copy.png",
        "/images/gallery/Screenshot 2026-02-05 213058 - Copy.png"
      ]
    }
  },
  {
    id: "crumblee-web",
    title: "Crumblee Web Application",
    shortDescription: "Modern web application for food discovery and restaurant",
    category: "Full Stack",
    links: {
      live: "https://crumblee-web-rc8f-git-main-saud-ali-khans-projects.vercel.app/"
    },
    tags: ["Next.js", "React", "Web App", "Search", "Discovery"],
    fullDescription: `Crumblee is a modern, discovery-focused web application designed to help users find the best dining experiences based on their specific preferences and location. It serves as a digital culinary guide, organizing restaurant data into an accessible, searchable, and visually engaging format.

**Search & Discovery Engine:**
At the heart of Crumblee is a sophisticated search and filtering system. Users can explore restaurants by cuisine, location, rating, and price range. The application enables a validated search workflow, ensuring that users are presented with relevant, high-quality results rather than generic listings.

**Modern Technical Foundation:**
Built using **Next.js**, Crumblee prioritizes performance and SEO. The application utilizes server-side rendering (SSR) to deliver lightning-fast page loads, crucial for retaining users on mobile devices. Data is served via RESTful API integrations, allowing the platform to consume structured restaurant datasets dynamically.

The responsive UI ensures a consistent, high-quality experience whether the user is browsing on a desktop or searching for a quick bite on their phone.`,
    features: [
      "Location-Based Intelligent Restaurant Search",
      "Advanced Multi-Parameter Filtering System",
      "Dynamic Consumption of Structured Restaurant Data",
      "High-Performance Server-Side Rendering (SSR)",
      "Responsive, Mobile-First UI Design",
      "RESTful API Integration Architecture"
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript"],
      backend: ["REST APIs"],
      other: ["Vercel"]
    },
    roles: ["Full Stack Developer"],
    images: {
      main: "/images/gallery/Screenshot 2026-02-05 203534.png",
      gallery: []
    }
  },
  {
    id: "ma-electricals",
    title: "MA Electricals Website",
    shortDescription: "Professional business website for electrical services company with service showcase and contact system.",
    category: "Frontend",
    links: {
      live: "https://saksaud7.github.io/maelectricals/"
    },
    tags: ["HTML", "CSS", "JavaScript", "Business Website"],
    fullDescription: `MA Electricals is a professional digital presence for an established electrical services provider, designed to convert site visitors into business leads. The website serves as a comprehensive digital portfolio, showcasing the company's expertise, project history, and service capabilities to potential residential and commercial clients.

**Business-Focused Design:**
The site structure is engineered for trust and clarity. It features dedicated service pages detailing capabilities, a portfolio section highlighting past successful projects, and clear calls-to-action (CTAs) that guide users toward the contact system.

**Performance & Accessibility:**
Developed with clean, semantic HTML5, modern CSS3, and JavaScript, the site is optimized for speed and search engine visibility (SEO). It ensures a flawless experience across all devices, acknowledging that many customers search for emergency electrical services via mobile. The implementation of a functional contact form system streamlines the inquiry process, directly connecting customers with the service team.`,
    features: [
      "Professional Corporate Identity & Design",
      "Comprehensive Service Showcase & Portfolio",
      "Lead-Generating Contact Form System",
      "Fully Responsive Mobile-First Layout",
      "SEO-Optimized Semantic Structure",
      "High-Performance Static Asset Delivery"
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      other: ["GitHub Pages"]
    },
    roles: ["Frontend Developer", "UI/UX Designer"],
    images: {
      main: "/images/gallery/ma-electricals-main.png",
      gallery: []
    }
  }
];
