import Image from 'next/image'
import Link from 'next/link'
import {footerLinks} from '@/constants'

const Footer = () => {
  return (
    <footer className='max-w-[1440px] mx-auto flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-co flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gab-6'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </div>
        <div className='footer__links'>
          {footerLinks.map((link, index) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((link, index) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className='text-gray-500 text-base hover:text-gray-900'>
                    {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

      </div>
        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
          <p>© 2021 Venda de carros.<br /> Todos os direitos reservados.</p>
          <div className='footer__copyrights-link'>
                <Link href='/' className='text-gray-500 hover:text-gray-900'>
                  Política de Privacidade
                </Link>
                <Link href='/' className='text-gray-500 hover:text-gray-900'>
                  Termos de Uso
                </Link>
          </div> 
        </div>
    </footer>
  )
}

export default Footer