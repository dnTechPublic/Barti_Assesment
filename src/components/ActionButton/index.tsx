import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ children, className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`rounded-lg hover:opacity-80 bg-[#054553] text-[#F1F2F3] border-none cursor-pointer box-shadow-[0px_4px_4px_0px_#0545533D] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

ActionButton.displayName = 'ActionButton';