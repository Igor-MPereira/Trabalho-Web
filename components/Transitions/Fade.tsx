import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export default function Fade(props: PropsWithChildren<{ show: boolean }>) {
  return (
    <Transition
      enter='transition-opacity duration-150'
      enterFrom='opacity-0'
      enterTo='opacity-100 contents'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100 contents'
      leaveTo='opacity-0'
      {...props}
    />
  );
}
