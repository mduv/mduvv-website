import { About } from "@/components/home/About";
import { Education } from "@/components/home/Education";
import { Explore } from "@/components/home/Explore";
import { Hero } from "@/components/home/Hero";
import { Interests } from "@/components/home/Interests";
import { Skills } from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Education />
      <Explore />
    </>
  );
}
