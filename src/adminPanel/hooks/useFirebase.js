import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import initializeFirebase from "../firebase/firebase.init";




export const auth = getAuth(initializeFirebase())

const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth();


    // Login User By Email
    const loginUser = (email, password) => {
        setLoading(true)
        signOut(auth)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                if (userCredential.user) {
                    swal({
                        title: "Well Done",
                        text: "Successfully logged in by Email!",
                        icon: "success",
                        button: "OK",
                    });

                }

            })
            .catch((error) => {
                swal({
                    title: "SORRY",
                    text: "SORRY",
                    icon: "danger",
                    button: "OK",
                });
            })
            .finally(() => setLoading(false))
    }

    // Observer
    useEffect(() => {
        const authSubscription = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
                setLoading(false);
            }
            else {
                setUser(null)
                setLoading(false)
            }
        })

        return authSubscription;
    }, [auth])
    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })

    }
    return {
        user,
        loading,
        loginUser,
        logOut
    }
}

export default useFirebase;