import Head from 'next/head'
import Image from 'next/image'
import Container from './Container'
import Button from './Button'

/**
 * Use this component as a page layout.
 * Every page should contain this layout component.
 *
 * @children children JSX Elements
 * @title SEO title
 * @navbar boolean (hide or show)
 */
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className='font-montserrat text-black bg-offWhite min-h-screen grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-4'>
        <div className='col-span-1 row-span-1 md:row-span-1 md:col-span-1 flex flex-col justify-between bg-maroon-base md:h-auto'>
          <div>
            <Container>
              <div className='mb-3'>
                <Image
                  src='/patterns/line.svg'
                  layout='intrinsic'
                  width={690}
                  height={6}
                  alt='line'
                />
              </div>
              <div className='h-full'>
                <h1 className='font-semibold text-xl sm:text-2xl text-center md:text-left text-yellow-base mb-3 md:mb-64'>
                  LANKAN URBAN DICTIONARY
                </h1>
                <p className='hidden md:block text-4xl text-right text-yellow-base'>
                  ✺
                </p>
              </div>
              <div className='mb-3'>
                <Image
                  src='/patterns/line.svg'
                  layout='intrinsic'
                  width={690}
                  height={6}
                  alt='line'
                />
              </div>
              <Button
                margin='mb-4'
                width='w-full'
                textSize='sm:text-lg md:text-xl'
                textColor='text-maroon-base'
              >
                DEFINE A WORD
              </Button>
            </Container>
          </div>
          <div>
            <div className='h-5 bg-orange' />
            <div className='h-5 bg-green-base' />
          </div>
        </div>
        <div className='col-span-1 row-span-3 md:row-span-1 md:col-span-3 cursor-default'>
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
