import NavLink from 'components/NavLink';
import Image from 'next/image';
import { isValidElement } from 'react';
import { AsideLinkProps } from './types';

export default function AsideLink({
  href,
  size = 16,
  icon,
  alt,
  children
}: AsideLinkProps) {
  return (
    <a href={href} target='_blank' rel='noreferrer noopener'>
      <div className='flex items-center'>
        {isValidElement(icon) ? (
          icon
        ) : (
          <Image alt={alt} className='mr-2' src={icon} height={size} width={size} />
        )}
        <span className='text-sm'>{children}</span>
      </div>
    </a>
  );
}
