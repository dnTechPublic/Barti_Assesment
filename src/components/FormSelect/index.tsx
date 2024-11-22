import React, { forwardRef, SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 ">
        {label && <label className="text-sm font-medium text-[#5B6873]">{label}</label>}
        <select
          ref={ref}
          className={`h-10 rounded border p-2 outline-none focus:border-blue-500 text-[#5B6873] bg-white ${className}`}
          {...props}
        >
          <option value="" className='text-[#5B6873] bg-transparent'>Select an option</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value} className='text-[#5B6873] bg-transparent'>
              {label}
            </option>
          ))}
        </select>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';