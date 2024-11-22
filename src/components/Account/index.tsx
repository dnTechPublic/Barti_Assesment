import Image from 'next/image';
import Avatar from '@/assets/image/Avatar.png';
import { forwardRef, ButtonHTMLAttributes } from 'react';

const AccountButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return (
    <button 
      ref={ref}
      {...props}
      className="flex items-center justify-center text-black"
    >
      <Image alt="avatar" src={Avatar} />
    </button>
  )
});

AccountButton.displayName = 'AccountButton';

export default AccountButton;


