import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LadySimulados - Simulados Gratuitos ENEM, Provão Paulista, FUVEST e Concursos',
  description: 'Plataforma 100% aberta e gratuita de simulados online para ENEM, Provão Paulista, SARESP, FUVEST, OBMEP, OBA, SISU, Concursos e Vestibulares. Sem necessidade de cadastro.',
  openGraph: {
    title: 'LadySimulados - Simulados Gratuitos ENEM, Provão Paulista, FUVEST e Concursos',
    description: 'Pratique com simulados completos com no mínimo 20 questões comentadas, cronômetro de prova e gabarito imediato.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LadySimulados - Simulados Gratuitos',
    description: 'Plataforma aberta de simulados para exames nacionais, vestibulares e concursos públicos.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-[#f9f9ff] text-[#141b2b] antialiased selection:bg-[#5bb8fe]/30 selection:text-[#00476e]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

