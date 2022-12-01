import NavLink from 'components/NavLink';
import Image from 'next/image';
import GithubIcon from 'assets/icons/Github-Mark-Light-32px.png';
import LinkedinIcon from 'assets/icons/LI-In-Bug.png';
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import AsideLink from 'components/AsideLink';

export default function Aside() {
  return (
    <aside className='col-span-2'>
      <div className='flex justify-center rounded-xl bg-default-800 py-8 shadow-lg'>
        <div className='grid place-items-center gap-8'>
          <Image
            alt='imagem de perfil'
            src='https://avatars.githubusercontent.com/u/51838741?v=4'
            width={150}
            height={150}
            className='rounded-full shadow-xl'
          />

          <span className='font-semibold'>Igor Morales Pereira</span>

          <div id='links' className='grid w-full'>
            <div className='grid gap-4'>
              <AsideLink
                alt='email icon'
                href='mailto:igor@gargantas.org'
                icon={<EnvelopeIcon width={16} height={16} className='mr-2' />}
              >
                Email
              </AsideLink>
              <AsideLink
                href='https://github.com/Igor-MPereira'
                alt='github icon'
                icon={GithubIcon}
              >
                GitHub
              </AsideLink>
              <AsideLink
                href='https://www.linkedin.com/in/igor-pereira-a42aa9203/'
                alt='linkedin icon'
                icon={LinkedinIcon}
              >
                LinkedIn
              </AsideLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
