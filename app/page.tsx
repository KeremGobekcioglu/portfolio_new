import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { OtherWork } from "@/components/OtherWork";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px] px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-x-16 gap-y-24 lg:gap-y-0">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Header />
        </div>
        <main className="max-w-content">
          <About />
          <div className="mt-24">
            <Projects />
          </div>
          {/* Slightly less than the 6rem major-section gap — reads as a coda to Projects, not a peer section. */}
          <div className="mt-20">
            <OtherWork />
          </div>
          <div className="mt-24">
            <Experience />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
