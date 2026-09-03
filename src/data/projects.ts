import {
  BookOpen,
  Code2,
  Globe,
  Headphones,
  Server,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    title: "PodPix",
    description:
      "RAG-based platform that converts podcast audio into structured, queryable knowledge. Semantic search with embeddings, transcription pipelines, sentiment analysis, trend tracking, and real-time streaming chat.",
    tech: ["TypeScript", "RAG", "Embeddings", "Vector Search"],
    githubUrl: "https://github.com/mduv/podpix",
    liveUrl: "https://podpix.ai",
    icon: Headphones,
  },
  {
    title: "Hoopli",
    description:
      "Daily NBA trivia iOS app live on the App Store. Full-stack with React Native (Expo), Supabase, Anthropic API, AI quiz generation, Elo-inspired IQ ratings, auth, paywall, and leaderboards.",
    tech: ["TypeScript", "React Native", "Expo", "Supabase"],
    githubUrl: "https://github.com/mduv/hoopli",
    liveUrl: "https://hoopli.app",
    icon: Trophy,
  },
  {
    title: "httpserver",
    description:
      "HTTP server implementation written in C, exploring sockets, request parsing, and concurrent connection handling.",
    tech: ["C"],
    githubUrl: "https://github.com/mduv/httpserver",
    icon: Server,
  },
  {
    title: "CSE 130",
    description:
      "CSE 130 coursework archive migrated from UCSC GitLab — projects covering concurrency, systems programming, and related concepts.",
    tech: ["C"],
    githubUrl: "https://github.com/mduv/cse130",
    icon: BookOpen,
  },
  {
    title: "CSE13S",
    description:
      "CSE13S coursework archive migrated from UCSC GitLab — computer systems and C programming assignments.",
    tech: ["C"],
    githubUrl: "https://github.com/mduv/CSE13s",
    icon: Code2,
  },
  {
    title: "Personal Website",
    description:
      "This portfolio site built with Next.js, TypeScript, and Tailwind CSS — showcasing projects, experience, and contact.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/mduv/mduvv-website",
    liveUrl: "https://mohanduvvuri.com",
    icon: Globe,
  },
];
