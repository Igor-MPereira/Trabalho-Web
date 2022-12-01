import NavLink from 'components/NavLink';
import Image from 'next/image';
import GithubIcon from 'assets/icons/Github-Mark-Light-32px.png';
import LinkedinIcon from 'assets/icons/LI-In-Bug.png';

export default function Aside() {
  return (
    <aside className='col-span-2'>
      <div className='grid place-items-center gap-8 rounded-xl bg-default-700 py-8 shadow-lg'>
        <Image
          alt='imagem de perfil'
          src='https://avatars.githubusercontent.com/u/51838741?v=4'
          width={150}
          height={150}
          className='rounded-full shadow-xl'
        />

        <span className='font-semibold'>Igor Morales Pereira</span>

        <div id='links' className='grid place-items-center'>
          <span className='mb-4 font-semibold'>Meus Links</span>

          <div className='grid gap-4'>
            <NavLink href='https://github.com/Igor-MPereira'>
              <span className='flex items-center'>
                <div>
                  <Image
                    alt='github icon'
                    className='mr-2'
                    src={GithubIcon}
                    height={16}
                    width={16}
                  />
                </div>
                Igor-MPereira
              </span>
            </NavLink>
            <NavLink href='https://www.linkedin.com/in/igor-pereira-a42aa9203/'>
              <span className='flex items-center'>
                <div>
                  <Image
                    alt='linkedin icon'
                    className='mr-2'
                    src={LinkedinIcon}
                    height={16}
                    width={16}
                  />
                </div>
                Igor Pereira
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
}
