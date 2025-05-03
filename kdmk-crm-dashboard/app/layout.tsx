import '../styles/globals.css';

export const metadata = {
  title: 'KDMG CRM Dashboard',
  description: 'A simple CRM dashboard for KDMG',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
