import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function TalkPill() {
  return (
    <Link
      href="/contact"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
    >
      <MessageCircle className="h-4 w-4" />
      Let&apos;s talk
    </Link>
  );
}
