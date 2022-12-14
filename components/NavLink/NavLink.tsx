import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export default function NavLink(props: PropsWithChildren<LinkProps>) {
  return <Link {...props} className='hover:underline hover:opacity-80' />;
}
