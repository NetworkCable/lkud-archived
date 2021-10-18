import Navbar from '../components/common/Navbar'
const ProfilePage = () => {
  return (
    <main className='flex'>
      <aside className='w-2/5 min-h-screen bg-maroon-base'>
        <h1>Lankan Urban Dictionary</h1>
      </aside>

      <section className='w-3/5 bg-offWhite px-20'>
        <Navbar />
        <section className='py-3 border-b-2 border-maroon-base flex justify-between'>
          <h1 className='text-5xl text-maroon-base '>Saman Kumara</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mt-5 h-7 w-7 cursor-pointer stroke-current text-maroon-base'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
            />
          </svg>
        </section>
        <section className='py-6'>
          <h1 className='text-3xl text-maroon-base'>Bio</h1>
          <h2 className='py-2 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel
            ea perspiciatis in atque, minima nisi accusamus quae doloribus id.
          </h2>
        </section>
        <section className='py-2'>
          <div className='flex justify-between'>
            <h1 className='text-3xl text-maroon-base'>Your Definitions</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mt-2 h-6 w-6 stroke-current text-maroon-base cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>

          <div className='pt-4 grid grid-cols-1 gap-1'>
            <h2>Word 1/ වචනෙ </h2>
            <h2>Word 1/ වචනෙ </h2>
            <h2>Word 1/ වචනෙ </h2>
            <h2>Word 1/ වචනෙ </h2>
          </div>
        </section>
      </section>
    </main>
  )
}

export default ProfilePage
