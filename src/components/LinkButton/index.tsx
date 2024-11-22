import { forwardRef, ButtonHTMLAttributes } from 'react';

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`underline hover:opacity-80 bg-transparent border-none cursor-pointer uppercase text-xs font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

LinkButton.displayName = 'LinkButton';