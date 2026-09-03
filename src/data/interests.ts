import { Dumbbell, Trophy, Gamepad2, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Interest {
  label: string;
  icon: LucideIcon;
}

export const interests: Interest[] = [
  { label: "Volleyball", icon: Trophy },
  { label: "Fitness", icon: Dumbbell },
  { label: "Music", icon: Music },
  { label: "Gaming", icon: Gamepad2 },
];
