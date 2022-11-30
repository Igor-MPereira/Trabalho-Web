'use client';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import Fade from './Fade';

export default function FadeOnLoad({ children }: PropsWithChildren) {
  const [isShowing, setIsShowing] = useState(false);

  useLayoutEffect(() => setIsShowing(true), []);

  return <Fade show={isShowing}>{children}</Fade>;
}
