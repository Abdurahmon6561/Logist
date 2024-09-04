// app/layout.js
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'S.H GLOBAL LOGISTICS',
  description: 'Leading power-only logistics company in the U.S. with the largest network of qualified carriers.',
  keywords: 'power-only logistics, logistics company, qualified carriers, U.S. logistics, freight safety, reliable delivery, comprehensive insurance, motor carrier vetting, transport reliability, on-time delivery, logistics coverage',
  author: 'Evolution-systems',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        
        
        {/* Include other meta tags and scripts */}
      </Head>
      <body className="font-sans antialiased">
        {children}
        {/* Footer and other global components can go here */}
      </body>
    </html>
  );
}
