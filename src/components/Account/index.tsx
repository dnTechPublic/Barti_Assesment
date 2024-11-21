import Image from 'next/image';
import Avatar from '@/assets/image/Avatar.png';

export default function Account() {
  return (
    <div className="flex items-center justify-center text-black">
      <Image alt="avatar" src={Avatar} />
    </div>
  )
}
