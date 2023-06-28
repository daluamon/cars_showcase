import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Galeria de carros',
  description: 'Encotnre o carro ideal para você',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
