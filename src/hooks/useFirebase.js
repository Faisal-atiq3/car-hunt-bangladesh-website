import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";
initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser] = useState({});
    const[isLoading, setisLoading]= useState(true);
    const auth = getAuth();
    const [name,setName]=useState('');

    const signInUsingGoogle =() =>{
        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setisLoading(false));

    }

    


    

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user);
            }
            else {
                setUser({})
            }
            setisLoading(false);
        });
        return()=> unsubscribed;
    },[auth])

    const logOut =()=>{
        setisLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setisLoading(false));
        
    }

    const signInEmail =(name,email, password)=>{
        setName(name);
       return createUserWithEmailAndPassword(auth, email, password)
  }



const loginUser =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(name)=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

    }

    const saveUser =(email, displayName) =>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()

    }







    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInEmail,
        loginUser,
        name,
        updateUser
    }
}
export default useFirebase;