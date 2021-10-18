import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthUserContext'

export const withPublic = (Component) => {
  const WithPublic = (props) => {
    const auth = useAuth()
    const router = useRouter()

    if (typeof window !== 'undefined') {
      if (auth.authUser) {
        router.replace('/')
        // TODO: change this return statement to beautiful loading component
        return <p>Loading...</p>
      }
    }

    return <Component auth={auth} {...props} />
  }

  return WithPublic
}

export const withProtected = (Component) => {
  const WithProtected = (props) => {
    const auth = useAuth()
    const router = useRouter()

    if (typeof window !== 'undefined') {
      if (!auth.authUser) {
        router.replace('/login')
        // TODO: change this return statement to beautiful loading component
        return <p>Loading...</p>
      }
    }

    return <Component auth={auth} {...props} />
  }

  return WithProtected
}
