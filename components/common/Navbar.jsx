import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='pt-8 pb-12 md:py-12 md:px-12 px-2  flex  md:space-x-4 lg:space-x-12  justify-between md:justify-end  text-maroon-base sm:text-sm md:text-lg '>
      <Link href='/'>
        <a className='uppercase font-medium '>Home</a>
      </Link>
      <Link href='/'>
        <a className='uppercase font-medium'>All Words</a>
      </Link>
      <Link href='/profile'>
        <a className='uppercase font-medium'>Account</a>
      </Link>
    </nav>
  )
}

export default Navbar
