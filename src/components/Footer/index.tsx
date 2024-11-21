import React from 'react';
import Image from 'next/image';
import FooterLogo from '@/assets/image/Footer.png';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex justify-center items-center h-40 bg-white">
      <Image src={FooterLogo} alt="Footer Logo" />
    </footer>
  )
}

