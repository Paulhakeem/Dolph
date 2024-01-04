import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  where,
  query,
  Firestore,
} from "firebase/firestore";
import { toast } from "vue3-toastify";
export const useDbStore = defineStore("database", () => {
  const pickUpAddress = useState("pickUpAddress", () => "");
  const pickUpDate = useState("pickUpDate", () => "");
  const pickOffAddress = useState("pickOffAddress", () => "");
  const dropOffAddress = useState("dropOffAddress", () => "");

  // functions

  const AddBooking = () => {
    addDoc(collection(Firestore, "Bookings"), {
      pickUpAddress: pickUpAddress.value,
      pickOffAddress: pickOffAddress.value,
      pickUpDate: pickOffAddress.value,
      dropOffAddress: pickOffAddress.value,
    });
    pickUpAddress.value = "";
    pickOffAddress.value = "";
    pickUpDate.value = "";
    pickUpDate.value = "";
    toast.success("One last step on your booking!!");
  };

  return {
    pickUpAddress,
    pickUpDate,
    pickOffAddress,
    dropOffAddress,
    AddBooking
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDbStore, import.meta.hot));
}
