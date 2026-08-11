import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import Gallery from "@/components/sections/Gallery";
import Experience from "@/components/sections/Experience";
import FeaturedMenu from "@/components/sections/FeaturedMenu";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Experience />
      <FeaturedMenu />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
