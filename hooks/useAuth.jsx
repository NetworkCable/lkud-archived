import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../lib/firebase'
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const formatAuthUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  phoneNumber: user.phoneNumber,
  photoURL: user.photoURL,
})

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return
    }

    setLoading(true)
    let formattedUser = await formatAuthUser(authState)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  const clear = () => {
    setAuthUser(null)
    setLoading(true)
  }

  const signInByProvider = async (provider) => {
    await signInWithPopup(auth, provider)
  }

  const signInByEmail = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password)

  const createUserWithEmail = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password)

  const emailSignOut = () => signOut(auth).then(clear)

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged)
    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    authUser,
    loading,
    signInByProvider,
    signInByEmail,
    createUserWithEmail,
    emailSignOut,
  }
}

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInByProvider: async () => {},
  signInByEmail: async () => {},
  createUserWithEmail: async () => {},
  emailSignOut: async () => {},
})

export function AuthUserProvider({ children }) {
  const authData = useFirebaseAuth()
  return (
    <authUserContext.Provider value={authData}>
      {children}
    </authUserContext.Provider>
  )
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext)
