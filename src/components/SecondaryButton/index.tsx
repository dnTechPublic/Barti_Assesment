import { forwardRef, ButtonHTMLAttributes } from 'react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ children, className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`rounded-lg hover:opacity-80 border border-[#054553] bg-[#F1F2F3] text-[#054553] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

SecondaryButton.displayName = 'SecondaryButton';