import { InputHTMLAttributes, PropsWithChildren } from 'react';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  type?: 'default' | 'warn' | 'primary';
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const Button = ({ type, isLoading, isDisabled, className, children, onClick, ...rest }: PropsWithChildren<IButton>) => {
  let color = 'bg-gray-200';

  if (type === 'primary') {
    color = 'bg-blue-600 text-white focus:ring-blue-500';
  } else if (type === 'warn') {
    color = 'bg-error text-white';
  } else if (type === 'default') {
    color = 'text-gray-500 focus:ring-gray-400';
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type="button"
      className={`w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal opacity-90 shadow-sm transition transition-all duration-200 hover:opacity-100 hover:shadow-md focus:ring-4 focus:ring-opacity-50 ${color} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
