<template>
  <div
    class="bg-[url('../assets/images/ferarri.jpg')] bg-cover bg-no-repeat bg-center bg-fixed"
  >
    <div class="justify-center items-center pt-16 pb-12">
      <section
        v-if="user === userId"
        id="bookingSection"
        class="bg-[#e6e9f1] p-6 rounded-md mx-w-md mx-16 opacity-90"
      >
        <div class="text-center pt-6">
          <h2 class="text-3xl font-bold text-brown">Book your favourite car</h2>
          <p class="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            voluptas?
          </p>
          <!-- form -->
          <form
            @submit.prevent="useFirestore.confirmBook"
            id="bookingSection"
            class=""
          >
            <div
              v-for="booking in useFirestore.confirmBooking"
              :key="booking.id"
              class="w-full rounded-md h-auto"
            >
              <div
                id="bookingBox"
                class="flex flex-wrap gap-14 py-4 justify-center"
              >
                <div
                  id="bookingFlex"
                  class="bg-white rounded-md w-72 h-20 justify-center"
                >
                  <h3 class="text-heading mt-2 font-semibold text-center">
                    Pick Up address
                  </h3>
                  <p class="text-gray-500 font-medium">
                    {{ booking.pickUpAddress }}
                  </p>
                </div>

                <div
                  id="bookingFlex"
                  class="bg-white rounded-md w-72 h-20 justify-center text-center"
                >
                  <h3 class="text-heading pl-4 pt-3 font-semibold text-center">
                    Pick Up date
                  </h3>
                  <div class="pl-3">
                    <p class="text-gray-500 font-medium">
                      {{ booking.pickUpDate }}
                    </p>
                  </div>
                </div>

                <div
                  id="bookingFlex"
                  class="bg-white rounded-md w-72 h-20 justify-center"
                >
                  <h3 class="text-heading pl-4 pt-3 font-semibold text-center">
                    Pick Off address
                  </h3>
                  <div class="pl-3">
                    <p class="text-gray-500 font-medium">
                      {{ booking.pickOffAddress }}
                    </p>
                  </div>
                </div>

                <div
                  id="bookingFlex"
                  class="bg-white rounded-md w-72 h-20 justify-center"
                >
                  <h3 class="text-heading pt-3 font-semibold text-center">
                    Drop Off address
                  </h3>
                  <div class="pl-3">
                    <p class="text-gray-500 font-medium">
                      {{ booking.dropOffAddress }}
                    </p>
                  </div>
                </div>

                <div class="bg-white rounded-md w-72 h-20 justify-center">
                  <h3 class="text-heading pl-4 pt-3 font-semibold text-center">
                    Your Bubget (Ksh, $)
                  </h3>
                  <div class="px-2">
                    <input
                      type="text"
                      class="w-full ring-0 border-b-2 text-gray-500 border-b-heading px-2 outline-none first-letter:uppercase caret-blue"
                      required
                    />
                  </div>
                </div>

                <div class="bg-white rounded-md w-72 h-20 justify-center">
                  <h3 class="text-heading pl-4 pt-3 font-semibold text-center">
                    Car type
                  </h3>
                  <div class="px-2">
                    <input
                      type="text"
                      class="w-full ring-0 border-b-2 text-gray-500 border-b-heading px-2 outline-none first-letter:uppercase caret-blue"
                      required
                    />
                  </div>
                </div>

                <button
                  id="bookingButton"
                  class="bg-blue rounded-md w-44 h-20 cursor-pointer text-light"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { user } = useFirebaseAuth();

const useFirestore = useDbStore();

definePageMeta({
  middleware: ["auth"],
});
useHead({
  titleTemplate: "%s - car booking",
});
</script>

<style lang="scss" scoped></style>
