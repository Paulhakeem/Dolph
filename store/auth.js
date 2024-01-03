import { defineStore } from "pinia";
const { createUser, loginUser } = useFirebaseAuth();
import { toast } from "vue3-toastify";
export const useAuthStore = defineStore("auth", () => {
  const email = useState("emailSignin", () => "");
  const password = useState("passwordSignin", () => "");

  const signIn = async () => {
    const user = await createUser(email.value, password.value);
    if (user) {
      toast.error("User created successfull!!");
    }
    email.value = "";
    password.value = "";
    await navigateTo({ path: "/booking" });
  };


  const signUp = async () => {
    const user = await loginUser(email.value, password.value);
    if (user) {
      toast.error("User created successfull!!");
    }
    email.value = "";
    password.value = "";
    await navigateTo({ path: "/booking" });
  };


  return
  {
    email,
    password,
    signIn,
    signUp
  }
});
