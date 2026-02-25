import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='max-w-7xl mx-auto py-4 flex justify-between items-center'>
      <Link href='/' className='text-lg font-bold'>Luxury Hotel</Link>
      <ul className='flex items-center space-x-4'>
        <li><Link href='/about' className='text-lg'>About</Link></li>
        <li><Link href='/services' className='text-lg'>Services</Link></li>
        <li><Link href='/contact' className='text-lg'>Contact</Link></li>
      </ul>
    </nav>
  );
}