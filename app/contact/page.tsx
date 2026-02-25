import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className='max-w-7xl mx-auto py-20 flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold mb-8'>Get in Touch</h1>
      <ContactForm />
    </div>
  );
}