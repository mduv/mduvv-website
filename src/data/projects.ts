import {
  Headphones,
  Trophy,
  Phone,
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
    title: "FrontIQ",
    description:
      "AI voice assistant platform that automates inbound business calls using LLM-driven conversational workflows, Twilio Voice, streaming audio, and RAG-based business knowledge — with ~1s p50 response latency.",
    tech: ["Python", "LLMs", "Twilio", "RAG", "Promptfoo"],
    githubUrl: "https://github.com/mduv",
    icon: Phone,
  },
  {
    title: "Hoopli",
    description:
      "Daily NBA trivia iOS app live on the App Store. Full-stack with React Native (Expo), Supabase, Anthropic API, AI quiz generation with zero hallucinated facts, Elo-inspired IQ ratings, auth, paywall, and leaderboards.",
    tech: ["React Native", "Expo", "Supabase", "Python", "Anthropic"],
    githubUrl: "https://github.com/mduv",
    liveUrl: "https://hoopli.app",
    icon: Trophy,
  },
  {
    title: "PodPix",
    description:
      "RAG-based platform that converts podcast audio into structured, queryable knowledge. Semantic search with embeddings, transcription pipelines, sentiment analysis, trend tracking, and real-time streaming chat.",
    tech: ["RAG", "Embeddings", "Python", "Vector Search"],
    githubUrl: "https://github.com/mduv",
    liveUrl: "https://podpix.ai",
    icon: Headphones,
  },
];
