import { firebaseAuth, userRef } from "../utils/FirebaseConfig";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useAppDispatch } from "../app/hook";
import { setUser } from "../app/slices/AuthSlices";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateUserState = (user: User | null) => {
    if (user) {
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        })
      );
    } else {
      dispatch(setUser(undefined));
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      updateUserState(currentUser);
      if (!currentUser) navigate("/login");
    });
    return () => unSubscribe();
  }, [dispatch, navigate]);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName, email, uid },
    } = await signInWithPopup(firebaseAuth, provider);
    if (email) {
      const firestoreQuery = query(userRef, where("uid", "==", uid));
      const data = await getDocs(firestoreQuery);
      if (data.docs.length === 0) {
        await addDoc(userRef, {
          uid,
          name: displayName,
          email,
        });
      }
      dispatch(setUser({ uid, name: displayName, email }));
      navigate("/");
    }
  };

  const logout = () => {
    signOut(firebaseAuth);
  };

  return { login, logout };
};

export default useAuth;
