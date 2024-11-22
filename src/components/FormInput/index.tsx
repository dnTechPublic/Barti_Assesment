import React, { forwardRef, InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ label, error, required, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <div className='flex gap-1'>
                        <label className="text-sm font-medium text-[#5B6873]">{label}</label>
                        {required && <span className='text-red-700 text-lg'>*</span>}
                    </div>
                )}
                <input
                    ref={ref}
                    className={`rounded border p-2 outline-none border-[#C2CCDA] text-[#222222] focus:border-blue-500 h-10 ${className}`}
                    {...props}
                />
                {error && <span className="text-sm text-red-500">{error}</span>}
            </div>
        );
    }
);

FormInput.displayName = 'FormInput';