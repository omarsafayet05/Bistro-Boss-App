import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      //This is central zone of authentication and storing token in there.
      if (currentUser) {
        //take token and store in client side
        const userInfo = { email: currentUser.email };
        console.log(currentUser.email);
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        //TODO:remove token from client's( local storage,in memory,caching)
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
