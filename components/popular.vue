<template>
  <section>
    <div id="popular" class="flex flex-wrap justify-center gap-8 pt-8 bg-light h-auto">
      <div id="popular1" class="pt-8 w-72 mb-10 xl:w-full xl:text-center">
        <h4 class="font-bold text-4xl text-heading xl:text-4xl">
          Popular Cars
        </h4>
        <p class="text-pretty text-sm text-brown pt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          fuga!
        </p>

        <button class="bg-white p-2 w-36 rounded-full mt-8 font-semibold">
          Open Fleet
        </button>
      </div>
<!-- section A complete  -->



      <div id="carsButton" class="flex flex-wrap justify-center gap-4 mb-10 pt-8">
        <div id="carbox1" class="bg-white w-80 rounded-md">
          <h6 class="text-heading font-bold px-4 pt-3">Lamborghini Noire</h6>
          <img src="../assets/images/lamborghini.jpg" alt="" />
          <div class="bg-cars flex justify-center gap-10 p-2 mx-2 rounded-md">
            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    d="m20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1a10 10 0 0 0-.27-10.44z"
                  />
                  <path
                    fill="#888888"
                    d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49l-8.49 5.66a2 2 0 0 0 0 2.83"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">60,754 miles</p>
            </div>

            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="#888888"
                    fill-rule="evenodd"
                    d="M13.723.859a.625.625 0 0 1 0 .883l-.793.793v2.17a.625.625 0 0 1-.473.606l-1.479.37v.987a.35.35 0 0 0 .351.351a2.577 2.577 0 1 1 0 5.154H8.901v.327a1.5 1.5 0 0 1-1.5 1.5H1.594a1.5 1.5 0 0 1-1.5-1.5V3.788a2.5 2.5 0 0 1 2.5-2.5H6.4a2.5 2.5 0 0 1 2.5 2.5v7.135h2.428a1.327 1.327 0 1 0 0-2.654a1.6 1.6 0 0 1-1.6-1.6V4.227c0-.165.065-.324.182-.442L12.84.86a.625.625 0 0 1 .884 0ZM1.093 7.144V4.881h6.808v2.263H1.094Zm4.87 2.316c.345 0 .625.28.625.625v.976a.625.625 0 1 1-1.25 0v-.976c0-.345.28-.625.625-.625"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">Petrol</p>
            </div>

            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="#888888"
                    d="M26 16h-4a2.002 2.002 0 0 0-2 2v12h2v-5h4v5h2V18a2.002 2.002 0 0 0-2-2m-4 7v-5h4v5zm-6 4a10.986 10.986 0 0 1-9.216-5H12v-2H4v8h2v-3.685A13.024 13.024 0 0 0 16 29zm4-17h5.216A10.997 10.997 0 0 0 5 16H3a13.005 13.005 0 0 1 23-8.315V4h2v8h-8z"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">Automatic</p>
            </div>
          </div>

          <div class="flex justify-between mx-3 py-3">
            <p class="text-brown text-md font-bold">$200/day</p>
           <nuxt-link to="/booking">
            <button
              class="bg-brown p-2 w-24 rounded-full text-light text-center justify-center"
            >
              Book Now
            </button>
           </nuxt-link>
          </div>
        </div>

        <div id="carbox1" class="bg-white w-80 rounded-md">
          <h6 class="text-heading font-bold px-4 pt-3">BMW i4</h6>
          <img src="../assets/images/mercedence.jpg" alt="" />
          <div class="bg-cars flex justify-center gap-10 p-2 mx-2 rounded-md">
            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    d="m20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1a10 10 0 0 0-.27-10.44z"
                  />
                  <path
                    fill="#888888"
                    d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49l-8.49 5.66a2 2 0 0 0 0 2.83"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">12,364 miles</p>
            </div>

            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="#888888"
                    fill-rule="evenodd"
                    d="M13.723.859a.625.625 0 0 1 0 .883l-.793.793v2.17a.625.625 0 0 1-.473.606l-1.479.37v.987a.35.35 0 0 0 .351.351a2.577 2.577 0 1 1 0 5.154H8.901v.327a1.5 1.5 0 0 1-1.5 1.5H1.594a1.5 1.5 0 0 1-1.5-1.5V3.788a2.5 2.5 0 0 1 2.5-2.5H6.4a2.5 2.5 0 0 1 2.5 2.5v7.135h2.428a1.327 1.327 0 1 0 0-2.654a1.6 1.6 0 0 1-1.6-1.6V4.227c0-.165.065-.324.182-.442L12.84.86a.625.625 0 0 1 .884 0ZM1.093 7.144V4.881h6.808v2.263H1.094Zm4.87 2.316c.345 0 .625.28.625.625v.976a.625.625 0 1 1-1.25 0v-.976c0-.345.28-.625.625-.625"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">Petrol</p>
            </div>

            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="#888888"
                    d="M26 16h-4a2.002 2.002 0 0 0-2 2v12h2v-5h4v5h2V18a2.002 2.002 0 0 0-2-2m-4 7v-5h4v5zm-6 4a10.986 10.986 0 0 1-9.216-5H12v-2H4v8h2v-3.685A13.024 13.024 0 0 0 16 29zm4-17h5.216A10.997 10.997 0 0 0 5 16H3a13.005 13.005 0 0 1 23-8.315V4h2v8h-8z"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">Automatic</p>
            </div>
          </div>

          <div class="flex justify-between mx-3 py-3">
            <p class="text-brown text-md font-bold">$150/day</p>
           <nuxt-link to="/booking">
            <button
              class="bg-brown p-2 w-24 rounded-full text-light text-center justify-center"
            >
              Book Now
            </button>
           </nuxt-link>
          </div>
        </div>

        <div id="carbox1" class="bg-white w-80 rounded-md">
          <h6 class="text-heading font-bold px-4 pt-3">Toyota Helix</h6>
          <img src="../assets/images/hammer.jpg" alt="" />
          <div class="bg-cars flex justify-center gap-10 p-2 mx-2 rounded-md">
            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#888888"
                    d="m20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1a10 10 0 0 0-.27-10.44z"
                  />
                  <path
                    fill="#888888"
                    d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49l-8.49 5.66a2 2 0 0 0 0 2.83"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">42,400 miles</p>
            </div>

            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="#888888"
                    fill-rule="evenodd"
                    d="M13.723.859a.625.625 0 0 1 0 .883l-.793.793v2.17a.625.625 0 0 1-.473.606l-1.479.37v.987a.35.35 0 0 0 .351.351a2.577 2.577 0 1 1 0 5.154H8.901v.327a1.5 1.5 0 0 1-1.5 1.5H1.594a1.5 1.5 0 0 1-1.5-1.5V3.788a2.5 2.5 0 0 1 2.5-2.5H6.4a2.5 2.5 0 0 1 2.5 2.5v7.135h2.428a1.327 1.327 0 1 0 0-2.654a1.6 1.6 0 0 1-1.6-1.6V4.227c0-.165.065-.324.182-.442L12.84.86a.625.625 0 0 1 .884 0ZM1.093 7.144V4.881h6.808v2.263H1.094Zm4.87 2.316c.345 0 .625.28.625.625v.976a.625.625 0 1 1-1.25 0v-.976c0-.345.28-.625.625-.625"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">Petrol</p>
            </div>

            <div class="text-center">
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    fill="#888888"
                    d="M26 16h-4a2.002 2.002 0 0 0-2 2v12h2v-5h4v5h2V18a2.002 2.002 0 0 0-2-2m-4 7v-5h4v5zm-6 4a10.986 10.986 0 0 1-9.216-5H12v-2H4v8h2v-3.685A13.024 13.024 0 0 0 16 29zm4-17h5.216A10.997 10.997 0 0 0 5 16H3a13.005 13.005 0 0 1 23-8.315V4h2v8h-8z"
                  />
                </svg>
              </div>
              <p class="font-medium text-brown text-sm pt-1">Automatic</p>
            </div>
          </div>

          <div class="flex justify-between mx-3 py-3">
            <p class="text-brown text-md font-bold">$180/day</p>
           <nuxt-link to="/booking">
            <button
              class="bg-brown p-2 w-24 rounded-full text-light text-center justify-center"
            >
              Book Now
            </button>
           </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- winter -->
    <winter/>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
