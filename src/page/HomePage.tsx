import { Image } from 'react-bootstrap';
import homeImg from '../firebaseImg.jpg'

export default function HomePage() {
  return (
    <div className='align-middle'>
      <Image className='mx-auto d-block' src={homeImg} />
    </div>
  )
}