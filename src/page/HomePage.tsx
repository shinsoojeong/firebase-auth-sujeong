import { Image } from 'react-bootstrap';
import homeImg from '../firebaseImg.jpg'

export default function HomePage() {
  return (
    <div>
      <Image src={homeImg} />
    </div>
  )
}