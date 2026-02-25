import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='max-w-7xl mx-auto py-20 flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold mb-8'>About Us</h1>
      <p className='text-lg text-gray-600 mb-8'>Welcome to our luxury hotel, where we provide the finest amenities and services.</p>
      <Link href='/' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl'>Back to Home</Link>
    </div>
  );
}