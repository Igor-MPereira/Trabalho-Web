import { StaticImageData } from 'next/image';
import { ReactElement, ReactNode } from 'react';

export interface AsideLinkProps {
  icon: string | StaticImageData | ReactElement;
  alt: string;
  href: string;
  size?: number;
  children: ReactNode;
}
