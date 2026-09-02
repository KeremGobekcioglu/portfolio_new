// All site copy lives here. Edit freely — components just read these objects.
// Search for "TODO" to find everything that still needs your input.

export interface Profile {
  name: string;
  positioning: string;
  location: string;
  /** Each entry renders as its own paragraph. */
  about: string[];
}

export const profile: Profile = {
  name: "Kerem Göbekcioğlu",
  positioning: "Software Engineer | Android · Kotlin · Jetpack Compose | Backend (Spring Boot)",
  location: "İstanbul, Türkiye",
  about: [
    "Software Engineer specializing in Android development, expanding into Kotlin Multiplatform and backend engineering with Spring Boot.",
    "I like understanding the systems and tools I use, not just what they do, but how they work. That's what lets me build software that's reliable, maintainable, and high-performing.",
  ],
};

export type LinkIcon = "github" | "linkedin" | "mail";

export interface SiteLink {
  label: string;
  href: string;
  icon: LinkIcon;
}

// Shared contact/social links, used in both the header and the footer.
export const links: SiteLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/KeremGobekcioglu",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/keremgobekcioglu",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:keremgobekcioglu54@gmail.com",
    icon: "mail",
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  note?: string;
}

// Full detail kept here even though the sidebar only renders a shortened
// form — useful if this grows into its own section later.
export const education: EducationItem[] = [
  {
    institution: "Gebze Technical University",
    degree: "BSc, Computer Engineering",
    dates: "Sep 2020 – Jun 2026",
    location: "Gebze, Kocaeli, Turkey",
  },
  {
    institution: "Gdańsk University of Technology",
    degree: "Data Engineering",
    dates: "Feb 2023 – Jun 2023",
    location: "Gdańsk, Poland",
    note: "Erasmus+ exchange semester.",
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  summary: string;
  description: string;
  /** Optional bullet points for projects with distinct feature/technical highlights. */
  highlights?: string[];
  /** Optional short aside — an anecdote, or attribution on a team project. */
  note?: string;
  /** Optional click-to-load YouTube demo, rendered between the description and the stack pills. */
  video?: {
    youtubeId: string;
    /** Used as the iframe title and the facade's alt text. */
    title: string;
  };
  /** Optional row of phone-app screenshots (fixed 9:19.5 frames), rendered after the highlights and before the stack pills. */
  screenshots?: {
    src: string;
    alt: string;
    /** 1–3 words, Turkish, matching the app's own on-screen labels. */
    caption: string;
  }[];
  stack: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Yıldızname",
    summary:
      "Turkish-first astrology app, Kotlin Multiplatform, live on Google Play with iOS in App Store review.",
    description:
      "A Turkish-first astrology app built from a single Kotlin/Compose Multiplatform codebase for Android and iOS, taken through signing, store listing, and production release on Google Play — the iOS version is currently under App Store review.",
    highlights: [
      "Three-tier content pipeline (Room cache → Firestore → external API) with period-aware cache validation for daily and monthly content.",
      "TypeScript Cloud Functions backend that enriches templated horoscope data using the Gemini API on a schedule, with retry and model-fallback logic for quota and timeout failures.",
      "Push notifications on both platforms from scratch, Firebase Anonymous Auth, and per-user Firestore security rules.",
      "Native sharing that renders horoscope cards to PNG and shares them directly to Instagram Stories via platform intents.",
    ],
    screenshots: [
      {
        src: "/yildizname/daily-reading.png",
        alt: "Daily horoscope screen for Capricorn, showing the zodiac constellation and the day's reading",
        caption: "Günlük yorum",
      },
      {
        src: "/yildizname/compat-detail.png",
        alt: "Detailed compatibility analysis between Taurus and Pisces, with a 91% match score and category breakdown",
        caption: "Detaylı analiz",
      },
      {
        src: "/yildizname/calendar.png",
        alt: "Monthly zodiac calendar for August 2026 with daily indicators and a summary of the month ahead",
        caption: "Burç takvimi",
      },
    ],
    stack: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Room",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions (TypeScript)",
      "Gemini API",
      "FCM/APNs",
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.kg.yildizname" },
      { label: "Landing page", href: "https://yildiznamepage.vercel.app/" },
      { label: "GitHub", href: "https://github.com/KeremGobekcioglu/horoscope-app" },
    ],
  },
  {
    title: "Agentic Sprint Planner",
    summary:
      "Multi-agent AI pipeline that turns raw epics into an assigned sprint board, built to learn backend and multi-agent system design.",
    description:
      "My second grad project, taken on specifically to get into backend development and learn how to design multi-agent AI systems. A full-stack tool that automates sprint planning end to end — from raw epics to an assigned sprint board — using four focused AI agents (breakdown, estimation, capacity, distribution) instead of one general-purpose call, so each agent stays narrow and failures are easy to isolate. It integrates with Trello to publish approved plans as real cards, and keeps a persistent team memory of velocity and history so later sprints get sharper suggestions. Built working closely with Claude Code — planning the architecture together, then splitting features into focused implementation runs — and deployed end to end on Railway and Vercel.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "PostgreSQL",
      "JPA/Hibernate",
      "Flyway",
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Tailwind",
      "Gemini API",
      "Trello API",
      "Railway",
      "Vercel",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KeremGobekcioglu/sprint-planner" }],
  },
  {
    title: "Smart Reading Assistant for Visually Impaired Users",
    summary:
      "Glasses-mounted AI assistant that reads printed text aloud, in about 3–4 seconds, powered by Gemini.",
    description:
      "A wearable AI assistant that helps visually impaired users understand printed text — menus, documents, labels — just by asking out loud. Rather than aiming a phone at text, the camera is built into a glasses frame so it naturally follows where the user is looking; they press a button, ask a question, and hear a spoken answer in about 3–4 seconds, powered by Gemini 2.5 Flash. Built as a graduation project at Gebze Technical University.",
    video: {
      youtubeId: "DPq8-S-o64U",
      title: "Smart Reading Assistant demo",
    },
    stack: ["C++", "ESP32-CAM", "BLE", "Kotlin", "Jetpack Compose", "Hilt", "Retrofit", "Room", "Gemini 2.5 Flash"],
    links: [
      { label: "GitHub", href: "https://github.com/KeremGobekcioglu/SmartReadingAssistant" },
      { label: "Demo video", href: "https://www.youtube.com/watch?v=DPq8-S-o64U" },
    ],
  },
  {
    title: "MindFlux — 2.5D Game with Custom Hardware Controllers",
    summary:
      "2.5D Unreal Engine runner playable via keyboard, joystick, motion bracelet, or head tracking — I built the hardware-to-game bridge.",
    description:
      "A 2.5D endless runner built in Unreal Engine, playable four different ways — keyboard, a custom joystick, a motion-sensing wrist bracelet, or head movement tracked by camera. My part was the software bridge connecting all of the custom hardware to the game: a C++ SerialPort class inside Unreal that opens and reads from three completely different sources through the same interface — a serial line for the joystick, a Bluetooth RFCOMM device for the motion bracelet, and a FIFO named pipe for head-tracking data from a teammate's Python/OpenCV pipeline — with no third-party plugins. On the character side, I wrote the polling and parsing logic that turns each device's raw data into game input. CV processing was heavy enough to hurt performance on the main thread, so we moved it to its own thread.",
    note: "Best bug of the project: the game would silently hang on launch, no error, just a frozen screen. Turned out one FIFO was opened in blocking write mode before Unreal had opened its read end — a named pipe write just sits there waiting for a reader that doesn't exist yet.",
    stack: [
      "Unreal Engine",
      "C++",
      "IPC (Named Pipes/FIFO)",
      "Multithreading & Concurrency",
      "Serial Communication (UART/Bluetooth RFCOMM)",
      "POSIX System Calls",
    ],
    links: [{ label: "GitHub", href: "https://github.com/KeremGobekcioglu/MindFluxGame" }],
  },
  {
    title: "aIoT — Smart House Controller App",
    summary:
      "Voice-controlled smart home app with real-time intruder photo alerts, across Raspberry Pi, ESP8266, and Android.",
    description:
      "A distributed smart home system built for CSE476 (Mobile Communication Networks) — voice-controlled lights and real-time intruder alerts with photos, all over the local network, across a Raspberry Pi server, an ESP8266 relay, and an Android app. I built the Android app: record a voice command, send it to the Pi over the network, and get a push notification with a photo if the Pi's camera flags an unrecognized face. The app also runs its own lightweight HTTP server (NanoHTTPD) just to receive those intruder images from the Pi. The trickiest part was Retrofit — its base URL isn't known at build time since the Raspberry Pi's local IP can change — so I built a RetrofitManager that rebuilds the Retrofit instance at runtime whenever the user enters a new IP, persisting it so the app reconnects correctly across sessions.",
    note: "Teammates handled the Raspberry Pi server (Node.js/Python, speech-to-text, face recognition) and the ESP8266 relay hardware.",
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "NanoHTTPD", "Coroutines"],
    links: [{ label: "GitHub", href: "https://github.com/KeremGobekcioglu/SmartHouseController" }],
  },
];

