import {
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { toast } from "vue3-toastify";

export const useDbStore = defineStore("database", () => {
  const { $firestore } = useNuxtApp()
  const pickUpAddress = ref(null);
  const pickUpDate = ref(null);
  const pickOffAddress = ref(null);
  const dropOffAddress = ref(null);

  const yourBudget = ref(null)
  const favCar = ref(null)
 
  const confirmBooking = ref([])

  console.log(confirmBooking);
  // functions

  const AddBooking = () => {
    addDoc(collection($firestore, "Bookings"), {
      pickUpAddress: pickUpAddress.value,
      pickOffAddress: pickOffAddress.value,
      pickUpDate: pickUpDate.value,
      dropOffAddress: pickOffAddress.value,
    });
    pickUpAddress.value = "";
    pickOffAddress.value = "";
    pickUpDate.value = "";
    dropOffAddress.value = ""
    toast.success("One last step on your booking!!");
    return navigateTo('/booking')
  };

  // confirm bookings
  const confirmBook = () => {
    addDoc(collection($firestore, 'confirmBooking'), {
      yourBudget: yourBudget.value,
      favCar: favCar.value
    })
    toast.success("Booking confirmed!!");
  }
  onMounted(() => {
    try {
     onSnapshot(collection($firestore, "Bookings"), (querySnapshot) => {
       const carBooking = [];
       querySnapshot.forEach((doc) => {
         const details = {
           id: doc.id,
           pickUpAddress: doc.data().pickUpAddress,
           pickOffAddress: doc.data(). pickOffAddress,
           pickUpDate: doc.data().pickUpDate,
           dropOffAddress: doc.data().dropOffAddress,
           yourBudget: doc.data().yourBudget,
           favCar: doc.data().favCar
         };
         carBooking.push(details);
       });
      confirmBooking.value = carBooking;
     });
   } catch (err) {
     toast.success("something went wrong!!");
   }
     })
  return {
    pickUpAddress,
    pickUpDate,
    pickOffAddress,
    dropOffAddress,
    AddBooking,
    yourBudget,
    favCar,
    confirmBooking,
    confirmBook
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDbStore, import.meta.hot));
}


