import Link from 'next/link';
import RoomShowcase from '../components/RoomShowcase';
import Amenities from '../components/Amenities';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto py-20 flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold mb-8'>Luxury Hotel</h1>
      <Link href='#rooms' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl'>Explore Rooms</Link>
      <RoomShowcase />
      <Amenities />
      <Testimonials />
    </div>
  );
}