import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Apps from "@/components/Apps";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Apps />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
