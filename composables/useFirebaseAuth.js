import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "vue3-toastify";

export default function () {
  const { $auth } = useNuxtApp();
  const user = useState("firebaseUser", () => null);

  const createUser = async (email, password) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCredentials) {
        user.value = userCredentials.user;
        useNuxtApp().$toast.success("User Created Successfully");
      }
    } catch (err) {
      useNuxtApp().$toast.error(err.message);
    }
  };

  //   login

  const loginUser = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCredentials) {
        user.value = userCredentials.user;
        toast.success("Login Successfully!");
      }
    } catch (error) {
      toast.error("An error occurs!!");
    }
  };

  const googleLogin = async (provider) => {
    try {
      const userCredentials = signInWithPopup($auth, provider);
      if (userCredentials) {
        user.value = userCredentials.user;
      }
      
    } catch (error) {
      useNuxtApp().$toast.error("An error occurs!!");
    }
  };

  return {
    createUser,
    loginUser,
    googleLogin,
  };
}
