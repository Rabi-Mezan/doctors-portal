import { useEffect, useState } from 'react'
import initAuth from '../Firebase/init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";

initAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [IsLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [admin, setAdmin] = useState(false)


    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.push('/')

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home'
                history.replace(destination)


            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT")
            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false));;
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        registerUser,
        loginUser,
        admin,
        googleSignIn,
        IsLoading,
        logOut
    }

}

export default useFirebase;