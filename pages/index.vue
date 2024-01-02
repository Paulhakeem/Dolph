<template>
  <div>
    <div id="home"
      class="bg-[url('../assets/images/home.jpg')] bg-cover bg-no-repeat bg-center h-screen"
    >
      <div id="home1" class="text-center pt-28 text-balance select-none mb-14 lg:pt-24">
        <h1 class="text-7xl font-black text-light stroke-white stroke-2 lg:text-6xl">
          Premium car rental
        </h1>
        <button
          class="bg-light-blue rounded-full p-3 w-44 mt-10 text-md font-medium text-heading"
        >
          Booking Now
        </button>
      </div>

      <section id="homeSection" class="px-3 lg:pt-6">
        <div class="bg-[#e6e9f1] w-full rounded-md h-auto mt-44">
          <div class="flex flex-wrap gap-2 py-4 justify-center">
            <div class="bg-white rounded-md w-72 h-20 justify-center">
              <h3
                class="text-heading pl-4 pt-3 font-semibold text-center rounded-md"
              >
                Pick Up address
              </h3>
              <div class="px-2">
                <input
                  type="text"
                  class="w-full ring-0 border-b-2 border-b-heading px-2 outline-none first-letter:uppercase caret-blue"
                />
              </div>
            </div>

            <div class="bg-white rounded-md w-72 h-20 justify-center">
              <h3
                class="text-heading pl-4 pt-3 font-semibold text-center rounded-md"
              >
                Pick Up date
              </h3>
              <div class="px-2">
                <input
                  type="text"
                  class="w-full ring-0 border-b-2 border-b-heading px-2 outline-none first-letter:uppercase caret-blue"
                />
              </div>
            </div>

            <div class="bg-white rounded-md w-72 h-20 justify-center">
              <h3
                class="text-heading pl-4 pt-3 font-semibold text-center rounded-md"
              >
                Pick Off address
              </h3>
              <div class="px-2">
                <input
                  type="text"
                  class="w-full ring-0 border-b-2 border-b-heading px-2 outline-none first-letter:uppercase caret-blue"
                />
              </div>
            </div>

            <div class="bg-white rounded-md w-72 h-20 justify-center">
              <h3
                class="text-heading pl-4 pt-3 font-semibold text-center rounded-md"
              >
                Drop Off address
              </h3>
              <div class="px-2">
                <input
                  type="text"
                  class="w-full ring-0 border-b-2 border-b-heading px-2 outline-none uppercase caret-blue"
                />
              </div>
            </div>

            <div id='homeSectionButton'
              class="bg-blue rounded-md w-44 h-20 cursor-pointer text-center"
            >
            <div class="flex justify-center items-center pt-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M5 8h14V6H5zm0 0V6zM3 22V4h3V2h2v2h8V2h2v2h3v7.675q-.475-.225-.975-.375T19 11.075V10H5v10h6.3q.175.55.413 1.05t.562.95zm15 1q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z"
                />
              </svg>
            </div>
              
              <button class="text-white">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
   <!-- end of home page -->

   <div>
    <whyus/>
     <savemoney/>
   </div>
  </div>
</template>

<script setup></script>
