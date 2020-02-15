import React from 'react';
import classname from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<Props> = ({
  className: classNameProps,
  disabled,
  href = '',
  children,
  ...props
}) => {
  const className = classname(
    'bg-primary hover:bg-primaryTwo text-white font-bold py-2 px-4 rounded',
    classNameProps,
    disabled && 'cursor-not-allowed opacity-50',
  );

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
