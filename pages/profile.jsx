import Container from '../components/common/Container'
import Layout from '../components/common/Layout'
import Navbar from '../components/common/Navbar'
import { useState } from 'react'
const ProfilePage = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const [isDefinitionsVisible, setIsDefinitionsVisible] = useState(false)
  const [isLikedVisible, setIsLikedVisible] = useState(false)
  return (
    <Layout title='Profile | LKUD'>
      <Container>
        <section className='pt-2 pb-12 bg-offWhite'>
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
                onClick={() => setIsDefinitionsVisible(!isDefinitionsVisible)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
            {isDefinitionsVisible && (
              <div className='py-6'>
                <div className='pt-2 pb-3 grid grid-cols-3 gap-4'>
                  {arr.map((i) => (
                    <div className='bg-white flex-col space-y-2 p-4 shadow'>
                      <div className='flex-col space-y-1.5'>
                        <h1 className='text-2xl'>Aathal</h1>
                        <h1 className='text-xl'>අ‍ාතල්</h1>
                      </div>

                      <h2 className='text-lg'>
                        Happy feeling, state of happiness.
                      </h2>
                      <div className='flex-col space-y-0.5'>
                        <h3 className='text-lg'>Upvotes: 3</h3>
                        <h3 className='text-lg'>Downvotes: 0</h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-end '>
                  <h2 className='text-maroon-base cursor-pointer '>
                    view more
                  </h2>
                </div>
              </div>
            )}
          </section>
          <section className='py-2 '>
            <div className='flex justify-between'>
              <h1 className='text-3xl text-maroon-base'>Liked Definitions</h1>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mt-2 h-6 w-6 stroke-current text-maroon-base cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={() => setIsLikedVisible(!isLikedVisible)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
            {isLikedVisible && (
              <div className='py-6'>
                <div className='pt-2 pb-3 grid grid-cols-3 gap-4'>
                  {arr.map((i) => (
                    <div className='bg-white flex-col space-y-2 p-4 shadow'>
                      <div className='flex-col space-y-1.5'>
                        <h1 className='text-2xl'>Aathal</h1>
                        <h1 className='text-xl'>අ‍ාතල්</h1>
                      </div>

                      <h2 className='text-lg'>
                        Happy feeling, state of happiness.
                      </h2>
                      <div className='flex-col space-y-0.5'>
                        <h3 className='text-lg'>Upvotes: 3</h3>
                        <h3 className='text-lg'>Downvotes: 0</h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-end '>
                  <h2 className='text-maroon-base cursor-pointer '>
                    view more
                  </h2>
                </div>
              </div>
            )}
          </section>
        </section>
      </Container>
    </Layout>
  )
}

export default ProfilePage
