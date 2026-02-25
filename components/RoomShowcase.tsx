import Link from 'next/link';

export default function RoomShowcase() {
  return (
    <div className='max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold mb-4'>Deluxe Room</h2>
        <p className='text-lg text-gray-600 mb-4'>Our deluxe room offers a luxurious stay with a king-size bed and a private balcony.</p>
        <Link href='#' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl'>Book Now</Link>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold mb-4'>Suite Room</h2>
        <p className='text-lg text-gray-600 mb-4'>Our suite room offers a spacious stay with a king-size bed and a private living area.</p>
        <Link href='#' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl'>Book Now</Link>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold mb-4'>Family Room</h2>
        <p className='text-lg text-gray-600 mb-4'>Our family room offers a comfortable stay with two queen-size beds and a private balcony.</p>
        <Link href='#' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl'>Book Now</Link>
      </div>
    </div>
  );
}