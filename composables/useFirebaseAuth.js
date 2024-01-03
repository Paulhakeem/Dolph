import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import toast from "~/plugin/toast";
export default function () {
  const { $auth } = useNuxtApp();
  const provider = new GoogleAuthProvider()
  const user = useState("firebaseUser", () => null);


  const createUser = async(email, password) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword($auth, email, password)
    if(userCredentials) {
        user.value = userCredentials.user
        useNuxtApp().$toast.success('User Created Successfully!')
    }
    } catch(error) {
        useNuxtApp().$toast.error('An error occurs!!')
    }
  }

//   login

const loginUser = async(email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword($auth, email, password)
    if(userCredentials) {
        user.value = userCredentials.user
        useNuxtApp().$toast.success('Login Successfully!')
    }
    } catch(error) {
        useNuxtApp().$toast.error('An error occurs!!')
    }
  }


  const googleLogin = async(provider) => {
    try{
        const userCredentials = signInWithPopup($auth, provider)
        if(userCredentials) {
            user.value = userCredentials.user
            useNuxtApp().$toast.success('Welcome back!')
        }
    }catch(error) {
        useNuxtApp().$toast.error('An error occurs!!')
    }
  }

  return{
    createUser,
    loginUser,
    googleLogin
  }
}
