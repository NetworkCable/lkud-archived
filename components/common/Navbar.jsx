import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='py-12 flex justify-end space-x-12  text-maroon-base'>
      <Link href='/'>
        <a className='uppercase font-medium'>Home</a>
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
