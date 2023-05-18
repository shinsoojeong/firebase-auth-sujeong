import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default function NotFoundPage() {
  return (
    <div className='m-10 h-full'>
      <section className='text-center h-full flex-col'>
        <h1 className='font-bold text-5xl'>NotFoundPage </h1>
        <br />
        <div className='mt-20'>
          <div className="flex-col">
            <Button className="mb-3 p-4 w-[300px] text-2xl font-semibold flex items-center justify-center m-auto  border-2" variant="primary" size="lg" href='/'>Home</Button>
          </div>
        </div>
      </section >
    </div>
  )
}