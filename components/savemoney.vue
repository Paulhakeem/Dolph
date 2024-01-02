<template>
  <main>
    <div class="bg-bg w-full h-auto">
    <div class="flex flex-wrap justify-center gap-20 pb-32">
      <div id="imageposition" class="relative w-2/6 sm:w-[32dvh] md:w-[36.5dvh]">
        <div class="absolute inset-x-0 top-0">
          <img
            src="../assets/images/lambo.jpg"
            alt=""
            class="origin-top-left"
          />
          <div id="button" class="flex justify-center gap-4 px-2">
            <div id="button1"
              class="flex justify-center gap-4 border border-1 border-light p-3 rounded-md w-52"
            >
              <p class="text-4xl font-bold text-light">+200</p>
              <p class="text-xs text-light pt-2">
                Cars in <br />
                our fleet
              </p>
            </div>

            <div id="button2"
              class="flex justify-center gap-4 border border-1 border-light p-3 rounded-md w-52"
            >
              <p class="text-4xl font-bold text-light">50k</p>
              <p class="text-xs text-light pt-2">
                Satisified <br />
                customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="money" class="pt-24 md:pt-4">
        <h4 class="text-light font-black text-4xl text-pretty">
          Save money <br />
          with our rental
        </h4>
        <p class="text-light pt-4 text-sm text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Reprehenderit, itaque?
        </p>
        <div id="moneybutton">
          <button 
          class="bg-light-blue rounded-full p-2 w-44 mt-10 text-md font-medium text-heading"
        >
          Booking Now
        </button>
        </div>
      </div>
    </div>
  </div>

  <popular/>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
