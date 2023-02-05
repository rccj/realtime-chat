import { InputHTMLAttributes, PropsWithChildren } from 'react';

interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  type?: 'default' | 'warn' | 'primary';
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const Button = ({ type, isLoading, isDisabled, className, children, ...rest }: PropsWithChildren<IButton>) => {
  // TODO 定義 type 顏色
  // let color = 'bg-gray-200';

  // if (type === 'primary') {
  //   color = 'bg-primary text-white';
  // } else if (type === 'warn') {
  //   color = 'bg-error text-white';
  // }

  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`inline-block w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
