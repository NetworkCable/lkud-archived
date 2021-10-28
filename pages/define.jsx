import Container from '../components/common/Container'
import Layout from '../components/common/Layout'
import Navbar from '../components/common/Navbar'
import  InputTag  from '../components/common/InputTag'
import  InputArea  from '../components/common/InputArea'
import Button from '../components/common/Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const definePage = () => {
  const [data, setData] = useState({
    word: '',
    meaning: '',
  })
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setData({
      word: data.word,
      meaning: data.meaning
    })
    reset()
    alert("Your word has been added to the LKUD")
    

  }

    return (
        <Layout title='Define | LKUD'>
          <Container>
            <Navbar/>
            <div className=''>
            <p className='text-4xl text-maroon-base '>Define a word</p>
            <p className='text-2xl text-maroon-light mt-2'>Add a word to the LKUD and type away the meaning...</p>
            <div className='pt-5 pr-96'>
           <div className='mt-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='pr-96'>
                  <InputTag
                  wrapperStyles='mb-8'
                  label='Word'
                  name='word'
                  type='text'
                  placeholder='Word'
                  register={register}
                  errors={errors}
                  validation={{
                    required: 'Word is required',
                  }}></InputTag>
                  </div>
                  <div className='pr-96'>
                  <InputArea
                  wrapperStyles='mb-8'
                  label='Meaning'
                  name='meaning'
                  type='text'
                  placeholder='Meaning'
                  register={register}
                  errors={errors}
                  validation={{
                    required: 'Meaning is required',
                  }}
                  ></InputArea>
                  </div>
                  <div className='pl-28'>
                  <Button type='submit'>Submit</Button>
                  </div>
                </form>
            </div>
            </div>
            </div>
          </Container>
        </Layout>
    )
}

export default definePage