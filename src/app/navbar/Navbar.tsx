import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-12 py-6 flex items-center justify-between bg-white">
      <div className="ml-6">
        <img src="https://assets.rumsan.net/rumsan-group/rumsan-logo.png" alt="RUMSAN" width={140} />
      </div>
      <div className="hidden md:flex items-center gap-10">
        <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
          About Us
        </Link>
        <Link href="/portfolio" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
          Portfolio
        </Link>
        <Link href="/services" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
          Our Services
        </Link>
        <Link href="/career" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
          Career
        </Link>
      </div>
    </nav>
  );
}

