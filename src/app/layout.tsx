'use client';
import { ThemeProvider } from '@/contexts/Theme';
import './../styles/index.css';
import 'react-vertical-timeline-component/style.min.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
