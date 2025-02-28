import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NossaHistoria from '@/components/NossaHistoria';
import Galeria from '@/components/Galeria';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NossaHistoria />
      <Galeria />
      <Footer />
    </>
  );
}
