import Header from 'components/Header';
import 'styles/index.css';
import { LayoutProps } from 'types/next';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='pt-BR'>
      <head />
      <body>
        <div id='root'>
          <Header />

          <main id='main'>{children}</main>
        </div>
      </body>
    </html>
  );
}
