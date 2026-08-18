import { createFileRoute } from "@tanstack/react-router";
import {
  CareSection,
  FaqSection,
  FinalCta,
  Footer,
  Header,
  Hero,
  HowItWorks,
  LocationSection,
  StickyBar,
  TrustBlock,
  useHeroPassed,
} from "@/components/vero/sections";

const title = "Vero Odontologia — Dentista em Santo André, SP";
const description =
  "Dentista em Santo André: a Vero Odontologia tem nota 4,9 com 162 avaliações no Google. Chame no WhatsApp e agende sua avaliação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { ref, passed } = useHeroPassed();

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero sentinelRef={ref} />
        <TrustBlock />
        <CareSection />
        <HowItWorks />
        <LocationSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar visible={passed} />
    </div>
  );
}
