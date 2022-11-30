import { LayoutProps } from 'types/next';
import 'styles/globals.css';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='pt-BR'>
      <head />
      <body>
        <div
          id='root'
          className='min-h-screen'
        >
          {children}
        </div>
      </body>
    </html>
  );
}
