import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  where,
  query,
} from "firebase/firestore";
import { toast } from "vue3-toastify";
export const useDbStore = defineStore("database", () => {
  const pickUpAddress = useState("pickUpAddress", () => "");
  const pickUpDate = useState("pickUpDate", () => "");
  const pickOffAddress = useState("pickOffAddress", () => "");
  const dropOffAddress = useState("dropOffAddress", () => "");
  const { $firestore } = useNuxtApp()
  const bookings = useState('booking', () => [])
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

  // get data from database

  onMounted(() => {
    try {
      onSnapshot(collection($firestore, "Bookings"), (querySnapshot) => {
        const carBooking = [];
        querySnapshot.forEach((doc) => {
          const details = {
            id: doc.id,
            pickUpAddress: doc.pickUpAddress,
            pickOffAddress: doc.data(). pickOffAddress,
            pickUpDate: doc.data().pickUpDate,
            dropOffAddress: doc.data().dropOffAddress,
          };
          carBooking.push(details);
        });
        bookings.value = carBooking;
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
    bookings
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDbStore, import.meta.hot));
}
