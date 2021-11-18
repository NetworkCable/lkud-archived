import Container from '../components/common/Container'
import Layout from '../components/common/Layout'
import { withPublic } from '../hooks/useRoute'

const LoginPage = () => {
  return (
    <Layout title='Login | LKUD'>
      <Container>
        <p className='text-3xl'>LKUD</p>
      </Container>
    </Layout>
  )
}

export default withPublic(LoginPage)
