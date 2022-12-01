import NavLink from 'components/NavLink';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 left-0 flex justify-between bg-default-800 px-20 py-4 shadow-xl'>
      <h1 className='text-3xl'>
        <NavLink href='/'>Site Portfólio</NavLink>
      </h1>
      <nav className='grid grid-flow-col place-content-center gap-20'>
        <NavLink href='/postagens'>Postagens</NavLink>
        <NavLink href='/cursos'>Cursos</NavLink>
        <NavLink href='/projetos'>Projetos</NavLink>
      </nav>
    </header>
  );
}
