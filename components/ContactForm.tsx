import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-7xl mx-auto py-20 grid grid-cols-1 gap-8'>
      <div>
        <label htmlFor='name' className='text-lg font-bold mb-2'>Name:</label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} className='bg-white shadow-md rounded-2xl p-4 w-full' />
      </div>
      <div>
        <label htmlFor='email' className='text-lg font-bold mb-2'>Email:</label>
        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='bg-white shadow-md rounded-2xl p-4 w-full' />
      </div>
      <div>
        <label htmlFor='message' className='text-lg font-bold mb-2'>Message:</label>
        <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} className='bg-white shadow-md rounded-2xl p-4 w-full h-48' />
      </div>
      <button type='submit' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl'>Send Message</button>
    </form>
  );
}