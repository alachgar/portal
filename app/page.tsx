import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Method from "@/components/Method";
import Indicators from "@/components/Indicators";
import Experience from "@/components/Experience";
import Commitments from "@/components/Commitments";
import Resources from "@/components/Resources";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

// Ordre des sections inspiré de la structure de noesisai.fr :
// en-tête, héros + preuve, avant/après + services, méthode en 4 étapes,
// réalisations filtrables, preuve sociale, ressources, FAQ, CTA, pied de page.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offer />
        <Method />
        <Indicators />
        <Experience />
        <Commitments />
        <Resources />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
