<template>
  <main>
    <div class="bg-bg w-full h-auto mx-auto">
      <div
        class="flex flex-wrap pb-12 items-center justify-center"
      >
        <div class="justify-center justify-self-center mx-auto">
          <div class="flex justify-center object-center">
            <img
            src="../assets/images/lambo.jpg"
            alt=""
            class="w-96"
          />
          </div>
          <div id="button" class="flex text-center justify-center gap-4 px-2 justify-items-center">
            <button
              class="flex justify-center gap-4 border border-1 border-light p-3 rounded-md w-52"
            >
              <p class="text-4xl font-bold text-light">+200</p>
              <p class="text-xs text-light pt-2">
                Cars in <br />
                our fleet
              </p>
            </button>

            <button
              class="flex justify-center gap-4 border border-1 border-light p-3 rounded-md w-52"
            >
              <p class="text-4xl font-bold text-light">50k</p>
              <p class="text-xs text-light pt-2">
                Satisified <br />
                customers
              </p>
            </button>
          </div>
        </div>

        <div
          id="saveMoney"
          class="pt-6 justify-center justify-self-center mx-auto"
        >
          <h4
            id="savemoneyH"
            class="text-light font-black text-4xl text-pretty"
          >
            Save money <br />
            with our rental
          </h4>
          <p class="text-light pt-4 text-sm text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Reprehenderit, itaque?
          </p>

         <nuxt-link to="/booking">
          <button
            class="bg-light-blue rounded-md p-2 w-42 mt-10 text-md font-medium text-heading text-sm"
          >
            Booking Now
          </button>
         </nuxt-link>
        </div>
      </div>
    </div>

    <popular />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
