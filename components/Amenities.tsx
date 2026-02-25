export default function Amenities() {
  return (
    <div className='max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold mb-4'>Fitness Center</h2>
        <p className='text-lg text-gray-600 mb-4'>Our fitness center is equipped with state-of-the-art equipment and offers a variety of workout classes.</p>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold mb-4'>Spa and Wellness</h2>
        <p className='text-lg text-gray-600 mb-4'>Our spa and wellness center offers a range of treatments, including massages, facials, and more.</p>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <h2 className='text-3xl font-bold mb-4'>Restaurant and Bar</h2>
        <p className='text-lg text-gray-600 mb-4'>Our restaurant and bar offer a range of delicious meals and drinks, including breakfast, lunch, and dinner.</p>
      </div>
    </div>
  );
}