export interface OtherWorkItem {
  name: string;
  /** One line, ~100 chars max. */
  line: string;
  /** Short, comma-separated, plain text — not rendered as pills. */
  tech: string;
  url?: string;
}

export interface OtherWorkGroup {
  group: string;
  items: OtherWorkItem[];
}

export const otherWork: OtherWorkGroup[] = [
  {
    group: "Natural language processing",
    items: [
      {
        name: "Turkish QA on university regulations",
        line: "Fine-tuned dbmdz/bert-base-turkish-cased on a hand-built 601-pair SQuAD-style dataset, with exact match and BM25 layered in front of the model.",
        tech: "Python, BERT, BM25, Flask",
        url: "https://github.com/KeremGobekcioglu/turkish-qa-university-regulations",
      },
      {
        name: "Character and syllable N-gram models",
        line: "1/2/3-gram models over Turkish Wikipedia with Good-Turing smoothing and perplexity scoring — syllable trigrams clearly beat character models for Turkish.",
        tech: "Python, statistical LM",
        url: "https://github.com/KeremGobekcioglu/turkish-syllable-character-ngram",
      },
    ],
  },
  {
    group: "Computer vision & image processing",
    items: [
      {
        name: "Eigenfaces face recognition",
        line: "PCA-based recognition from scratch, with an HSV/YCrCb skin-detection and contour pipeline doing the face isolation before projection.",
        tech: "Python, PCA, OpenCV",
        url: "https://github.com/KeremGobekcioglu/face-recognition-eigenfaces",
      },
    ],
  },
  {
    group: "Cryptography & security",
    items: [
      {
        name: "Lightweight AEAD and post-quantum survey",
        line: "Python implementations of ISAP and Elephant from their specifications, plus CBC/OFB modes, Miller-Rabin/Atkin primality, and a file integrity tool.",
        tech: "Python, AEAD, PQC",
        url: "https://github.com/KeremGobekcioglu/cryptography",
      },
    ],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType: string;
  dates: string;
  location?: string;
  highlights: string[];
}

// Most recent first.
export const experience: ExperienceItem[] = [
  {
    role: "Android Development Intern",
    company: "Augmency",
    employmentType: "Internship",
    dates: "Jan 2026 – Feb 2026",
    location: "Gebze, Kocaeli, Turkey · On-site",
    highlights: [
      "Tracked down and fixed memory leaks using LeakCanary.",
      "Built a separate WebRTC-based screen sharing and remote control system for AR head-mounted devices, with Firebase Realtime Database handling signaling.",
      "The original architecture had the broadcaster open the session; at a senior developer's suggestion, we reversed it so the viewer opens the session and generates a QR code for the broadcaster to scan.",
      "Studied and adapted two open-source projects (Screen Stream, TScrcpyDroid) to fit our signaling and remote-control needs, and used Android product flavors and Koin DI to ship both a Broadcaster and Viewer app from one codebase.",
    ],
  },
  {
    role: "Junior Mobile Developer",
    company: "Norax AI",
    employmentType: "Full-time",
    dates: "Oct 2025 – Dec 2025",
    location: "Istanbul, Turkey · Remote",
    highlights: [
      "Built \"OnGame,\" a cross-platform React Native/Expo app, working heavily with AI tooling to handle a stack I wasn't deeply fluent in myself — including a layout fix where I measured screen and component heights at runtime to stop UI elements from overlapping across iOS and Android.",
      "Debugged and maintained existing React web apps and .NET backend services for various clients.",
    ],
  },
  {
    role: "Android Development Intern",
    company: "Mobven",
    employmentType: "Internship",
    dates: "Jul 2025 – Aug 2025",
    highlights: [
      "Built the Android client for an AI-powered language learning app using Kotlin, Jetpack Compose, and MVVM.",
      "Pushed for a WebSocket-based approach when a feature needed to move from request/response to a live stream; built the Android side around SignalR (what the backend team landed on) using Kotlin Flow.",
      "Tracked down a tricky state-update bug caused by a ByteArray inside a Compose state class — Kotlin compares arrays by reference, so mutated data wasn't triggering recomposition.",
    ],
  },
];
