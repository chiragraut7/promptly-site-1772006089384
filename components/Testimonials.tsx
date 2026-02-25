export default function Testimonials() {
  return (
    <div className='max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <p className='text-lg text-gray-600 mb-4'>"The hotel was amazing, the staff were friendly and helpful, and the room was clean and comfortable."</p>
        <h2 className='text-2xl font-bold mb-4'>John D.</h2>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <p className='text-lg text-gray-600 mb-4'>"The hotel was in a great location, the amenities were excellent, and the food was delicious."</p>
        <h2 className='text-2xl font-bold mb-4'>Jane S.</h2>
      </div>
      <div className='bg-white shadow-md rounded-2xl p-8'>
        <p className='text-lg text-gray-600 mb-4'>"The hotel was very clean and well-maintained, the staff were friendly and helpful, and the room was comfortable."</p>
        <h2 className='text-2xl font-bold mb-4'>Bob T.</h2>
      </div>
    </div>
  );
}