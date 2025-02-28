import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4" style={{ backgroundColor: '#F2E2B1' }}>
      <ul className="flex justify-center space-x-4 text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#historia">Nossa História</Link></li>
        <li><Link href="#galeria">Galeria</Link></li>
      </ul>
    </nav>
  );
}