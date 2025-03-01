import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Galeria from '../components/Galeria';
import Footer from '../components/Footer';
import History from '@/components/History';
import Text from '@/components/Text'


export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <Galeria />
      <Text />
      <Footer />
    </>
  );
}
