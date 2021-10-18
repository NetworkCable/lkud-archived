import { useState, useEffect } from 'react'
import { auth } from '../lib/firebase'

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  phoneNumber: user.phoneNumber,
  photoURL: user.photoURL,
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return
    }

    setLoading(true)
    let formattedUser = formatAuthUser(authState)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  const clear = () => {
    setAuthUser(null)
    setLoading(true)
  }

  const signInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

  const createUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password)

  const signOut = () => auth.signOut().then(clear)

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  }
}
