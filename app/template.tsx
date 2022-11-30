import Aside from 'components/Aside';
import FadeOnLoad from 'components/Transitions/FadeOnLoad';
import { LayoutProps } from 'types/next';

export default function RootTemplate({ children }: LayoutProps) {
  return (
    <FadeOnLoad>
      <Aside />

      <article className='col-span-8 px-12'>{children}</article>
    </FadeOnLoad>
  );
}
