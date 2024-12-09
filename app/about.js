import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white">
      <header className="p-4 bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <image src="/download%20(1).png" alt="Logo" className="h-18 w-auto" />
          <nav className="flex bg-black text-yellow-500 font-bold p-6">
            <ul className="flex space-x-12">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="#"><a>Men&apos;s</a></Link></li>
              <li><Link href="#"><a>Women&apos;s</a></Link></li>
              <li><Link href="#"><a>Kid&apos;s</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-6 p-4 bg-black text-yellow-500 shadow-md rounded-md">
        <h2 className="text-4xl font-semibold mb-4 hover:bg-white hover:text-black">About Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          We provide exceptional service and high-quality products, focusing on customer satisfaction.
        </p>
        <Link href="/contact">
          <a className="px-6 py-2 bg-white text-yellow-500 font-semibold rounded hover:bg-black hover:text-white transition">
            Get in Touch
          </a>
        </Link>
      </main>

      <footer className="bg-black text-yellow-500 hover:bg-white hover:text-black mt-30 text-center px-12 py-4 font-bold">
        &copy; 2024 ORNI OUTFIT - All Rights Reserved
      </footer>
    </div>
  );
}
