import React from 'react';
import {  MoveRight } from 'lucide-react';
import Link from 'next/link';

// Type definitions
export type ButtonVariant = 'primary' | 'outline' | 'secondary';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  arrow?: boolean; // Show arrow icon
  // Allow additional HTML button/anchor attributes
  // [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  href,
  target,
  rel,
  type = 'button',
  arrow = false,
  ...props 
}) => {
  const baseClasses = 'px-8 py-4 cursor-pointer text-[15px] font-[Space_Grotesk] rounded-[20px] font-[400] text-base transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#F27933] text-[#FAFAFA] hover:bg-[#EA580C] focus:ring-orange-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-[#F27933] hover:text-[#FAFAFA] focus:ring-orange-500',
    secondary: 'bg-[#003780] text-[#FAFAFA] hover:text-[#F27933] focus:ring-blue-900 shadow-sm hover:shadow-md'
  };

  const variantClasses = variants[variant] || variants.primary;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  // If href is provided, render as a Link (for internal navigation) or anchor (for external)
  const arrowIcon = arrow ? (
    <span
      className="inline-block ml-3 align-middle transition-transform duration-300 group-hover:translate-x-2"
      aria-hidden="true"
    >
      <MoveRight size={20} strokeWidth={2.2} />
    </span>
  ) : null;

  const buttonGroupClass = arrow ? `${combinedClasses} group` : combinedClasses;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={buttonGroupClass}
          onClick={onClick}
          {...props}
        >
          {children}
          {arrowIcon}
        </a>
      );
    }
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={buttonGroupClass}
        onClick={onClick}
        {...props}
      >
        {children}
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonGroupClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {arrowIcon}
    </button>
  );
};

export default Button;

// Usage Examples:

/*
// Regular button
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>

// Internal navigation (uses Next.js Link)
<Button variant="outline" href="/about">
  About Us
</Button>

// External link
<Button variant="secondary" href="https://example.com" target="_blank">
  External Link
</Button>

// Form submission
<Button variant="primary" type="submit" disabled={isLoading}>
  {isLoading ? 'Submitting...' : 'Submit'}
</Button>

// Email link
<Button variant="outline" href="mailto:contact@example.com">
  Contact Us
</Button>

// Phone link
<Button variant="secondary" href="tel:+1234567890">
  Call Us
</Button>
*/