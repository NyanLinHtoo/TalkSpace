import { useState } from "react";
import { useAppSelector } from "../app/hook";
import { getDocs, query, where } from "firebase/firestore";
import { userRef } from "../utils/FirebaseConfig";
import { UserType } from "../utils/Types";

const useFetchUsers = () => {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const uid = useAppSelector((state) => state.auth.userInfo?.uid);

  if (uid) {
    const getUsers = async () => {
      const firestoreQuery = query(userRef, where("uid", "!=", uid));
      const data = await getDocs(firestoreQuery);
      const firestoreUsers: Array<UserType> = [];
      data.forEach((user) => {
        const userData = user.data() as UserType;
        firestoreUsers.push({
          ...userData,
          label: userData.name,
          value: userData.uid,
        });
      });
      setUsers(firestoreUsers);
    };
    getUsers();
  }
  return [users];
};

export default useFetchUsers;
