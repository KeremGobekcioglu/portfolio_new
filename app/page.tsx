import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { OtherWork } from "@/components/OtherWork";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

// Real layout numbers the media-bleed band's width formula depends on
// (components/*.css .media-bleed rule reads these) — single source of
// truth so the band recalculates correctly if this layout changes.
const layoutVars = {
  ["--container-max" as string]: "1080px", // matches max-w-[1080px] below
  ["--container-pad" as string]: "2rem", // matches px-8 below
  ["--sidebar-width" as string]: "280px", // matches lg:grid-cols-[280px_1fr] below
  ["--sidebar-gap" as string]: "4rem", // matches gap-x-16 below
} as React.CSSProperties;

export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px] px-8 py-16" style={layoutVars}>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-x-16 gap-y-24 lg:gap-y-0">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Header />
        </div>
        {/* min-w-0: without it, a media-bleed child wider than this grid track would force the track (and the whole layout) to grow instead of visually overflowing. */}
        <main className="max-w-content min-w-0">
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
